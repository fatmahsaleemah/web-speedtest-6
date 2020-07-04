// قم بإنشاء الدوال التالية

/*
 * greet(name) اسم الدالة
 * - name قد تستقبل وقد لا تستقبل
 * - name إن لم تستقبل اسم أو "Hello" تطبع
 * - name إن استقبلت اسم أو "Hello <name>" تطبع
 */

function greet(name) {
    let message = "hello";
    if(name){
        message += name;
console.log(message);
}else{
    console.log(message);
}
}
greet("fatmah");

greet();
/*
 * isOdd(n) اسم الدالة
 * - n تستقبل رقم
 * - عدا ذلك false إن كان الرقم فردياً وترجع true ترجع القيمة
 */
let n = 4
function isOdd(n) {
if (n %2 == 0){
    return true
}else if (n %2 == 1){
    return false
}
}
