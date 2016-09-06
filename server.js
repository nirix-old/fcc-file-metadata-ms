//
// FCC File Metadata Microservice
// Copyright (C) 2016 Nirix
//
var express = require('express');
var multer = require('multer');
var router = express();
var upload = multer({ dest: 'uploads/' });

router.get('/', function(req, res){
  res.send([
    '<h1>File Metadata Microservice</h1>',
    '<form action="/get-file-size" method="post" enctype="multipart/form-data">',
    '<input type="file" name="file">',
    '<button type="submit">Submit</button>',
    '</form>'
  ].join('<br>'));
});

router.post('/get-file-size', upload.single('file'), function(req, res){
  if (!req.file) {
    return res.status(400).json({ error: 'No file' });
  }

  res.json({
    size: req.file.size
  });
});

router.listen(process.env.PORT || 3000, function(){
  console.log('Server listening on port', process.env.PORT || 3000);
});
