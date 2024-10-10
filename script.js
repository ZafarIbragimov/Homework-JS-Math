let a = prompt("A sonini kiriting:");
let b = prompt("B sonini kiriting:");

if (a % 2 === 0 && b % 2 === 0) {
 alert('Siz 2ta juft son kiritdingiz')
} else {
    alert('Sizda toq son bor')
}



alert('2chi vazifaga tayyormisiz??')


let tekshirish = prompt("1 chi sonni kiriting!!!")
let tekshirish1 = prompt("2chi sonni kiriting!!!")

if ( tekshirish + tekshirish1 <! 50){
    alert("Tabriklayman siz kiritgan sonlar 50dan katta!")
}else{
    alert("Iltimos boshqattan kiriting. Chunki siz kiritgan sonlar 50dan kichik")
}


alert("3chi vazifa shartida foydalanuvchidan   son kiritsh so'ralgan. Va juft bolmasligi kerak edi")

let number1 = prompt("Sonni kiriting:");

if (number1 < 10 || number1 > 99) {
alert("Tabriklayman siz 2xonali son kiritmadingiz") 
} else {
alert("Iltimos boshqattan kiriting. Chunki sizning kiritgan soningiz 2 xonali")

}



alert("4chi vazifa. Vazifa sharti shunday: Foydalanuvchidan son kiritishni so’rang. Shu son uch xonali musbat son bo’lsa yoki ikki xonali manfiy son bo’lsa, ekranga true qiymatini chiqaruvchi dastur tuzing.")

let number = prompt("Sonni kiriting:");

if ((number >= 100 && number <= 999) || (number <= -10 && number >= -99)) {
alert(" true")
} else {
alert("false")
}


alert("5chi vazirfa")

let balans = prompt("Iltimos balansingizni kiriting!!!")

if(balans > 10000000){
 alert("Ohho puliz ko'pakanu. Ehson qiling 🤣")
} else{
    alert("hisobizda mablag yetali emas iltimos hisobiz toldrsh uchun ko'pro ishlang.")
}


alert("6chi mashq ")

let talaba = prompt("Brat, talabamisiz?");
if (talaba === "talaba" || talaba === "ha") {
    alert("O'zimizdan ekansiz-ku)))");
} else {
    alert("Student bo'lgan paytlar boshqacha edi...");
}



alert("7chi mashq")

let yosh = prompt("Yoshingizni kiriting:");

if (yosh < 25) {
    alert("Hali yosh ekansiz, chalg'imang!");
} else {
    let uylanganmi = prompt("Uylanganmisiz? (ha yoki yo'q)");

    if (uylanganmi.toLowerCase() === "yo'q") {
        alert("To'y qachon? Uylanmabsizmi? Dardimiz bir ekan 🥺");
    } else if (uylanganmi.toLowerCase() === "ha") {
        alert("Yaxshi hayot kechirishingizni tilayman!");
    } else {
        alert("Iltimos, ha yoki yo'q deb javob bering.");
    }
}


alert("8chi mashq")
let ism = prompt("Ismingizni kiriting:");
let familiya = prompt("Familiyangizni kiriting:");

if (ism === "Eshmat" || familiya === "Toshmatov") {
alert("true") 
} else {
alert("false") 
}


