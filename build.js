const fsPromises = require('fs').promises;
const path = require('path');

const sample = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'menu.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'fs.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'text.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'text.txt'), '\n\n how is this going to happen');
        await fsPromises.rename(path.join(__dirname, 'files', 'text.txt'), path.join(__dirname, 'files', 'subject.txt'));
        const data1 = await fsPromises.readFile(path.join(__dirname, 'files', 'subject.txt'), 'utf8');
        console.log(data1);
    }
    catch(err) {
        console.log(err);
    }
}
sample()