exports.Logins = class login{
    constructor(page){
        this.page = page;
    }
    async initialize(){
        await this.page.goto();
    }
    async text_field(){
        
    }
}