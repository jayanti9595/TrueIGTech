// object and methode
let user = {
    name : "Jayanti Rajput",
    age : 12,
    greet(){
        console.log("Age : ",this.age);
    }
}
console.log("name : ", user.name);
console.log("name : ", user.greet());
user.email = "Jayanti@gmail.com";
console.log("email : ", user.email);

// Object Destructuring
let userData = {
    username : "Jayanti Rajput",
    age : 12,
    greet(){
        console.log("Age : ",this.age);
    }
}

const {username , age, greet} = userData;
console.log("Age : ",age);
console.log("Username : ",username);
console.log("Greet : ",greet);

const fruits =  ["mango", "banana"];
const [st, nd] = fruits;
console.log("st : ",st);
console.log("nd : ",nd);
fruits.push("jayanti");
console.log("fruits : ",fruits);