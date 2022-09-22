import axios from "axios";
import crypto from "crypto";
import qs from "qs";

export default async function ({ query }, response) {
  const loginData = {
    userName: query.username,
    password: query.password,
    institute_code: query.institute
  };

  const { data: nonce } = await axios({
    method: "get",
    url: "https://idp.e-kreta.hu/nonce"
  });

  const hmac = crypto.createHmac(
    "sha512",
    Buffer.from([98, 97, 83, 115, 120, 79, 119, 108, 85, 49, 106, 77])
  );

  hmac.write(
    loginData.institute_code.toUpperCase() +
    nonce + loginData.userName.toUpperCase()
  );

  const generated = Buffer.from(hmac.digest()).toString("base64");

  const { data } = await axios({
    method: "post",
    url: "https://idp.e-kreta.hu/connect/token",
    headers: {
       Accept: "application/json",
       "User-Agent": "Kreta.Ellenorzo",
       "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
       "X-AuthorizationPolicy-Version": "v2",
       "X-AuthorizationPolicy-Key": generated,
       "X-AuthorizationPolicy-Nonce": nonce,
    },
    data: qs.stringify({
       ...loginData,
       grant_type: "password",
       client_id: "kreta-ellenorzo-mobile-android",
    }),
  });

  return (
    response
      .status(200)
      .json(data)
  );
}
