window.addEventListener('load', ()=>{
    let test = document.getElementById('imagen-inicio');
    setTimeout(()=>{
        test.style.animation = 'imagenFlotante 6s linear infinite';
    },1500)
})
let body = document.getElementById('body');
let alturaPantalla = window.innerHeight;
let texto = document.querySelectorAll('.element-color-white');
let cohete = document.getElementById('icon-tabler-rocket');
let proyectosCargados = false;
document.addEventListener('scroll', ()=>{
    pantalla = window.scrollY / alturaPantalla;
    console.log(window.scrollY);
    if(pantalla == 0){
        body.style.backgroundColor = '#000';
        texto.forEach(e =>{
            e.classList.remove('element-color-black');
        })
        cohete.style.stroke = '#ffffff';
    } 
    if(pantalla == 1){
        body.style.backgroundColor = '#fff';
        texto.forEach(e =>{
            e.classList.add('element-color-black')
        })
        cohete.style.stroke = '#000';
        if(!proyectosCargados){
            cambiarProyecto(numeroProyecto);
            proyectosCargados = true;
        }
    }
    if(pantalla == 2){
        body.style.backgroundColor = '#1a1a1a';
        texto.forEach(e =>{
            e.classList.remove('element-color-black')
        })
        cohete.style.stroke = '#ffffff';

    }
    if(pantalla == 3){
        body.style.backgroundColor = '#1a1a1a';
        texto.forEach(e =>{
            e.classList.remove('element-color-black')
        })
        cohete.style.stroke = '#fff';

    }
})
/*PROYECTOS*/
function cambiarProyecto(nProyecto){
    if(!proyectoCargado){
        tituloProyecto.style.animation = 'aparicionElemento 2s ease'
        descProyecto.style.animation = 'aparicionElemento 2s ease'
        imgProyecto.style.animation = 'aparicionElemento 2s ease'
        enlaceProyecto.style.animation = 'aparicionElemento 2s ease'

        tituloProyecto.style.opacity = '1';
        descProyecto.style.opacity = '1';
        imgProyecto.style.opacity = '1';
        enlaceProyecto.style.opacity = '1';

        tituloProyecto.innerHTML = proyectos[nProyecto].titulo;
        descProyecto.innerHTML = proyectos[nProyecto].desc;
        imgProyecto.src = proyectos[nProyecto].img;
        enlaceProyecto.href = proyectos[nProyecto].link;
        setTimeout(()=>{
            tituloProyecto.style.animation = 'resetearAnimacion .1s ease'
            descProyecto.style.animation = 'resetearAnimacion .1s ease'
            imgProyecto.style.animation = 'resetearAnimacion .1s ease'
            enlaceProyecto.style.animation = 'resetearAnimacion .1s ease'
        },2000)
    }
    else{
            tituloProyecto.style.animation = 'desaparicionElemento 1s ease'
            descProyecto.style.animation = 'desaparicionElemento 1s ease'
            imgProyecto.style.animation = 'desaparicionElemento 1s ease'
            enlaceProyecto.style.animation = 'desaparicionElemento 1s ease'
        setTimeout(()=>{
            tituloProyecto.innerHTML = proyectos[nProyecto].titulo;
        descProyecto.innerHTML = proyectos[nProyecto].desc;
        imgProyecto.src = proyectos[nProyecto].img;
        enlaceProyecto.href = proyectos[nProyecto].link;
        },1000)
        setTimeout(()=>{
            tituloProyecto.style.animation = 'aparicionElemento 1s ease'
            descProyecto.style.animation = 'aparicionElemento 1s ease'
            imgProyecto.style.animation = 'aparicionElemento 1s ease'
            enlaceProyecto.style.animation = 'aparicionElemento 1s ease'
        },1000)
    }
    if(nProyecto == 0){
        scrollIzq.style.stroke = 'transparent'
    } else{
        scrollIzq.style.stroke = '#000'
    }
    if(nProyecto == (proyectos.length - 1)){
        scrollDer.style.stroke = 'transparent'
    } else{
        scrollDer.style.stroke = '#000'
    }
    proyectoCargado = true;
}
function proyectoAtras(){
    if(numeroProyecto != 0){
        numeroProyecto--;
        cambiarProyecto(numeroProyecto);
    } else{

    }
}
function proyectoAdelante(){
    if(numeroProyecto != (proyectos.length - 1)){
        numeroProyecto++;
        cambiarProyecto(numeroProyecto);
    } else{
            
    }
}
let tituloProyecto = document.querySelector('.titulo-proyecto');
let descProyecto = document.querySelector('.desc-proyecto');
let imgProyecto = document.querySelector('.imagen-proyecto');
let enlaceProyecto = document.querySelector('.enlace-proyecto');
let scrollIzq = document.querySelector('.icono-izq');
let scrollDer = document.querySelector('.icono-der');
let numeroProyecto = 0;
let proyectoCargado = false;
let proyectos = [
    {
        titulo: 'TECSOPEL SA',
        desc: 'Tecsopel SA es una empresa argentina, dedicada a la industria del empaquetamiento. Este proyecto fue realizado desde cero por mi, desde el diseño y maquetación hasta su subida a Internet',
        link: 'https://www.tecsopel.com.ar',
        img: 'img/proyectos/proyecto-tecsopel.png'
    },
    {
        titulo: 'PELIGROSA NETWORK',
        desc: 'Peligrosa Network es un servidor de un videojuego. En este proyecto me encargué del diseño, maquetación y edición de imágenes.',
        link: 'https://www.peligrosa.net',
        img: 'img/proyectos/proyecto-peligroso.png'
    }
];
imgProyecto.src = proyectos[0].img;

const mediosDeContacto = document.querySelectorAll('.medio-contacto');
mediosDeContacto.forEach(e=>{
    e.addEventListener('mouseover',()=>{
        let icono = e.firstChild;
        e.style.backgroundColor = '#cdcdcd';
    })
    e.addEventListener('mouseout',()=>{
        e.style.backgroundColor = '#fff'
    })
})



function copiarEMail(){
    let content = 'alvarez2003marcos@gmail.com';

    navigator.clipboard.writeText(content)
        .then(() => {
        alert("Dirección de E-Mail copiada al portapapeles!")
    })
        .catch(err => {
        console.log('Error :/', err);
    })
 
}