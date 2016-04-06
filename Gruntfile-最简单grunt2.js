/**
 *  @ Author: 智能社-strive
 *  @ Date: 2016/4/5.
 */
module.exports=function(grunt){
    /*var str='welcome grunt';
    console.log(str.substring(1,5));*/

    for(var i=0; i<10; i++){
        console.log(i);
    }

    setTimeout(function(){
        console.log('delay show');
    },2000);
};
