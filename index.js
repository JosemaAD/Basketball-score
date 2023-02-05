let home_marker = document.getElementById('home-marker')
let guest_marker = document.getElementById('guest-marker')

let counter_home = 0
let counter_guest = 0

function home_plus(a){
    counter_home += a
    home_marker.textContent = counter_home
}

function guest_plus(a){
    counter_guest += a
    guest_marker.textContent = counter_guest
}

function new_game(){
    home_marker.textContent = 0
    guest_marker.textContent = 0
    counter_guest = 0
    counter_home = 0
}