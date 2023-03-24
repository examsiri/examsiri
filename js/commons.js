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

//var gcbseurl="https://script.google.com/macros/s/AKfycby0B8Rmda8qEwItVG7x-F1TRWaA0GsEQf6k3cn4q0tjcuzBe8W7kJ-qFMrSIRMd_vaJ/exec"
//var gcbse10url = "https://script.google.com/macros/s/AKfycbwqsn0LiJjK7TXwGGnfotar0XuzgFqJ9WTLL5hANKXESaHqQT3GQSDzusXlmziUVeE/exec"