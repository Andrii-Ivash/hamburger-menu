document.body.onload = function() {
    setTimeout(function() {
        let preloader = document.querySelector(".preloader");
        
        if (!preloader.classList.add("done")) {
            preloader.classList.add("done");
        }
    }, 2000)
}