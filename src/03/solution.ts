import {getFileContent} from '../getFileContent';

function getSolution(): number {
    const filePath = 'src/03/input.txt';
    const fileContent = getFileContent(filePath);
    // const patternPartOne = new RegExp(/mul\(\d{1,3},\d{1,3}\)/g);
    const patternPartTwo = new RegExp(/(mul\(\d{1,3},\d{1,3}\))|do\(\)|don't\(\)/g);
    let allowCalculation = true;

    // const allIterations: string[] = fileContent.match(patternPartOne);
    const allIterations: string[] = fileContent.match(patternPartTwo);

    let res = 0;

    for (const mul of allIterations) {
        if (mul === 'don\'t()') {
            allowCalculation = false;
            continue;
        } else if (mul === 'do()') {
            allowCalculation = true;
            continue;
        }

        if (allowCalculation) {
            const [lv, rv] = mul.match(/\d{1,3}/g).map(value => Number(value));
            res += (lv * rv);
        }
    }

    return res;
}

console.log(getSolution());