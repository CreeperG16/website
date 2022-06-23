import { clients } from "./_data";

export default function ({ query }, res) {
  if (!query.userid)
    return res.status(400).json({ message: "Missing user ID" });

  if (!clients.get(query.userid))
    return res.status(404).json({ message: "That user doesn't exist" });

  clients.delete(query.userid);

  return res.status(200).json({ clients: Object.fromEntries([...clients]) });
}
