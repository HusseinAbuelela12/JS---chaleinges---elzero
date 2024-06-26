
////////////////////////////////////////// challenge 1 /////////////////////////////////////////////
/* 
let ti="Elzero",ds = "Elzero web school",dt = new Date(2023,10,25);
let theHtml = `
<div>
<h3>Hello ${ti}</h3>
<p>${ds}</p>
<span>${dt}</span>
</div>
`;
document.write(theHtml);
document.write(theHtml);
document.write(theHtml);
document.write(theHtml);
*/
////////////////////////////////////////// challenge 2 /////////////////////////////////////////////
/*
let aa = 10;
let bb = "20";
let cc = 80;

console.log(++aa + +bb++ + +cc++ - +aa++);
console.log(11+20+80-11)
//11+20+80-11=100

console.log(++aa + -bb + +cc++ - -aa++ + +aa);
console.log(13-21+81+13+14);
//13-21+81+13+14=100

console.log(--cc + +bb + --aa * +bb++ - +bb * aa + --aa - +true);
console.log(81+21+13*21-22*13+12-1)
//81+21+13*21-22*13+12-1=100

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e)// 2000
console.log(-d + ++f +  ++e * ++g)// 173
*/
////////////////////////////////////////// challenge 3 /////////////////////////////////////////////

/*
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

//find smallest number in all variables and return integer
console.log(parseInt(Math.min(a , b , c , d)));
console.log(Math.trunc(Math.min(a , b , c , d)));

//use variable a + d one time to get thee needed output
console.log(a ** parseInt(d));//10000

//get integer "2" from d variable with 4 methods
console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));

//use variables b + d to get this values

console.log(Math.floor(b) /Math.ceil(d));// 66.67 => string
console.log(Math.ceil(b) /Math.ceil(d));// 67 => number

*/
////////////////////////////////////////// challenge 4 /////////////////////////////////////////////

/*
let a = "Elzero Web School"

//Include This Methods In Your Solution [slice , charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3,6) );//Zero

//8 H
console.log(a.charAt(13).toUpperCase().repeat(8));//HHHHHHHH

//Return Array
console.log(a.split(" " , 1));//[Elzero]

//Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0 , 6) + a.substr(10,16));//Elzero School

//Solution Must Be Dynamic And String May Change
console.log(a.trim().charAt(0).toLowerCase() + a.substring(1).toUpperCase() + a.substring(a.length-1).toLowerCase());//eLZERO WEB SCHOOl

*/

////////////////////////////////////////// challenge 5 /////////////////////////////////////////////
/*

//Write With Ternary If Syntax

let a = 10;

if (a < 10) {
    console.log(10);
}else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
}else if (a > 40) {
    console.log("> 40");
}else{
    console.log("Unknown");
}
a < 10 ? console.log(10): a >= 10 && a <= 40 ? console.log("10 To 40"): a > 40 ? console.log("> 40"): console.log("Unknown");
/////

let st = "Elzero Web School"

if (typeof st === typeof "34") {
    console.log("Good");
};

//W Poition May Change
if (st.toLowerCase().charAt(st.indexOf("W")) === "w") {
    console.log("Good");
};

if (+st !== "string") {
    console.log("Good");
};

if (typeof st === typeof "number") {
    console.log("Good");
};

if (st.substring(0 , 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
};
8
*/

////////////////////////////////////////// challenge 6 /////////////////////////////////////////////
/*
//Switch Challenge

let job = "Manager";
let salary = 0;

if (job === "Manager") {
    salary = 8000;
    console.log(salary);
}else if (job === "IT" || job === "Support"){
    salary = 6000;
    console.log(salary);
}else if (job === "Developer" || job === "Designer"){
    salary = 7000;
    console.log(salary);
}else {
    salary = 4000;
    console.log(salary);
};

switch (job) {
    case "Manager":
        salary = 8000;
        console.log(`My Money is ${salary}`);
        break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(`My Money is ${salary}`);
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        console.log(`My Money is ${salary}`);
        break;
    default:
        salary = 4000;
        console.log(`My Money is ${salary}`);
};

//If Challenge

let holidays= 0;
let money = 0;

switch (holidays) {
    case 0:
        money = 5000;
        console.log(`My Money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`My Money is ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`My Money is ${money}`);
        break;
    case 4:
        money = 1000;
        console.log(`My Money is ${money}`);
        break;
    case 5:
        money = 0;
        console.log(`My Money is ${money}`);
        break;
    default:
        money = 0;
        console.log(`My Money is ${money}`);
};


if (holidays === 0) {
    money = 5000;
    console.log(money);
}else if (holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(money);
}else if (holidays === 3) {
    money = 2000;
    console.log(money);
}else if (holidays === 4) {
    money = 1000;
    console.log(money);
}else if (holidays === 5) {
    money = 0;
    console.log(money);
}else {
    money = 0;
    console.log(money);
};

*/

