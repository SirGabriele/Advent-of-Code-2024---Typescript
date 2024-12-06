import {getFileContent} from '../getFileContent';

function fillLeftValues(allValues: string[], valuesToAdd: string[], referenceMap: Map<string, string>) {
    console.log(valuesToAdd);
    for (const value of valuesToAdd) {
        console.log(value);
        // value is not in array
        // if (referenceMap.get(value) === und) {
        //
        // }
    }
    return [];
}

function getTrailingValues(leftValues: string[], rightValues: string[]) {
    let trailingValues = [];

    rightValues.forEach(value => {
        // right value isn't in left column, so it has no value it must precede
        if (leftValues.indexOf(value) === -1) {
            trailingValues.push(value);
        }
    })

    return trailingValues;
}

function getLeadingValues(leftValues: string[], rightValues: string[]) {
    let leadingValues = [];

    leftValues.forEach(value => {
        // left value isn't in right column, so it has no value it must follow
        if (rightValues.indexOf(value) === -1) {
            leadingValues.push(value);
        }
    })

    return leadingValues;
}

function getSolution(): number {
    const filePath = 'src/05/input.txt';
    const fileContent = getFileContent(filePath);
    const lines = fileContent.match(/.*\n/g);

    const sectionDelimiterIndex = lines.indexOf('\n');
    const pageOrderingRules = lines.slice(0, sectionDelimiterIndex).map(elem => elem.trim()).sort();
    const pageNumbersPerUpdate = lines.slice(sectionDelimiterIndex + 1).map(elem => elem.trim());

    const keyIsFollowedByArray = new Map<string, string[]>();
    // const keyRightValueLeft = new Map();

    // console.log(pageOrderingRules);
    const pairs = pageOrderingRules.map(rule => rule.split('|'));
    for (let i = 0; i < pairs.length; i++) {
        if () {

        }
        console.log(pairs[i], pairs[i][0], pairs[i][1]);
        const key = pairs[i][0];
        let followingValues = [];

        if (pairs[i][0] === key) {
            console.log('must add');
        }
        // for (; i < pairs.length && pairs[i][0] === value; i++) {
        //     console.log('same value');
        // }
        // while (i < pairs.length && pairs[i][0] === value) {
        //     followingValues.push(pairs[i][1]);
        //     i++;
        // }
        // keyIsFollowedByArray.set(pairs[i][0], []);
        // keyLeftValueRight.set(rule[0], rule[1]);
        // keyRightValueLeft.set(rule[1], rule[0]);
    }

    // const leftValues = Array.from(keyLeftValueRight.keys());
    // const rightValues = Array.from(keyLeftValueRight.values());

    // const leadingValues = getLeadingValues(leftValues, rightValues);
    // const trailingValues = getTrailingValues(leftValues, rightValues);

    // const leadingAndTrailingValues = [...leadingValues, ...trailingValues];
    // const allValues = fillLeftValues(leadingAndTrailingValues, leftValues, keyRightValueLeft);

    return 0;
}

console.log(getSolution());