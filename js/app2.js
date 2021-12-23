document.addEventListener("DOMContentLoaded",()=>{
    let message, login_connect, data, btn_back
    message = document.querySelector("h2")
    login_connect = localStorage.getItem("")
    message.innerHTML+= `&nbsp;${login_connect}`
    btn_back = document.querySelector(".connect")
    data=[]
    data.push(login_connect)
    console.table(data)
    })