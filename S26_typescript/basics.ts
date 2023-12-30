// Primitives: number, string, boolean
// Array: [], Array<number>, string[], etc.
// More Complex Types: arrays, objects
// Function Types, Parameters

let age: number;

age = 15;

let userName: string;

userName = "Rishav";

let isStudent: boolean;

isStudent = true;

// More Complex Types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Rishav",
  age: 15,
};

// person = {
//   isEmployee: false,
// };

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React - The Complete Guide";

// course = 12345; // Error as course is inferred as string

// Union Types

let course1: string | number = "React - The Complete Guide";

course1 = 12345; // No Error as course1 is inferred as string | number

// Functions & Types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split(""); // Error as updatedArray is inferred as number[]
