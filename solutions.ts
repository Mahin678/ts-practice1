// Problem 1
function filterEvenNumbers(num: number[] ):number[] {
    const list:number[] = [];
    num?.forEach((element:number, index:number):number | boolean => element % 2 === 0 && list.push(element)); 
    return list;
}
filterEvenNumbers([1, 2, 3, 4, 5, 6])

// Problem 2
function reverseString(text:string):string {
    return text.split("").reverse().join("");
};
reverseString("typescript");