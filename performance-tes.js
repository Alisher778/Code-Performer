function test () {
  performance.mark("start-time");

var y = [];
var  g= ["Alisher", 7, "Hello",121];
for(var i = 0 ; i<g.length;i++){
  if(typeof i === "number"){
     y.push(i*23+23)
  }else{
    y.push(i)
  }
}
y;
performance.mark("end-time");
performance.measure("hello", "start-time", "end-time");
var measures = performance.getEntriesByName("hello");
var measure = measures[0];
console.log("setTimeout milliseconds:", measure.duration);
performance.clearMarks();
performance.clearMeasures();
}
test()


function test2 () {
var s = performance.now();

var y = [];
var  g= ["Alisher", 7, "Hello",121];
for(var i = 0 ; i<g.length;i++){
  if(typeof i === "number"){
     y.push(i*23+23)
  }else{
    y.push(i)
  }
}
y;
var f = performance.now()
console.log(f-s)
}
test2()


