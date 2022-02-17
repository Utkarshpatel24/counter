var x=0;
function increase()
{
    x=parseInt(x);
     x+=1;
     console.log(x);
     display();
}
function decrease()
{
    x=parseInt(x);
    if(x!=0)
    x-=1;
    display();
}
function display()
{
    x=parseInt(x);
    document.getElementById('display').innerHTML=x;
}