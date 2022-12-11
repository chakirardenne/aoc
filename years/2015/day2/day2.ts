import { readInputFileForDay } from "../../../utils";

interface Box  {
    length: number;
    width: number;
    height: number;
}

let partOne = (content: string) => {
    return addBox(content).map(box => getBoxSize(box)).reduce((sum, value) => sum + value);
}

let partTwo = (content: string) => {
    return addBox(content).map(box => getRibbonSize(box)).reduce((sum, value) => sum + value);
}

let addBox = (content: string): Box[]  => {
    let boxes: Box[] = [];
    for (const element of content.split("\n")) {
        let splitElement = element.split("x");
        let box: Box = {
            length: Number.parseInt(splitElement[0]),
            width: Number.parseInt(splitElement[1]),
            height: Number.parseInt(splitElement[2])
        };
        boxes.push(box);
    }
    return boxes;
}

let getRibbonSize = (box: Box) => {
    return box.length * box.height * box.width + wrapRibbonSize(box);
}

let wrapRibbonSize = (box: Box): number => {
    let values: number[] = Object.values(box).sort((n1,n2) => n1 - n2);
    return 2*(values[0] + values[1]);
}
let getBoxSize = (box: Box): number => {
    return 2 * box.length * box.width
        + 2 * box.width * box.height
        + 2 * box.height * box.length
        + smallestSide(box); 
}

let smallestSide = (box: Box): number => {
    return Math.min(box.width * box.length, box.length * box.height, box.height * box.width);
}

console.log(partOne(readInputFileForDay("2015", "2")));
console.log(partTwo(readInputFileForDay("2015", "2")));


