var createSerialGenerator = function () {

    var max = 10000;

    var generate = function () {
        return Math.floor(Math.random() * max)
    }
    return {
        generate: generate
    }
}

module.exports = createSerialGenerator

// module.exports = createSerialGenerator();


// var SerialGenerator = function(){

//     var max = 10000;

//     this.generate = function(){
//         return Math.floor(Math.random() * max)
//     }
// }

// module.exports = new SerialGenerator()
