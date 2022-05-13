// JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function prime(...numbers) {
    let i, j, endPoint
    for(i=0; i < numbers.length; i++) {

        j = 3
        endPoint = Math.trunc(Math.sqrt(numbers[i]))
        
        if(numbers[i]%2 !=0){
            while((j <= endPoint+1)  && (numbers[i]%j != 0)){
                j = j+2
            }
            if(numbers[i]%j != 0){
                console.log(numbers[i] + " : asal ")
            }
            else{
                console.log(numbers[i] + " : asal değil ")
            }
        
        }
        else if (numbers[i] == 2)
            console.log(numbers[i] + " : asal ")

        else
            console.log(numbers[i] + " : asal değil")
    }
}

prime(36, 35, 7, 2, 13)

//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. 
//İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
function findDivisors(num){
    let divisor = 1, sum = 0
    while(divisor <= num/2) {
        if(num % divisor == 0)
            sum += divisor	
        divisor++
    }
    return sum
}

function arkadas(number1, number2) {
        
        if(findDivisors(number1) == number2 && findDivisors(number2) == number1)
            console.log(number1 + " ve " + number2 + " arkadaş sayıdır")
        else
            console.log(number1 + " ve " + number2 + " arkadaş sayı değil")
}
console.log("\n")
arkadas(220, 280)
arkadas(220, 284)
console.log("\n")


//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
//Mükemmel sayı, kendisi hariç bölenlerinin toplamı kendisine eşit olan sayı. 
function mukemmel(number){
    // en küçük mükemmel sayı olan 6'dan başlat. Tek mükemmel sayı henüz bulunamadı, o yüzden çiftleri arat.
    for(let i = 6; i< number; i+=2){
        if(findDivisors(i) == i)
            console.log(i)
    }
}

console.log("1000'e kadarki mükemmel sayılar:")
mukemmel(1000)

//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function findAllPrimes(number){
    let primes = [], i, j
    for (i=3 ; i<= number; i+=2) 
            primes[i] = 1
    for(i=0 ; i<=number; i+=2)
            primes[i] = 0
    primes[1] = 0
    primes[2] = 1

    for(i=3 ; i<Math.sqrt(number) ; i+=2){
        if(primes[i] == 1){
            for(j = i*i; j <number ; j+=2*i)
                primes[j] = 0
        }
    }

    //yeni bir dizi oluşturmadan da ekrana bastırılabilir değeri 1 olan elemanların indexleri. 
    let allPrimes = [2]

    for(i=3 ; i<=number; i+=2)
        if( primes[i] == 1)
            allPrimes.push(i)
    
    console.log(allPrimes)


}

console.log("\n1000'e kadarki tüm asal sayılar:")
findAllPrimes(1000)