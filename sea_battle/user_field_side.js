/**
 * Created bus_y temus_yrrian on 24.09.14.
 */
user_ships_store = {};

user_ships_store.one_desk = function (){


    if ( user_2d_object[us_x][us_y].is_ship===false && user_2d_object[us_x][us_y].is_near_ship===false  ){

        user_2d_object[us_x][us_y].is_ship=true;

        if(user_2d_object[us_x][us_y-1]!=null )user_2d_object[us_x][us_y-1].is_near_ship=true;
        if(user_2d_object[us_x][us_y+1]!=null )user_2d_object[us_x][us_y+1].is_near_ship=true;
        if(user_2d_object[us_x-1]!=null )user_2d_object[us_x-1][us_y].is_near_ship=true;
        if(user_2d_object[us_x+1]!=null )user_2d_object[us_x+1][us_y].is_near_ship=true;
        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y-1]!=null )user_2d_object[us_x-1][us_y-1].is_near_ship=true; //corn dot up
        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y+1]!=null )user_2d_object[us_x-1][us_y+1].is_near_ship=true;
        if(user_2d_object[us_x+1]!=null &&  user_2d_object[us_x+1][us_y-1]!=null )user_2d_object[us_x+1][us_y-1].is_near_ship=true; //corn dot down
        if(user_2d_object[us_x+1]!=null &&  user_2d_object[us_x+1][us_y+1]!=null )user_2d_object[us_x+1][us_y+1].is_near_ship=true;

        if( 0 < user_one_desk_amount)  user_one_desk_amount--;

    }
};


user_ships_store.two_desk_vertical = function (){


    if (user_2d_object[us_x+1]!=null  && user_2d_object[us_x][us_y].is_ship===false && user_2d_object[us_x+1][us_y].is_ship===false &&
        user_2d_object[us_x][us_y].is_near_ship===false && user_2d_object[us_x+1][us_y].is_near_ship===false ){

        user_2d_object[us_x][us_y].is_ship=true;
        user_2d_object[us_x+1][us_y].is_ship=true;

        if(user_2d_object[us_x][us_y-1]!=null )user_2d_object[us_x][us_y-1].is_near_ship=true;
        if(user_2d_object[us_x][us_y+1]!=null )user_2d_object[us_x][us_y+1].is_near_ship=true;

        if(user_2d_object[us_x-1]!=null )user_2d_object[us_x-1][us_y].is_near_ship=true;
        if(user_2d_object[us_x+1][us_y-1]!=null )user_2d_object[us_x+1][us_y-1].is_near_ship=true;
        if(user_2d_object[us_x+1][us_y+1]!=null )user_2d_object[us_x+1][us_y+1].is_near_ship=true;

        if(user_2d_object[us_x+2]!=null )user_2d_object[us_x+2][us_y].is_near_ship=true;

        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y-1]!=null )user_2d_object[us_x-1][us_y-1].is_near_ship=true; //corn dot up
        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y+1]!=null )user_2d_object[us_x-1][us_y+1].is_near_ship=true;

        if(user_2d_object[us_x+2]!=null &&  user_2d_object[us_x+2][us_y-1]!=null )user_2d_object[us_x+2][us_y-1].is_near_ship=true; //corn dot down
        if(user_2d_object[us_x+2]!=null &&  user_2d_object[us_x+2][us_y+1]!=null )user_2d_object[us_x+2][us_y+1].is_near_ship=true;


        if(0 < user_two_desk_amount) user_two_desk_amount--;

    }
};




user_ships_store.two_desk_horizontal = function (){



    if (user_2d_object[us_x][us_y + 1]!=null  && user_2d_object[us_x][us_y].is_ship === false && user_2d_object[us_x][us_y + 1].is_ship === false
        && user_2d_object[us_x][us_y].is_near_ship === false && user_2d_object[us_x][us_y + 1].is_near_ship === false ) {

        user_2d_object[us_x][us_y].is_ship = true;
        user_2d_object[us_x][us_y+1].is_ship = true;

        if(user_2d_object[us_x]!=null && user_2d_object[us_x][us_y-1]!=null )user_2d_object[us_x][us_y-1].is_near_ship=true;

        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y]!=null )user_2d_object[us_x-1][us_y].is_near_ship=true;
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y]!=null )user_2d_object[us_x+1][us_y].is_near_ship=true;
        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y+1]!=null )user_2d_object[us_x-1][us_y+1].is_near_ship=true;
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y+1]!=null )user_2d_object[us_x+1][us_y+1].is_near_ship=true;

        if(user_2d_object[us_x]!=null && user_2d_object[us_x][us_y+2]!=null )user_2d_object[us_x][us_y+2].is_near_ship=true;

        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y-1]!=null )user_2d_object[us_x-1][us_y-1].is_near_ship=true;// corn dot left
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y-1]!=null )user_2d_object[us_x+1][us_y-1].is_near_ship=true;

        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y+2]!=null )user_2d_object[us_x-1][us_y+2].is_near_ship=true;// corn dot right
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y+2]!=null )user_2d_object[us_x+1][us_y+2].is_near_ship=true;

        if(0 < user_two_desk_amount) user_two_desk_amount--;

    }

};



