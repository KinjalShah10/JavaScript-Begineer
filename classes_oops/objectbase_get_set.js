const User = {
    _email: "k@ks.com",
    _password : "kin",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
const tea = Object.create(User)
console.log(tea.email);