<template>
    
</template>

<script>
var config = {
    units: "imperial",
    debug: process.env.NODE_ENV === 'development'
};

// Create the simpleWeather base object 
//  - pass in an optional config object 
var simpleWeather = require("simple-weather")(config);

// Get the current weather of London, UK for Open Weather API v2.5 
simpleWeather["v2.5"].current.byCityName("London", "uk").then(function (response) {
    console.log("Current Weather of London, UK is");
    console.log("Temperature:", response.main.temp, "Farenheit");
}).catch(function (err) {
    console.error(err.stack);
});

</script>

<style>

</style>