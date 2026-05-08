// Problem 1
function filterEvenNumbers(num: number[]): number[] {
    const list: number[] = [];
    num?.forEach((element: number, index: number): number | boolean => element % 2 === 0 && list.push(element));
    return list;
}
filterEvenNumbers([1, 2, 3, 4, 5, 6])

// Problem 2
function reverseString(text: string): string {
    return text.split("").reverse().join("");
};
reverseString("typescript");

// Problem 3
type StringOrNumber = string | number;
function checkType(data: StringOrNumber): string {
    if(typeof data === "string" ) return "String";
    return "Number";
}
checkType("Number");

// Problem 4
function getProperty<T , K extends keyof T >(obj: T, key: K ): T[K] {
    return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21, email: "mahin@example.com" };
getProperty(user, "email")

// Problem 5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}
function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return {...book, isRead: true}
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);

// Problem 6
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");
student.getDetails();

// Problem 7
function getIntersection(item1:number[], item2:number[]): number[] {
    let result: number[] = [];
    item1.forEach((element: number) => {        
        if(item2.includes(element)) {
            result.push(element);
        }
    });
    return result;  
} 
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])