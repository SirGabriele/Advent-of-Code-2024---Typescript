import {getFileContent} from '../getFileContent';

function isXMASPartTwo(lines: string[][], i: number, j: number) {
    const diagTopLeftBottomRight = lines[i - 1][j - 1] + lines[i][j] + lines[i + 1][j + 1];
    const diagTwoTopRightBottomLeft = lines[i - 1][j + 1] + lines[i][j] + lines[i + 1][j - 1];

    return (diagTopLeftBottomRight === 'MAS' || diagTopLeftBottomRight === 'SAM') && (diagTwoTopRightBottomLeft === 'MAS' || diagTwoTopRightBottomLeft === 'SAM');
}

function countXMASPartTwo(lines: string[][]) {
    let res = 0;

    for (let i = 0; i < lines.length; i++) {
        const canCheckRow = i >= 1 && i <= lines.length - 2;

        for (let j = 0; j < lines[i].length; j++) {
            if (lines[i][j] !== 'A') {
                continue;
            }

            const canCheckCol = j >= 1 && j <= lines[i].length - 2;

            if (canCheckRow && canCheckCol && isXMASPartTwo(lines, i, j)) {
                res++;
            }
        }
    }

    return res;
}

function isXMASUpPartOne(lines: string[][], i: number, j: number) {
    return isXMASPartOne(lines[i][j], lines[i - 1][j], lines[i - 2][j], lines[i - 3][j]);
}

function isXMASUpLeftPartOne(lines: string[][], i: number, j: number) {
    return isXMASPartOne(lines[i][j], lines[i - 1][j - 1], lines[i - 2][j - 2], lines[i - 3][j - 3]);
}

function isXMASUpRightPartOne(lines: string[][], i: number, j: number) {
    return isXMASPartOne(lines[i][j], lines[i - 1][j + 1], lines[i - 2][j + 2], lines[i - 3][j + 3]);
}

function isXMASDownPartOne(lines: string[][], i: number, j: number) {
    return isXMASPartOne(lines[i][j], lines[i + 1][j], lines[i + 2][j], lines[i + 3][j]);
}

function isXMASDownLeftPartOne(lines: string[][], i: number, j: number) {
    return isXMASPartOne(lines[i][j], lines[i + 1][j - 1], lines[i + 2][j - 2], lines[i + 3][j - 3]);
}

function isXMASDownRightPartOne(lines: string[][], i: number, j: number) {
    return isXMASPartOne(lines[i][j], lines[i + 1][j + 1], lines[i + 2][j + 2], lines[i + 3][j + 3]);
}

function isXMASLeftPartOne(lines: string[][], i: number, j: number) {
    return isXMASPartOne(lines[i][j], lines[i][j - 1], lines[i][j - 2], lines[i][j - 3]);
}

function isXMASRightPartOne(lines: string[][], i: number, j: number) {
    return isXMASPartOne(lines[i][j], lines[i][j + 1], lines[i][j + 2], lines[i][j + 3]);
}

function isXMASPartOne(a: string, b: string, c: string, d: string) {
    return a + b + c + d === 'XMAS';
}

function countXMASPartOne(lines: string[][]) {
    let res = 0;

    for (let i = 0; i < lines.length; i++) {
        const canCheckUp = i >= 3;
        const canCheckDown = i <= lines.length - 4;

        for (let j = 0; j < lines[i].length; j++) {
            if (lines[i][j] !== 'X') {
                continue;
            }

            const canCheckLeft = j >= 3;
            const canCheckRight = j <= lines[i].length - 4;

            const directions = [
                {check: canCheckUp, directionCheck: isXMASUpPartOne},
                {check: canCheckDown, directionCheck: isXMASDownPartOne},
                {check: canCheckLeft, directionCheck: isXMASLeftPartOne},
                {check: canCheckRight, directionCheck: isXMASRightPartOne},
                {check: canCheckUp && canCheckLeft, directionCheck: isXMASUpLeftPartOne},
                {check: canCheckUp && canCheckRight, directionCheck: isXMASUpRightPartOne},
                {check: canCheckDown && canCheckLeft, directionCheck: isXMASDownLeftPartOne},
                {check: canCheckDown && canCheckRight, directionCheck: isXMASDownRightPartOne}
            ];

            for (const {check, directionCheck} of directions) {
                if (check && directionCheck(lines, i, j)) {
                    res++;
                }
            }
        }
    }

    return res;
}

function getSolution(): number {
    const filePath = 'src/04/input.txt';
    const fileContent = getFileContent(filePath);
    const lines = fileContent.match(/.*\n/g).map(line => line.trim().split(''));

    // return countXMASPartOne(lines);
    return countXMASPartTwo(lines);
}

console.log(getSolution());