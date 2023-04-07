var globaltimeout = 0;
function getQueryStringByKey(key){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    if(params[key]){
        return params[key];
    }else{
        return '';
    }
} 

