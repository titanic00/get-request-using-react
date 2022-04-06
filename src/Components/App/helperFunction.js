export function createArray(jsonObject) {
    let arrOfWords = [];
    for (let i = 0; i < 10; i++) {
        arrOfWords.push(jsonObject[i]["word"])
    }

    const stringOfWords = arrOfWords.join(", ");

    return stringOfWords;
}