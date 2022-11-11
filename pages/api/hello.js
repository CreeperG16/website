export default function (req, res) {
    return res.status(200).json({ message: "Hello", query: req.query });
}
