var script=document.createElement("script");
script.type="text/javascript";
script.src="jquery.min.js";
document.getElementsByTagName('head')[0].append(script);

$(".li_fun").click(function () {
    alter("?");
})