var r = require('rethinkdb');
var express = require('express');
var app = express();

var rethinkDBAuth = 'AUbDSJcg5E4TeRmwNKFxRazQCmSlWOx4sxj8-iRDcsI';

var rethinkDBURL = 'https://aws-us-east-1-portal20.dblayer.com';
var dbConnection = null;

startServer();

function startServer() {
      r.connect( {host: 'localhost', port: 28015,username :'admin',password:rethinkDBAuth, db : 'slacktravel'}, function(err, conn) {
        if (err) throw err;
        dbConnection = conn;
        console.log(conn);
  });
}

