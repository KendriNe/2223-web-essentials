// Functies
function btnClick(event)
{
    alert("Je hebt op de button geklikt!");
}
function imageClick(event)
{
    // event.target() is het object (image-node) dat de funcite aanstuurd
    alert("Je hebt op de " + event.target.alt + "de afbeelding geklikt");
}



let button = document.querySelector('button');

button.addEventListener('click', btnClick);

//Identificeer de images
let images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) 
{
    images[i].addEventListener('click', imageClick);   
}