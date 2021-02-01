document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        thumbnailElement.className;

        if (thumbnailElement.className == "") {

            thumbnailElement.className = "thumb";
        } else {
            thumbnailElement.className = "";
        }

    });


});