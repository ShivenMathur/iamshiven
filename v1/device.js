function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        document.getElementById("device").innerHTML="You are using Android.";
    }


    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        document.getElementById("device").innerHTML="You are using iOS.";

    }

    else{
        document.getElementById("device").innerHTML="You are using a computer.";
    }



    
}



getMobileOperatingSystem();

// Copyright © 2022 Shiven Mathur. All rights reserved.