
var courses = [
    {name: "HTML", price: 100},
    {name: "CSS", price: 200},
    {name: "JS", price: 300}
];

// forEach
Array.prototype.forEach2 = function (callback) {
    for(var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
}
courses.forEach2(function (course, index, array) {
    console.log(course, index, array);
});



//some
Array.prototype.some2 = function(calback){

    var output = false;

    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(calback(this[index], index, this)){
                output = true;
                break;}
        }
    }
    return output
}



var result = courses.some2(function(course, index, array){
    return course.price>=300
})

console.log(result)


Array.prototype.every2 = function(calback){

    var output = true;

    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(calback(this[index], index, this)){
                output = false;
                break;}
        }
    }
    return output
}



var result = courses.every2(function(course, index, array){
    return course.price>=200
})

console.log(result)

// map
Array.prototype.map2 = function (callback) {
    var output = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            output.push(callback(this[index], index, this));
        }
    }
    return output;
}
var result = courses.map2(function (course) {
    return course.name;
});
console.log(result);

// filter
Array.prototype.filter2 = function (callback) {
    var output = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                output.push(this[index]);
            }
        }
    }
    return output;
}

var result = courses.filter2(function (course) {
    return course.price > 100;
});

console.log(result);

// find
Array.prototype.find2 = function (callback) {
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                return this[index];
            }
        }
    }
}

var result = courses.find2(function (course) {
    return course.price > 100;
});
console.log(result);

Array.prototype.reduce2 = function (callback, initialValue) {
    var i = 0;
    var acc = initialValue;
    if (initialValue === undefined) {
        i = 1;
        acc = this[0];
    }
    for(i; i<this.length; i++){
        acc = callback(acc, this[i], i, this);
    }
    return acc;
}

var result = courses.reduce2(function (acc, course, index, array) {
    return acc + course.price;
}, 0);
console.log(result);

console.log(result);

// calback
function aaa(){
    return function(){
        return function(){
            return function(){
                return "Hello World";
            }
        }
    }
}

// console.log(aaa()()()());

