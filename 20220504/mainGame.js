var canvas = document.getElementById('game');
var context = canvas.getContext("2d");
//context는 c에서 구조적 프로그래밍을 사용할때 사용
//gpu의 사용권을 가지고 있음 권한과 데이터 모든걸 가지고 있음

class player
{   
    constructor(pos_x,pos_y,radius,color)
    {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.radius = radius;
        this.color = color;
    }

    draw() 
    {
        context.beginPath();
        context.arc(this.pos_x, this.pos_y, this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();        
    }
}
class attack
{
    draw()
    {
        context.fillStyle = 'red';
        var canvas = document.getElementById("game");
        canvas.addEventListener("click", function(e) {
          context.fillRect(e.layerX, e.layerY, 10, 10);
        });
    }
}

var char_player = new player(100,100,20,'gold');
var char_attack = new attack();

char_player.draw();
char_attack.draw();