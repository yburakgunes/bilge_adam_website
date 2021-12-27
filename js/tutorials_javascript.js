//js comment
/* multiple comment*/

// window.alert("Ekranda göster");
// alert("kısaltılmış hali");
// console.log("console log");
// console.info("console info");
// console.error("console error");

// document.write("document write yazdım");

/************************************************************* */


// var sayi="kelime",sayi2;
// sayi=true;
// sayi=34.56;
// sayi=44;

// alert(typeof sayi);
// alert(sayi);


// /************************************************************* */

// var sayi2="44", result;
// result=sayi2/22;
// alert(result);



// /************************************************************* */
// var deneme1 = "485";
// deneme1=true;


// /************************************************************* */

// let deneme2 = "5555";


// /************************************************************* */

// const deneme3= "5555";
// deneme3 = "99656";


/************************************************************* */

// var $44_deneme = 55;
// alert($44_deneme)

/************************************************************* */


//js dizi
// var sayi=55;
// var dizi=["ads",true,55];
// console.log(dizi);
// alert(dizi[0])

//js object

// var object={

// adi:"Burak",
// soyadi:"Gunes",
// teknoloji:["Java","JSP"]
// }

// console.log(object);
// console.log(object.adi);


//#region 
//#endregion

/************************************************************* */

//nan
// var sayi=44/"asd";
// alert(sayi);

//undefined
// var sayi2;
// console.log(sayi2);

/************************************************************* */


// var sayi1 = "12";
// var sayi2 = 12;
// console.log(sayi1+sayi2);

// sayi1++;
// sayi2--;

// console.log(sayi1);
// console.log(sayi2);
//=
//== type casting
//=== type control

// if (sayi1 === sayi2) {
//     console.log("eşit")
// } else {
//     console.log("eşit değil")
// }

// if (sayi1 == sayi2) {
//     console.log("eşit")
// } else {
//     console.log("eşit değil")
// }

//Scanner
//JOptionaPane.show

// var sayi=prompt("Lütfen sayı giriniz");
// console.log(sayi);

//Math
// console.log(Math.abs(-4));
// console.log(Math.sqrt(25));
// console.log(Math.pow(2,5));
// console.log(Math.min(2,5,-5,65552,-96));
// console.log(Math.max(2,5,-5,65552,-96));
// console.log(Math.floor(3,4));
// console.log(Math.ceil(3,4));
// console.log(Math.round(3,4));

//prompt
//Number()
//Math.pow()

// var sayi =Number(prompt("Lütfen sayı giriniz"));
// console.log(Math.pow(sayi, 5));
// console.log(sayi**=2);

//escape character:
// alert("\"");
// console.log(4/"sa");
// var sayi;
// console.log(sayi);
// console.log(4/0);

// try {
//     let sayi = 5 / 3;

// } catch (e) {

//     alert(e.message());
// } finally {
//     alert("Burası kesin kapatılacak")
// }

//sayi
// var sayi=44e-5;
// sayi=44e6;
// console.log(sayi)

// //sayi sistemleri
// var sayi2=0xFF;
// sayi=0b11;
// console.log(sayi2);

//metinsel
// var kelime=" javascript jsp jsf j";
// console.log("length:"+kelime.length);
// console.log("küçük harf:" + kelime.tolowercase());
// console.log("küçük harf:" + kelime.touppercase());
// console.log("indexof : " + kelime.indexof("j"));
// console.log("lastindexof : " + kelime.lastındexof("j"));
// console.log("search:" + kelime.search("j"));

// console.log(kelime.trim().length);
// console.log(kelime.substring(4));
// console.log(kelime.substring(0,4));
// console.log(kelime.charat(1));
// console.log(kelime.replace(kelime," yenisi"));
// console.log("*******************************")
// console.log(kelime);
// kelime=kelime.replace(kelime,"yenisi");
// console.log(kelime);

////////////////////////////////////////////////////////////////

//parametresiz function
// function deneme(){

//     alert("merhabalar function")
// }

////////////////////////////////////////////////////////////////

//parametreli function
// function deneme2(sayi){
// alert("Fuction2: " + Math.pow(sayi,2));

// }
// deneme2(4.16);


////////////////////////////////////////////////////////////////
//değişkende kullanılabilecek bir function lazımsa
// function deneme3(sayi) {
//     return Math.pow(sayi, 2);
// }
// var _temp = deneme3(4.16);
// alert(_temp);


////////////////////////////////////////////////////////////////
// var userPoint = (Number)(prompt("Lütfen sayı giriniz"));
// function absolute1() {
//     if (userPoint < 0) {
//         console.log("Sayi negatiftir")
//     } else {
//         console.log("sayi pozitiftir")
//     }
// }


//2. YOL
//() ? true:false;
// var deneme4 = (userPoint < 0) ? "Negatif" : "Pozitif";
// console.log(deneme4);


// function deneme5(sayi) {
//     if (sayi < 0) {
//         console.log("Negatif")
//     } else {
//         console.log("Pozitif")
//     }
// }

