export class Message {
        //public user: string;
        //public content: string;
    /*    
    constructor(user, message){
        this.user = user;
        this.content = message;

    }
    */
    constructor(private user: string, private content: string){}

    toString(): string{
        return 'Usuario: ' +this.user +' , ' +'mensaje: ' +this.content; 
    }


}