////////////////////////////////////////// challenge 7 /////////////////////////////////////////////

/*

//Arrays Challenges

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

//Write Code Here

console.log(my.slice(zero, ++counter).reverse());//["Osama", "Elham", "Mazero", "Ahmed" ]

console.log(my.slice(++zero , --counter).reverse());//["Elham", "Mazero"]

my.unshift("Elzero");
console.log(my[--zero]);//"Elzero"

console.log(my[zero][++counter]+my[zero][++counter]);//"ro"

*/

////////////////////////////////////////// For practice /////////////////////////////////////////////
/*

let products = ["Keyboard", "Mouse", "Pen", "Pan", "Monitor", "Iphone"];

let colors = ["Red", "Green", "Blue"];

let  showCount= 5;

document.write(`<h1>Show ${showCount} Products </h1>`);

for (let i = 0; i < showCount; i++) {
    document.write(`<div>`);
    document.write(`<h3>[${i+1}] ${products[i]}</h3>`)
    for (let j = 0; j < colors.length; j++) {
        document.write(`<P>${colors[j]}</P>`);
    };
    document.write(`<P>${colors.join(" | ")}</P>`);
    document.write(`</div>`);
}

*/

////////////////////////////////////////// challenge 8 /////////////////////////////////////////////

/*

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Anware", "Omar", "Othman", "Amany", "Samia"];

let index = 1;
let counter = 3;


document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${counter} Admins</div>`);
document.write(`<hr>`);
for (let i = 0; i < myAdmins.length ; i++) {
    let count = 1;
    if (i === myAdmins.indexOf("Stop")){
        break;
    }; 
    document.write(`<div>`);
    document.write(`The Admin For  Team ${index++} Is ${myAdmins[i]}<br>`);
    document.write(`<br>`);
    document.write(`<h3>Team Members :</h3>`);
    for (let j = 0; j < myEmployees.length ; j++) {
        if (myAdmins[i].charAt(0) === myEmployees[j].charAt(0)) {
            document.write(`<p>- ${count++} ${myEmployees[j]} </p>`);
            document.write(`<br>`);
        };
    };
    document.write(`</div>`);
};

*/

////////////////////////////////////////// challenge 9 /////////////////////////////////////////////

/*
Function - Random Argument Challenge
====================================
Create Function ShowDetails
Function Accept 3 Parameters [a, b, c]
Data Types For Info Is
-String => Name
-Number => Age
-Boolean => Status
Argument Is Rondom
Data Is Not sorted OUtput Depend On Data Types
-Use Ternary Conditional Operator
*/
/*

function showDetails(a ,b ,c ) {
    ///////////////////////////////////////////////////

    let name;
    // if (typeof a === typeof "String") {
    //     name = a 
    // }else if (typeof b === typeof "String"){
    //     name = b

    // }else if (typeof c === typeof "String"){
    //     name = c
    // };
    ///////////////////////////////////////////////////
    typeof a === typeof "String"? name = a : typeof b === typeof "String"? name = b :typeof c === typeof "String" ? name = c: console.log ("m");

    ///////////////////////////////////////////////////
    let number;
    // if (typeof b === typeof 1) {
    //     number = b
    // }else if (typeof a === typeof 1) {
    //     number = a
    // }else if (typeof c === typeof 1) {
    //     number = c
    // };
    ///////////////////////////////////////////////////
    typeof b === typeof 1 ? number = b : typeof a === typeof 1 ? number = a :typeof c === typeof 1 ? number = c: console.log ("m");


    ///////////////////////////////////////////////////
    let bool;
    // if (typeof c === typeof true) {
    //     bool = c
    // }else if (typeof b === typeof true) {
    //     bool = b
    // }else if (typeof a === typeof true) {
    //     bool = a
    // };
    ///////////////////////////////////////////////////
    typeof c === typeof true ? bool = c : typeof b === typeof true ? bool === b :typeof a === typeof true ? bool = a : console.log ("m");

    ///////////////////////////////////////////////////
    // if (bool === true ) {
    //     bool = "You Are Available For Hire"
    // }else (bool === false){
    //     bool = "You Are Not Available For Hire"
    // };
    ///////////////////////////////////////////////////
    bool === true ? bool = "You Are Available For Hire" : bool === false ? bool = "You Are Not Available For Hire": console.log ("m");

    
document.write(`Hello ${name},<br> Your Age Is ${number},<br> ${bool} <br>`);


};
showDetails("Osama", 38, true);//"Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38 , "Osama", true); //"Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); //"Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); //"Hello Osama, Your Age Is 38, You Are Not Available For Hire"

*/

