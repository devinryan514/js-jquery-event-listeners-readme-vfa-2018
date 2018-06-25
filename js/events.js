//define functions here
function getIt(){
 $('p').on('click', function(){
    alert("Hey!");
    return;
 });
 return;
}

function frameIt(){
  $('img').on('load', function(){
<<<<<<< HEAD
    $('img').addClass('tasty')
=======
    $('img').className = 'tasty'
>>>>>>> 6a5d71bb227665c0b08fcf8d6d83739de594fb75
    return;
  });
  return;
}

$(document).ready(function(){

// call functions here
getIt();

});
