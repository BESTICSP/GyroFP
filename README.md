# GyroFP

Device fingerprint is information about the target computing device for the purpose of identification. The fingerprinting algorithm that how to assimilate the target into an identifier has been well studied for more than 20 years. However, the recent obfuscation method against device fingerprinting makes collecting this information more difficult. In order to solve these problems, this paper proposes a new type of fingerprinting method that relies on the resonant frequency response of the gyroscope. Our method first generates an ultrasonic as the trigger signal and obtains the sensor’s output through the application program or the web browser as the response. After the sensor output being normalized during the data preprocessing, resonance features are extracted after frequency domain analysis. Finally, the mobile device is identified through these features matching. In the experiment, we test many types of mobile phones to demonstrate that our method is feasible while users are unaware of this process. For instance, we find that some features are stable when the posture of the mobile device or the time change. There are 10 features based on resonance frequency that can help us improve the classification accuracy to 96.5%. The comprehensive experiments demonstrate that our method can effectively distinguish different types of mobile devices. Even if it is the same model of mobile devices with the same type of gyroscopes, this method still has a good performance.


MIT license

Programmer: Junze Tian

Email: zjy@besti.edu.cn

Accepted by IEEE ACCESS
