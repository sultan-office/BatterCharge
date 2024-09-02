if ('getBattery' in navigator) {
    navigator.getBattery().then((battery) => {
        console.log(`Battery Level: ${battery.level * 100}%`);
    });
} else {
    console.log("Battery API is not supported in this browser.");
}
