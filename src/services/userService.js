//classlarda isimlendirme camel case.
//fonksiyonları gruplama amaçlı buraya ekleyeceğim. 
export default class UserService{
    constructor(loggerService){
        this.users = []
        this.loggerService = loggerService
    }
    //user'ın User tipinde geleceğini varsayıyorum.
    add(user){
        // console.log("kullanıcı eklendi " + user)
        this.users.push(user)
        this.loggerService.log(user)
    }

    list(){
        // console.log("kullanıcılar listelendi")
        return this.users
    }

    getById(id){
        // console.log("kullanıcı detayı getirildi ")
        //find -> verdiğim şarta göre bir data döndür. 
        return this.users.find(u => u.id===id) 
    }
}

