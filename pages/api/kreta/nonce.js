import axios from "axios";

export default async function ({ query }, response) {
  const { data: nonce } = await axios({
    method: "get",
    url: "https://idp.e-kreta.hu/nonce"
  });

  return (
    response
      .status(200)
      .json({ nonce })
  );
}
