let istatus = document.querySelector("h3")
let btn = document.querySelector("#addFriend")
let check = 0

btn.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Friend"
        istatus.style.color="green"
        btn.innerHTML = "Remove"
        check = 1
    }
    else {
        istatus.innerHTML = "Stranger"
        btn.innerHTML = "Add Friend"
        istatus.style.color="red"
        check = 0
    }

})