////////////////////////////////////////// challenge 10 /////////////////////////////////////////////

/*


//Function Arrow Challenges


//[1] One Statement In Function
//[2] Convert To Arrow Function
//[3] Print The Output [Arguments May Change] 

let names = function (...name) {
    return name;
};

let names1 = (...name) => name;

console.log (`String ${names("[Osama]", " [Mohamed]", " [Ali]", " [Ibrahim]")} => Done !`);
console.log (`String-1 ${names1("[Osama]", " [Mohamed]", " [Ali]", " [Ibrahim]")} => Done !`);
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// ========================================== 

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, tow, ...nums) => one + tow + +nums;

let calc1 = function (one, tow, ...nums) {
    return one + tow + parseInt(nums);
};

console.log (calc(10, myNumbers[0], myNumbers[1]));// 80
console.log (calc1(10, myNumbers[0], myNumbers[1]));// 80

*/

////////////////////////////////////////// Higher Order Functions - Reduce Practice /////////////////////////////////////////////

/*
let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

let check = theBiggest.reduce(function (acc, current, index, arr){
    return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L","Z", "@", "@", "E", "R", "@", "O"];

let rem = removeChars.filter(function (ele){
    return !ele.startsWith("@")
}).reduce(function (acc, current){
    return acc + current
});

console.log (rem)

*/

////////////////////////////////////////// challenge 11 /////////////////////////////////////////////
/*
Higher Order Functions Challenges

You can Use
- ,
- _
- space
- True => 1 => One time Only In Code

You Cannot Use
- Numbers
- Letters

- YOu Must Use [Filter + Map + Reduce + Your Knowledge]
- Order Is Not Important
- All In One Chain
*/
/*
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z";

let solution = myString.split("")
.filter(function(ele){
    return !ele.startsWith(",");
})
.map(function(ele){
    return isNaN(parseInt(ele))? ele : "";
})
.map(function(ele){
    return ele.startsWith("_")? ele =" ": ele = ele;
})
.reduce(function(acc , current){
    return `${acc}${current}`;
});
console.log (solution.substring(true));

 */

////////////////////////////////////////// DOM practice /////////////////////////////////////////////

//Practice Product With Heading And Paragraph
/* 

let count = 1;

for (i = 0 ; i < 100 ; i++){
let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

let myHeadingText = document.createTextNode ("Product Title " + count++);
let myParagraphText = document.createTextNode ("Product Description");

myHeading.appendChild(myHeadingText);

myMainElement.appendChild(myHeading);

myParagraph.appendChild(myParagraphText);

myMainElement.appendChild(myParagraph);

myMainElement.className = "product";

document.body.appendChild(myMainElement);
};

*/

////////////////////////////////////////// Validate Form practice /////////////////////////////////////////////
// Prevent Default
/*
let userInput = document.querySelector("[name='username']")
let ageInput = document.querySelector("[name='age']")

document.forms[0].onsubmit = function (e) {
    let userValid = false;
    let ageValid = false;

    if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
    }

    if (ageInput.value !== "" && userInput.value.length <= 10) {
        ageValid = true;
    }

    if (userValid === false || ageValid === false){
        e.preventDefault();
    }

}

document.links[0].onclick = function (event) {
    console.log(event);
    event.preventDefault();
}

*/
////////////////////////////////////////// challenge 12 DOM /////////////////////////////////////////////

