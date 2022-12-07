import {readFileSync} from "fs";
import * as path from "path";
import {partOne} from "./aoc2015/day1";

let readInputFileForDay = (year: number, day: number): string => {
    return readFileSync(path.join(__dirname, '/aoc' + year + '/' + 'input' + day + '.txt'), 'utf-8');
}

console.log(partOne(readInputFileForDay(2015, 1)));