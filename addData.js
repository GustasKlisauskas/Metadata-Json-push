const fs = require('fs');
const path = require('path');

// Create the metadata directory if it doesn't exist
const dirPath = path.join(__dirname, '/metadata');
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// read id from a file
let id;
try {
    id = fs.readFileSync(path.join(__dirname, 'id.txt'), 'utf8');
} catch (err) {
    // if file doesn't exist, start with id 1
    id = 1;
}

const data = {
    description: "The Memory Card NFTs offer exclusive benefits and features within the Revival of Avalanche game. [...]",
    image: "https://i.imgur.com/nK7wb6C.mp4",
    name: `Memory Card ${id}`,
    attributes: [
        {
            trait_type: "Online Play Time",
            value: "0"
        },
        {
            trait_type: "Online Wins",
            value: "0"
        },
        {
            trait_type: "Online Loses",
            value: "0"
        },
        {
            trait_type: "Offline Pay Time",
            value: "0"
        },
        {
            trait_type: "Offline Wins",
            value: "0"
        },
        {
            trait_type: "Offline Loses",
            value: "0"
        }
    ]
};

fs.writeFileSync(`${dirPath}/${id}.json`, JSON.stringify(data, null, 4));

// increment id and save it for next run
id++;
fs.writeFileSync(path.join(__dirname, 'id.txt'), id);
