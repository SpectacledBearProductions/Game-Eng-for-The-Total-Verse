function checkInput() {
    let userinput = document.getElementById("userinput").value;

    if (userinput === "Displaysky") {
        document.getElementById("box").style.display = "block";
    }

    if (userinput === "Displaygrass") {
        document.getElementById("skybox").style.display = "block";
    }
}

