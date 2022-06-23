import { clients } from "./_data";

export default function ({ query }, res) {
  if (!query.userid)
    return res.status(400).json({ message: "Missing user ID" });

  if ([...clients].map((x) => x[0]).includes(query.userid))
    clients.delete(query.userid);

  return res.status(200).json({ clients: Object.fromEntries([...clients]) });
}
