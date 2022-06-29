//Logic Audio Play Pause
var myAudio = document.getElementById("musicLoop");

function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
};

//Logic Modal
document.getElementById("close").addEventListener("click",function(){
    document.getElementById("modal").style.display = "none";
});

document.getElementById("mod1").addEventListener("click",function(){
    var x = document.getElementById("one").getAttribute("src");
    document.getElementById("one").setAttribute("src", x.slice(0,-7) + "1/1.jpg");

    var f1 = document.getElementById("f1").getAttribute("src");
    document.getElementById("f1").setAttribute("src", f1.slice(0,-7) + "1/1.jpg");

    var f2 = document.getElementById("f2").getAttribute("src");
    document.getElementById("f2").setAttribute("src", f2.slice(0,-7) + "1/2.jpg");

    var f3 = document.getElementById("f3").getAttribute("src");
    document.getElementById("f3").setAttribute("src", f3.slice(0,-7) + "1/3.jpg");

    var f4 = document.getElementById("f4").getAttribute("src");
    document.getElementById("f4").setAttribute("src", f4.slice(0,-7) + "1/4.jpg");

    var f5 = document.getElementById("f5").getAttribute("src");
    document.getElementById("f5").setAttribute("src", f5.slice(0,-7) + "1/5.jpg");

    var f6 = document.getElementById("f6").getAttribute("src");
    document.getElementById("f6").setAttribute("src", f6.slice(0,-7) + "1/6.jpg");

    document.getElementById("modal").style.display = "block";
});

document.getElementById("mod2").addEventListener("click",function(){
    var x = document.getElementById("one").getAttribute("src");
    document.getElementById("one").setAttribute("src", x.slice(0,-7) + "2/1.jpg");

    var f1 = document.getElementById("f1").getAttribute("src");
    document.getElementById("f1").setAttribute("src", f1.slice(0,-7) + "2/1.jpg");

    var f2 = document.getElementById("f2").getAttribute("src");
    document.getElementById("f2").setAttribute("src", f2.slice(0,-7) + "2/2.jpg");

    var f3 = document.getElementById("f3").getAttribute("src");
    document.getElementById("f3").setAttribute("src", f3.slice(0,-7) + "2/3.jpg");

    var f4 = document.getElementById("f4").getAttribute("src");
    document.getElementById("f4").setAttribute("src", f4.slice(0,-7) + "2/4.jpg");

    var f5 = document.getElementById("f5").getAttribute("src");
    document.getElementById("f5").setAttribute("src", f5.slice(0,-7) + "2/5.jpg");

    var f6 = document.getElementById("f6").getAttribute("src");
    document.getElementById("f6").setAttribute("src", f6.slice(0,-7) + "2/6.jpg");

    document.getElementById("modal").style.display = "block";
});

document.getElementById("mod3").addEventListener("click",function(){
    var x = document.getElementById("one").getAttribute("src");
    document.getElementById("one").setAttribute("src", x.slice(0,-7) + "3/1.jpg");

    var f1 = document.getElementById("f1").getAttribute("src");
    document.getElementById("f1").setAttribute("src", f1.slice(0,-7) + "3/1.jpg");

    var f2 = document.getElementById("f2").getAttribute("src");
    document.getElementById("f2").setAttribute("src", f2.slice(0,-7) + "3/2.jpg");

    var f3 = document.getElementById("f3").getAttribute("src");
    document.getElementById("f3").setAttribute("src", f3.slice(0,-7) + "3/3.jpg");

    var f4 = document.getElementById("f4").getAttribute("src");
    document.getElementById("f4").setAttribute("src", f4.slice(0,-7) + "3/4.jpg");

    var f5 = document.getElementById("f5").getAttribute("src");
    document.getElementById("f5").setAttribute("src", f5.slice(0,-7) + "3/5.jpg");

    var f6 = document.getElementById("f6").getAttribute("src");
    document.getElementById("f6").setAttribute("src", f6.slice(0,-7) + "3/6.jpg");

    document.getElementById("modal").style.display = "block";
});

document.getElementById("mod4").addEventListener("click",function(){
    var x = document.getElementById("one").getAttribute("src");
    document.getElementById("one").setAttribute("src", x.slice(0,-7) + "4/1.jpg");

    var f1 = document.getElementById("f1").getAttribute("src");
    document.getElementById("f1").setAttribute("src", f1.slice(0,-7) + "4/1.jpg");

    var f2 = document.getElementById("f2").getAttribute("src");
    document.getElementById("f2").setAttribute("src", f2.slice(0,-7) + "4/2.jpg");

    var f3 = document.getElementById("f3").getAttribute("src");
    document.getElementById("f3").setAttribute("src", f3.slice(0,-7) + "4/3.jpg");

    var f4 = document.getElementById("f4").getAttribute("src");
    document.getElementById("f4").setAttribute("src", f4.slice(0,-7) + "4/4.jpg");

    var f5 = document.getElementById("f5").getAttribute("src");
    document.getElementById("f5").setAttribute("src", f5.slice(0,-7) + "4/5.jpg");

    var f6 = document.getElementById("f6").getAttribute("src");
    document.getElementById("f6").setAttribute("src", f6.slice(0,-7) + "4/6.jpg");

    document.getElementById("modal").style.display = "block";
});

document.getElementById("ft1").addEventListener("click", function(){
    var x = document.getElementById("one").getAttribute("src");
    document.getElementById("one").setAttribute("src", x.slice(0,-5) + "1.jpg");
});

document.getElementById("ft2").addEventListener("click", function(){
    var x = document.getElementById("one").getAttribute("src");
    document.getElementById("one").setAttribute("src", x.slice(0,-5) + "2.jpg");
});

document.getElementById("ft3").addEventListener("click", function(){
    var x = document.getElementById("one").getAttribute("src");
    document.getElementById("one").setAttribute("src", x.slice(0,-5) + "3.jpg");
});

document.getElementById("ft4").addEventListener("click", function(){
    var x = document.getElementById("one").getAttribute("src");
    document.getElementById("one").setAttribute("src", x.slice(0,-5) + "4.jpg");
});

document.getElementById("ft5").addEventListener("click", function(){
    var x = document.getElementById("one").getAttribute("src");
    document.getElementById("one").setAttribute("src", x.slice(0,-5) + "5.jpg");
});

document.getElementById("ft6").addEventListener("click", function(){
    var x = document.getElementById("one").getAttribute("src");
    document.getElementById("one").setAttribute("src", x.slice(0,-5) + "6.jpg");
});