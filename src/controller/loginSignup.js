async function login(){
    const errT = document.getElementById('errTxt');
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById("username").value,
            password: document.getElementById("password").value,
        })
    }
    if(validaLogin()){
    await fetch('http://localhost:3001/api/open/login', options)
    .then((res) => {
        if(res.status===406){
            errT.innerHTML = ``;
            errT.innerHTML += `<i class="bi bi-exclamation-triangle"></i> <b>Dados incorretos</b> <i class="bi bi-exclamation-triangle"></i>`;
            return
        }       
        let token = res.headers.get("Authorization");
        localStorage.setItem("token", token);
      })
      .catch((error) => console.log(error));

      if(localStorage.getItem("token")){
           location.href = "http://localhost:3001";
      }
    }
}

function validaLogin(){
    const errT = document.getElementById('errTxt');
    if(document.getElementById("username").value != "" && document.getElementById("username").value != null &&
       document.getElementById("password").value != "" && document.getElementById("password").value != null)
       return true;
    else
        errT.innerHTML = ``;
        errT.innerHTML += `<i class="bi bi-exclamation-triangle"></i> <b>Preencha todos os campos</b> <i class="bi bi-exclamation-triangle"></i>`;
        return false;
}

function validaRegisto(){
    const rgsErr = document.getElementById('rgsErr');
    if(document.getElementById("Rusername").value != "" && document.getElementById("Rusername").value != null &&
       document.getElementById("Remail").value != "" && document.getElementById("Remail").value != null &&
       document.getElementById("Rpassword").value != "" && document.getElementById("Rpassword").value != null)
       return true;
    else
    rgsErr.innerHTML = ``;
    rgsErr.innerHTML += `document.getElementById("Rpassword").value = ""`;
        return false;
}

async function register(){

    if(validaRegisto()){
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: document.getElementById("Rusername").value,
                email: document.getElementById("Remail").value,
                password: document.getElementById("Rpassword").value,
                level:"regular"
            })
        }
        await fetch('http://localhost:3001/api/open/register', options)
        .then((res) => {
            if(res.status == 200)
            location.reload();
            else{
               
                document.getElementById("Rusername").value = ""
                document.getElementById("Remail").value = ""
                document.getElementById("Rpassword").value = ""
                //document.getElementById("rgsErr").value = `<i class="bi bi-exclamation-triangle"></i> <b>Preencha todos os campos</b> <i class="bi bi-exclamation-triangle"></i>`

            }
          })
          .catch((error) => console.log(error));
          
    }else{
        
    } 
}

