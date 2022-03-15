function renderNavFootAut(){
    if(localStorage.getItem("token")){
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'authorization': localStorage.getItem("token")
            },
            body: JSON.stringify()
        }

        fetch('http://localhost:3001/api/open/getAuth', options)
        .then((res) => {
            if(res.status===200){
                return res.json()
            }
            else{
                localStorage.removeItem("token");
                renderNav();
                return null
            }
        })
        .then((res)=>{
            if(res){
            console.log(res);
            switch (res.level) {
                case 'regular':
                    renderNavRegular();
                    break;
                case 'admin':
                    renderNavRegular();
                    break;
            }
        }else return;
        })
        .catch((error) => console.log(error));
    }else{
        renderNav();
    }
}

function renderFooter(){
    renderCode("footer",`<div class="footer-clean">
                    <footer>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-sm-4 col-md-3 item">
                                    <h3  style="color:white !important">Desenvolvimento</h3>
                                    <ul>
                                        <li><a href="https://getbootstrap.com">Bootstrap</a></li>
                                        <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">HTML</a></li>
                                        <li><a href="https://www.apachefriends.org/index.html">Host</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-4 col-md-3 item">
                                    <h3 style="color:white !important">Sobre</h3>
                                    <ul>
                                        <li><a href="#">Contacto</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-4 col-md-3 item">
                                    
                                </div>
                                <div class="col-lg-3 item social">
                                    <a href="#" ><i class="bi bi-facebook"></i></a>
                                    <a href="#"><i class="bi bi-twitter"></i></a>
                                    <a href="#"><i class="bi bi-youtube"></i></a>
                                    <a href="#"><i class="bi bi-instagram"></i></a>
                                    <p class="copyright">SportAzores © 2022</p>
                                </div>
                            </div>
                        </div>
                        
                    </footer>
                </div>`)
}

function renderNav(){
    renderCode('nbar',
    `<nav>
        <a href="/"><img src="https://media.discordapp.net/attachments/853331282540232794/935609588022120519/SPORTAZORES_free-file_1.png"></a>
            <div class="nav-links" id="navLinks">
                <script src="https://kit.fontawesome.com/2c4d58ac63.js" crossorigin="anonymous"></script>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/catalog">CATÁLOGO</a></li>
                    <li><a href="/contacto">CONTACTO</a></li>
                    <li><a href="/loginsignup"><i class="bi bi-person-circle"></i></a></li>
                </ul>
            </div>
    </nav>`)
}

function renderNavRegular(){
    renderCode('nbar',
    `<nav>
    <a href="/"><img src="https://media.discordapp.net/attachments/853331282540232794/935609588022120519/SPORTAZORES_free-file_1.png"></a>
        <div class="nav-links" id="navLinks">
            <script src="https://kit.fontawesome.com/2c4d58ac63.js" crossorigin="anonymous"></script>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/catalog">CATÁLOGO</a></li>
                <li><a href="/contacto">CONTACTO</a></li>
                <li><a href="/feedback">FEEDBACK</a></li>
                <li><a href="/carrinho"><i class="bi bi-cart"></i></a></li>
                <li><a onclick="logout();"><i class="bi bi-box-arrow-right text-white"></i></a></li>
            </ul>
        </div>
</nav>`
    )
}

function logout(){
    localStorage.removeItem("token");
    location.replace("http://localhost:3001/loginsignup");
}

function renderCode(id,code){
    document.getElementById(id).innerHTML = code;
}