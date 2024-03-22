
    const week = document.querySelector('.week')
    //console.log(week);
    //console.log(week.children);
    //console.log(week.children[1].innerHTML);

    for (let i = 0; i < week.children.length; i++) 
    {
       //console.log(week.children[i].innerHTML);
        
    }

    week.children[3].style.color = "orange"
    console.log(week.firstElementChild); 
    console.log(week.lastElementChild);

    const dayOne = document.querySelector('.days') //target to days class and will give only one value
    console.log(dayOne);
    console.log(dayOne.parentElement)    // prints the parent of that variable
    console.log(dayOne.nextElementSibling)


    //----------NODELIST---------------------

    console.log("NODES:", week.childNodes);   //will give each info about the doc in node list.
    const div = document.createElement('div')
        console.log(div);
        div.className = "main"
        div.id = (Math.random()*10 +1) 
        div.setAttribute("title","generated title")
        div.style.backgroundColor = "green"
        div.style.padding = "12px"
        //div.innerText = "Hello How are you"
        const addText = document.createTextNode("Hello How are you")
        div.appendChild(addText)

        document.body.appendChild(div);
