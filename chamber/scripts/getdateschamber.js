let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector('#currentYear').innerHTML = currentYear;
document.querySelector('#lastModified').innerHTML = document.lastModified;

// console.log(document.lastModified);