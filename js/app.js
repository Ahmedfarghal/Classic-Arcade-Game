// Enemies our player must avoid

//board is an object to determine the values of with, height, starting posion
//for x and y
/*

                        /* Enemy Class */
class Enemy {
  constructor(x, y, speed){
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.sprite = 'images/enemy-bug.png';
      }

  //Parameter: dt, a time delta between ticks should multiply any movement by
  //the dt parameter which will ensure the game runs at the same speed for
      // all computers.
      update(dt){
            this.x = this.x + this.speed * dt;
      // starting the enemy again randomly
          if (this.x > 700 ){
            this.x = -10
            }

      // Collison with enemy when two objects hit each others
          if (Math.abs(this.x - player.x) < 75 && Math.abs(this.y - player.y) < 77) {
              player.x = 202;
              player.y = 405;
              player.lives -= 1;
              }
        }

      render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
}

                          /* Player Class */

// player class, This class requires an update(), render() and
// a handleInput() method.
class Player{
      constructor(){
        //imgae for the player
            this.sprite = 'images/char-boy.png';
      //from where the player starts its race get the safe area
            this.x = 208,
            this.y = 370
            }

  //Once the player arrives to the end the game will start again
      update(){
          if(this.y < 0){
            this.y = 350;
              }
          }

      render(){
          ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
          }

//  handleInput to catch the movments for up, down, right and left keypress;
      handleInput(keyPree){
        switch(keyPree){
        case 'left':
          this.x -= 90;
          break;
        case 'right':
         this.x += 90;
         break;
        case 'up':
           this.y -= 90;
           break;
        case 'down':
          this.y += 90;
          break;
          }

  // fix the player in the canvas
          if(this.x <= 2) {this.x = 2;}
          if(this.x >= 400) {this.x = 400;}
          if(this.y >= 405) {this.y = 405;}
          if(this.y < 0) {this.score += 1;}
          }

  }

// instantiate your objects. Place all enemy objects in an array called allEnemies
//with its speed and movments position
let allEnemies = [
      enemy1 = new Enemy(300,50, 250),
      enemy2 = new Enemy(100, 150, 80),
      enemy3 = new Enemy(150, 220, 180),
      //enemy4 = new Enemy(250, 180, 280)
      ];

// Place the player object in a variable called player
let player = new Player()


// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up', //y
        39: 'right',
        40: 'down' //y
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
