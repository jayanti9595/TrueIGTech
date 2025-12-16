const arr = [1,2,3,4]
const arr1 = [2,4,6,7]
const result = [...arr, ...arr1]
const a1 =  [result, 0]
console.log(a1);
const obj = {name : "Jayanti", age : 23}
const user = {obj};
console.log(user, "User");
const updated = {...user, city : "indore"}
console.log(updated, "Updated");
