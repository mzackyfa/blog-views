function toggle() {
    const nav = document.getElementsByClassName('navbar-toggler-icon');
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}
