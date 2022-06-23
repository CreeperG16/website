import { clients } from "./_data";

export default function ({ query }, res) {
  if (!query.userid)
    return res.status(400).json({ message: "Missing user ID" });

  if (clients.get(query.userid))
    return res.status(409).json({ message: "That user has already joined" });

  clients.set(query.userid, {
    x: query.x ?? "0",
    y: query.y ?? "0",
    z: query.z ?? "0",
  });

  return res.status(200).json({ clients: Object.fromEntries([...clients]) });
}
