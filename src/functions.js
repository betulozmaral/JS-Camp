
function addToCart(productName = "Elma", quantity) {
    console.log("Sepete eklendi : " + productName 
                           + " adet : " + quantity)
}

addToCart(10)
// addToCart("15")
// addToCart()

//arrow function
let sayHello = ()=>{
    console.log("Hello world!")
}

sayHello()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)


function addToCart3(product) {
    console.log("Ürün: "+product.productName+ " adet: "
                +product.quantity+ " fiyat:"+product.unitPrice)
}

let product1 = {productName: "Elma", unitPrice: 15, quantity: 5}
addToCart3(product1)


let product2 = {productName: "Elma", 
        unitPrice: 15, quantity: 5}

let product3 = {productName: "Elma", 
        unitPrice: 15, quantity: 5}

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)


let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName: "Elma", unitPrice: 15, quantity: 5},
    {productName: "Armut", unitPrice: 15, quantity: 5},
    {productName: "Karpuz", unitPrice: 15, quantity: 5}
]

addToCart4(products)

function add(...numbers) {
    let total = 0
	for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
        
    }
	console.log(total)
}

add(20,30,40)

let numbers = [30,10,200,45,6]
console.log(Math.max(...numbers))


let [icAnadolu, marmara,karadeniz, [icAnadoluSehirleri]] = [
    {name: "İç Anadolu", population: "20M"}, 
    {name: "Marmara", population: "30M"}, 
    {name: "Karadeniz", population: "10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]
]


// console.log(icAnadolu.population)
// console.log(icAnadolu.name)
console.log(icAnadoluSehirleri)

let product5 = {productName: "Elma", quantity: 5, unitPrice:10}
//nesnenin elemanlarını değişkenlere ata

// let {productName:pName, quantity:q, unitPrice:uP} = 
// {
//     productName: "Elma", 
//     quantity: 5, 
//     unitPrice:10
// }

let pName, q, uP
({productName:pName, quantity:q, unitPrice:uP} = 
{
    productName: "Elma", 
    quantity: 5, 
    unitPrice:10
})

console.log(q)
