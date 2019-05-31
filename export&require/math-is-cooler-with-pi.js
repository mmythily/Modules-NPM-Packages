function getPI() {
    var PI = 3.141;
    return PI;
}

module.exports = {
    PHI: 1.618,
    explain: function (){
        console.log(`(X+Y) is to X as X is to Y: (X+Y) ~= ${this.PHI}`);
    },

    //getCircumference: takes the diameter of a circle as a parameter, 
    //multiplies it by PI, then returns the calculated circumference. 
    //It only ever accesses the value of PI through the use of our private function.
    getCircumference: function (diameter){
        var circumference = diameter * getPI();
        return circumference;
    }
};