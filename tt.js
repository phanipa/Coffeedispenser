left=1
count = 1

console.log('welcome to the simulator');


setTimeout(function(){ var exec1 = require('child_process').exec;
                      var cmd1 = '/home/pi/right.sh';
                      console.log('run right'); 
                      exec1(cmd1,function(error,stderr,stdout){ console.log(stderr); })},15000);

setTimeout(function(){ var exec1 = require('child_process').exec;
                      var cmd1 = '/home/pi/left.sh';
                      console.log('run left'); 
                      exec1(cmd1,function(error,stderr,stdout){ console.log(stderr); })},20000);

setTimeout(function(){ var exec1 = require('child_process').exec;
                      var cmd1 = '/home/pi/right.sh';
                      console.log('run right'); 
                      exec1(cmd1,function(error,stderr,stdout){ console.log(stderr); })},25000);

setTimeout(function(){ var exec1 = require('child_process').exec;
                      var cmd1 = '/home/pi/left.sh';
                      console.log('run left'); 
                      exec1(cmd1,function(error,stderr,stdout){ console.log(stderr); })},30000);

