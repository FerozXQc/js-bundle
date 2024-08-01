class User{
    static usercount = 0;

    constructor(username){
        this.username = username;
        User.usercount++;
    }
}

const user1 = new User('feroz');
console.log(user1.username);