
const requestUrl = 'https://api.github.com/users/KinjalShah10'

const xhr = new XMLHttpRequest();    //XMLHttpRequest is almost a class so have to make object

//open only send an http request
//open takes two parameter 
// -> which type of request
//-> secondly url
xhr.open('GET', requestUrl)

//onreadystatechange tracked the api request
xhr.onreadystatechange = function(){    //function which use to tell what to do when state change
    console.log(xhr.readyState);

    if(xhr.readyState === 4){
        //const data_user = console.log(this.responseText);
        //console.log(data_user);
        //console.log(typeof data_user);  // undefined
        // this.responseText will come in string form for extracting it we need to convert in json format.

        //convert string to JSON
        const data = JSON.parse(this.responseText);
        console.log(data)
        console.log(typeof data);
        console.log(typeof data);
        console.log(data.login);
    }
}

// by writing below line open will be called
xhr.send();
