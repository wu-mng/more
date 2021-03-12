// if you want to keep the original uploaded files, 
// just remove '&& node uploads_cleanup.js' 
// from the line "rig": "node rig.js && node uploads_cleanup.js" 
// in package.json

const fs = require('fs');
const path = require('path');
// custom parameters
const src = '../assets/img/uploads';

// Check if the folder is empty
fs.readdir(src, (err, files) => {
  if (err) {
     console.log('Error:', err.stack);
  } else {
    if (!files.length) {
      console.log("\nNo files were processed.\nThe " + `${src}/` + " folder is empty, please add any file.");
    }
  }
});
  
// remove the original images
try {
  fs.readdirSync(src).forEach(file => {
    const image = path.parse(`${file}`).base;
    fs.unlinkSync(`${src}/${image}`);
    console.log('\nDeleted original file: ' + `${src}/${image}`);
  }); 
} catch(err) { console.log('Error:', err.stack); }
