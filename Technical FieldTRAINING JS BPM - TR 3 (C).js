/* myFirstJSforNeocase
Version : V 0.1
Author : Riya Dutta */
var startDate = new Date();
var startTime = startDate.getTime();
neocase.form.event.bind("preinit",function()
{
var endTime = new Date().getTime(); 
var diff = endTime - startTime; 
}
);

neocase.form.event.bind("init",function()
{
endTime = new Date().getTime(); 
diff = endTime - startTime;
}
);

neocase.form.event.bind("loadcomplete",function()
{
endTime = new Date().getTime(); 
diff = endTime - startTime;
}
);