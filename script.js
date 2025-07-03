const btn = document.querySelector(".btn");
const input = document.querySelector(".persona");
const msg = document.querySelector("#mensaje");

const insultos = ["pendejo", "baboso", "idiota", "bestia", "apendejeado", "chavista", "desgraciado", "cabron"];

btn.addEventListener('click', function () {
    const resultado = insultos[Math.floor(Math.random() * insultos.length)];
    const persona = input.value.trim();

    if (!persona | persona.length < 3) {
        mostrarNotificacion();
        msg.textContent = "¡Debes colocar un nombre para poder insultar!";
        return
    }

    mostrarNotificacion();
    msg.textContent = persona + " es un " + resultado + ".";
    
})

function mostrarNotificacion() {
    document.querySelector("#insulto-msg").style.display = "flex";
}

function cerrarNotificacion() {
    document.querySelector("#insulto-msg").style.display = "none";
}