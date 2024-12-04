import fs from 'fs';

export function getFileContent(filePath: string) {
    try {
        return fs.readFileSync(filePath, 'utf8')
    } catch (err) {
        throw new Error();
    }
}