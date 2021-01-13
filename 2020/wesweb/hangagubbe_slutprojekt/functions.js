//Random ord som ska användas till hängagubbe (50 ord).
const easyWordList = [
    "hand",
    "man",
    "sheep",
    "boy",
    "cake",
    "lunch",
    "leg",
    "popular",
    "car",
    "sweet",
    "flag",
    "swell",
    "glass",
];

const hardWordList = [
    "landscape",
    "royalty",
    "illustrate",
    "defeat",
    "auction",
    "unrest",
    "doubt",
    "jet",
    "reflect",
    "form",
    "constituency",
    "duke",
    "liberal",
    "confuse",
    "frank",
    "asylum",
    "kit",
    "decoration",
    "faithful",    
    "latest",
    "printer",
    "structure",
    "valid",
    "space",
    "opposite",
    "dignity",
    "fantasy",
    "variety",
    "mood",
    "clothes",
    "pursuit",
    "headquarters",
    "consciousness",
    "responsibility",
    "dictate",
    "circulation",
    "gloom"
]
//En funktion som slumpar ett av orden i ordlistan.
exports.randomWordFunc = (difficulty) => {
    if (difficulty === "easy") {
        let randomWord = easyWordList[Math.floor(Math.random() * easyWordList.length)];
        return randomWord;
    } else if (difficulty === "hard") {
        let randomWord = hardWordList[Math.floor(Math.random() * hardWordList.length)];
        return randomWord;
    }
}
