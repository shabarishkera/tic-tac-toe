var array=document.getElementsByClassName('box');
var turn ="x";

function init()
{
for(i=0;i<9;i++)
array[i].innerHTML="";

}
function update(box)
{
  if(box.innerHTML=="")
  {
box.innerHTML=turn;
if(turn =='x')
turn ='o';
else
turn ='x';
checkifwon();
}
}
function checkifwon()
{
if(array[0].innerHTML==array[1].innerHTML&&array[2].innerHTML==array[0].innerHTML&&array[0].innerHTML!="")
winnermsg();
 else if(array[3].innerHTML==array[4].innerHTML&&array[3].innerHTML==array[5].innerHTML&&array[3].innerHTML!="")
winnermsg();


else if(array[6].innerHTML==array[7].innerHTML&&array[6].innerHTML==array[8].innerHTML&&array[6].innerHTML!="")
winnermsg();

else if(array[0].innerHTML==array[3].innerHTML&&array[3].innerHTML==array[6].innerHTML&&array[6].innerHTML!="")
winnermsg();

else if(array[1].innerHTML==array[4].innerHTML&&array[4].innerHTML==array[7].innerHTML&&array[7].innerHTML!="")
winnermsg();

else if(array[2].innerHTML==array[5].innerHTML&&array[5].innerHTML==array[8].innerHTML&&array[8].innerHTML!="")
winnermsg();

else if (array[0].innerHTML==array[4].innerHTML&&array[4].innerHTML==array[8].innerHTML&&array[8].innerHTML!="")
winnermsg();

 else if (array[2].innerHTML==array[4].innerHTML&&array[4].innerHTML==array[6].innerHTML&&array[6].innerHTML!="")
winnermsg();

checkallfull()

}
function winnermsg()
{

document.getElementById('msg').style.display="block";
setTimeout("document.getElementById('msg').style.display=\"none\"",3000);
init();
}
function checkallfull()
{
  ans=true;
  for(i=0;i<9;i++)
  {
    if(array[i].innerHTML=="")
    ans=false;


  }
  if(ans==true)
  init();




}
