// script .js
const rangevalue = document.querySelector(".slider-container.price-slider");
const rangeInputvalue = document.querySelectorAll(".range-input input");

//set the price gap
let priceGap = 500;

//adding event listeners to price input elements
const priceInputvalue = document.querySelectorAll(".price-input input");
for (let i = 0; i< priceInputvalue.length; i++) {
    priceInputvalue[i].addEventListener("input",e => {
        //parse min and max values of the range
        let minp = parseInt(priceInputvalue[0].value);
        let maxp = parseInt(priceInputvalue[1].value);
        let diff = maxp -minp
        if(minp <0) {
            alert("
                minimum price cannot be less than 0");
                priceInputvalue[0].value = 0;
                minp = 0;
        }
        // validate the input values
        if (maxp > 10000) {
            alert ("maximum price cannot be greater than 10000");
        priceInputvalue'