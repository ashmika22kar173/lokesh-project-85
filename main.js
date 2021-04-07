canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

car_width = 120;
car_height = 70;

car_x = 10;
car_y = 10;

car2_width = 120;
car2_height = 70;

car2_x = 10;
car2_y = 100;

var background_img = "racing.jpg"; 
var car_img = "car1.png";
var car2_img = "car2.png";


function add() {
    background_img1 = new Image();
    background_img1.onload = uploadbackground;
    background_img1.src = background_img;

    car_img1 = new Image();
    car_img1.onload = uploadcar;
    car_img1.src = car_img;

car2_img1 = new Image();
car2_img1.onload = uploadcar2;
car2_img1.src = car2_img;
}

function uploadbackground() {

    ctx.drawImage(background_img1, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {


    ctx.drawImage(car_img1, car_x, car_y, car_width, car_height);
}

function uploadcar2() {


    ctx.drawImage(car2_img1, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypress = e.keyCode;
    console.log(keypress);
    if (keypress == '38') {
        up();
        console.log("up");

    }
    if (keypress == '40') {
        down();
        console.log("down");

    }

    if (keypress == '37') {
        left();
        console.log("left");

    }
    if (keypress == '39') {
        right();
        console.log("right");

    }

    if (keypress == '87') {
        car2_up();
        console.log("w");

    }
}
function up()
{
if (car_y >=0)
{
car_y = car_y - 10;
console.log("When up arrow is pressed ="+ car_x +"-"+car_y);
uploadbackground();
uploadcar();


}
}

function down()
{
if (car_y <=500)
{
car_y = car_y + 10;
console.log("When up arrow is pressed ,x="+ car_x +" y ="+car_y);
uploadbackground();
uploadcar();


}
}

function left()
{
if (car_x >=0)
{
car_x = car_x - 10;
console.log("When up arrow is pressed ,x="+ car_x +" y ="+car_y);
uploadbackground();
uploadcar();


}
}

function right()
{
if (car_x <=700)
{
car_x = car_x + 10;
console.log("When up arrow is pressed ,x="+ car_x +" y ="+car_y);
uploadbackground();
uploadcar();


}
}

function car2_up()
{
if (car2_y >=0)
{
car2_y = car2_y - 10;
console.log("When up arrow is pressed ="+ car2_x +"-"+car2_y);
uploadbackground();
uploadcar2();


}
}