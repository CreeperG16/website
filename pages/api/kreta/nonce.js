import axios from "axios";

export default async function ({ query }, response) {
  let error = null;

  const { data: nonce } = await axios({
    method: "get",
    url: "https://idp.e-kreta.hu/nonce"
  }).catch((err) => (error = err));

  if (error) return response.status(200).json(error.toJSON());

  return (
    response
      .status(200)
      .json({ nonce })
  );
}
