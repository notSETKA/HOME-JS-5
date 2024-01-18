//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.

// function processNumbers(num1, num2, callbackfoo) {
//     console.log(num1);
//     console.log(num2);
//     return setInterval(() => {
//         callbackfoo(num1, num2);
//     }, 1000);
// }

// processNumbers(
//     prompt(`Enter first number`),
//     prompt(`Enter second number`),
//     function (num1, num2) {
//         console.log(parseInt(num1) + parseInt(num2));
//     }
// );



//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!

// function isValidUser(Name, Pass){
//     if(Pass === `` && Name === `` ){
//         console.log(`Fake`)
//     }
//     else if(Pass.length > 20 ){
//         console.log(`Shorten your password!!`)
//     }
//     else if(Pass.length < 8){
//         console.log(`Lengthen your name!!`)
        
//     }
//     else if(8 <= Pass.length && Pass.length <= 20){
//         console.log(`True`)
//     }
//     else{
//         console.log(`error`)
//     }
// }
// isValidUser(prompt(`enter your name`), prompt(`enter your password`))


//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.

// function fibonachi(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fibonachi(n - 1) + fibonachi(n - 2);
//     }
// }


// let repeatnum = prompt(`enter how many times for sequence to repeat`);
// console.log(`repeated ${repeatnum} times: ${fibonachi(repeatnum)}`);

//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!

// let countdown = 10;

// function countdownTimer() {
//     console.log(countdown);

//     if (countdown === 0) {
//         clearInterval(timer);
//         console.log("დრო ამოიწურა!");
//     } else {
//         countdown--;
//     }
// }

// let timer = setInterval(countdownTimer, 1000);

//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.
// function calculateAge(dateOfBirth, dateOfMonth, dateofDay) {
//     let currentDate = new Date();
//     let birthDate = new Date(dateOfBirth, dateOfMonth, dateofDay);

//     let age = currentDate.getFullYear() - birthDate.getFullYear();


//     if (
//         currentDate.getMonth() < birthDate.getMonth() ||
//         (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
//     ) {
//         return age - 1;
//     }

//     return age;
// }

// let dateOfBirth = prompt(`date of year:`) ;
// let dateOfMonth = prompt(`date of month:`) ;
// let dateofDay = prompt(`date of day:`) ;
// let age = calculateAge(dateOfBirth, dateOfMonth, dateofDay );
// console.log(`The age is: ${age}`);
//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!

// function printCurrentDay() {
//     let daysOfWeek = ['კვირა', 'ორშაბათი', 'სამშაბათ', 'ოთხშაბათი', 'ხუთშაბათ', 'პარასკევი', 'შაბათი'];
//     let currentDate = new Date();
//     let currentDayNumber = currentDate.getDay();
//     let currentDayName = daysOfWeek[currentDayNumber];

//     console.log(`Today is: ${currentDayName}`);
// }


// printCurrentDay();