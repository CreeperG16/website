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

import { parse } from "node-html-parser";

export default function ({ query }, res) {
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

            function gen() {
                const ri = (mx) => Math.floor(Math.random() * mx);
                const adjNum = ri(3) + 1;
                const chosenAdjs = new Array(adjNum).fill(0).map((_, i, arr) => {
                    let num = ri(adjectives.length);

                    while (arr.includes(num)) num = ri(adjectives.length);

                    return i > 0 ? adjectives[num].toLowerCase() : adjectives[num];
                });

                const generated = chosenAdjs.join(", ") + nouns[ri(nouns.length)].toLowerCase() + "!";

                return generated;
            }

            // const parser = new DOMParser();
            // const xml = parser.parseFromString(x);
            // e

            const xml = parse(x);

            const words = xml.getElementsByTagName("Word");
            for (const word of words) {
                const type = word.getAttribute("type");
                if (type === "m") adjectives.push(word.innerHTML);
                if (type === "f") nouns.push(word.innerHTML);
            }

            const insults = new Array(parseInt(query.count ?? 1))
                .fill("")
                .map(() => (query.new === "true" ? gen() : generate()));

            return res.status(200).json({ insults });
        });
}
