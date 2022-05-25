// **Şimdiki tarihinin gün ay ve yıl bilgisini yazdırınız.

let date = new Date();

console.log(date.getDate(), date.getMonth(), date.getFullYear());



// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz

let d = new Date();
console.log(d.getFullYear(2022), d.setTime(21) + ":" + d.getMinutes());

// ya da

let dtA = new Date('8/12/2020 14:50:10');
let dtB = new Date(2010, 7, 24, 14, 50, 10);

console.log(dtA, dtB);

// iki tarih arasndaki geçen süreyi bulunuz

let date1 = new Date(2001, 02, 03);
let date2 = new Date();

console.log(date2.getFullYear() - date1.getFullYear());

//her yıl mayıs ayının 2.haftasını pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır

let momDate = new Date();

momDate.setHours(0, 0, 0, 0, ); // saati sıfırladık
momDate.setFullYear(2019);
momDate.setMonth(4);
momDate.setDate(1); // 2019 1 mayıs

while (momDate.getDay() ! = 0) {
    momDate.setDate(momDate.getDate() + 1)
}
momDate.setDate(momDate.getDate() + 7);;

console.log(momDate); // !!!ERRORRR


// yaş hesaplama nasıl yapılır

let brithday = new Date(1990, 02, 03);
let today = new Date();

console.log(today.getFullYear() - brithday.getFullYear());

// 1/1/1990 tarihinden bir gün öncesini gösteriniz

let date3 = new Date('1/1/1990');

let dayOfMonth = date3.getDate();
date3.setDate(dayOfMonth - 1);
console.log(date3);