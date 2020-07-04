// قم بإنشاء الدوال التالية

/*
 * greet(name) اسم الدالة
 * - name قد تستقبل وقد لا تستقبل
 * - name إن لم تستقبل اسم أو "Hello" تطبع
 * - name إن استقبلت اسم أو "Hello <name>" تطبع
 */
let name = prompt(hello)
function greet(name) {
console.log("hello"+ name);
}
greet();
function greet() {
    console.log("hello");
    }
greet();
/*
 * isOdd(n) اسم الدالة
 * - n تستقبل رقم
 * - عدا ذلك false إن كان الرقم فردياً وترجع true ترجع القيمة
 */
let n = 4
function isOdd(n) {
if (n %2 == 0){
    console.log("true")
}else if (n %2 == 1){
    console.log("false");
}
}
