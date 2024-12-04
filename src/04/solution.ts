import {getFileContent} from '../getFileContent';

function isXMAS(a: string, b: string, c: string, d: string) {
    return a + b + c + d === 'XMAS' || a + b + c+ d === 'SAMX'
}

function getSolution(): number {
    const filePath = 'src/04/input.txt';
    const fileContent = getFileContent(filePath);
    const nbLines = fileContent.match(/\n/g).length;
    console.log('toto', nbLines);

    let res = 0;



    return res;
}

console.log(getSolution());