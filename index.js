// operators

// Arithmatic operators

a = 1;
b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

// assignment operators (shorthand)

c=10;
c +=3;
console.log(c)
c -=3;
console.log(c)
c *=3;
console.log(c)

c /=3;
console.log(c)

// typeof 
console.log(typeof c );
console.log(typeof 'Raj' );

// automatic type coversion

d="5"-1
console.log(d);
d = "two"*10;
console.log(d);

//comparison operators

age = 20;
console.log(age>15);
console.log(age<15);
console.log(age ==15);
console.log(age!=15);

console.log(age =="20");
console.log(age ==="20"); /* also compare with datatype */

// logical operators

a=100;
console.log(a>50 && a%10==0)
console.log(a>504 || a%10==0)

// bitwise operators

console.log(a>50 & a%10==0) /* 1 = true , 0 = false */

// user input

// let Name = prompt("Enter your name");
// console.log(" Hello", Name);

 let tickets = prompt("How many Tickets ?");
// console.log("You should pay",tickets * 20);
 console.log(typeof tickets);



