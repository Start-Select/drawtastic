function prompt(id){ 
    if (id == 10) {
        var prompt = sessionStorage.getItem("chosen");
        document.getElementById(id).innerHTML = prompt;     
    }
    if  (id != 10) {
    var prompt = document.getElementById(id).innerHTML;
    sessionStorage.setItem("chosen", prompt);
    }
}