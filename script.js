 
function upDate(previewPic) {
   
    console.log("Fonction upDate déclenchée !");

    
    console.log("Alt de l'image survolée :", previewPic.alt);
    console.log("Source de l'image survolée :", previewPic.src);

   
    const mainImageDiv = document.getElementById('image');
    mainImageDiv.textContent = previewPic.alt;

   
    mainImageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

 
function unDo() {
     
    const mainImageDiv = document.getElementById('image');

   
    mainImageDiv.style.backgroundImage = "url('')"; // Ou mainImageDiv.style.backgroundImage = "none";

   
    mainImageDiv.textContent = "Survolez une image ci-dessous pour l'afficher ici.";
}
