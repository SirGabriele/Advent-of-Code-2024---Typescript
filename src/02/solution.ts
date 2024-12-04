import {getFileContent} from '../getFileContent';

function determineSign(levels: number[]) {
    for (let i = 0; i < levels.length - 1; i++) {
        if (levels[i] - levels[i + 1] !== 0) {
            return Math.sign(levels[i] - levels[i + 1]);
        }
    }
    return 0;
}

function isReportSafePartOne(levels: number[]) {
    let sign = determineSign(levels);
    if (sign === 0) {
        return 0;
    }

    for (let i = 0; i < levels.length - 1; i++) {
        const resSign = Math.sign(levels[i] - levels[i + 1]);
        const resValue = Math.abs(levels[i] - levels[i + 1]);

        if (resSign !== 0 && resSign !== sign) {
            return 0;
        }
        if (resValue < 1 || resValue > 3) {
            return 0;
        }
    }

    return 1;
}

function isReportSafePartTwo(levels: number[]) {
    if (isReportSafePartOne(levels)) {
        return 1;
    }

    for (let i = 0; i < levels.length; i++) {
        const removedOneElement = levels.filter((_, index) => index !== i);

        if (isReportSafePartOne(removedOneElement)) {
            return 1;
        }
    }

    return 0;
}

function getSolution(): number {
    const filePath = 'src/02/input.txt';
    const fileContent = getFileContent(filePath);
    let safe = 0;

    fileContent.split('\n').forEach(line => {
        const levels = line.split(' ').map(value => Number(value));

        // safe += isReportSafePartOne(levels);
        safe += isReportSafePartTwo(levels);
    });

    return safe;
}

console.log(getSolution());