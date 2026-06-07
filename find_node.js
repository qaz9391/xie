const fs = require('fs');
const content = fs.readFileSync('output/pano.xml','utf8');
const lines = content.split('\n');
let inNode1 = false;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<panorama id="node1"')) {
        inNode1 = true;
    }
    if (inNode1 && lines[i].includes('userdata')) {
        console.log('node1: ' + lines[i]);
        break;
    }
}
let inNode11 = false;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<panorama id="node11"')) {
        inNode11 = true;
    }
    if (inNode11 && lines[i].includes('userdata')) {
        console.log('node11: ' + lines[i]);
        break;
    }
}
