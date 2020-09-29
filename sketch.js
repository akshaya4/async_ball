var ball;
var database,location,position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    location=database.ref("Ball/Position");
    location.on("value",readOperation,showErr);
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
}

function writePosition(x,y){
    database.ref("Ball/position").set({
            'x':position.x+x,
            'y':position.y+y
    })
    
}

function readOperation(data){
    position=data.val();
    ball.x = position.x;
    ball.y = position.y;
}
function showErr(){
    console.log("Error");
};
}
