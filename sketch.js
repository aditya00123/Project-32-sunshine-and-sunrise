const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if (backgroundImg)
background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
var worldtime = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
var respJson = await worldtime.json();
var datetime = respJson.datetime;
    // write code slice the datetime
var t = datetime.slice(11,13);
console.log(t);
    // add conditions to change the background images from sunrise to sunset

    if (t >= 4 && t <=6 ) {
        bg =   'sunrise1.png';
    }
    else if (t > 6 && t <= 8) {
        bg = 'sunrise2.png';
    }
    else if (t > 8 && t <= 10) {
        bg = 'sunrise3.png';
    }
    else if (t > 10 && t < 12) {
        bg = 'sunrise4.png';
    }
    else if (t >= 12 && t <= 14) {
        bg = 'sunrise5.png';
    }
    else if (t > 14 && t <=16) {
        bg = 'sunrise6.png';
    }
    else if (t > 16 && t <= 18) {
        bg = 'sunset7.png';
    }
    else if (t === 19) {
        bg = 'sunset8.png';
    }
    else if (t === 20) {
        bg = 'sunset10.png';
    }
    else if (t > 20 && t < 24) {
        bg = 'sunset11.png';
    }
    else
        bg = 'sunset12.png';
    


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
