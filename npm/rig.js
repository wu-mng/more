// rig - Responsive Images Generator
// v1.0 by wu-mng 2020
// start with: npm run rig

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
// custom parameters
const res = '../_data/responsives.json';
const src = '../assets/img/uploads';
const des = '../assets/img';
let sizes = [];

// get the size array from an external file
fs.readFile(res, 'utf8', (err, data) => {
  if (err) throw err;
  let obj = JSON.parse(data);
  let srcset = obj.settings.srcset;
  // convert the strings into an array
  srcset.forEach(i => { sizes.push(parseInt(i)); });
  console.log("Generating images at following sizes: " + sizes + "px\n");

  // check if the destination folder already exists, otherwise create it
  sizes.forEach(size => {
    if (fs.existsSync(`${des}/${size}`)) {
      console.log("The folder: " + `${des}/${size}`+ " already exists. Skipping.");
    } else {
      console.log("Creating folder: " + `${des}/${size}`);
      fs.mkdir(`${des}/${size}`, { recursive: true }, (err) => {
        if (err) throw err;
      });      
    }      
  });

  try {
    fs.readdirSync(src).forEach(file => {
      const name = path.parse(`${file}`).name;
      const ext = path.parse(`${file}`).ext;
      const image = sharp(`${src}/${file}`);
      console.log("\nProcessing file: " + `${file}`);
    
      // check if the file already exists
      if (fs.existsSync(`${des}/${file}`)) {
        console.log("The file: " + `${des}/${file}` + " already exists. Skipping.");
      } else {
        // create an optimized copy of the original image
        console.log("Optimizing image: "+ `${des}/${file}`);
        image
          .metadata()
          .then(function(metadata) {
            if(metadata.format == 'jpeg') {
              return image
                .resize({width: metadata.width, withoutEnlargement: true})
                .jpeg({ progressive: true, optimiseScans: true })
                .toFile(`${des}/${name}.jpg`);
              } else if (metadata.format == 'png') {
                return image
                  .resize({width: metadata.width, withoutEnlargement: true})
                  .png({ compressionLevel: 9 })
                  .toFile(`${des}/${name}.png`);
              }
          });
        }
        // resize the image at each size 
        sizes.forEach(size => {
          // check if the destination file already exists
          if (fs.existsSync(`${des}/${size}/${file}`)) {
            console.log("The file: " + `${des}/${size}/${file}`+ " already exists. Skipping.");
          } else {
          // convert the image to webp
          //~ image
            //~ .resize({width: size, withoutEnlargement: true})
            //~ .webp({quality: 75})
            //~ .toFile(`${des}/${name}-${size}.webp`);
          console.log("Creating image: " + `${des}/${size}/${file}`);  
          image
            .metadata()
            .then(function(metadata) {
              // create links if size.width > than original file
              if(size >= metadata.width) {
                fs.symlink('../'+`${file}`, `${des}/${size}/${file}`, 'file', err => {  
                  if (err) {  
                    console.log("file already exists, skipping " + `${size}/${file}`);  
                  }  
                });              
              } else {
                if(metadata.format == 'jpeg') {
                return image
                  .resize({width: size, withoutEnlargement: true})
                  .jpeg({ progressive: true, optimiseScans: true })
                  .toFile(`${des}/${size}/${name}.jpg`);
                } else if (metadata.format == 'png') {
                  return image
                    .resize({width: size, withoutEnlargement: true})
                    .png({ compressionLevel: 9 })
                    .toFile(`${des}/${size}/${name}.png`);
                }              
              }            
            });            
          } 
        });        
    });
  } catch(err) { console.log('Error:', err.stack); }
});
