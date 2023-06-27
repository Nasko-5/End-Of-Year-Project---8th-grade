const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const baseDirectory = 'public/files'; // Set the base directory

function checkIfFile(file) {
  return fs.statSync(file).isFile();
}

function getFileTypes(directoryPath, fileList) {
  const output = [];
  for (const file of fileList) {
    const filePath = path.join(directoryPath, file); // Get the full path of the file
    if (checkIfFile(filePath)) {
      output.push([true, filePath, file]);
    } else {
      output.push([false, filePath, file]);
    }
  }
  return output;
}

function readFiles(fileList) {
  const fileContentList = [];
  for (const filePair of fileList) {
    const isAFile = filePair[0];
    const filePath = filePair[1];
    const fileName = filePair[2];
    if (isAFile) {
      console.log(filePath);
      const contents = fs.readFileSync(filePath, 'utf8');

      const lines = contents.replace('\r', '').split('\n');
      const fileType = lines[0];
      const fileLink = lines[1];

      fileContentList.push([isAFile, filePath, [fileType, fileName, fileLink]]);
    } else {
      fileContentList.push([isAFile, filePath, fileName]);
    }
  }
  return fileContentList;
}

function assembleLink(file, req) {
  const isFile = file[0];
  const filePath = file[1];

  if (isFile) {
    const fileInfo = file[2];
    const fileType = fileInfo[0];
    const fileName = fileInfo[1];
    const fileLink = fileInfo[2];
   
    return `
      <li>
        <div class="file-link" media-link="${fileLink}" fileType="${fileType}" windowName="${fileName}">
          <div class="${fileType} file-icon"></div>
          <p>${fileName}</p>
        </div>
      </li>
    `;
  } else {
    const fileName = file[2];
    const URIPart = encodeURIComponent(path.join((req && req.query && req.query.file) || '', fileName));

    return `
      <li>
        <a href="/files?file=${URIPart}">
          <div class="file-link">
            <div class="folder file-icon"></div>
            <p>${fileName}</p>
          </div>
        </a>
      </li>
    `;
  }
}

function generateLinks(files, req) {
  const links = [];
  for (const file of files) {
    links.push(assembleLink(file, req));
  }
  return links;
}

router.get('/files', (req, res) => {
  const filePath = path.join(baseDirectory, req.query.file || '');
  const filePathIsAFolder = !checkIfFile(filePath);
  
  if (filePathIsAFolder) {
    const files = fs.readdirSync(filePath);
    const fileTypes = getFileTypes(filePath, files);
    const fileContentList = readFiles(fileTypes);
    const fileLinks = generateLinks(fileContentList, req).join('\n');

    res.render('fileexplorer', { files: fileLinks, filePath });
  } else {
    res.redirect('/files');
  }
});

module.exports = router;
