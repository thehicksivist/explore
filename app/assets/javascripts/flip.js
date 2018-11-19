
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
    
        this.classList.toggle('dropdown');
        setTimeout(() => {
            this.classList.toggle('dropdown');
        }, 6000)
                  
    }

}

