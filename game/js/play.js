// ////////////////////////////////////Global Section/////////////////////////////////////////
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
// //////////////////////////////////////////////////////////////////////////////////////////
// Assign some global variables for the game
// This needs improvements
let score;
let scoreText;
let highscore;
let highscoreText;
let player;
let gravity = 1;
let obstacles = [];
let bullets = [];
let gameSpeed;
let keys = {};
let playername;
// ///////////////////////////////////////////////////////////////////////////////////////////




// ///////////////////////////////////////////////////////////////////////////////////////////
// Event Listeners
// If key is pressed, return true
// If key is not pressed, return false
document.addEventListener('keydown', function (evt) {
  keys[evt.code] = true;
});
document.addEventListener('keyup', function (evt) {
  keys[evt.code] = false;
});
//////////////////////////////////////////////////////////////////////////////////////////////




// Player class + image for player
// Image just an inbuilt
const running = new Image();
running.src = 'img/r_002.png';
class Player {
  // constructor
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.xVelocity = 0;
    this.dy = 0;
    this.jumpForce = 16;
    this.originalHeight = h;
    this.grounded = false;
    this.jumpTimer = 0;
    this.life = 3;
    this.playername = playername;
  }


  Animate() {
    // Jump
    if (keys['KeyW']) {
      this.Jump();
    } else {this.jumpTimer = 0;}
    if (keys['KeyS']) {
      this.h = this.originalHeight / 3;
      this.y += 30;
    } else {this.h = this.originalHeight;this.y -= 2;}
    if (keys['KeyA']) {
      if (this.x >= 7) {
        this.x -= 7;
      }
    }
    if (keys['KeyD']) {
      this.x += 8;
    }
    this.y += this.dy;


    // Safe for later (shooting bullets)
    if (keys['Space']) {
      SpawnBullet();
      console.log(bullets);
        }

    // Gravity
    // if it tries to go over the top canvas
    if (this.y + this.h < canvas.height) {
      this.dy += gravity;
      this.grounded = false;
    // set the speed of y back to 0, player is on ground, y is set to anywhere inside canvas bound.
    } else {
      this.dy = 0;
      this.grounded = true;
      this.y = canvas.height - this.h;
    }

    this.Draw();
  }

  Jump() {
    // @ ground and time for jumping
    if (this.grounded && this.jumpTimer == 0) {
      this.jumpTimer = 1;
      this.dy = -this.jumpForce;
      // continue the jumping projectile until 14
      // increase the jump timer
      // jumpforce -1 to create acceleration base (constant)
    } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
      this.jumpTimer++;
      this.dy = -this.jumpForce - 1;
    }
  }

  Draw() {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.closePath();
    ctx.save();
    ctx.drawImage(running, this.x, this.y);
  }
}

// Bullet
class Bullet {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;


    this.dx = gameSpeed + 2;
  }

  Update() {
    this.x += this.dx;
    this.Draw();
    this.dx = gameSpeed + 2;
  }

  Draw() {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.closePath();
    ctx.drawImage(ghost, this.x, this.y)
  }
}


// Obstacle
const ghost = new Image();
ghost.src = 'img/5Q0v.gif';
class Obstacle {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.dx = -gameSpeed;
  }

  Update() {
    this.x += this.dx;
    this.Draw();
    this.dx = -gameSpeed;
  }

  Draw() {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.closePath();
    ctx.drawImage(ghost, this.x, this.y)
  }
}

class Text {
  // The text, x pos, ypos, align
  // color, font
  constructor(t, x, y, a, c, s) {
    this.t = t;
    this.x = x;
    this.y = y;
    this.a = a;
    this.c = c;
    this.s = s;
  }

  Draw() {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.font = this.s + "px sans-serif";
    ctx.textAlign = this.a;
    ctx.fillText(this.t, this.x, this.y);
    ctx.closePath();
  }
}


// Game Functions
function SpawnObstacle() {
  let size = 200;
  let ypos = randomizeheight(0, 499);
  let obstacle = new Obstacle(canvas.width + size, canvas.height - size - ypos, size + 50 - 30, size - 40, 'transparent');
  obstacles.push(obstacle);
}

function SpawnBullet() {
  let size = 10;
  let bullet = new Bullet(canvas.width + size, canvas.height - size, size, size, 'red');
  bullets.push(bullet);
}

function randomizeheight(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Start function:
// Set width and height
// create a player object
// create 4 text objects for lifecount, score, name, and highscore
// Call request animation frame to keep the game going (clock) 
function Start() {
  playername = prompt("Enter your name: ");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.font = "20px sans-serif";
  gameSpeed = 10;
  score = 0;
  highscore = 0;
  player = new Player(1000, 0, 100, 161, 'transparent');
  scoreText = new Text("Score: " + score, 25, 50, "left", "black", "23");
  lifeText = new Text("Life:" + player.life, 25, 100, "left", "black", "23")
  highscoreText = new Text("Highscore: " + highscore, 25, 150, "left", "black", "23");
  nameText = new Text("Name: " + playername, 25, 200, "left", "black", "23");
  requestAnimationFrame(Update);
}

// timer set at 2 seconds (200ms)
let timer = 200;
let spawnblock = timer;
function Update() {
  requestAnimationFrame(Update);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  spawnblock--;
  // When the timer is up (reaches 0, summon a new block)
  if (spawnblock <= 0) {
    SpawnObstacle();
    console.log(obstacles);
    // Decrease the timer so we can summon another pikachu even faster
    spawnblock = timer - gameSpeed * 4;
    if (spawnblock < 20) {
      spawnblock = 20;
    }
  }

  for (let i = 0; i < obstacles.length; i++) {
    let o = obstacles[i];
    // Delete the unused array that have reached the left of screen
    // Prevent memory leak / keep the array small
    // Thank this later for not slowing down the game
    if (o.x + o.w < 0) {
      obstacles.splice(i, 1);
    }
    // If player touches left, right, up, and down direction
    if (player.x < o.x + o.w && player.x + player.w > o.x && player.y < o.y + o.h && player.y + player.h > o.y) {
      // If the end of life, basically just reset everything
      // Improve this
      if (player.life == 1) {
        alert("Try again!");
        obstacles = [];
        score = 0;
        spawnblock = timer;
        gameSpeed = 3;
        player = new Player(25, 0, 100, 121, 'transparent');
      }
      // else:
      // Just delete the life and reset the obstacle
      // This can be improved in future without setting the obstacle to Null
      // Instead, create an immune function for 1-3 second
      else {
        player.life -= 1;
        obstacles = [];
      }
    }
    // Update the objects following the clock
    o.Update();
  }
  // Call the keypads function
  player.Animate();

  // Increase the score everytime the function called (100x per second)
  score++;
// //////////////////////////////////////////////////////////////////////////////////////////////
  // Update the score, life, highscore, text again and again according to clock
  // Why?
  // Score changes per frame
  // Life changes according to collision
  // highscore might change according to current score
  scoreText.t = "Score: " + score;
  scoreText.Draw();
  lifeText.t = "Life: " + player.life;
  lifeText.Draw();
  if (score > highscore) {
    highscore = score;
    highscoreText.t = "Highscore: " + highscore;
  }
  highscoreText.Draw();
  nameText.t = "Name: " + player.playername;
  nameText.Draw();
// /////////////////////////////////////////////////////////////////////////////////////////////
// Increase the game speed everytime it updates
   gameSpeed += 0.005;

}

// Main
Start();