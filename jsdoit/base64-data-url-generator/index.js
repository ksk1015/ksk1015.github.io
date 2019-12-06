var body = document.body;
var infoArea = document.getElementById("infoArea");
var previewArea = document.getElementById("previewArea");
var urlArea = document.getElementById("urlArea");

document.addEventListener("dragenter", function(e){    
    e.preventDefault();
}, true);

document.addEventListener("dragover", function(e){
    e.preventDefault();    
    body.className = "dragover";
}, true);

document.addEventListener("dragleave", function(e){
    body.className = "";
}, true);

document.addEventListener("drop", function(e){
    
    e.preventDefault();
    
    body.className = "";
    
    var file = e.dataTransfer.files[0];
    var reader = new FileReader();
    
    if( file.size > 1000000 && !confirm("File size is over 1,000,000 bytes, do it really?") ){
        return;
    }
    
    reader.onload = function(){
        
        var dataURL = this.result;
                
        infoArea.innerHTML = [
            file.name,
            file.type,
            file.size + " bytes"
        ].join("<br>");
        
        if( /image.*/.test(file.type) ){
            previewArea.innerHTML = "<img src='" + dataURL + "'>";
        }else if( /audio.*/.test(file.type)  ){
            previewArea.innerHTML = "<audio src='" + dataURL + "' controls>";
        }else if( /video.*/.test(file.type)  ){
            previewArea.innerHTML = "<video src='" + dataURL + "' controls>";
        }else{
            previewArea.innerHTML = "<object data='" + dataURL + "'>";
        }
        
        urlArea.textContent = dataURL;
        
    };
    
    infoArea.innerHTML = "loading...";
    previewArea.innerHTML = "";
    urlArea.innerHTML = "";
    
    reader.readAsDataURL(file);   
    
}, true);