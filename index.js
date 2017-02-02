let a_day = 1000*60*60*24; //ms

[].forEach.call(document.getElementsByTagName("input"), function(e){
  e.addEventListener('change', function(){
    var s = new Date(document.getElementById("startDate").value).getTime();
    var e = new Date(document.getElementById("endDate").value).getTime();
    
    document.getElementById("result").innerHTML = (s > e ? "Start should be less than end date" : Math.round((e-s)/a_day)+" days" )
})
});
