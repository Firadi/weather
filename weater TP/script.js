let l;

const successCallback = (position) => {
    console.log(position);
    l=position;
    ajax();
};

const errorCallback = (error) => {
    console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
let response;
function ajax(){
    let req=new XMLHttpRequest();
    req.open("GET","https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+l.coords.latitude+","+l.coords.longitude+"/?key=8AYZUR8EPNM7YDCKXURSUXAB8",false);
    req.onreadystatechange=()=>{
        console.log(req.readyState);
        if(req.readyState==4 && req.status==200){
            response=JSON.parse(req.responseText)
            console.log(response);
};
let dayIcon = document.getElementById("icon");
dayIcon.setAttribute("src","icons/" + response.days[0].icon + ".svg"); 
console.log(response.days[0].icon);

}
req.send();
}

