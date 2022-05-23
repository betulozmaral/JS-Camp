//classlarda isimlendirme camel case.

import { users } from "../data/users.js"
import Error from "../models/dataError.js"

//fonksiyonları gruplama amaçlı buraya ekleyeceğim. 
export default class UserService{
    constructor(loggerService){
        this.customers = []
        this.employees = []
        this.errors = []
        this.loggerService = loggerService
    }
    //gelen users datasını employee ve customerlara ayırır. 
    //datanın içerisinde userlar var, import edip kullanabilirim
    load(){
        for (const user of users) {
            switch (user.type) {
                case "employee":
                    this.employees.push(user)
                    break;
                case "customer":
                    if(!this.validateCustomer(user)){
                        this.customers.push(user)
                    }
                    break;
                //hatalı verileri loglasın
                default:
                    this.errors.push(new Error("Wrong user type", user))
                    break;
            }
        }
    }
    
    //bir müşteri kaydolurken idsi, ismi, yaşı, şehri kesinlikle olsun,
    //kredi kartı olmasa da olur kuralını sağlıyor mu diye kontrol ederiz.
    validateCustomer(user){
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new Error(`Validation problem. ${field} is required`, 
                user))
            }
            
        }
        return hasErrors
    }

    //user'ın User tipinde geleceğini varsayıyorum.
    add(user){
        // console.log("kullanıcı eklendi " + user)
        //this.users.push(user)
        switch (user.type) {
            case "customer":
                if(!this.validateCustomer(user)){
                this.customers.push(user)
                }
                break;
            case "employee":
                this.employees.push(user)
                break;

            default:
                this.errors.push(new Error("This user cannot be added. Wrong user type",user))
                break;
        }
        this.loggerService.log(user)
    }

    listCustomers(){
        // console.log("kullanıcılar listelendi")
        return this.customers
    }

    getCustomerById(id){
        // console.log("kullanıcı detayı getirildi ")
        //find -> verdiğim şarta göre bir data döndür. 
        return this.customers.find(u => u.id===id) 
    }


    getCustomersSorted(){
        return this.customers.sort((customer1, customer2)=>{
            if(customer1.firstName > customer2.firstName){
                return 1
            }
            else if(customer1.firstName === customer2.firstName){
                return 0
            }
            else{
                return -1
            }
        })
    }
}