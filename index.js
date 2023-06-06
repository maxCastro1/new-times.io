let imgArr = [...document.getElementsByClassName('imgs')];
let prevX = 0 ; 
let prevY = 0;
let moveXAmount = 0;
let moveYAmount = 0;

document.addEventListener('mousemove', function(e){
    mousePos(e);
});
function mousePos(e){
    moveXAmount= e.pageX - prevX;
    moveYAmount = e.pageY - prevY;


moveImg(moveXAmount, moveYAmount);
   prevX = e.pageX;
   prevY = e.pageY;

}
  
function moveImg(xAmount, yAmount){
    imgArr.forEach(function(img){
        let movementStrengh = 5 + (Math.random() * 15);
        img.style.left = (img.offsetLeft) - (xAmount/movementStrengh)  + "px"; 
        img.style.top = (img.offsetTop) - (yAmount/movementStrengh)  + "px"; 

        // let containerWidth = img.parentNode.offsetWidth;
        // let containerHeight = img.parentNode.offsetHeight;
        // let positionX = ((img.offsetLeft - xAmount / movementStrengh) / containerWidth) * 100;
        // let positionY = ((img.offsetTop - yAmount / movementStrengh) / containerHeight) * 100;
    
        // Set the object position in percentage
        // img.animate(
        //     { objectPosition: `${positionX}% ${positionY}%` },
        //     { duration: 200, fill: "forwards" }
        //   );

    })

}
imgArr.forEach((img)=>{ 
    img.addEventListener("click", function () {
       renderFullscreenImage(img);
      });
})
function renderFullscreenImage(imageElement) {
    // Create a new element for the fullscreen view
    const fullscreenElement = document.createElement("div");
    fullscreenElement.className = "fullscreen";
  
    // Create an image element for the fullscreen view
    const fullscreenImage = document.createElement("img");
    fullscreenImage.src = imageElement.src;
    fullscreenImage.className = "fullscreen-image";
  
    // Append the image element to the fullscreen container
    fullscreenElement.appendChild(fullscreenImage);
  
    // Add the fullscreen container to the document body
    document.body.appendChild(fullscreenElement);
  
    // Add a click event listener to close the fullscreen view when clicked
    fullscreenElement.addEventListener("click", function () {
      document.body.removeChild(fullscreenElement);
    });
  }
  
  
  
  

