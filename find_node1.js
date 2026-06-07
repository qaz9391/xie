const fs = require('fs');
const content = fs.readFileSync('output/pano.xml','utf8');
const match = content.match(/<panorama id="node1"[^>]*>[\s\S]*?<userdata[^>]*title="([^"]+)"/);
if(match) console.log('Node1 Title:', match[1]);
else console.log('Not found');

const match11 = content.match(/<panorama id="node11"[^>]*>[\s\S]*?<userdata[^>]*title="([^"]+)"/);
if(match11) console.log('Node11 Title:', match11[1]);
