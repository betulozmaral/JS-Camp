// JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function prime(...numbers) {
    let i, j, endPoint
    for(i=0; i < numbers.length; i++) {

        j = 3
        endPoint = Math.trunc(Math.sqrt(numbers[i]))
        console.log(endPoint)
        
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

function arkadas(number1, number2) {
    
}

//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function mukemmel(){

}
//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function findAllPrimes(){
    
}