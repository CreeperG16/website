// import ytdl from "ytdl-core";
import ytdl from "react-native-ytdl";

export default async function ({ query }, res) {
    if (!query.url) return res.status(400).json({ message: "Missing video URL" });

    const info = await ytdl.getInfo(query.url);

    return res.status(200).json({info});
}
