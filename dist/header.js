var enavbar = function(){
    var output = '<a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">'+
             ' <img class="bi me-2" src="favicon_io/favicon.ico" width="40" height="40"><span class="fs-4">Exam Siri</span>'+
             '</a>'+
             '<ul class="nav nav-pills">';

             for(var i=0;i<menudata.length;i++){
                if(local){
                    menudata[i].url+=".html"
                }
                if(menudata[i].url == window.location.href.replace(/^.*[\\\/]/, '')){
                    output+='<li class="nav-item"><a href=" ' + menudata[i].url+ '" class="nav-link active" aria-current="page">'+menudata[i].title+'</a></li>';    
                }else{
                    output+='<li class="nav-item"><a href=" ' + menudata[i].url+ '" class="nav-link" aria-current="page">'+menudata[i].title+'</a></li>';
                }
             }

    output+='</ul>'
    return output;
}

var metahelper = function(){
    var output = ''+
    '<meta charset="UTF-8">'+
    '<meta name="robots" content="INDEX, FOLLOW">'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">'+
    '<meta name="viewport" content="width=device-width, initial-scale=1">'+
    '<meta name="theme-color" content="#efefef">';
    return  output;
}