// deneme5(userPoint);

////////////////////////////////////////////////////////////////
//anonymous:anonim bilinmeyen

// function name4(params){
//     alert("deneme")
// }
// name4();



//1- normal değişkene verdiğim fonsiyon
// var deneme5 = function adi() {
//     console.log("deneme")
// }

// deneme5();


//2-)
// var deneme6 = function () {
//     console.log("deneme6")
// }

// deneme6();

//3-)
// var deneme7 = () => {
//     console.log("deneme7")
// }

// deneme7();


//4-) ()=>{}
// var deneme7 = (sayi) => {
//     alert(sayi * sayi);
// };
// deneme7(4);

// for (let i=0; i<10; i++) {
//     console.log(i);
// }

// for (let i=0; i<10; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " ");
//     }
// }

//Except 6
// for (let i = 0; i <= 10; i++) {
//     if (i == 6) {
//         continue;
//     }
//     if (i % 2 == 0) {
//         console.log(i + " ");
//     }
// }

//Except 6 STOP at 16, 0 to 1000
// for (let i = 0; i <= 1000; i++) {
//     if (i == 6) {
//         continue;
//     }
//     if (i == 16) {
//         break;
//     }
//     if (i % 2 == 0) {
//         console.log(i + " ");
//     }
// }


// let dizi = ["Elazığ","Malatya","Nevşehir","İstanbul","Ankara"];
//FOR IN
// for(let temp in dizi){
//     console.log(temp);
// }

// for(let temp in dizi){
//     console.log(dizi[temp]);
// }

//FOR OF
// for(let temp of dizi){
//     console.log(temp);
// }
//var: sadece globalde kullanalaım 
//fonksiyon, for döngüsü let.

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// console.log("********************************");

// var i2 = 0;
// while (i2 <= 10) {
//     console.log(i2);
//     i2++;
// }
// console.log("********************************");

// var i3 = 0;
// do {
//     console.log(i3);
//     i3++;

// } while (i3 <= 10);


////////////////////////////////////////////////////////////////

// "user strict";
// a = 5;
// alert(a);

// var tarih = new Date();
// console.log(tarih);
// console.log(tarih.toUTCString());
// console.log(tarih.getDate());
// console.log(tarih.getMinutes());
// console.log(tarih.getTime());
// console.log("asdasdasdas"+ new Date(tarih.getTime()));

// console.log(tarih.setDate(2));
// console.log(tarih.getDate());


// var x,y,z;
// x=5;
// y=45;
// z=65;
// var m=x+y+z;
// console.log(m);
// console.log(m);


// var dizi = ["İstanbul", "Ankara", "Muş", "Van"];
// dizi.sort();
// console.log(dizi);


// for (let index = 0; index < dizi.length; index++) {
//     console.log(dizi[index])
// }

//push
// dizi.push("Sona ekledim");
// console.log(dizi);

//unshift
// dizi.unshift("Başa ekledim");
// console.log(dizi);

//çıkarma = son ekleneni çıkarır
// dizi.pop();
// console.log(dizi);

//shift = baştakini çıkar
// dizi.shift();
// console.log(dizi);

//delete:
// delete dizi[0]
// console.log(dizi);

// dizi.sort();
// console.log("baştan sona" + dizi);

// dizi.reverse();
// console.log("sondan başa" + dizi);

// dizi.join("*")
// console.log(dizi);

// console.log(dizi.join("*"));

//diziyi to String yaparak stringe çeviriyoruz.
// var dizi2 = ["Sercan", "Melih", "Mustafa", "Çağrı"]
// console.log(dizi2[0].toString().concat("9"));
// console.log(dizi2);
// console.log(dizi2.join("+"));

// var dizi3 = [1,12,3,35,46,1301,12,47,48];
// dizi3.sort();
// dizi3.sort((a,b) => a-b);
// console.log(dizi3);

// ['ç', 'ö', 'ğ', 'ş'].sort((a, b) => a.localeCompare(b))
// dizi3 = ['ç', 'ö', 'ğ', 'ş']dizi3.sort((a, b) => a.localeCompare(b))
// console.log(dizi3)

// document.getElementById("dom_id").style.color="blue";
// document.querySelector("#dom_id").style.fontSize="400px";


// document.getElementsByClassName("dom_class")[0].style.fontSize="255px";
// document.querySelector(".dom_class").style.fontSize="255px";
// document.getElementsByName("dom_name")[0].style.backgroundColor="red";
// document.getElementsByTagName("p")[0].style.color="yellow";


//selector
document.querySelector("#dom>p").style.color = "red";

//////////////////////////////////////////////////////////////////////////

function tarihGoster() {
    // alert(new Date())
    document.getElementById("tarih").innerHTML = "<b><i>" + new Date();
    document.getElementById("tarih2").innerText = "<b><i>" + new Date() + "</i></b>";
}

//listener
var count = 0;

document.getElementById("button_id").addEventListener("onmouseup", () => {
    count++;
    alert("Tıklandı " + count)
})




