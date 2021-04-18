
//var actorName;

var favFav = function () {
  actorName = prompt('please enter the nam tom cruise or will smitt');


}

var actorName=prompt('please enter the nam tom cruise or will smitt');

while (actorName !== 'tom cruise' && actorName !== 'will smitt'){

 // actorName = prompt('please enter the nam tom cruise or will smitt');}
var userAge=prompt('please Enter Your Age ');

if (userAge >= 18){
  alert('welcome can you see my Website');
}
else{
  alert( 'you are a baby');
}
//console.log(userAge);
if (userAge >= 18){

document.write('<img src= "https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg">')}
else{

document.write('<img src=" https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"')
}


favFav();}

var userChoose;
function showImage()
  {if (actorName == 'tom cruise') {
  userChoose = '<img src="https://cdn.al-ain.com/images/2020/9/23/176-151455-tom-cruise-find-out-when-new-mission-impossible_700x400.jpg">'
}

else if (actorName == 'will smitt') {
  userChoose = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3ZmhKkuqh8QGdSE8PrOVciMdLLdrnEP7_g&usqp=CAU">'
}
  }

var imagesNumber = prompt('how many image do you want?');

showImage();
for (var i = 0; i < imagesNumber; i++) {
  document.write(userChoose);
}