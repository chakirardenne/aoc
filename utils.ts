import {readFileSync} from "fs";
import * as path from "path";

export let readInputFileForDay = (year: string, day: string): string => {
    return readFileSync(path.join(__dirname, '/years/' + year + '/' + 'day' + day + '/input' + '.txt'), 'utf-8');
}