user_ships_store.three_desk_vertical = function (){


    if (user_2d_object[us_x+2]!=null  && user_2d_object[us_x][us_y].is_ship===false && user_2d_object[us_x+1][us_y].is_ship===false && user_2d_object[us_x+2][us_y].is_ship===false &&
        user_2d_object[us_x][us_y].is_near_ship===false && user_2d_object[us_x+1][us_y].is_near_ship===false && user_2d_object[us_x+2][us_y].is_near_ship===false ){

        user_2d_object[us_x][us_y].is_ship=true;
        user_2d_object[us_x+1][us_y].is_ship=true;
        user_2d_object[us_x+2][us_y].is_ship=true;

        if(user_2d_object[us_x][us_y-1]!=null )user_2d_object[us_x][us_y-1].is_near_ship=true;
        if(user_2d_object[us_x][us_y+1]!=null )user_2d_object[us_x][us_y+1].is_near_ship=true;

        if(user_2d_object[us_x-1]!=null )user_2d_object[us_x-1][us_y].is_near_ship=true;
        if(user_2d_object[us_x+1][us_y-1]!=null )user_2d_object[us_x+1][us_y-1].is_near_ship=true;
        if(user_2d_object[us_x+1][us_y+1]!=null )user_2d_object[us_x+1][us_y+1].is_near_ship=true;
        if(user_2d_object[us_x+2][us_y-1]!=null )user_2d_object[us_x+2][us_y-1].is_near_ship=true;
        if(user_2d_object[us_x+2][us_y+1]!=null )user_2d_object[us_x+2][us_y+1].is_near_ship=true;

        if(user_2d_object[us_x+3]!=null )user_2d_object[us_x+3][us_y].is_near_ship=true;

        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y-1]!=null )user_2d_object[us_x-1][us_y-1].is_near_ship=true; //corn dot up
        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y+1]!=null )user_2d_object[us_x-1][us_y+1].is_near_ship=true;

        if(user_2d_object[us_x+3]!=null &&  user_2d_object[us_x+3][us_y-1]!=null )user_2d_object[us_x+3][us_y-1].is_near_ship=true; //corn dot down
        if(user_2d_object[us_x+3]!=null &&  user_2d_object[us_x+3][us_y+1]!=null )user_2d_object[us_x+3][us_y+1].is_near_ship=true;

        if(0 < user_three_desk_amount) user_three_desk_amount--;

    }
};

user_ships_store.three_desk_horizontal = function (){




    if (user_2d_object[us_x][us_y + 2]!=null  && user_2d_object[us_x][us_y].is_ship === false && user_2d_object[us_x][us_y + 1].is_ship === false && user_2d_object[us_x][us_y + 2].is_ship === false
        && user_2d_object[us_x][us_y].is_near_ship === false && user_2d_object[us_x][us_y + 1].is_near_ship === false && user_2d_object[us_x][us_y + 2].is_near_ship === false) {

        user_2d_object[us_x][us_y].is_ship = true;
        user_2d_object[us_x][us_y+1].is_ship = true;
        user_2d_object[us_x][us_y+2].is_ship = true;

        if(user_2d_object[us_x]!=null && user_2d_object[us_x][us_y-1]!=null )user_2d_object[us_x][us_y-1].is_near_ship=true;
        if(user_2d_object[us_x]!=null && user_2d_object[us_x][us_y+3]!=null )user_2d_object[us_x][us_y+3].is_near_ship=true;

        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y]!=null )user_2d_object[us_x-1][us_y].is_near_ship=true;
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y]!=null )user_2d_object[us_x+1][us_y].is_near_ship=true;
        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y+1]!=null )user_2d_object[us_x-1][us_y+1].is_near_ship=true;
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y+1]!=null )user_2d_object[us_x+1][us_y+1].is_near_ship=true;
        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y+2]!=null )user_2d_object[us_x-1][us_y+2].is_near_ship=true;
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y+2]!=null )user_2d_object[us_x+1][us_y+2].is_near_ship=true;

        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y-1]!=null )user_2d_object[us_x-1][us_y-1].is_near_ship=true;// corn dot left
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y-1]!=null )user_2d_object[us_x+1][us_y-1].is_near_ship=true;

        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y+3]!=null )user_2d_object[us_x-1][us_y+3].is_near_ship=true;// corn dot right
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y+3]!=null )user_2d_object[us_x+1][us_y+3].is_near_ship=true;

        if(0 < user_three_desk_amount) user_three_desk_amount--;

    }



};

