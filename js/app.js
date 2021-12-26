document.addEventListener("DOMContentLoaded",()=>{
    console.log("ok")
    let form, warning, btn_form, traitement
    form = document.querySelector(".form");
    warning = document.querySelector(".warning");
    btn_form = document.getElementsByTagName("input")[2];
    console.log(btn_form)
    /* affectation de valeur et de type */
    console.log(btn_form.innerText)
 
    btn_form.addEventListener("click",(e)=>{
         form.classList.add('appear')
    })
    traitement = (e)=>{
        e.preventDefault()
        let User = {
            email:document.getElementsByTagName("input")[0].value,
            mdp:document.getElementsByTagName("input")[1].value,
        }
        if(!User.email || !User.mdp || !isNaN(User.email)){
            warning.classList.add("warning")
            warning.innerText ="Champs vides: remplir les champs!"
            warning.style.display = "block";
        }
        else{
            sessionStorage.setItem("email", User.email);
            localStorage.setItem("email", User.email)
            localStorage.setItem("mdp", User.mdp)
            /* lien avec la 2ème page */
            document.location.assign("accueil.html")
        }
    }

    btn_form.addEventListener("click", traitement)

})