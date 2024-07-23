class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username:${this.username}`);
    }

    // createId(){
    //     return`123`
    // }

    // when we dont want to give access to anyone we use static keyword
    static createId(){
        return`123`
    }
}

const people = new User("kinjal")
console.log(people.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const phone = new Teacher ("iphone","hello@gmail.com")
phone.logMe();
console.log(phone.createId());