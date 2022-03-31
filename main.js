hatX=0;
hatY=0;

function preload() {
    girl_hat = loadImage('https://purepng.com/public/uploads/large/purepng.com-black-top-hathatsstandard-sizeblackcliparttop-1421526359344rblvd.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(girl_hat, hatX -100, hatY -100, 100, 100);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        hatX = results[0].pose.nose.x;
        hatY = results[0].pose.nose.y;
        console.log("girl_hat x = " + hatX);
        console.log("girl_hat y = " + hatY);
    }
}