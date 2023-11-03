// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string] // tuple (immutable)
// } = {
// // const person = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }
// enum is a custom type 0, 1, 2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 4] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
console.log(Role.AUTHOR);
var favoriteActivities;
console.log(person.name);
