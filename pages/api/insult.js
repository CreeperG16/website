// const adjectives = [];
// const nouns = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// #region stuff
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var xmlDoc = xhttp.responseXML;
//         words = xmlDoc.getElementsByTagName("Word");
//         for (let word of words) {
//             let type = word.getAttribute("type");

//             if (type == "m") {
//                 adjectives.push(word.innerHTML);
//             }

//             if (type == "f") {
//                 nouns.push(word.innerHTML);
//             }
//         }
//         generate();
//     }
// };

// xhttp.open("GET", "piszkosszavak.xml", true);
// xhttp.send();
// #endregion

export default function (_req, res) {
    fetch("https://kretainsult.online/piszkosszavak.xml")
        .then((x) => x.text())
        .then((x) => {
            const adjectives = [];
            const nouns = [];

            function generate() {
                let generated = "";
                let numOfAdjectives = getRandomInt(3) + 1;
                for (let i = 0; i < numOfAdjectives; i++) {
                    let adjective = adjectives[getRandomInt(adjectives.length)];
                    if (i > 0) {
                        adjective = adjective.toLowerCase();
                    }
                    generated += adjective + ", ";
                }
                generated = generated.substring(0, generated.length - 2) + " ";
                generated += nouns[getRandomInt(nouns.length)].toLowerCase() + "!";
                return generated;
            }

            const parser = new DOMParser();
            const xml = parser.parseFromString(x);

            const words = xml.getElementsByTagName("Word");
            for (const word of words) {
                const type = word.getAttribute("type");
                if (type === "m") adjectives.push(word.innerHTML);
                if (type === "f") nouns.push(word.innerHTML);
            }

            return response.status(200).json({ insult: generate() });
        });
}
