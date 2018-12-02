import html from './nav.html';

const elementName = 'tcs-nav';

 function insertTemplate(config){
    var query = document.querySelector(elementName);
    query.innerHTML = html;
    
    var ul = document.querySelector('.' + elementName);

    config.forEach(item => {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode(item.name));
        a.href = item.href;
        li.appendChild(a);
        ul.appendChild(li);
    });
}

export function load(config){
    document.addEventListener("DOMContentLoaded",()=>{
        console.log('loading ' + elementName);
        insertTemplate(config);
        console.log('loaded ' + elementName);
        });
}