/* 

//start header//

let stBody = document.querySelector ("body");

stBody.style.cssText = "margin:0; background-color: rgb(236,236,236); font-family: Tahoma, Arial";

let mainHeading = document.createElement("header");
let myLogo = document.createElement("p");
let myLinks1 = document.createElement("span");
let myLinks2 = document.createElement("span");
let myLinks3 = document.createElement("span");
let myLinks4 = document.createElement("span");

let myLogoText = document.createTextNode("Elzero");
let myLinksText1 = document.createTextNode("Home");
let myLinksText2 = document.createTextNode("About");
let myLinksText3 = document.createTextNode("Service");
let myLinksText4 = document.createTextNode("contact");

myLogo.appendChild(myLogoText);
myLinks1.appendChild(myLinksText1);
myLinks2.appendChild(myLinksText2);
myLinks3.appendChild(myLinksText3);
myLinks4.appendChild(myLinksText4);

mainHeading.appendChild(myLogo);
mainHeading.appendChild(myLinks1);
mainHeading.appendChild(myLinks2);
mainHeading.appendChild(myLinks3);
mainHeading.appendChild(myLinks4);

document.body.appendChild(mainHeading);

mainHeading.style.cssText = "display: flex; height: 80px; align-items: center; justify-content: space-around; background-color: rgb(255,255,255);color: rgb(136,136,136);"
myLogo.style.cssText = "flex-basis: 50%; font-weight:bold; color: rgb(35,169,110); font-size: 26px;"

//end header//

//start section//

let mainSection = document.createElement("div");
mainSection.className = "content";
mainSection.style.cssText = "display: flex;padding: 20px;flex-wrap: wrap;justify-content: center;gap: 20px;min-height: calc(100vh - 142px);box-sizing: border-box;"


let count = 1;
for (i = 0 ; i < 15 ; i++) {
    let mainSectionProd = document.createElement("div");
    mainSectionProd.className ="product";
    
    let sectionProdSpan = document.createElement("span");
    let sectionProdSpanText = document.createTextNode(`${count++}`);
    sectionProdSpan.appendChild(sectionProdSpanText);
    mainSectionProd.appendChild(sectionProdSpan);
    
    let sectionProdP = document.createElement("p");
    let sectionProdPText = document.createTextNode("Product");
    sectionProdP.appendChild(sectionProdPText);
    mainSectionProd.appendChild(sectionProdP);

    
    mainSection.appendChild(mainSectionProd);
    mainSectionProd.style.cssText ="padding: 20px;background-color: rgb(255,255,255);border: 1px solid rgb(221,221,221);width: calc((100% - 40px)/3);box-sizing: border-box;text-align: center;color: rgb(136,136,136);border-radius: 6px;";
    
};     


document.body.appendChild(mainSection);

//end section//
//start footer//

let footer = document.createElement("footer");
let footerText = document.createTextNode("copyright 2023 Hussein Abu El-Ela");
footer.appendChild(footerText);

footer.style.cssText = "background-color: rgb(35,169,110); font-size: 26px; text-align:center; padding:20px; color:rgb(255,255,255);"

document.body.appendChild(footer);

//end footer//

*/
////////////////////////////////////////// Local Storage Color Application practice /////////////////////////////////////////////
/* 
let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");



if (window.localStorage.getItem("color")) {
    // if there is color in local storage
    exp.style.backgroundColor = window.localStorage.getItem("color");
    // Remove Active Class From all Lis
    lis.forEach((li) => {
        li.classList.remove("active");
    });
    // Add Active Class To Current Color
    document.querySelector(`[data-color= "${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
    li.addEventListener("click" ,(e) => {
        // console.log(e.currentTarget.dataset.color);
        // Remove Active Class From all Lis
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        // Add Active Class To Current Element
        e.currentTarget.classList.add("active");
        // Add Current Color to local storage
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        // Change Div Background Color
        exp.style.backgroundColor =  e.currentTarget.dataset.color ;
    } );
});

*/

////////////////////////////////////////// challenge 13 BOM /////////////////////////////////////////////

