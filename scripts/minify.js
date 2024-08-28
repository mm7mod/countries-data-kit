const fs = require('fs');
const path = require('path');
const jsonminify = require('jsonminify');

const sourceDir = path.join(__dirname, '../data');
const destDir = path.join(__dirname, '../dist/data');

// Ensure the destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Read all files from the source directory
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('Error reading source directory:', err);
    return;
  }

  files.forEach(file => {
    if (path.extname(file) === '.json') {
      const sourceFilePath = path.join(sourceDir, file);
      const destFilePath = path.join(destDir, file);

      // Read, minify, and write each JSON file
      fs.readFile(sourceFilePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        try {
          const minifiedData = jsonminify(data);
          fs.writeFile(destFilePath, minifiedData, 'utf8', err => {
            if (err) {
              console.error('Error writing file:', err);
            } else {
              console.log(`Minified ${file} and saved to ${destFilePath}`);
            }
          });
        } catch (e) {
          console.error('Error minifying JSON data:', e);
        }
      });
    }
  });
});
