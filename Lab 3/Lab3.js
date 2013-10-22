var b_canvas = document.getElementById("myCanvas");
//You must pass the string "2d" to the getContext() method for 2d drawing
var context = b_canvas.getContext("2d");


var image = new Image();

//draw our first rectangle! :D
context.fillRect(0, 0, 150, 100);

//set the inner color to blue, the outer line to red and the outer line thickness to 4
context.fillStyle   = '#00f'; // blue
context.strokeStyle = '#f00'; // red
context.lineWidth   = 4;

// Draw some rectangles.
context.fillRect  (0,   0, 150, 50);
context.strokeRect(0,  60, 150, 50);
context.clearRect (30, 25,  90, 60);
context.strokeRect(30, 25,  90, 60);

//Draw a triangle by path!
// Set the style properties.
context.fillStyle   = '#00f';
context.strokeStyle = '#f00';
context.lineWidth   = 4;

context.beginPath();
// Start from the top-left point.
context.moveTo(410, 10); // give the starting x,y (x,y) coordinates
context.lineTo(500, 10); //top right
context.lineTo(410, 100); //bottom left
context.lineTo(410, 10); //top left

// Done! Now fill the shape, and draw the stroke.
// Note: your shape will not be visible until you call any of the two methods.
context.fill();
context.stroke();
context.closePath();

image.src = "My logo.png";

context.drawImage(image, 200, 300);

// Create an ImageData object.
var imgd = context.createImageData(200,300, 909, 349);
var pix = imgd.data;

// Loop over each pixel and set a transparent red.
for (var i = 0; n = pix.length, i < n; i += 4) {
//invert the colors
  pix[i  ] = 255 - pix[i  ]; // red
  pix[i+1] = 255 - pix[i+1]; // green
  pix[i+2] = 255 - pix[i+2]; // blue
}

// Draw the ImageData object at the given (x,y) coordinates.
context.putImageData(imgd,0,550);

context.fillStyle    = '#00f';
context.font         = 'italic 30px sans-serif';
context.textBaseline = 'top';
context.fillText  ('Hello world!', 0, 0);
context.font         = 'bold 30px sans-serif';
context.strokeText('Hello world!', 0, 50);

context.shadowOffsetX = 5;
context.shadowOffsetY = 5;
context.shadowBlur    = 4;
context.shadowColor   = 'rgba(255, 0, 0, 0.5)';
context.fillStyle     = '#00f';
context.fillRect(400, 20, 150, 100);


//gradiant square
var gradient1 = context.createLinearGradient(100, 50, 50, 50);

// Now you can add colors in your gradient.
// The first argument tells the position for the color in your gradient. The 
// accepted value range is from 0 (gradient start) to 1 (gradient end).
// The second argument tells the color you want, using the CSS color format.
gradient1.addColorStop(0,   '#f00'); // red
gradient1.addColorStop(0.5, '#ff0'); // yellow
gradient1.addColorStop(1,   '#00f'); // blue


//gradiant circle
var gradient2 = context.createRadialGradient(100, 10, 30, 130, 40, 30);

gradient1.addColorStop(0,   '#f00'); // red
gradient1.addColorStop(0.5, '#ff0'); // yellow
gradient1.addColorStop(1,   '#00f'); // blue


