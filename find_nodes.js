const fs = require('fs');
const content = fs.readFileSync('output/pano.xml','utf8');
const lines = content.split('\n');
lines.forEach(l => {
    if(l.includes('userdata customnodeid')) {
        const mNode = l.match(/nodeid="([^"]+)"/);
        const mTitle = l.match(/title="([^"]*)"/);
        const mDesc = l.match(/description="([^"]*)"/);
        if(mNode) {
            console.log(mNode[1], mTitle ? mTitle[1] : '', mDesc ? mDesc[1] : '');
        }
    }
});
