// Problem 5:

const getProperty = <T, K extends keyof T>(PersonObj:T, key:K):T[K] =>{
    return PersonObj[key]
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));