document.querySelector("#show-login").addEventListener("click", function () {
        console.log("Haiii");
        document.querySelector(".popup").classList.add("active");
    });

    document.querySelector(".popup .close-btn").addEventListener("click", function () {
        console.log("Hello");
        document.querySelector(".popup").classList.remove("active");
    });
