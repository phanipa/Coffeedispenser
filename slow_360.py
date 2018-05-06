import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(18,GPIO.OUT)

p = GPIO.PWM(18,100)

p.start(72.5)

try:
   while True:
       p.ChangeDutyCycle(72.5)
       time.sleep(2)
except KeyboardInterrupt:
       p.stop()

GPIO.cleanup()
