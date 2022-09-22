import Head from "next/head";
import axios from "axios";

export default function Home() {
  function html(html) {
    var template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  const okButton = async () => {
    const { data: token } = await axios({
      method: "get",
      url: `https://website-creeperg16.vercel.app/api/kreta/token?username=${
        document.getElementById("student_id").value
      }&password=${document.getElementById("student_dob").value}`,
    });

    document
      .getElementById("data")
      .append(html("<code>" + JSON.stringify(token, null, 4) + "</code>"));

    const { data: studentData } = await axios({
      method: "get",
      url: `https://website-creeperg16.vercel.app/api/kreta/studentdata?token=${token.access_token}`,
    });

    document
      .getElementById("data")
      .append(
        html("<code>" + JSON.stringify(studentData, null, 4) + "</code>")
      );
    // document.getElementById("data").append(html(`<img src="${e}"></img>`));
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
