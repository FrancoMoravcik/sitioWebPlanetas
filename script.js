const planetasJson = "planetas.json" 
let planetas


const main = document.getElementById("main")

fetch(planetasJson)
.then(response => response.json())
.then(datos => {
    const planetas = datos.slice(0)
    const divPrincipal = document.createElement("div")
    divPrincipal.innerHTML =  `
    <section class="row seccionImg">

     <div id="divImg" class="divImg col-sm-7 d-flex align-items-center justify-content-center">
     <img class="imgPlanetaMERCURIO" src="img/mercurio1.png">
     </div>
     <div class="divInfo col-sm-5 d-flex flex-column align-items-start">
     <h1>MERCURIO</h1>
     <p id="pInfoCambiable">Mercurio es el planeta más pequeño del Sistema Solar y el más cercano al Sol. Su órbita alrededor del Sol tarda 87,97 días rrestres, la más corta de todos los planetas del Sol. Mercurio es uno de los cuatro planetas terrestres del Sistema Solar y es un cuerpo rocoso como la erra.</p>
     <p>Fuente: <a target="blank" href="">Wikipedia <img  class="imgFlecha" src="img/flecha.png"></a></p>
     <button id="btnPrincipal1" class="btnsTextos planeta1">01 DESCRIPCION GENERAL</button>
     <button id="btnPrincipal2" class="btnsTextos planeta1">02 ESTRUCTURA INTERNA</button>
     <button id="btnPrincipal3" class="btnsTextos planeta1">03 GEOLOGIA SUPERFICIAL</button>
     </div> 
    
     </section>
     <section class="seccion2 d-flex justify-content-center align-items-center">
   <div class="divInfoS2">
     <p class="pInfo">TIEMPO DE ROTACIÓN</p>
     <h1 class="h1Info">58.6 DÍAS</h1>
     </div>

     <div class="divInfoS2">
     <p class="pInfo">TIEMPO DE TRASLACIÓN</p>
     <h1 class="h1Info">87.97 DÍAS</h1>
     </div>
     
     <div class="divInfoS2">
     <p class="pInfo">RADIO</p>
     <h1 class="h1Info">2,439.7 KM</h1>
     </div>
     
     <div class="divInfoS2">
     <p class="pInfo">TEMPERATURA PROMEDIO</p>
     <h1 class="h1Info">427°C</h1>
     </div>
     
     </section>
     `
     
     
     main.appendChild(divPrincipal)

     const pInfoCambiable = document.getElementById("pInfoCambiable")
     const divImg = document.getElementById("divImg")

     const btnPrincipal1 = document.getElementById("btnPrincipal1")
     const btnPrincipal2 = document.getElementById("btnPrincipal2")
     const btnPrincipal3 = document.getElementById("btnPrincipal3")

     btnPrincipal1.addEventListener("click", () => {
         pInfoCambiable.innerHTML = ""
         pInfoCambiable.textContent = `Mercurio es el planeta más pequeño del Sistema Solar y el más cercano al Sol. Su órbita alrededor del Sol tarda 87,97 días terrestres, la más corta de todos los planetas del Sol. Mercurio es uno de los cuatro planetas terrestres del Sistema Solar y es un cuerpo rocoso como la Tierra.`
         divImg.innerHTML = `<img class="imgPlanetaplaneta1" src="img/mercurio1.png">`
     })
     
     btnPrincipal2.addEventListener("click", () => {
         pInfoCambiable.innerHTML = ""
         pInfoCambiable.textContent = `Mercurio parece tener una corteza de silicato sólido y un manto que recubre una capa de núcleo externo de sulfuro de hierro sólido, una capa de núcleo líquido más profunda y un núcleo interno sólido. La densidad del planeta es la segunda más alta del Sistema Solar con 5,427 g/cm3, solo un poco menos que la densidad de la Tierra.`
         divImg.innerHTML = `<img class="imgPlanetaplaneta1" src="img/mercurio2.png">`
     })

     btnPrincipal3.addEventListener("click", () => {
         pInfoCambiable.innerHTML = ""
         pInfoCambiable.textContent = `Mercurio es similar en apariencia a la de la Luna, mostrando extensas llanuras parecidas a mares y cráteres pesados, lo que indica que ha estado geológicamente inactivo durante miles de millones de años. Es más heterogéneo que el de Marte o el de la Luna.`
         divImg.innerHTML = `<img class="imgPlanetaplaneta1" src="img/mercurio3.png">`
     } )
     
     const divBtns = document.getElementById("divBtns")
     
     planetas.forEach(element => {
         
         const botonPlanetas = document.createElement("button")
         botonPlanetas.textContent = element.planeta
         
        botonPlanetas.classList.add(element.planeta)
        
        
        botonPlanetas.addEventListener("click", () => {
            mostrarInformacion(element)
        })
        
        divBtns.appendChild(botonPlanetas)
    });
    
    
})
.catch(error => console.error('Error al cargar el archivo JSON:', error));


