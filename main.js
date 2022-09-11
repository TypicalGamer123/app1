noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(660,200);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function draw(){
    background("white");
    fill('#FFE5B4');
    stroke('#FFE5B4');
    //square(noseX,noseY,difference);
    textSize(difference);
    text("Aryavier",noseX,noseY)
}
function modelLoaded(){
    console.log("poseNet is loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX);
        console.log("noseY="+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX="+leftWristX);
        console.log("rightWristX="+rightWristX);
        console.log("difference="+difference);
    }
}