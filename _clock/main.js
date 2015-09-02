/**
 * Created by Артем on 27.12.14.
 */

 window.onload = function(){
 // decimal_minute replace at two position!!!!!!
var hours_names = [" ноль ", " один ",   " два ", " три ",
    " четыре ", " пять ", " шесть ", " семь ", " восемь ",
    " девять ", " десять ", " одинадцать ", " двенадцать "];

var minute_names = [" ноль ", " одна ", " две ", " три ",  " четыре ",
    " пять ", " шесть ", " семь ", " восемь ", " девять ", " десять ",
    " одинадцать ", " двенадцать ", " тринадцать ",  " четырнадцать ",
    " пятнадцать ", " шестнадцать ", " семнадцать ", " восемнадцать ",
    " девятнадцать ", ];
var  decimal_minute_names = ["", "десять ", " двадцать ", " тридцать ", " сорок ", " пятьдесят " ];
var hour_count = [" час ", " часов ", " часа "];
var display_div = document.getElementById('display');
var fuck_array = ['сраных', 'грёбаных', 'долбаных', 'хреновых'];


     function testLocalStorage(){

        // localStorage.setItem();
         if(typeof(localStorage) == 'undefined' ) {
             alert('Ваш браузер не поддерживает localStorage');
         }
     else {
             try {
                 localStorage.setItem('name', 'Hello World!'); //сохраняет строку "Hello World" по ключу name
             }
             catch (e) {
                 if (e == QUOTA_EXCEEDED_ERR) {
                     alert('Кончилось место'); //данные не сохранены, так как кончилось доступное место
                 }
             }
             localStorage.removeItem('name')
             if(!localStorage.getItem('fuck_array') ||  localStorage.getItem('fuck_array').length < fuck_array.length)recordInLocalStorage();

         }
     }


     function recordInLocalStorage(){
         if(typeof(localStorage) !== 'undefined' ) {
             if(localStorage.getItem('fuck_array') === null){
                localStorage.setItem('fuck_array', fuck_array)
             }
         }
     }
     function addInFuckArray(){

     }

     testLocalStorage();
    // alert(localStorage.getItem('fuck_array'))

    function createTimeString(){

        var date = new Date();
        var minute_string = "";
        var hour_string = "";
        var hours_now =  date.getHours();
        var minute_now = date.getMinutes();
        var minute_now_string = minute_now.toString();
        var last_symbol = minute_now_string.length-1;

 // create hour string
        switch (hours_now){
            case 0 : hour_string = hours_names[12] + hour_count[1]; // 0 час         1 часов         2 часа
                break;
            case 1 : hour_string = hours_names[1] + hour_count[0];
                break;
            case 2 : hour_string = hours_names[2] + hour_count[2];
                break;
            case 3 : hour_string = hours_names[3] + hour_count[2];
                break;
            case 4 : hour_string = hours_names[4] + hour_count[2];
                break;
            case 5 : hour_string = hours_names[5] + hour_count[1];
                break;
            case 6 : hour_string = hours_names[6] + hour_count[1];
                break;
            case 7 : hour_string = hours_names[7] + hour_count[1];
                break;
            case 8 : hour_string = hours_names[8] + hour_count[1];
                break;
            case 9 : hour_string = hours_names[9] + hour_count[1];
                break;
            case 10: hour_string = hours_names[10] + hour_count[1];
                break;
            case 11: hour_string = hours_names[11] + hour_count[1];
                break;

            case  12: hour_string = hours_names[12] + hour_count[1]; // 0 час         1 часов         2 часа
                break;
            case  13: hour_string = hours_names[1] + hour_count[0];
                break;
            case  14: hour_string = hours_names[2] + hour_count[2];
                break;
            case  15: hour_string = hours_names[3] + hour_count[2];
                break;
            case  16: hour_string = hours_names[4] + hour_count[2];
                break;
            case  17: hour_string = hours_names[5] + hour_count[1];
                break;
            case  18: hour_string = hours_names[6] + hour_count[1];
                break;
            case  19: hour_string = hours_names[7] + hour_count[1];
                break;
            case  20: hour_string = hours_names[8] + hour_count[1];
                break;
            case  21: hour_string = hours_names[9] + hour_count[1];
                break;
            case  22: hour_string = hours_names[10] + hour_count[1];
                break;
            case  23: hour_string = hours_names[11] + hour_count[1];
                break;

        }
// create day/night/morning/evening  status
        if( hours_now >= 0 && hours_now <=3) {
            hour_string += "ночи ";}
       else if( hours_now >= 4  && hours_now <=10) {
            hour_string += "утра ";
        }
        else if( hours_now >= 11 && hours_now <16) {
            hour_string += "дня ";
        }
        else if( hours_now >= 16  && hours_now <=22){
            hour_string += "вечера ";
        }
        else if( hours_now > 22 && hours_now <=3 || hours_now == 23 ){
            hour_string += "ночи ";
        }

//create minute string without minute_count
        if(minute_now > 0 && minute_now <= 19 && minute_now % 10 != 0){ // 1 - 19 minutes
            minute_string = minute_names[minute_now];
        }
        else if(minute_now > 20 && minute_now <= 59 && minute_now % 10 != 0){
            minute_string = decimal_minute_names[minute_now_string[0]] + minute_names[minute_now_string[1]];
        }
        else if (minute_now % 10 == 0 && minute_now != 0 ){ // 0 10 20 30 40 50
           minute_string = decimal_minute_names[minute_now_string[0]] + "минут ";
        }
        else if (minute_now == 0){
            minute_string = "ровно"
        }

//add ending

         if(minute_now_string === '0' || minute_now % 10 == 0 ){ //decimal 0, 10, 20, 30, 40, 50
            minute_string += "";
        }
        else if(minute_now_string[last_symbol] === '1' ){ //11-19
                 if(minute_now_string === '11')
                 {
                     minute_string += " минут";
                 }
                 else{
                minute_string += " минута";
                 }
        }
         //1-9, 21-29, 31-39, 41-49, 51-59
       else if ( minute_now_string[last_symbol] === '2' ||
                 minute_now_string[last_symbol] === '3' ||
                 minute_now_string[last_symbol] === '4'  ) {
                 if(minute_now_string ===  '12' || minute_now_string === '13' || minute_now_string === '14'  ){
                     minute_string += " минут";
                 }
                 else{
                minute_string += " минуты";
                 }
        }
        else {
            minute_string += " минут";
        }

// displayed finished string in div
        display_div.innerHTML = hour_string + minute_string
    }


var main_interval = setInterval(createTimeString, 1000);
main_interval;

}
