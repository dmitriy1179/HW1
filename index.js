//1
console.log("My first debug")

//2
let petAge = 9
const petName = "Dog"
console.log(`${petAge} ${petName}`)

//3
petAge = 11
console.log(`${petAge} ${petName}`)

//4
let countOfLivedInUkraine = 9
const name = "Ivanov"
const isAdmin = true
let question = null
let age
console.log(typeof countOfLivedInUkraine)
console.log(typeof name)
console.log(typeof isAdmin)
console.log(typeof question)
console.log(typeof age)

//5
const student = {
    name: "Dmitriy",
    surname: "Cherednichenko",
    isActive: true
}
console.log(typeof student.isActive)

//6
const fruits = ["apple", "orange", "plum", "berry", "mandarin"]
const counts = [1, 2, 3, 4, 5]
const students = [
    {name: "Ivanov",
    age: 25,
    faculty: "PMM"},
    {name: "Petrov",
    age:23,
    faculty: "EA"},
    {name: "Sydorov",
    age:22,
    faculty: "KN"},
    {name: "Andreev",
    age: 24,
    faculty: "KISS"},
    {name: "Nykolaev",
    age: 19,
    faculty: "ET"}
]

//*1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`${numbers[0]} ${numbers[9]}`)

//*2
console.log(`студент: ${student.name} ${student.surname}, сейчас активен: ${student.isActive}`)
