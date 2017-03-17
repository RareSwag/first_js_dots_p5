var circ1 = {
    x : 50,
    y : 350
};

var circ2 = {
    x : 550,
    y : 350
};

var speed1 = {
    one : 3,
    two : -3
};

var speed2 = {
    one : -3,
    two : -3
};

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    display();
    move()
    bounce();
    bouncer();
}

function display() {
    stroke(255);
    fill(34,139,34);
    ellipse(circ1.x, circ1.y, 50, 50);
    stroke(255);
   fill(34,139,34);
   ellipse(circ2.x, circ2.y, 50, 50);
}

function move() {
    circ1.x = circ1.x + speed1.one;
    circ1.y = circ1.y + speed1.two;
    
    circ2.x = circ2.x + speed2.one;
    circ2.y = circ2.y + speed2.two;
}

function bounce() {
    if (circ1.x > 275 || circ1.x < 25) {
        speed1.one = speed1.one * -1;
    }
     if (circ1.y < 25 || circ1.y > 375) {
        speed1.two = speed1.two * -1;
    }
}

function bouncer() {
    if (circ2.x < 325 || circ2.x > 575) {
        speed2.one = speed2.one * -1;
    }
    if (circ2.y < 25 || circ2.y > 375) {
        speed2.two = speed2.two * -1;
    }
}