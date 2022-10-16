import ytdl from "ytdl-core";
// import ytdl from "react-native-ytdl";

export default async function ({ body }, res) {
    // if (!query.url) return res.status(400).json({ message: "Missing video URL" });
    const url = JSON.parse(body).url;

    const info = await ytdl.getInfo(url);
    const audios = ytdl.filterFormats(info.formats, "audioonly");

    return res.send(JSON.stringify({ audios }));
}
