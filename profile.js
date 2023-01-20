function art() {
    document.getElementById("art-bt").style.backgroundColor = '#5375E6';
    document.getElementById("tags-bt").style.backgroundColor = '#E34BF2';
    document.getElementById("content").className = "content-art"
    document.getElementById("content").innerHTML = '\
    <div class="art p1"> \
        <p class="date">21-12-2022</p> \
        <p class="score">1644</p> \
        <p class="guess">77,6%</p> \
    </div> \
    <div class="art p2"> \
        <p class="date">20-12-2022</p> \
        <p class="score">1508</p> \
        <p class="guess">64,9%</p> \
    </div>'
}

function tags() {
    document.getElementById("tags-bt").style.backgroundColor = '#5375E6';
    document.getElementById("art-bt").style.backgroundColor = '#E34BF2';
    document.getElementById("content").className = "content-tags"
    document.getElementById("content").innerHTML = '\
    <p class="txt-title">10% Collected</p>\
    <div class="row">\
        <div class="tags">\
            <p class="tags-txt">Cartoon</p>\
        </div>\
        <p class="amount">x10</p>\
        <div class="tags">\
            <p class="tags-txt">Greyscale</p>\
        </div>\
        <p class="amount">x5</p>\
        <div class="tags">\
            <p class="tags-txt">Sketch</p>\
        </div>\
        <p class="amount">x4</p>\
        <div class="tags">\
            <p class="tags-txt">Colourful</p>\
        </div>\
        <p class="amount">x1</p>\
        <div class="tags">\
            <p class="tags-txt">3D</p>\
        </div>\
        <p class="amount">x1</p>\
        <div class="tags">\
            <p class="tags-txt">Birds-eye</p>\
        </div>\
        <p class="amount">x0</p>\
        <div class="tags">\
            <p class="tags-txt">Saturated</p>\
        </div>\
        <p class="amount">x0</p>\
    </div>\
    <div class="row">\
        <div class="tags">\
            <p class="tags-txt">2D</p>\
        </div>\
        <p class="amount">x7</p>\
        <div class="tags">\
            <p class="tags-txt">Stick Figure</p>\
        </div>\
        <p class="amount">x5</p>\
        <div class="tags">\
            <p class="tags-txt">Simple</p>\
        </div>\
        <p class="amount">x2</p>\
        <div class="tags">\
            <p class="tags-txt">Comic</p>\
        </div>\
        <p class="amount">x1</p>\
        <div class="tags">\
            <p class="tags-txt">Expressive</p>\
        </div>\
        <p class="amount">x0</p>\
        <div class="tags">\
            <p class="tags-txt">Frogs-eye</p>\
        </div>\
        <p class="amount">x0</p>\
        <div class="tags">\
            <p class="tags-txt">Pixelated</p>\
        </div>\
        <p class="amount">x0</p>\
    </div>';
}