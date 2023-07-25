-----JavaScript---
$(document).ready(function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    var x = canvas.width;
    var apiKey = "23de1c80f509ba3cc82a5f08c568172f";
    var apiUrl= "http://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&units=metri&appid="+ apiKey;
    setInterval(function() {
        $.ajax({
            url: apiUrl,
            type: "GET",
            success: function(data) {
                var weatherInfo = "Temperature: " + data.main.temp + "c, Humidity: " +data.main.humidity + "%";
                x = canvas.width;
                ctx.clearRect(0, 0, canvas.width,canvas.height);
                ctx.font = "20px Arial";
                ctx.fillText(weatherInfo, x, 50);
            },
            error: function(error){
                console.log(error);
            }
        });
    }, 2000);
    function animate() {
        x--;
        if(x < -cnavas.width) {
            x=canvas.width;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "20px Arial";
        ctx.fillText(weatherInfo, x, 50);
        requestAnimationFrame(animate);
    }
    animate();
});
