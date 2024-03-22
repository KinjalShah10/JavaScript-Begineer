function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("python")
addLanguage("TypeScript")

// Optimized approch

function addOptiLanguage(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}
addOptiLanguage('Golang')

//-----EDIT--------

const secondLang = document.querySelector('li:nth-child(2)')
//secondLang.innerHTML = "Mojo"
const newLi = document.createElement('li')
newLi.textContent = "Hello"
secondLang.replaceWith(newLi)

const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML='<li>Baghooooo</li>'


//--------REMOVE----------

const lastLang = document.querySelector('li:last-child')
lastLang.remove()