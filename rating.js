const images = [
    {
        "id": "0",
        "class": "default;",
        "prompt": "'NULL'"
    },
    {
        "id": "1",
        "class": "art1",
        "prompt": "'Screaming Alien'"
    },
    {
        "id": "2",
        "class": "art2",
        "prompt": "'Butterfly at an anchor'"
    },
    {
        "id": "3",
        "class": "art3",
        "prompt": "'Singing Cow'"
    },
    {
        "id": "4",
        "class": "art4",
        "prompt": "'Crab on a Plane'"
    },
    {
        "id": "5",
        "class": "art5",
        "prompt": "'A Fish is cycling'"
    }
]

function transfer(id) {
    if (id != 10) {
        sessionStorage.setItem("image_id", id);
    }
    if (id == 10) {
        var imageID = sessionStorage.getItem("image_id");
        document.getElementById("10").className = 'art-size ' + images[imageID].class;

        var slider = document.getElementById("slider");
        slider.style.display = 'none';
    }
    
}
function guessed() {
    var imageID = sessionStorage.getItem("image_id");
    var prompt = images[imageID].prompt;
    document.getElementById("lbl").innerHTML = prompt;
    document.getElementById("title").innerHTML = "The prompt was " + prompt;
    document.getElementById("title").className = "title2";
    document.getElementById("field").remove();  

    var slider = document.getElementById("slider");
    slider.style.display = 'block';
}