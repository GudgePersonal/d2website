// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function updateContentDiv(reader)

function handleFile(files) {
    var div = document.getElementById("main");
    var file = files[0];
    div.innerHTML = "<H1>Uploading " + file.name + "</H1>";
    var reader = new FileReader();
    //var content = reader.readAsText(file);
    var contentDiv = doc.getElementById("content");
    contentDiv.innerHTML = "<H3>" + "Hello World" + "</H3>"
}