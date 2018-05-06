import RPi.GPIO as GPIO
GPIO.cleanup
GIPOP.setmode(GPIO.BOARD)
GPIO.setup(11,GPIO.OUT) 
GPIO.output(11,True);
my_pwm = GPIO.PWM(11,100) //100 denotes 100 milli secs 100 Hz frequency 
my_pwm.start(50) // 50 is duty cycle
my_pwm.ChangeDutyCycle(10) // up for 1 ms and down 90 ms 
my_pwm.ChangeFrequency(50) // change freqeuncy
you can change the brightness of LED by changing DutyCycle
my_pwm.stop() 
GPIO.cleanup()

