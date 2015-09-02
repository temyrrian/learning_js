/**
 * Created by Артем on 05.10.14.
 */

var coordinate_table_array = [];
var start;
var coordinate_object ={};



function userShooting(){

//take coordinate
    var curent_user_cell_Id = this.id;
    var num = curent_user_cell_Id.split('y');
    var temp_x = num[0].slice(12);
    var shoot_user_x = parseInt(temp_x);
    var shoot_user_y = parseInt(num[1]);

 if(arr[shoot_user_x][shoot_user_y].is_ship == true){
     arr[shoot_user_x][shoot_user_y].is_destroy = true;
     arr[shoot_user_x][shoot_user_y].is_opened = true;
     this.innerHTML ='*';
     check_kill(shoot_user_x, shoot_user_y);


 }
    if(arr[shoot_user_x][shoot_user_y].is_ship == false){
        arr[shoot_user_x][shoot_user_y].is_opened = true;
        this.innerHTML ='.';


    }




}

function check_kill(x, y){


    if (arr[shoot_user_x+1][shoot_user_y].is_ship == true || arr[shoot_user_x-1][shoot_user_y].is_ship == true )

}



function make_coordinates_table_ship(){

    for(var i=0; i<tr_x; i++){
        for(var j=0; j<td_y; j++){

            if(arr[i][j].is_ship == true){

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

function userHoverCoordinateTable(){

    console.log(this);
}

function start_game(){

console.log("start_game_func");

function coordinate_table_prepare(){
    console.log('battle_prepare()');
    coordinate_table_array  += "<table id='table_for_make_coordinates'> ";
    for (var i=0; i<tr_x ; i++){

        coordinate_table_array  += "<tr " + "id='coordinate_x" + i + "'" + ">" ;
        for(var j=0; j< td_y; j++){
            coordinate_table_array  +="<td class='coordinate_cell' id='coordinate_x" + i +"y" + j +"'" +
                "> x </td>";
        }
        coordinate_table_array  += "</tr>";
    }
    coordinate_table_array  +="</table>";
    $('#wrapper_for_make_coordinates_table').append(coordinate_table_array);

    var coordinate_table_function_add = $('.coordinate_cell');

    for (var i =0; i<coordinate_table_function_add.length; i++){
        coordinate_table_function_add[i].addEventListener("click", userShooting, false);
        coordinate_table_function_add[i].addEventListener("mouseover", userHoverCoordinateTable, false);

    }

    start = true;

};

function    makeCoordinateObject() {
    for (var i = 0; i < tr_x; i++){
        coordinate_object[i] = [];
        for (var j = 0; j < td_y; j++){

            var temp = {is_ship: false, is_opened: false, is_near_ship: false};
            coordinate_object[i][j] = temp;
        }
    }

    console.log("Coordinate obj is done " + coordinate_object);
};





    start || coordinate_table_prepare(), makeCoordinateObject();

};
