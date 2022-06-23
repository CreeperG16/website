import { clients } from "./_data";

export default function ({ query }, res) {
  if (!query.userid)
    return res.status(400).json({ message: "Missing user ID" });

  if (!query.x) return res.status(400).json({ message: "Missing X position" });
  if (!query.y) return res.status(400).json({ message: "Missing Y position" });
  if (!query.z) return res.status(400).json({ message: "Missing Z position" });

  clients.set(query.userid, { x: query.x, y: query.y, z: query.z });

  return res.status(200).json({ clients: Object.fromEntries([...clients]) });
}
