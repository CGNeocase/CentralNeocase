//Md Khan
var startDate = new Date();
var startTime = startDate.getTime();


neocase.form.event.bind("loadcomplete",function(){
var difference = (new Date()).getTime() - startTime; 
console.warn("loadcomplete : "+difference);

});



neocase.form.event.bind("init",function(){
var difference = (new Date()).getTime() - startTime; 
console.warn("Init : "+difference);
});


neocase.form.event.bind("preinit",function(){
var difference = (new Date()).getTime() - startTime; 
console.warn("Preinit : "+difference);

});