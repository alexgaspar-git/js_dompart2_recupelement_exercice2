//1

let divContent = document.getElementById('content');
console.log(divContent.firstElementChild);

//2 
let titreNiv3 = document.getElementById('titreNiv3')
console.log(titreNiv3);

//3 

console.log(titreNiv3.previousElementSibling);

//4

console.log(document.getElementsByClassName('petitParagraphe')[0].nextElementSibling);

//5 
let important = document.getElementsByClassName('important');
let importantTab = Array.prototype.slice.call(important);

importantTab.forEach(element => {
    console.log(element.parentElement);
});

//6 

console.log(document.getElementById('listElements').parentElement.firstElementChild);

//7

console.log(document.getElementsByClassName('important')[3].nextElementSibling);

//8 

console.log(document.getElementById('textGeneral').nextElementSibling);

//9

console.log(document.getElementsByTagName('span')[1].parentElement.nextElementSibling);

//10

console.log(document.getElementsByTagName('b')[2].parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild);

//11

console.log(document.querySelector('.grandParagraphe'));

//12

let bookl = document.querySelectorAll('li');

bookl.forEach(element => {
    console.log(element.textContent);
});
