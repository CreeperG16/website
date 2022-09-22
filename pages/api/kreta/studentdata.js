import axios from "axios";

export default async function ({ query }, response) {
  if (!query.token)
    return response
      .status(400)
      .json({ error: "ERR_BAD_REQUEST", reason: "No access token in query" });

  const institute = "padanyi";

  let error = null;

  const { data } = await axios({
    method: "get",
    url: `https://${institute}.e-kreta.hu/ellenorzo/V3/Sajat/TanuloAdatlap`,
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "User-Agent": "Kreta.Ellenorzo",
    },
  }).catch((err) => (error = err));

  if (error) return response.status(200).json(error.toJSON());

  return response.status(200).json(data);
}
