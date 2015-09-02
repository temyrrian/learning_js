/**
 * Created by temyrrian on 18.09.14.
 */

$('document').ready(function(){
    //variable for bot battle table
///////////////////////////////////////////
     battle_table = "";
     tr_x = 10;
     td_y = 10;
    var battle_field = [];
    var count = 0;
     arr=[];
    //variable for ships factory for bot
///////////////////////////////////////////
    var ships_store ={};
    var one_desk_amount = 4;
    var two_desk_amount = 3;
    var three_desk_amount = 2;
    var four_desk_amount = 1;
    //variable for user table
///////////////////////////////////////
    var user_table ="";
        user_2d_object =[];//global!!!!!!!!
    var animate_user_2d_object =[];

    //variable for user handle set ships
///////////////////////////////////////
     user_one_desk_amount = 1; //4
     user_two_desk_amount = 0; //3
     user_three_desk_amount = 0; //2
     user_four_desk_amount = 0; //1

    var is_horisontal = false;


   // create table for bot side
///////////////////////////////////////////////////////////////////////////////
    //create table;
    function init_battle(){
        battle_table += "<table id='battle_tab'> ";
        for (var i=0; i<tr_x ; i++){

            battle_table += "<tr " + "id='x" + i + "'" + ">" ;
            for(var j=0; j< td_y; j++){
                battle_table +="<td class='cell' id='x" + i +"y" + j +"'" +
                    ">x</td>";
            }
            battle_table += "</tr>";
        }
        battle_table +="</table>";
        $('#wrapper_div').append(battle_table);
        return battle_table;
    }

    //create 2d object

    function    make2dObject() {
        for (var i = 0; i < tr_x; i++){
            arr[i] = [];
            for (var j = 0; j < td_y; j++){
                ++count;
                var temp = {is_ship: false, is_opened: false, is_near_ship: false, is_destroy: false};
                arr[i][j] = temp;

            }
        }

        return arr;
    }

    //make ships in table and take coordinates at 2d object


    function make_ship(){

        for(var i=0; i<tr_x; i++){
            for(var j=0; j<td_y; j++){

                if(battle_field[i][j].is_ship == true){

                    var coordinates = "x"+i+"y"+j;// assembled coordinates for table
                    var current_cell = document.getElementById(coordinates);
                    current_cell.innerHTML="<>";

                }

                if(battle_field[i][j].is_near_ship == true){

                    var coordinates = "x"+i+"y"+j;// assembled coordinates for table
                    var current_cell = document.getElementById(coordinates);
                    current_cell.innerHTML=".";

                }
            }
        }
    }




    ships_store.one_desk = function (){

        var amount = 0;
        while(amount < one_desk_amount){

            var x = (Math.floor(Math.random() * (tr_x - 0 )));
            var y = (Math.floor(Math.random() * (td_y - 0 )));
            console.log(amount);
            if ( arr[x][y].is_ship==false && arr[x][y].is_near_ship===false){

                arr[x][y].is_ship = true;

                if(arr[x-1]!=null && arr[x-1][y]!=null )arr[x-1][y].is_near_ship=true;
                if(arr[x+1]!=null && arr[x+1][y]!=null )arr[x+1][y].is_near_ship=true;

                if(arr[x][y-1]!=null )arr[x][y-1].is_near_ship=true;
                if(arr[x][y+1]!=null )arr[x][y+1].is_near_ship=true;

                if(arr[x-1]!=null && arr[x-1][y-1]!=null )arr[x-1][y-1].is_near_ship=true;// corn dot left
                if(arr[x-1]!=null && arr[x-1][y+1]!=null )arr[x-1][y+1].is_near_ship=true;

                if(arr[x+1]!=null && arr[x+1][y-1]!=null )arr[x+1][y-1].is_near_ship=true;// corn dot left
                if(arr[x+1]!=null && arr[x+1][y+1]!=null )arr[x+1][y+1].is_near_ship=true;

                amount++;

            }
        }
    };

    ships_store.two_desk = function () {
        var amount = 0;
        while(amount < two_desk_amount) {
            var x = (Math.floor(Math.random() * (tr_x - 0 )));
            var y = (Math.floor(Math.random() * (td_y - 0 )));
            console.log(x, y);

            if((Math.floor(Math.random() * (2 - 1 + 1)) + 1)==1){
               // console.log((Math.floor(Math.random() * (2 - 1 + 1)) + 1)==1);

                if (arr[x+1]!=null && !(x+1>=tr_x-1) && arr[x][y].is_ship===false && arr[x+1][y].is_ship===false &&
                    arr[x][y].is_near_ship===false && arr[x+1][y].is_near_ship===false ){

                    arr[x][y].is_ship=true;
                    arr[x+1][y].is_ship=true;

                    if(arr[x][y-1]!=null )arr[x][y-1].is_near_ship=true;
                    if(arr[x][y+1]!=null )arr[x][y+1].is_near_ship=true;

                    if(arr[x-1]!=null )arr[x-1][y].is_near_ship=true;
                    if(arr[x+1][y-1]!=null )arr[x+1][y-1].is_near_ship=true;
                    if(arr[x+1][y+1]!=null )arr[x+1][y+1].is_near_ship=true;

                    if(arr[x+2]!=null )arr[x+2][y].is_near_ship=true;

                    if(arr[x-1]!=null && arr[x-1][y-1]!=null )arr[x-1][y-1].is_near_ship=true; //corn dot up
                    if(arr[x-1]!=null && arr[x-1][y+1]!=null )arr[x-1][y+1].is_near_ship=true;

                    if(arr[x+2]!=null &&  arr[x+2][y-1]!=null )arr[x+2][y-1].is_near_ship=true; //corn dot down
                    if(arr[x+2]!=null &&  arr[x+2][y+1]!=null )arr[x+2][y+1].is_near_ship=true;


                    amount++;
                }

                else {
                    if (arr[x][y + 1]!=null && !(x+1>=tr_x-1) && arr[x][y].is_ship === false && arr[x][y + 1].is_ship === false
                        && arr[x][y].is_near_ship === false && arr[x][y + 1].is_near_ship === false ) {

                        arr[x][y].is_ship = true;
                        arr[x][y+1].is_ship = true;

                        if(arr[x]!=null && arr[x][y-1]!=null )arr[x][y-1].is_near_ship=true;

                        if(arr[x-1]!=null && arr[x-1][y]!=null )arr[x-1][y].is_near_ship=true;
                        if(arr[x+1]!=null && arr[x+1][y]!=null )arr[x+1][y].is_near_ship=true;
                        if(arr[x-1]!=null && arr[x-1][y+1]!=null )arr[x-1][y+1].is_near_ship=true;
                        if(arr[x+1]!=null && arr[x+1][y+1]!=null )arr[x+1][y+1].is_near_ship=true;

                        if(arr[x]!=null && arr[x][y+2]!=null )arr[x][y+2].is_near_ship=true;

                        if(arr[x-1]!=null && arr[x-1][y-1]!=null )arr[x-1][y-1].is_near_ship=true;// corn dot left
                        if(arr[x+1]!=null && arr[x+1][y-1]!=null )arr[x+1][y-1].is_near_ship=true;

                        if(arr[x-1]!=null && arr[x-1][y+2]!=null )arr[x-1][y+2].is_near_ship=true;// corn dot right
                        if(arr[x+1]!=null && arr[x+1][y+2]!=null )arr[x+1][y+2].is_near_ship=true;

                        amount++;

                    }
                }
            }
        }
    };

    ships_store.three_desk = function (){
        var amount =0;
        while(amount < three_desk_amount){
            var x = (Math.floor(Math.random() * (tr_x - 0 )));
            var y = (Math.floor(Math.random() * (td_y - 0 )));

            if((Math.floor(Math.random() * (2 - 1 + 1)) + 1)==1){

                if (arr[x+2]!=null && !(x+1>=tr_x-1) && arr[x][y].is_ship===false && arr[x+1][y].is_ship===false && arr[x+2][y].is_ship===false &&
                    arr[x][y].is_near_ship===false && arr[x+1][y].is_near_ship===false && arr[x+2][y].is_near_ship===false ){

                    arr[x][y].is_ship=true;
                    arr[x+1][y].is_ship=true;
                    arr[x+2][y].is_ship=true;

                    if(arr[x][y-1]!=null )arr[x][y-1].is_near_ship=true;
                    if(arr[x][y+1]!=null )arr[x][y+1].is_near_ship=true;

                    if(arr[x-1]!=null )arr[x-1][y].is_near_ship=true;
                    if(arr[x+1][y-1]!=null )arr[x+1][y-1].is_near_ship=true;
                    if(arr[x+1][y+1]!=null )arr[x+1][y+1].is_near_ship=true;
                    if(arr[x+2][y-1]!=null )arr[x+2][y-1].is_near_ship=true;
                    if(arr[x+2][y+1]!=null )arr[x+2][y+1].is_near_ship=true;

                    if(arr[x+3]!=null )arr[x+3][y].is_near_ship=true;

                    if(arr[x-1]!=null && arr[x-1][y-1]!=null )arr[x-1][y-1].is_near_ship=true; //corn dot up
                    if(arr[x-1]!=null && arr[x-1][y+1]!=null )arr[x-1][y+1].is_near_ship=true;

                    if(arr[x+3]!=null &&  arr[x+3][y-1]!=null )arr[x+3][y-1].is_near_ship=true; //corn dot down
                    if(arr[x+3]!=null &&  arr[x+3][y+1]!=null )arr[x+3][y+1].is_near_ship=true;

                    amount++;

                }

            }

            else{

                if (arr[x][y + 2]!=null && !(x+1>=tr_x-1) && arr[x][y].is_ship === false && arr[x][y + 1].is_ship === false && arr[x][y + 2].is_ship === false
                    && arr[x][y].is_near_ship === false && arr[x][y + 1].is_near_ship === false && arr[x][y + 2].is_near_ship === false) {

                    arr[x][y].is_ship = true;
                    arr[x][y+1].is_ship = true;
                    arr[x][y+2].is_ship = true;

                    if(arr[x]!=null && arr[x][y-1]!=null )arr[x][y-1].is_near_ship=true;
                    if(arr[x]!=null && arr[x][y+3]!=null )arr[x][y+3].is_near_ship=true;

                    if(arr[x-1]!=null && arr[x-1][y]!=null )arr[x-1][y].is_near_ship=true;
                    if(arr[x+1]!=null && arr[x+1][y]!=null )arr[x+1][y].is_near_ship=true;
                    if(arr[x-1]!=null && arr[x-1][y+1]!=null )arr[x-1][y+1].is_near_ship=true;
                    if(arr[x+1]!=null && arr[x+1][y+1]!=null )arr[x+1][y+1].is_near_ship=true;
                    if(arr[x-1]!=null && arr[x-1][y+2]!=null )arr[x-1][y+2].is_near_ship=true;
                    if(arr[x+1]!=null && arr[x+1][y+2]!=null )arr[x+1][y+2].is_near_ship=true;

                    if(arr[x-1]!=null && arr[x-1][y-1]!=null )arr[x-1][y-1].is_near_ship=true;// corn dot left
                    if(arr[x+1]!=null && arr[x+1][y-1]!=null )arr[x+1][y-1].is_near_ship=true;

                    if(arr[x-1]!=null && arr[x-1][y+3]!=null )arr[x-1][y+3].is_near_ship=true;// corn dot right
                    if(arr[x+1]!=null && arr[x+1][y+3]!=null )arr[x+1][y+3].is_near_ship=true;

                    amount++;

                }
            }
        }

    };

    ships_store.four_desk = function (){
        var amount = 0;
        while(amount < four_desk_amount){

            var x = (Math.floor(Math.random() * (tr_x - 0 )));
            var y = (Math.floor(Math.random() * (td_y - 0 )));
            if((Math.floor(Math.random() * (2 - 1 + 1)) + 1)==1){

                if (arr[x+4]!=undefined && !(x+1>=tr_x-1) && arr[x][y].is_ship===false && arr[x+1][y].is_ship===false && arr[x+2][y].is_ship===false && arr[x+3][y].is_ship===false &&
                    arr[x][y].is_near_ship===false && arr[x+1][y].is_near_ship===false && arr[x+2][y].is_near_ship===false && arr[x+3][y].is_near_ship===false && arr[x+4][y].is_near_ship===false){

                    arr[x][y].is_ship=true;
                    arr[x+1][y].is_ship=true;
                    arr[x+2][y].is_ship=true;
                    arr[x+3][y].is_ship=true;

                    if(arr[x][y-1]!=null )arr[x][y-1].is_near_ship=true;
                    if(arr[x][y+1]!=null )arr[x][y+1].is_near_ship=true;               //  * * *
                    //  * x *
                    if(arr[x-1]!=null )arr[x-1][y].is_near_ship=true;   //Up           //  * x *

                    if(arr[x+1][y-1]!=null )arr[x+1][y-1].is_near_ship=true;           //  * x *
                    if(arr[x+1][y+1]!=null )arr[x+1][y+1].is_near_ship=true;           //  * x *
                    if(arr[x+2][y-1]!=null )arr[x+2][y-1].is_near_ship=true;           //  * * *
                    if(arr[x+2][y+1]!=null )arr[x+2][y+1].is_near_ship=true;
                    if(arr[x+3][y-1]!=null )arr[x+3][y-1].is_near_ship=true;
                    if(arr[x+3][y+1]!=null )arr[x+3][y+1].is_near_ship=true;

                    if(arr[x+4]!=null )arr[x+4][y].is_near_ship=true; // down

                    if(arr[x-1]!=null && arr[x-1][y-1]!=null )arr[x-1][y-1].is_near_ship=true; //corn dot up
                    if(arr[x-1]!=null && arr[x-1][y+1]!=null )arr[x-1][y+1].is_near_ship=true;

                    if(arr[x+4]!=null &&  arr[x+4][y-1]!=null )arr[x+4][y-1].is_near_ship=true; //corn dot down
                    if(arr[x+4]!=null &&  arr[x+4][y+1]!=null )arr[x+4][y+1].is_near_ship=true;

                    amount++;
                }
            }

            else{

                if (arr[x][y + 4]!=undefined && !(x+1>=tr_x-1) && arr[x][y].is_ship === false && arr[x][y + 1].is_ship === false && arr[x][y + 2].is_ship === false && arr[x][y + 3].is_ship === false
                    && arr[x][y].is_near_ship === false && arr[x][y + 1].is_near_ship === false && arr[x][y + 2].is_near_ship === false && arr[x][y + 3].is_near_ship === false ) {

                    arr[x][y].is_ship = true;
                    arr[x][y+1].is_ship = true;
                    arr[x][y+2].is_ship = true;
                    arr[x][y+3].is_ship = true;

                    if(arr[x]!=null && arr[x][y-1]!=null )arr[x][y-1].is_near_ship=true;
                    if(arr[x]!=null && arr[x][y+4]!=null )arr[x][y+4].is_near_ship=true;

                    if(arr[x-1]!=null && arr[x-1][y]!=null )arr[x-1][y].is_near_ship=true;
                    if(arr[x+1]!=null && arr[x+1][y]!=null )arr[x+1][y].is_near_ship=true;
                    if(arr[x-1]!=null && arr[x-1][y+1]!=null )arr[x-1][y+1].is_near_ship=true;
                    if(arr[x+1]!=null && arr[x+1][y+1]!=null )arr[x+1][y+1].is_near_ship=true;
                    if(arr[x-1]!=null && arr[x-1][y+2]!=null )arr[x-1][y+2].is_near_ship=true;
                    if(arr[x+1]!=null && arr[x+1][y+2]!=null )arr[x+1][y+2].is_near_ship=true;
                    if(arr[x-1]!=null && arr[x-1][y+3]!=null )arr[x-1][y+3].is_near_ship=true;
                    if(arr[x+1]!=null && arr[x+1][y+2]!=null )arr[x+1][y+3].is_near_ship=true;

                    if(arr[x-1]!=null && arr[x-1][y-1]!=null )arr[x-1][y-1].is_near_ship=true;// corn dot left
                    if(arr[x+1]!=null && arr[x+1][y-1]!=null )arr[x+1][y-1].is_near_ship=true;

                    if(arr[x-1]!=null && arr[x-1][y+4]!=null )arr[x-1][y+4].is_near_ship=true;// corn dot right
                    if(arr[x+1]!=null && arr[x+1][y+4]!=null )arr[x+1][y+4].is_near_ship=true;

                    amount++;
                }
            }
        }
    };


    function setRandomMultideskShips(){

        ships_store.four_desk();
        ships_store.three_desk();
        ships_store.two_desk();
        ships_store.one_desk();

    }


    init_battle();
    battle_field = make2dObject();
    setRandomMultideskShips();
    make_ship(battle_field);


//user_side
/////////////////////////////////////////////////////////////////////////////////////////////////

//create user table
    function init_client_side(){
        user_table += "<table id='user_battle_tab'> ";
        for (var i=0; i<tr_x ; i++){

            user_table += "<tr " + "id='user_x" + i + "'" + ">" ;
            for(var j=0; j< td_y; j++){
                user_table +="<td class='user_cell' id='user_x" + i +"y" + j +"'" +
                    "> x </td>";
            }
            user_table += "</tr>";
        }
        user_table +="</table>";
        $('#user_table').append(user_table);

        var user_table_function_add = $('.user_cell');

        for (var i =0; i<user_table_function_add.length; i++){
            user_table_function_add[i].addEventListener("click", set_user_ship, false);
            user_table_function_add[i].addEventListener("mouseover", animate_user_ship, false);

        }
    }

// make 2d storage for situation about user battle_field
    function    make2dObject_for_user() {
        for (var i = 0; i < tr_x; i++){
            user_2d_object[i] = [];
            for (var j = 0; j < td_y; j++){
                ++count;
                var temp = {is_ship: false, is_opened: false, is_near_ship: false, is_exist: true };
                user_2d_object[i][j] = temp;
            }
        }


    }

    // make 2d help object for compute coordinates visualisation
    function    make_animate_user_2d_object() {
        for (var i = 0; i < tr_x; i++){
            animate_user_2d_object[i] = [];
            for (var j = 0; j < td_y; j++){
                ++count;
                var temp = {is_animate_now: false };
                animate_user_2d_object[i][j] = temp;
            }
        }
        console.log(animate_user_2d_object);

    }

// take coordinates from table for put ship & if all ships is set - start game
   function  set_user_ship(){
    // parse id in coordinates
       var curent_user_cell_Id = this.id;
       var num = curent_user_cell_Id.split('y');
       var temp_x = num[0].slice(6);
       var us_x = parseInt(temp_x);
       var us_y = parseInt(num[1]);
       set_user_ship.flag_game_is_start = false;

     if(user_four_desk_amount != 0 || user_three_desk_amount != 0 || user_two_desk_amount!=0 || user_one_desk_amount != 0)
     {

       if (user_four_desk_amount != 0 && is_horisontal == false) user_ships_store.four_desk_vertical();
       if (user_four_desk_amount != 0 && is_horisontal == true) user_ships_store.four_desk_horizontal();
       if (user_four_desk_amount == 0 && user_three_desk_amount != 0 &&  is_horisontal == false) user_ships_store.three_desk_vertical();
       if (user_four_desk_amount == 0 && user_three_desk_amount != 0 &&  is_horisontal == true) user_ships_store.three_desk_horizontal();
       if (user_four_desk_amount == 0 && user_three_desk_amount == 0 && user_two_desk_amount!=0 &&  is_horisontal == false) user_ships_store.two_desk_vertical();
       if (user_four_desk_amount == 0 && user_three_desk_amount == 0 && user_two_desk_amount!=0 &&  is_horisontal == true) user_ships_store.two_desk_horizontal();
       if (user_four_desk_amount == 0 && user_three_desk_amount == 0 && user_two_desk_amount==0 && user_one_desk_amount != 0 ) user_ships_store.one_desk();
     }

       make_user_ship_on_table();

       // if all ships set - start game

       if (user_four_desk_amount == 0 && user_three_desk_amount == 0 && user_two_desk_amount==0 && user_one_desk_amount == 0 && set_user_ship.flag_game_is_start == false )
       {
           set_user_ship = true;
           start_game();//start Bot file!!!!!!
       }
   }



    // this must visualise animate set user ships
    function animate_user_ship(){

        var curent_user_cell_Id = this.id;
        var num = curent_user_cell_Id.split('y');
        var temp_x = num[0].slice(6);
         us_x = parseInt(temp_x);//Global
         us_y = parseInt(num[1]);//Global!!!!!

        if($('input[name=ship_rotation]:checked').val() == 'horisontal') is_horisontal = true;
        if($('input[name=ship_rotation]:checked').val() == 'vertical') is_horisontal = false;




        //start animate and put 4-desk ship
if (user_four_desk_amount != 0){
    //vertical orientation of animate ship
    if(is_horisontal === false){
        if (animate_user_2d_object[us_x+1]!=null && animate_user_2d_object[us_x+1][us_y]!=null) animate_user_2d_object[us_x+1][us_y].is_animate_now = true;
        if (animate_user_2d_object[us_x+2]!=null && animate_user_2d_object[us_x+2][us_y]!=null) animate_user_2d_object[us_x+2][us_y].is_animate_now = true;
        if (animate_user_2d_object[us_x+3]!=null && animate_user_2d_object[us_x+3][us_y]!=null) animate_user_2d_object[us_x+3][us_y].is_animate_now = true;
    }

    if(is_horisontal === true){
        if (animate_user_2d_object[us_x]!=null && animate_user_2d_object[us_x][us_y+1]!=null) animate_user_2d_object[us_x][us_y+1].is_animate_now = true;
        if (animate_user_2d_object[us_x]!=null && animate_user_2d_object[us_x][us_y+2]!=null) animate_user_2d_object[us_x][us_y+2].is_animate_now = true;
        if (animate_user_2d_object[us_x]!=null && animate_user_2d_object[us_x][us_y+3]!=null) animate_user_2d_object[us_x][us_y+3].is_animate_now = true;
    }
}

        if (user_four_desk_amount == 0 && user_three_desk_amount != 0){
            //vertical orientation of animate ship
            if(is_horisontal === false){
                if (animate_user_2d_object[us_x+1]!=null && animate_user_2d_object[us_x+1][us_y]!=null) animate_user_2d_object[us_x+1][us_y].is_animate_now = true;
                if (animate_user_2d_object[us_x+2]!=null && animate_user_2d_object[us_x+2][us_y]!=null) animate_user_2d_object[us_x+2][us_y].is_animate_now = true;
            }

            if(is_horisontal === true){
                if (animate_user_2d_object[us_x]!=null && animate_user_2d_object[us_x][us_y+1]!=null) animate_user_2d_object[us_x][us_y+1].is_animate_now = true;
                if (animate_user_2d_object[us_x]!=null && animate_user_2d_object[us_x][us_y+2]!=null) animate_user_2d_object[us_x][us_y+2].is_animate_now = true;
            }
        }




        if (user_four_desk_amount == 0 && user_three_desk_amount == 0 && user_two_desk_amount!=0){
            if(is_horisontal === false){
                if (animate_user_2d_object[us_x+1]!=null && animate_user_2d_object[us_x+1][us_y]!=null) animate_user_2d_object[us_x+1][us_y].is_animate_now = true;
            }
            if(is_horisontal === true){
                if (animate_user_2d_object[us_x]!=null && animate_user_2d_object[us_x][us_y+1]!=null) animate_user_2d_object[us_x][us_y+1].is_animate_now = true;
            }
        }



            make_vizualization();
        make_animate_user_2d_object();


    }



    function make_vizualization(){

        for(var i=0; i<tr_x; i++){
            for(var j=0; j<td_y; j++){

                var coordinates = "user_x"+i+"y"+j;// assembled coordinates for table
                var current_cell = document.getElementById(coordinates);

                if(animate_user_2d_object[i][j].is_animate_now == true){
                    current_cell.classList.add("animated_cell");
                }

                if(animate_user_2d_object[i][j].is_animate_now == false  ){
                    current_cell.classList.remove("animated_cell");
                }

            }
        }
    }


    function make_user_ship_on_table(){

        for(var i=0; i<tr_x; i++){
            for(var j=0; j<td_y; j++){

                if(user_2d_object[i][j].is_ship == true){
                    //console.log('ololo', battle_field[i][j].is_ship);
                    //  console.log("true!!!!!!!" + battle_field[i][j] + i + j )
                    var coordinates = "user_x"+i+"y"+j;// assembled coordinates for table
                    var current_cell = document.getElementById(coordinates);
                    current_cell.innerHTML="<>";

                }

                if(user_2d_object[i][j].is_near_ship == true){
                    //console.log('ololo', battle_field[i][j].is_ship);
                    //  console.log("true!!!!!!!" + battle_field[i][j] + i + j )
                    var coordinates = "user_x"+i+"y"+j;// assembled coordinates for table
                    var current_cell = document.getElementById(coordinates);
                    current_cell.innerHTML=".";

                }
            }
        }
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    init_client_side();
    make_animate_user_2d_object();
    make2dObject_for_user();



    });
