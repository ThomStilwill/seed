import html from './header.html';

const elementName = 'header';

 function insertTemplate(){
    var query = document.querySelector(elementName);
    query.innerHTML = html;
}

export function load(){
    document.addEventListener("DOMContentLoaded",()=>{
        console.log('loading ' + elementName);
        insertTemplate();
        console.log('loaded ' + elementName);
        });
}
