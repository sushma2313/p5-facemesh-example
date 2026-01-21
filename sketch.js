/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates tracking a particular face feature through ml5.faceMesh.
 */

let faceMesh;
let video;
let img;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

function preload() {
  // Load the faceMesh model
  faceMesh = ml5.faceMesh(options);
  img = loadImage("strawb.gif");
}

function setup() {
  createCanvas(640, 480);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // Start detecting faces from the webcam video
  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  if (faces.length > 0 && faces[0].lips) {
    fill(0, 255, 0);
    // console.log(faces[0].lips.height);

    if (faces[0].lips.height > 35) {
      textAlign(CENTER, CENTER);
      textSize(faces[0].lips.height);
      text(
        "blah blah blah",
        faces[0].lips.x,
        faces[0].lips.y + faces[0].lips.height / 2
      ); 
      
      
      
//       push();
//       imageMode(CENTER);
//       image(img, faces[0].lips.x, faces[0].lips.y + faces[0].lips.height / 2);
//       pop();  
      
    }
  }
}

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}
