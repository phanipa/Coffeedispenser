var exec = require('child_process').exec;
var cmd = '/home/pi/showdate.sh';
var sleep = require('system_sleep');
left=1
count = 1
while (count <=10)
{
 console.log(count);
 if (left==1)
  {
    console.log('run left');
    left=0;
  }
   else 
   {
    exec(cmd,function(error,stdout,stderr){
    console.log('stdout:'+stdout);  
    console.log('stderr:'+stderr);
    });
    left =1;
   }
 count++;
 sleep(5*1000);
}
