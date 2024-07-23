class User {
   constructor(email,password){
    this.email = email,
    this.password = password

   }


// when we want get than compulsory need to set
// constructor is calling so many times the value so we got the range error
   get password(){
       return `${this._password}kinjal`

   }
   set password(value){
       this._password = value

   }
   get email(){
       return this._email.toUpperCase()

   }
   set email(value){
       this._email = value

   }
   
}

const kinjal = new User("Kinjal@gmail.com",123)
console.log(kinjal.password);
console.log(kinjal.email);
