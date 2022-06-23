import { clients } from "./_data";

export default function ({ query }, res) {
  if (!query.userid)
    return res.status(400).json({ message: "Missing user ID" });

  if (!clients.get(query.userid))
    clients.set(query.userid, { x: "0", y: "0", z: "0" });

  return res.status(200).json({ clients: Object.fromEntries([...clients]) });
}
