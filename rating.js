
function transfer(id) {
    if (id != 10) {
        sessionStorage.setItem("image_rating", id);
    }
    if (id == 10) {
        const images = [
            {
                "id": "0",
                "class": "default;"
            },
            {
                "id": "1",
                "class": "art1"
            },
            {
                "id": "2",
                "class": "art2"
            }
        ]
        var imageID = sessionStorage.getItem("image_rating");
        document.getElementById("10").className = 'art-size ' + images[imageID].class;
    }
    
}
function guessed() {
    var prompt = '"Screaming Alien"'
    document.getElementById("lbl").innerHTML = prompt;
    document.getElementById("title").innerHTML = "The prompt was " + prompt;
    document.getElementById("title").className = "title2";
}