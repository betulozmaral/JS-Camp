export default class User {
    //tip belirtemiyoruz, type safety yok. 
    //bu yüzden özellikleri constuctor'dan set ediyoruz.
    constructor(id, firstName, lastName, city) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
    }
}

