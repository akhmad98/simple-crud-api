const fs = require('fs');
const path = require('path');

function writeDataToFile(filename, content) {
    const rPath = path.isAbsolute(filename) ? filename : path.join(process.cwd(), `src/${filename}`);

    if(!fs.existsSync(rPath)) {
        throw new Error(
            `The file in this path ${rPath} is not existed`
        )
    }
    fs.writeFileSync(rPath, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

function getBody(req) {
    return new Promise((resolve, reject) => {
        try {
            let bodyNotParsed = ''

            req.on('data', (chunk) => {
                bodyNotParsed += chunk.toString();
            });

            req.on('end', () => {
                resolve(bodyNotParsed);
            })
    
        } catch (error) {
            reject(err)
        }
    })
}

module.exports = {
    writeDataToFile,
    getBody
}
// read and check then write to file