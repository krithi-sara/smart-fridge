const libapi= require("./fastapi.js");
global.globalString;
let keep;
var ACCESS_KEY_ID = 'AKIAX3ZURLBX364GOWMB';
var ACCESS_SECRET_KEY = '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';
const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: 'AKIAX3ZURLBX364GOWMB',
    secretAccessKey: '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'
});
function outputMessage(){
  console.log("here");
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerHTML =`<p class="meta">kjlkjkdfs <span>ljljlljgd</span></p>
  <p class="text">
  hhjhshfd
  </p>`;
  document.querySelector('.chat-messages').appendChild(div);

}

function add(){
  console.log("Added");
}


function imagecontrol() {
  url="https://i.imgur.com/DDhe5aq.jpeg"
  res=libapi.Fapi(url)
  return 1
}

function splitImage(){
  const ImageSlicer = require('image-slicer');
const fs = require('fs');

const dir = __dirname + '\\output';
console.log('🚀 => dir', dir);

// delete directory recursively
fs.rmdir(dir, { recursive: true }, (err) => {
  if (err) {
    throw err;
  }
  ImageSlicer.slice('./imagesFolder', ['.png', '.jpg'], 80, 80, './output', {
    r: 255,
    g: 255,
    b: 255,
    a: 255,
  })
    .then((numberImagesWritten) => {
      console.log(numberImagesWritten.toString(), 'images written');
    })
    .catch((err) => {
      console.log(err);
    });
});
var i=0;

for (i=0;i<30;i++)
{
  const fileName = 'contacts.csv';

const uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
     if (err) throw err;
     const params = {
         Bucket: 'testBucket', // pass your bucket name
         Key: 'contacts.csv', // file will be saved as testBucket/contacts.csv
         Body: JSON.stringif
}
}
 
module.exports = { add,outputMessage,imagecontrol,splitImage };