user_ships_store.four_desk_vertical = function (){


    console.log(us_x==undefined)

    if (user_2d_object[us_x+4]!=undefined  && user_2d_object[us_x][us_y].is_ship===false && user_2d_object[us_x+1][us_y].is_ship===false && user_2d_object[us_x+2][us_y].is_ship===false && user_2d_object[us_x+3][us_y].is_ship===false &&
        user_2d_object[us_x][us_y].is_near_ship===false && user_2d_object[us_x+1][us_y].is_near_ship===false && user_2d_object[us_x+2][us_y].is_near_ship===false && user_2d_object[us_x+3][us_y].is_near_ship===false && user_2d_object[us_x+4][us_y].is_near_ship===false){

        user_2d_object[us_x][us_y].is_ship=true;
        user_2d_object[us_x+1][us_y].is_ship=true;
        user_2d_object[us_x+2][us_y].is_ship=true;
        user_2d_object[us_x+3][us_y].is_ship=true;

        if(user_2d_object[us_x][us_y-1]!=null )user_2d_object[us_x][us_y-1].is_near_ship=true;
        if(user_2d_object[us_x][us_y+1]!=null )user_2d_object[us_x][us_y+1].is_near_ship=true;               //  * * *
        //  * us_x *
        if(user_2d_object[us_x-1]!=null )user_2d_object[us_x-1][us_y].is_near_ship=true;   //Up              //  * us_x *

        if(user_2d_object[us_x+1][us_y-1]!=null )user_2d_object[us_x+1][us_y-1].is_near_ship=true;           //  * us_x *
        if(user_2d_object[us_x+1][us_y+1]!=null )user_2d_object[us_x+1][us_y+1].is_near_ship=true;           //  * us_x *
        if(user_2d_object[us_x+2][us_y-1]!=null )user_2d_object[us_x+2][us_y-1].is_near_ship=true;           //  * * *
        if(user_2d_object[us_x+2][us_y+1]!=null )user_2d_object[us_x+2][us_y+1].is_near_ship=true;
        if(user_2d_object[us_x+3][us_y-1]!=null )user_2d_object[us_x+3][us_y-1].is_near_ship=true;
        if(user_2d_object[us_x+3][us_y+1]!=null )user_2d_object[us_x+3][us_y+1].is_near_ship=true;

        if(user_2d_object[us_x+4]!=null )user_2d_object[us_x+4][us_y].is_near_ship=true; // down

        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y-1]!=null )user_2d_object[us_x-1][us_y-1].is_near_ship=true; //corn dot up
        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y+1]!=null )user_2d_object[us_x-1][us_y+1].is_near_ship=true;

        if(user_2d_object[us_x+4]!=null &&  user_2d_object[us_x+4][us_y-1]!=null )user_2d_object[us_x+4][us_y-1].is_near_ship=true; //corn dot down
        if(user_2d_object[us_x+4]!=null &&  user_2d_object[us_x+4][us_y+1]!=null )user_2d_object[us_x+4][us_y+1].is_near_ship=true;

        if(0 < user_four_desk_amount) user_four_desk_amount--;

    }
}

user_ships_store.four_desk_horizontal = function (){


    if (user_2d_object[us_x][us_y + 4]!=undefined  && user_2d_object[us_x][us_y].is_ship === false && user_2d_object[us_x][us_y + 1].is_ship === false && user_2d_object[us_x][us_y + 2].is_ship === false && user_2d_object[us_x][us_y + 3].is_ship === false
        && user_2d_object[us_x][us_y].is_near_ship === false && user_2d_object[us_x][us_y + 1].is_near_ship === false && user_2d_object[us_x][us_y + 2].is_near_ship === false && user_2d_object[us_x][us_y + 3].is_near_ship === false ) {

        user_2d_object[us_x][us_y].is_ship = true;
        user_2d_object[us_x][us_y+1].is_ship = true;
        user_2d_object[us_x][us_y+2].is_ship = true;
        user_2d_object[us_x][us_y+3].is_ship = true;

        if(user_2d_object[us_x]!=null && user_2d_object[us_x][us_y-1]!=null )user_2d_object[us_x][us_y-1].is_near_ship=true;
        if(user_2d_object[us_x]!=null && user_2d_object[us_x][us_y+4]!=null )user_2d_object[us_x][us_y+4].is_near_ship=true;

        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y]!=null )user_2d_object[us_x-1][us_y].is_near_ship=true;
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y]!=null )user_2d_object[us_x+1][us_y].is_near_ship=true;
        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y+1]!=null )user_2d_object[us_x-1][us_y+1].is_near_ship=true;
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y+1]!=null )user_2d_object[us_x+1][us_y+1].is_near_ship=true;
        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y+2]!=null )user_2d_object[us_x-1][us_y+2].is_near_ship=true;
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y+2]!=null )user_2d_object[us_x+1][us_y+2].is_near_ship=true;
        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y+3]!=null )user_2d_object[us_x-1][us_y+3].is_near_ship=true;
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y+2]!=null )user_2d_object[us_x+1][us_y+3].is_near_ship=true;

        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y-1]!=null )user_2d_object[us_x-1][us_y-1].is_near_ship=true;// corn dot left
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y-1]!=null )user_2d_object[us_x+1][us_y-1].is_near_ship=true;

        if(user_2d_object[us_x-1]!=null && user_2d_object[us_x-1][us_y+4]!=null )user_2d_object[us_x-1][us_y+4].is_near_ship=true;// corn dot right
        if(user_2d_object[us_x+1]!=null && user_2d_object[us_x+1][us_y+4]!=null )user_2d_object[us_x+1][us_y+4].is_near_ship=true;

        if(0 < user_four_desk_amount) user_four_desk_amount--;

    }


};




