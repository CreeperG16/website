import { clients } from "./_data";

export default function (req, res) {
  return res.status(200).json({ clients: Object.fromEntries([...clients]) });
}
