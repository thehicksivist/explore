
window.onload = function() {
    
    console.log('doc loaded')

    let profile = document.getElementById("pcards")
    let past = document.getElementById("past")
    let current = document.getElementById("current")
    let tools = document.getElementById("tools")

    profile.addEventListener("click", spin);
    past.addEventListener("click", drop);
    current.addEventListener("click", drop);
    tools.addEventListener("click", drop);

    let spun = false;

    function spin() {
        if (spun)   {
            this.style.transform = "rotateY(0deg)";
            spun = false;
        } 
        else {
            this.style.transform = "rotateY(180deg)";
            spun = true;
            }
        }

    function drop() {
        // setTimeout(reset, 10)

        clicked = this
        console.log(this)

        if (clicked.classList.contains('dropdown')) {
            clicked.classList.remove('dropdown');
            console.log("remove")
            console.log(this)
        } else {
        clicked.classList.add('dropdown');
        console.log("else add")
        console.log(this)
        }
                  
    }

}

