var http = require('http');
var url = require('url');
var exec1 = require('child_process').exec;
var exec2 = require('child_process').exec;
var cmd1 = '/home/pi/right.sh';
var cmd2 = '/home/pi/left.sh';
var flag = 1;

     if (flag == 1) { exec1 (cmd1,function(error,stderr,stdout){console.log(stdout);}); flag=0;}
     if (flag == 0) { exec2 (cmd2,function(error,stderr,stdout){console.log(error);}); flag=1;}

