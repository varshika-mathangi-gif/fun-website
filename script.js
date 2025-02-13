function goToNextPage() {
    window.location.href = "next.html";
}

function moveNoButton() {
    let button = document.getElementById("no-btn");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