function mostrarInformacion(element) {
     main.innerHTML = ``
    main.innerHTML = `
     <section class="row seccionImg">

     <div id="divImg" class="divImg col-lg-7 col-sm-6 d-flex align-items-center justify-content-center">
     <img class="imgPlaneta${element.planeta}" src="${element.img}">
     </div>

     <div class="divInfo col-lg-5 col-sm-6 d-flex flex-column align-items-start">

     <h1>${element.planeta}</h1>
     <p id="pInfoCambiable">${element.DescripcionGeneral}</p>
     <p>Fuente: <a target="blank" href="${element.wikipedia}">Wikipedia <img  class="imgFlecha" src="img/flecha.png"></a></p>

     <button id="btn1${element.id}" class="btnsTextos ${element.id}">01 DESCRIPCION GENERAL</button>
     <button id="btn2${element.id}" class="btnsTextos ${element.id}">02 ESTRUCTURA INTERNA</button>
     <button id="btn3${element.id}" class="btnsTextos ${element.id}">03 GEOLOGIA SUPERFICIAL</button>
 </div> 
     
     </section>

     <section class="seccion2 d-flex justify-content-center align-items-center">

     <div class="divInfoS2">
     <p class="pInfo">TIEMPO DE ROTACIÓN</p>
     <h1 class="h1Info">${element.tiempoDeRotacion}</h1>
     </div>
     
     <div class="divInfoS2">
     <p class="pInfo">TIEMPO DE TRASLACIÓN</p>
     <h1 class="h1Info">${element.tiempoDeTraslacion}</h1>
     </div>
     
     <div class="divInfoS2">
     <p class="pInfo">RADIO</p>
     <h1 class="h1Info">${element.radio}</h1>
     </div>
     
     <div class="divInfoS2">
     <p class="pInfo">TEMPERATURA PROMEDIO</p>
     <h1 class="h1Info">${element.temperaturaPromedio}</h1>
     </div>
     
     </section>
     `
     const pInfoCambiable = document.getElementById("pInfoCambiable")
     const divImg = document.getElementById("divImg")
     
     const botonDeInformacion1 = document.getElementById(`btn1${element.id}`)
     const botonDeInformacion2 = document.getElementById(`btn2${element.id}`)
     const botonDeInformacion3 = document.getElementById(`btn3${element.id}`)
     
     const primerBoton = () => {
             pInfoCambiable.innerHTML = ""
             pInfoCambiable.textContent = `${element.DescripcionGeneral}`
             divImg.innerHTML = `<img class="imgPlaneta${element.planeta}" src="${element.img}">`
         }
     const segundoBoton = () => {
             pInfoCambiable.innerHTML = ""
             pInfoCambiable.textContent = `${element.EstructuraInterna}`
             divImg.innerHTML = `<img class="imgPlaneta${element.planeta}" src="${element.img2}">`
         }
     const tercerBoton = () => {
             pInfoCambiable.innerHTML = ""
             pInfoCambiable.textContent = `${element.geologiaSuperficial}`
             divImg.innerHTML = `<img class="imgPlaneta${element.planeta}" src="${element.img3}">`
         } 

botonDeInformacion1.addEventListener("click", () => {
        primerBoton()
    })
botonDeInformacion2.addEventListener("click", () => {
         segundoBoton()   
    })
 botonDeInformacion3.addEventListener("click", () => {
        tercerBoton()     
    })
    
}