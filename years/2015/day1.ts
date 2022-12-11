import { readInputFileForDay } from "../../utils";

export let partOne = (content: string) => {
    let floor: number = 0;
    content.split(``).forEach(char => {
        if(char == "(")
            floor++;
        else
            floor--;
    });
    return floor;
}

export let partTwo = (content: string) => {
    let floor: number = 0;
    let splitContent: string[] = content.split(``);
    for (let i = 0; i < splitContent.length; i++) {
        if(splitContent[i] == "(")
            floor++;
        else
            floor--;
        if(floor == -1)
            return i + 1;
    }
}

console.log(partOne(readInputFileForDay("2015", "1")));
