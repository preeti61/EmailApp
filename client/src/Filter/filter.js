import React from 'react';



export const filterReducer=(data)=>{

    
    if(data.length===0)
    return data;
    data.sort((a,b)=>{
        console.log(a.time<b.time)
       return  a.time<b.time?1:-1;
    })
    return data;
   
}

export const arrayBufferToBase64=(buffer)=> {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};
