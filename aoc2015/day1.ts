export let partOne = (content: string) => {
    let floor: number = 0;
    content.split(``).forEach(char => {
        if(char == "(")
            floor++;
        else
            floor--;
    })
    return floor;
}