/* 
let myBtn = document.querySelector(".add");
let input = document.querySelector(".input");
let contentAdd = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayTasks = [];


//check if theres tasks in local storage
if (localStorage.getItem("tasks")) {
    arrayTasks = JSON.parse(localStorage.getItem("tasks"));
}

// trigger  get data from local storage
getData();
    
myBtn.onclick = function () {
    
    // check if input have info inside or not
    let valueInput = input["value"];

    let valueVale = false;
    if (valueInput !== "") {
        valueVale = true;
        addTaskToArray(valueInput);
        input["value"] = ""
    } 
    if (valueVale === false){
        return;
    }
};

//  click on task element delete
contentAdd.addEventListener("click", (e) => {
    if(e.target.classList.contains("dll")) {
        //remove task from local storage
        deleteTask (e.target.parentElement.getAttribute("data-id"));
        //remove element from page
        e.target.parentElement.remove();
    }
});




function addTaskToArray(taskText) {
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false,
    }
    //push task to array of tasks
    arrayTasks.push(task);
    //add tasks to page
    createElement(arrayTasks);
    //add tasks to local storage
    addToLocalStorage(arrayTasks);
};


// add task data
function createElement (arrayTasks) {
    // empty the tasks div
    contentAdd.innerHTML = "";
    // looping on array of tasks
    arrayTasks.forEach ((task) => {

        //create min div
        let minDiv = document.createElement("div");
        minDiv.setAttribute("class" , "delete")
        minDiv.setAttribute("data-id" , task["id"]);
        minDiv.appendChild(document.createTextNode(task.title));
        // minDiv.style.cssText = "width:400px; background-color:red;"
        // check if task is done
        // if (task.completed) {
        //     inputText.classList = "done";
        // }
        minDiv.style.cssText ="margin-bottom: 20px;font-size: 18px;width: 450px;height: 47px;border: 1px solid rgb(223, 222, 222);border-radius: 4px;padding: 0px 10px;background-color: #fff;display: flex;justify-content: space-between;align-items: center;";
        
        //create bottom delete
        let deleteDiv = document.createElement("span");
        deleteDiv.setAttribute("class","btn dll");
        deleteDiv.appendChild(document.createTextNode("delete"));
        // append bottom delete
        minDiv.appendChild(deleteDiv);
        
        // append min div
        contentAdd.appendChild(minDiv);
        
    })
    
};



// set data in local storage
function addToLocalStorage(arrayTasks){
    window.localStorage.setItem("tasks" , JSON.stringify(arrayTasks));
};


// get data from local storage
function getData () {
    let data =window.localStorage.getItem("tasks");
    if (data) {
        let task = JSON.parse(data);
        createElement(task);
    }
};


function deleteTask(id) {
    arrayTasks = arrayTasks.filter((task) => task.id != id);

    addToLocalStorage(arrayTasks);
};

*/

////////////////////////////////////////// challenge 14 Destructuring /////////////////////////////////////////////

/*
let chosen = 3;

let myFriends = [
    {title: "Osama" , age: 39 , available: true ,skills: ["HTML", "CSS"] },
    {title: "Ahmed" , age: 25 , available: false ,skills: ["Python", "Django"] },
    {title: "Sayed" , age: 33 , available: true ,skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
    let [{title: n , age: a  , available ,skills: [ , lastSkill ] }] = myFriends;
    if (available === true) {
        available = "Available";
    }else {
        available = "Not Available";
    }
    console.log(`my name is ${n}`);
    console.log(`my age is ${a}`);
    console.log(`my statement is ${available}`);
    console.log(`my last skill is ${lastSkill}`);
}else if (chosen === 2) {
    let [ , {title: n , age: a  , available ,skills: [ , lastSkill ] } , ] = myFriends;
    if (available === true) {
        available = "Available";
    }else {
        available = "Not Available";
    }
    console.log(`my name is ${n}`);
    console.log(`my age is ${a}`);
    console.log(`my statement is ${available}`);
    console.log(`my last skill is ${lastSkill}`);
} else if (chosen === 3) {
    let [ , , {title: n , age: a  , available ,skills: [ , lastSkill ] }] = myFriends;
    if (available === true) {
        available = "Available";
    }else {
        available = "Not Available";
    }
    console.log(`my name is ${n}`);
    console.log(`my age is ${a}`);
    console.log(`my statement is ${available}`);
    console.log(`my last skill is ${lastSkill}`);
};

*/

////////////////////////////////////////// challenge 15 Map And Set Challenge /////////////////////////////////////////////

/*
Map And Set + What YOu Learn => Challenge
Requirements 
- You Cant Use Numbers Or True Or False
- Don't Use Array Indexes 
- You Cant Use Loop
- YOu Cant Use Any HIgher Order Function
- Only One Line Solution Inside Console
- If YOu Use Length => Then Only Time Only
Hints
- You Can Use * Operator Only In Calculation 
- Set 
- Spread Operator
- Math Object Methods
*/
/* 

let n1 = [10, 30, 10, 20];
let n2 = [ 30, 20, 10];

console.log([...n1 , ...n2].length * Math.max(...n2));// 210

*/

// console.log(new Set ([...n1 , ...n2]) );
// console.log(`###################`);
// console.log([...n1 , ...n2]);
// console.log(`###################`);
// console.log([...n1 , ...n2].length);
// console.log(`###################`);
// console.log(Math.max(...n2));
// console.log(`###################`);
// console.log(Math.min(...n2));

////////////////////////////////////////// challenge 16 Regular Expression /////////////////////////////////////////////
/* 
    Regular Expression
    - Challenge

*/

/* 
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re = /(https?:\/\/)?(www.)?\w+.(org|com|net|info)(:\d+\/\w+.\w+\?\w+=\d+&\w+=\w+)?/ig;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));

*/

