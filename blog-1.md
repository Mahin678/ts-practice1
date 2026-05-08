1. Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

any means in typescript is a type, which is disabled type checking for that variable in any operation. When we are use any type , we can use that value directly without type checking. example
let x: any = "hello world";
x.toFixed(2); // this will not give any TypeScript error

in this example typescript will not to check the type of x and allow to toFixed method which method not valid for string type. that's why any is a type safety hole.

unknown type means a variable whose initial value type is unknown but must be narrowed before using it. example
let y: unknown = "hello world";
y.toFixed(2); // cause error because y is unknown type and we can not use any method without checking type.
if(typeof y === "string") {
y.toUpperCase();
}

after check typeof now its works. so we can tell if we use unknown and without checking type we can not use that variable in any operation that's why unknown is safer choice for handling unpredictable data.

Type narrowing is the process of checking a variable's type using a conditional, so that TypeScript knows the specific type inside that block and allows only the valid operations for that type.

let y: unknown = "hello world";

if(typeof y === "string") {
y.toUpperCase(); // y is string here
}

if(typeof y === "number") {
y.toFixed(2); // y is number here
}
Each if block TypeScript narrows the type, so it only allows methods valid for that specific type.
