document.addEventListener("DOMContentLoaded",()=>{
    let message, login_connect, data, btn_back
    message = document.querySelector("h2")
    message2 = document.querySelector("h3")
    login_connect = localStorage.getItem("email")
    message.innerHTML+= `&nbsp;${login_connect}`;
    message2.innerHTML+= `&nbsp; ${login_connect}`;
    btn_back = document.querySelector(".connect");
    data=[]
    data.push(login_connect)
    console.table(data)
    })