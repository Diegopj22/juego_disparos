// Boss.js
class Boss extends Opponent {
    constructor(game) {
        super(game);
        this.image.src = "assets/jefe.png"; // Imagen del jefe
        this.health = 10; // Salud del jefe
        this.isDefeated = false;
    }

    /**
     * Maneja el choque del jefe con los disparos del jugador
     */
    collide() {
        this.health -= 1; // Reduce la salud del jefe en 1 por cada colisión
        if (this.health <= 0) {
            this.isDefeated = true;
            this.image.src = "assets/jefe_muerto.png"; // Cambia la imagen a la del jefe derrotado
            setTimeout(() => this.remove(), 500); // Remueve al jefe después de mostrar la imagen de derrota
        }
    }

    /**
     * Remueve el jefe del juego
     */
    remove() {
        document.body.removeChild(this.image);
        this.game.opponent = undefined; // Vacía el oponente para la siguiente fase del juego
    }
}


