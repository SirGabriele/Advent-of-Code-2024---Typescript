import {getFileContent} from '../getFileContent';

function partOne(leftColumn: number[], rightColumn: number[]) {
    let res = 0;

    leftColumn.map((left, index) => {
        res += Math.abs(left - rightColumn[index]);
    });

    return res;
}

function partTwo(leftColumn: number[], rightColumn: number[]) {
    let res = 0;

    leftColumn.forEach((leftValue) => {
        res += leftValue * rightColumn.filter(rightValue => leftValue === rightValue).length;
    });

    return res;
}

function getSolution(): number {
    const filePath = "src/01/input.txt";
    const fileContent = getFileContent(filePath);
    const leftColumn = [];
    const rightColumn = [];

    fileContent.split('\n').map(line => {
        const [lv, rv] = line.split(/\s+/);

        leftColumn.push(Number(lv));
        rightColumn.push(Number(rv));
    });

    leftColumn.sort();
    rightColumn.sort();

    // return partOne(leftColumn, rightColumn);
    return partTwo(leftColumn, rightColumn);
}

console.log(getSolution());

