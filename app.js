

// var username;
// document.getElementById('btn').onclick =  function (){
//     username = document.getElementById("int").value;
//     console.log(username)
  
// }

// var dest = new Date("oct 11 2022 10:00:00").getTime();

// var dest = new Date().getDate("");
// console.log(dest)
// var day = new Date().getTime();

// var diff  =  day- dest;


// var das = Math.floor(diff/(1000*60*60*24));
// console.log(das)

//////////////////////////////////////////////////////////////////
// var parent = document.getElementById('imgparent')

// var allimages  = parent.getElementsByTagName('img')

// var showslide = document.getElementById('showslide');

// var indexno = 0;



// function renderslide(){

// showslide.src = allimages[indexno].src;


// }



// renderslide();


// function nextslide(){
    

//     if(indexno+1 == allimages.length){

//         indexno = 0;
//     }

//     else{

//         indexno++;
//     }
//     renderslide();


// }




// function prevslide(){



//     if(indexno == 0){

//         indexno = allimages.length-1
//     }
// else{    indexno--;}
//     renderslide();


// }





// // set timeout




// setInterval(function(){nextslide()},3000)



// // set interval



/////////////////////////////////////////////////////////////////

var min = 0;
var sec = 0;
var millisec = 0;


var displaymin =document.getElementById('displaymin');
var displaysec =document.getElementById('displaysec');
var displaymillisec =document.getElementById("displaymillisec");


var interval;


function timer()
{


    millisec++;
    
    if(millisec == 10){
        
        millisec = 0;
        sec++;
        
        if(sec == 60){
            
            sec = 0;
            min++;
            
            
        }
        
    }
    
    displaymillisec.innerHTML = millisec;
    displaysec.innerHTML = sec;
    displaymin.innerHTML= min;



}




function startTimmer(){
    interval = setInterval(function(){timer()},100);
}
function pauseTimmer(){

    clearInterval(interval);
}

function resetTimmer(){

    pauseTimmer();
    min = 0;
    sec = 0;
    millisec = 0;


    displaysec.innerHTML = sec;
    displaymillisec.innerHTML = millisec;
    displaymin.innerHTML = reset;
  

}






