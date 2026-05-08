3. How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

Generics is a TypeScript feature that allows passing types as type parameters. TypeScript enforces strict type safety at compile time based on the provided type parameter and enables code reusability by allowing the same function or component to work with multiple data types without rewriting logic for each type.

Example -

function identity<T>(value: T): T {
return value;
}

identity<number>(10);
identity<string>("hello");
identity<boolean>(true);

in here we do not declare type separately, that's called reusibility.
