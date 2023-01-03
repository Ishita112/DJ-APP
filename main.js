var music = "";
var naruto = "";
var tsukuyomi = "";
var song = "";
var leftX = 0;
var leftY = 0;
var rightX = 0;
rightY = 0;
scoreLeftWrist = 0;
scoreright = 0;

function preload()
{
	music = loadSound("music.mp3");
  naruto= loadSound("Blue_Bird.mp3");
 // tsukuyomi = loadSound("Tsuki_ga_michiru.mp3");


}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
    function modelLoaded()
    {
      console.log('PoseNet is Initialized')
      
    }




function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log("scoreLeftWrist = " + scoreLeftWrist);

    scoreright = results[0].pose.keypoints[10].score;
    console.log("scoreRightWrist = " + scoreright);


    leftX = results[0].pose.leftWrist.x;
    leftY = results[0].pose.leftWrist.y;
    console.log(" leftX = " + leftX + " leftY = " + leftY);

    rightX = results[0].pose.rightWrist.x;
    rightY = results[0].pose.rightWrist.y;
    console.log(" rightX = " + rightX + " rightY = " + rightY);
  }
}

function draw()
{
    image(video, 0, 0, 600, 500);

    fill("red");
    stroke("red");

    if (scoreright > 0.2)
    { 

    
    circle(rightx, righty, 20);

    if(righx > 0 && righty <= 100)
    {
      document.getElementById("speed").innerHTML = "Speed = 0.5x";
      song.rate(0.5);
    }

    
    else if(righx > 100 && righty <= 200)
    {
      document.getElementById("speed").innerHTML = "Speed = 1x";
      song.rate(1);
    }

    
     else if(righx > 200 && righty <= 300)
    {
      document.getElementById("speed").innerHTML = "Speed = 1.5x";
      song.rate(1.5);
    }

    
   else if(righx > 300 && righty <= 400)
    {
      document.getElementById("speed").innerHTML = "Speed = 2x";
      song.rate(2);
    }

    
     else if(righx > 400 && righty <= 500)
    {
      document.getElementById("speed").innerHTML = "Speed = 2.5x";
      song.rate(2.5);
    }

  }

    if(scoreLeftWrist > 0.2 )
    {

    circle(leftX, leftY,20);
    InNumberleftY = Number(leftY);
    volume = floor(InNumberleftY)/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
    }
}


    function pause()
    {
      song.pause();
      
    }


    function stop()
    {
      song.stop();
    }

    
    function play()
    {
    
      var name = document.getElementById("name").value;
      
      if(name == "Music")
        {
           song = music;
        }
      else if(name == "Blue_bird")
        {
            song = naruto;
        }
      
      else if(name == "Tsukuyomi")
        {
          
        }
        song.play();
        song.setVolume(1);
        song.rate(1);
    
    }





    
    
    
