const video = document.querySelector("video");

video.addEventListener("canplay",function(){
    console.log("canplay");
});


video.addEventListener("play",function(){
    console.log("play");
});

video.addEventListener("pause",function(){
    console.log("pause");
});

video.addEventListener("ended",function(){
    console.log("Thanks for watching");
});
video.addEventListener("Volumechange",function(){
    console.log("volumechange");
});
