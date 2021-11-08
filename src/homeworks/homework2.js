// 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function primeNumber(number){
	for (let i = 2; i <= number; i++) {
		let isPrime = true;
		for (let j = 2; j < i; j++) {
		  if (i % j == 0) {
			isPrime = false;
		  }
		}
		if (isPrime == true) {
		  console.log(i + " asal sayıdır");
		}
	  }
}

primeNumber(1000)

//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function perfectNumber(number){
	for (let i = 1; i <= 1000; i++) {
		let total = 0;
		for (let j = 1; j < i; j++) {
		  if (i % j == 0) {
			total = total + j;
		  }
		}
		if (total == i) {
		  console.log([i] + " sayısı mükemmel sayıdır");
		}
	  }
}

perfectNumber(1000)



// Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

const number1 = 17296;
const number2 = 18416;

let total1 = 0;
let total2 = 0;

const isFriend = (s1, s2) => {
  for (let index = 0; index < s1; index++) {
    if (number1 % index === 0) {
      total1 += index;
    }
  }
  for (let index = 0; index < s2; index++) {
    if (number2 % index === 0) {
      total2 += index;
    }
  }

  return total1 === s2 && total2 === s1 ? "Arkadaş Sayılar" : "Arkadaş Olmayan Sayılar";
};

console.log(isFriend(number1, number2));


//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon
// yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak 
// asal olup olmadığını yazınız.

 function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
		let parameter = 0;
		for (let j = 1; j <= numbers[i] - 1; j++) {
		  if (numbers[i] % j == 0) {
			  parameter++;
		  }
		}
	
		if (parameter == 1) {
		  console.log(numbers[i] + " Sayısı Asaldır");
		} else {
		  console.log(numbers[i] + " Sayısı Asal  Değildir");
		}
	  }
	}
	findPrime(27, 17, 46, 48, 13);