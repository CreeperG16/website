import Head from "next/head";
import hmacSHA512 from "crypto-js/hmac-sha512";
import axios from "axios";
import qs from "qs";

export default function Home() {
  function html(html) {
    var template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  const okButton = () => {
    const loginData = {
      userName: document.getElementById("student_id").value,
      password: document.getElementById("student_dob").value,
      institute_code: "padanyi",
    };

    // fetch("https://idp.e-kreta.hu/nonce", { mode: "no-cors" })
    // .then((data) => data.text())
    // .then(({ data: noonce }) => {
    // hmac = createHmac(
    //   "sha512",
    //   Buffer.from([98, 97, 83, 115, 120, 79, 119, 108, 85, 49, 106, 77])
    // );

    const hmac = hmacSHA512(
      loginData.institute_code.toUpperCase() +
        nonce +
        loginData.userName.toUpperCase(),
      Buffer.from([98, 97, 83, 115, 120, 79, 119, 108, 85, 49, 106, 77])
    );

    const generated = Base64.stringify(hmac);

    // hmac.write(
    //   loginData.institute_code.toUpperCase() +
    //     nonce +
    //     loginData.userName.toUpperCase()
    // );

    // generated = Buffer.from(hmac.digest()).toString("base64");

    axios({
      method: "post",
      url: "https://idp.e-kreta.hu/connect/token",
      headers: {
        Accept: "application/json",
        "User-Agent": "Kreta.Ellenorzo",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        "X-AuthorizationPolicy-Version": "v2",
        "X-AuthorizationPolicy-Key": generated,
        "X-AuthorizationPolicy-Nonce": nonce,
      },
      data: qs.stringify({
        ...loginData,
        grant_type: "password",
        client_id: "kreta-ellenorzo-mobile-android",
      }),
    })
      .then(({ data: token }) =>
        axios({
          method: "get",
          url: `https://${loginData.institute_code}.e-kreta.hu/ellenorzo/V3/Sajat/TanuloAdatlap`,
          headers: {
            Authorization: `Bearer ${token.access_token}`,
            "User-Agent": "Kreta.Ellenorzo",
          },
        })
      )
      .then(({ data: student_info }) =>
        document
          .getElementById("data")
          .append(JSON.stringify(student_info, null, 4))
      );

    document.getElementById("data").append(html(`<img src="${e}"></img>`));
  };

  return (
    <div>
      <Head>
        <title>Test API</title>
      </Head>
      <h1>hi</h1>

      <h1>Get student data</h1>
      <input type="text" id="student_id" placeholder="OM Azonosító"></input>
      <input type="date" id="student_dob"></input>
      <button id="submit" onClick={okButton}>
        Ok
      </button>

      <div id="data"></div>
    </div>
  );
}
