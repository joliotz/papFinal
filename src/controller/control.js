function validaRegisto(){
    if(document.getElementById("username").value != "" && document.getElementById("username").value != null &&
       document.getElementById("password").value != "" && document.getElementById("password").value != null &&
       document.getElementById("passwordConfirmacao").value != "" && document.getElementById("passwordConfirmacao").value != null &&
       document.getElementById("password").value == document.getElementById("passwordConfirmacao").value)
       return true;
    else
        alert("introduza os dados de registo corretamente");
        return false;
}

async function register(){

    if(validaRegisto()){
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'authorization': localStorage.getItem("token")
            },
            body: JSON.stringify({
                username: document.getElementById("username").value,
                password: document.getElementById("password").value,
                level:"admin"
            })
        }
    
        await fetch('http://localhost:3001/api/admin/admins', options)
        .then((res) => {
            if(res.status == 200){
                document.getElementById("listaAdmins").innerHTML = ""
                fillAdmins();
                document.getElementById("username").value = ""
                document.getElementById("password").value = ""
                document.getElementById("passwordConfirmacao").value = ""
                document.getElementById("msgErro").style.display = "none"}
            else{
                document.getElementById("username").value = ""
                document.getElementById("password").value = ""
                document.getElementById("passwordConfirmacao").value = ""
                document.getElementById("msgErro").style.display = "block" 
            }
          })
          .catch((error) => console.log(error));
          
    }      
}

function insertCatalog() {

    fetch('http://localhost:3001/catalogCon')
        .then(respo => respo.json())
        .then(data => insertC(data))
        .catch(function(err) {
            alert('Ocorreu um problema' + err)
        })
  
  }

  function insertC(data) {
    const productCard = document.getElementById('catalog')
    productCard.innerHTML = ''
    try {
        for (let a = 0; a < 999; a++) {
            let productImage = data[a].productImage
            let productTitle = data[a].productName
            let productDescription = data[a].productDescription
            let productPrice = data[a].productPrice
            let href = data[a].redirect
            let ID = data[a].productID
            
            productCard.innerHTML += `<div class="col-md-4 mt-5">
                                        <section class="product-panel 12dp">
                                            <div class="pro-img-box">
                                                <img src="${productImage}" alt="" />
                                                <a href="${href}" class="adtocart">
                                                    <i class="fa fa-shopping-cart"></i>
                                                </a>
                                            </div>
                                            <div class="panel-body text-center">
                                                <h4>
                                                    <a href="${href}" class="pro-title">
                                                        ${productTitle}
                                                    </a>
                                                </h4>
                                                <p class="price">${productPrice} €</p>
                                            </div>
                                        </section>
                                    </div>`
                
        }
    } catch (e) {
  
    }
    
  }

  function insertRecom() {

    fetch('http://localhost:3001/recom')
        .then(respo => respo.json())
        //.then(console.log(dataP))
        //.then(dataP => console.log(dataP))
        .then(data => insertProducts(data))
        .catch(function(err) {
            alert('Ocorreu um problema' + err)
        })
  
  }
  
  
  function insertProducts(data) {
    const productCard = document.getElementById('productsCard')
    productCard.innerHTML = ''
    try {
        for (let a = 0; a < 4; a++) {
            let productImage = data[a].productImage
            let productTitle = data[a].productName
            let productDescription = data[a].productDescription
            let productPrice = data[a].productPrice
            let ID = data[a].productID
            let href = data[a].redirect
            productCard.innerHTML += `<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <a href="${href}">
                                            <div class="card-flyer">
                                                <div class="text-box">
                                                    <div class="image-box">
                                                        <img src=${productImage} alt="" />
                                                    </div>
                                                    <div class="text-container">
                                                        <h6>${productTitle}</h6>
                                                        <p>${productDescription}</p>
                                                        <p style="font-size: 25px; color: green">${productPrice} €</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>`
                
        }
    } catch (e) {
      console.log(e)
    }
    
  }