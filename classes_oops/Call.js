function  SetUserName(username) {
    //complex DB calls
    this.username = username
}
function createUser(username,email,password){
// here the function is called but when it comes in than its called then remove so when remove it removes all the values also 
// To store this we need to add.call to hold the values and set refrence. we need tis also.
    SetUserName.call(this,username)
    


    this.email = email
    this.password = password

}

const tea = new createUser("tea","chai.@com","1234")
console.log(tea);