// @ts-nocheck
const { cacheDirs } = require('../config');
const rimraf = require('rimraf');
const path = require('path');
const fs = require('fs');

const removeAllFilesAndFolders = (dirpath) => {
  if (!fs.existsSync(dirpath)) {
    console.log('Folder does not exist:', dirpath);
    return;
  }
  rimraf(path.join(dirpath, '*'), () =>
    console.log('remove all items in', dirpath)
  );
};

cacheDirs.forEach(removeAllFilesAndFolders);
