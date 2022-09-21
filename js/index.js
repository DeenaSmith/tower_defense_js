
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1280;
canvas.height = 768;

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.onload = () => {
    animate()
};

image.src = 'img/gameMap.png'

class Enemy {
    constructor({position = { x: 0, y: 0 }}) {
        this.position = position;
        this.width = 100;
        this.height = 100;
    }
// how the enemy looks
    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
// enemy movement
    update() {
        this.draw()
        this.position.x += 1
    }
}

const enemy = new Enemy({position: { x: 200, y: 400}})
const enemy2 = new Enemy({position: { x: 0, y: 400}})

function animate() {
    requestAnimationFrame(animate)

    c.drawImage(image, 0, 0);
    enemy.update()
    enemy2.update()
}

animate();