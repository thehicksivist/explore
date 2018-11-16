
window.onload = function() {
    console.log('doc loaded')
    let card = document.getElementById("cards")

    let spun = false;

    card.addEventListener("click", function (event) {
            if (spun)   {
            this.style.transform = "rotateY(0deg)";
            spun = false;
            console.log(spun)
            } else {
            this.style.transform = "rotateY(180deg)";
            spun = true;
            console.log(spun)
            }
        })
}




// myButton = document.getElementById("myBtn")

// myButton.addEventListener("click", function(event) {
//   btn = event.currentTarget

//   btn.style.backgroundColor = 'red'
//   btn.innerHTML = 'Clicked!'
// }
