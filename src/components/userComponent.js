import { MongoLogger } from "../classCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"
import Customer from "../models/customer.js"

// burası senin ekranınmış gibi düşün.
console.log("User component yüklendi")

//Logger classını / servisini kullanmak istiyorum:
let logger1 = new MongoLogger()

//user service'ı burada kullanmak için new keywordü.
let userService = new UserService(logger1)


//diyelim ekranda kullanıcı bilgilerini yazıyor.
//bu bilgileri alıp bir objeye atarsın. 
let user1 = new User(1, "Engin", "Demirog", "Ankara")
let user2 = new User(2, "Baran", "Gökcek", "Muğla")

userService.add(user1) //-> bu kullanıcı olarak sisteme kaydolduğun sayfa
userService.add(user2)

//kullanıcı bilgilerini yazdı, nesne oluştu. 
//düğmeye basınca userService.add (user) çalıştı.
//bunlar ekranda bir kez yazılacak aslında, örnek için yapıyoruz. 


//console.log(userService.list()) // -> sistemdeki kullanıcıları listelediğin sayfa
//console.log(userService.getById(2)) // -> kullanıcı bilgilerinin detayına gittiğin sayfa



let customer = {id:1, firstName: "Engin"}
customer.lastName = "Demirog"

console.log("-------------------------------")
userService.load()
// new Customer şeklinde nesne göndermemiz hatalı kullanım. 
//Modellerden yararlanmalıyız.
userService.add(new Customer(1, "Seda", "Yılmaz", "Ankara", 25))
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)

console.log(userService.getCustomersSorted())
