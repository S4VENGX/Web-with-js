function upDate(previewPic) {
    console.log("Event triggered");
    console.log("Source: ", previewPic.src);
    console.log("Alt: ", previewPic.alt);
    
    var imageDiv = document.getElementById("img");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerText = "abcd";
}

function undo() {
    let imageDiv = document.getElementById("img");
    imageDiv.style.backgroundImage = "";
    imageDiv.innerText = "Hover over an image";
}
