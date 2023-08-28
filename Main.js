window.addEventListener(DeviceMotionEvent, accel_Update, true)
var AccelX = DeviceMotionEvent.acceleration.x
var AccelY = DeviceMotionEvent.acceleration.y
var AccelZ = DeviceMotionEvent.acceleration.z



function accel_Update(event) {
    var AccelX = event.acceleration.x
    var AccelY = event.acceleration.y
    var AccelZ = event.acceleration.z


    Accel_x.innerHTML = AccelX
    Accel_y.innerHTML = AccelY
    Accel_z.innerHTML = AccelZ
}

/*
window.addEventListener("devicemotion", motionHandler);
function motionHandler(evt){
    // Access Accelerometer Data
    ax = evt.accelerationIncludingGravity.x;
    ay = evt.accelerationIncludingGravity.y;
    az = evt.accelerationIncludingGravity.z;
    // Access Gyroscope Data
    rR = evt.rotationRate;
    if (rR != null){
    gx = rR.alpha;
    gy = rR.beta ;
    gz = rR.gamma;
    }

    Accel_x.innerHTML = ax
    Accel_y.innerHTML = ay
    Accel_z.innerHTML = az
}
*/