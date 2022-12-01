const productos = [{
    id: 1,
    marca: 'CAFETERA',
    mode: 'JK145',
    specs:'Apagado automatico con un sensor de temperatura, potencia de 650 W, Sistema de capsulas, capacidad de agua 0,6 Lts',
    precio:'$80.000'

},
    {
    id: 2,
    marca: 'MACBOOK',
    mode: 'A',
    specs:'B',
    precio:'$80.000'

},{// creamos el objeto
    id: 3,
    marca: 'Samsung',
    mode: 'BGH',
    specs:'4K smart, 3 puertos HDMI 2.1,  frecuencia de 144 HZ resolución 3840px-2160px 60 Pulgadas',
    precio:'$80.000'
    } , { //creamos el objeto 2
    id: 4,
    marca:'samsung',
    mode:'Galaxy A31',
    specs:'Memoria interna de 128GB tiene 4 cámaras traseras de 48Mpx/8Mpx/5Mpx/5Mpx.6,6',
    precio:'40.000'
    }
    ]
 // Botones sumas y restas de cada producto
    document.querySelector("#boton1").addEventListener("click",aumentar1);
    document.querySelector("#boton11").addEventListener("click",restar1);
    document.querySelector("#boton2").addEventListener("click",aumentar2);
    document.querySelector("#boton22").addEventListener("click",restar2);
    document.querySelector("#boton3").addEventListener("click",aumentar3);
    document.querySelector("#boton33").addEventListener("click",restar3);
    document.querySelector("#boton4").addEventListener("click",aumentar4);
    document.querySelector("#boton44").addEventListener("click",restar4);
    document.querySelector("#Bcafetera").addEventListener("click",Gcafetera)
    document.querySelector("#Btel").addEventListener("click",Gtel)
    document.querySelector("#Bcel").addEventListener("click",Gcel)
    document.querySelector("#Bmac").addEventListener("click",Gmac)
  

 //CARRITO
    let TOTAL=0;
    let gastoCafetera=20000;
    let cantidadCafetera=0;
    let gastoTelevisor=100000;
    let CantidadTelevisor=0
    let gastoCelular=80000;
    let cantidadCelular=0;
    let gastomac=80000;
    let cantidadmac=0;
    function Compra(){

    TOTAL=cantidadCafetera*gastoCafetera+cantidadmac*gastomac+gastoTelevisor*CantidadTelevisor+gastoCelular*cantidadCelular
    document.querySelector("#gastoTotal").innerHTML= "Total: $"+TOTAL
    } 
    function Gcafetera(){
        cantidadCafetera=cantidadCafetera+1
        document.querySelector("#gastop1").innerHTML="Cafetera: X"+cantidadCafetera+"  $" +cantidadCafetera*gastoCafetera + " C/U $"+gastoCafetera
        Compra()
    }
    function Gmac(){
        cantidadmac=cantidadmac+1
        document.querySelector("#gastop2").innerHTML="MAC: X" +cantidadmac+" $"+cantidadmac*gastomac+ "C/U $"+gastomac
        Compra()
    }
    function Gtel(){
        CantidadTelevisor=CantidadTelevisor+1
        document.querySelector("#gastop3").innerHTML="Televisor: X"+CantidadTelevisor+" $"+CantidadTelevisor*gastoTelevisor+" C/U $"+gastoTelevisor

        Compra()
    }
    function Gcel(){
        cantidadCelular=cantidadCelular+1
        document.querySelector("#gastop4").innerHTML="Telefono X"+cantidadCelular+" $"+cantidadCelular*gastoCelular+" C/U $"+gastoCelular
        Compra()
    }

    let ContadorC=0; // CONTADORES DE STOCK
    let contadorCel=0;
    let ContadorT=0;
    let ContadorM=0;

    function aumentar1(){
        ContadorC=ContadorC+1;
        document.querySelector("#stock").innerHTML=ContadorC;
    }
    function restar1(){
        ContadorC=ContadorC-1;
        document.querySelector("#stock").innerHTML=ContadorC;
    }
    
    function aumentar2(){
        ContadorM=ContadorM+1;
        document.querySelector("#stock2").innerHTML=ContadorM;
    }
    function restar2(){
        ContadorM=ContadorM-1;
        document.querySelector("#stock2").innerHTML=ContadorM;
    }


    function aumentar3(){
        ContadorT=ContadorT+1;
        document.querySelector("#stock3").innerHTML=ContadorT;
    }
    function restar3(){
        ContadorT=ContadorT-1;
        document.querySelector("#stock3").innerHTML=ContadorT;
    }

    function aumentar4(){
        contadorCel=contadorCel+1;
        document.querySelector("#stock4").innerHTML=contadorCel;
    }
    function restar4(){
        contadorCel=contadorCel-1;
        document.querySelector("#stock4").innerHTML=contadorCel;
    }


function CargaHTML(){

    const producto1 = document.getElementsByClassName('producto1 col-sm-2')[0]
    const producto2 = document.getElementsByClassName('producto2 col-sm-2')[0]
    const producto3 = document.getElementsByClassName('producto3 col-sm-2')[0]
    const producto4 = document.getElementsByClassName('producto4 col-sm-2')[0]
    const oferta1 = document.getElementsByClassName('Cel')[0]
    const oferta2= document.getElementsByClassName('tv')[0]
    const a2= document.getElementsByClassName('a2')[0];
    const a3= document.getElementsByClassName('a3')[0];
    const a4= document.getElementsByClassName('a4')[0];

    const CAFETERA=['Molinex','JK145', "Capacidad 0,8lts", "Control anti hervor", "potencia de 650w" ,"$20.000",];
    const macbook=['Macbook','M1ultra','1TB en SSD' ,'CPU con 10 nucleos', 'GPU de 16 nucleos',"$80.000",];
    const tv=["Samsung","BGH",'4K smart, 3 puertos HDMI 2.1', '60 Pulgadas',"$100.0000", ];
    const cel=["Samsung","Galaxy a31",'128GB','cámaras traseras de 48Mpx/8Mpx/5Mpx',"$80.000", ];
    
    CAFETERA.forEach(item=>{


        oferta1.textContent="Smartphone Samsung Galaxy";
        oferta2.textContent="TV Smart Samsung";
        a2.textContent="Todas las opiniones en un solo lugar.";
        a3.textContent="Creá tu cuenta";
        a4.textContent="Ingresá"

        const li =document.createElement('li');
        li.textContent=item;
        producto1.appendChild(li);
        });
    
        macbook.forEach(item=>{
        const li = document.createElement('li');
        li.textContent=item;
        producto2.appendChild(li);
        });

        tv.forEach(item=>{
            const li = document.createElement('li');
            li.textContent=item;
            producto3.appendChild(li);
            });


            cel.forEach(item=>{
                const li = document.createElement('li');
                li.textContent=item;
                producto4.appendChild(li);
                });
                for (let index = 0; index < 4; index++) {
                    const botonesI=document.getElementsByClassName('btn btn-primary')[index];
                    botonesI.textContent="Comprar"
                }       
    }
function IngreseData(){ // creamos la funcion para que se carguen los datos
let nombre // declaramos variables
let password
nombre= prompt("Ingrese el producto") // pedimos el nombre y contraseña antes de entrar al cilco repetitivo
password= prompt("Ingrese su contraseña")
while(nombre!= "ESC" && password!="ESC"){ // preguntamos si nombre Y contraseña son iguales de ESC 
    if(nombre!= "ESC"){
    console.error("Nombre incorrecto, presiones ESC para salir")} // Si el nombre es distinto de ESC el nombre es incorrecto
    if(password!= "ESC"){
    console.error("contraesña incorrecto, presiones ESC para salir")} // Si el precio es distinto de ESC el nombre es incorrecto
    nombre= prompt("Ingrese nombre") // pedimos que ingrese nuevamente el nombre y la contraeña nuevamente.
    password= prompt("Ingrese la contraseña")
}
}
function eliminar(){ // función eliminar
    let op
    op= prompt('¿Desea eliminar algun producto? (Escriba "si" )') // pregutantamos si quiere añadir otro elemento
    while(op== 'si'){
        buscar= prompt('Escriba el numero del producto') // pregutantamos si quiere añadir otro elemento
        if(buscar<=productos.length && buscar>0){ // pregutnamos si esta dentro del rango
        for(let i=0;i<productos.length;i++){ //recorremos el vector
        if(i==buscar){
            productos.splice(buscar-1,1) // eliminamos el producto
        }
        }
        }
    else{
        console.error('NO existe,escribalo nuevamente el producto ')         
    }
    op= prompt('¿Desea eliminar otro producto? (Escriba "si" para agregar otro)') // pregutantamos si quiere eliminar otro elemento    

}

        }   

function NuestrosProductos(){ // Mostramos nuestros productos
    for(let i=0;i<productos.length;i++){
        console.log(productos[i]) // se muestran los productos que existen
    }    
}
function carrito(){ // función agregar otro producto
    let op
    op= prompt('¿Desea ingresar otro producto? (Escriba "si" para agregar otro, lo tendremos en cuenta para nuestra siguiente actualizacion)') // pregutantamos si quiere añadir otro elemento
    while(op== 'si'){
        let id
        let marca
        let mode
        let specs
        let precio
        id=prompt("Ingrese un id")
        marca=prompt("Ingrese la marca del producto")
        mode=prompt("Ingrese el modelo de del producto")
        specs=prompt("Ingrese las especificaciones")
        precio=prompt("Ingrese el precio del prodcuto ")
        productos.push({id,marca,mode,specs,precio})
        op= prompt('¿Desea ingresar otro producto? (Escriba "si" para agregar otro)') // pregutantamos si quiere añadir otro elemento
}
}

function mostrarPag(){ // creamos la función para


    alert("Bienvenido") //damos la Bienvenida 
    NuestrosProductos() //mostramos nuestros productos precargados
    carrito() // Preguntamos si quiere añadir un producto
    eliminar() // elimina alguno producto
    
}


CargaHTML() //CARGAMOS LOS ELEMENTOS DEL DOOM
IngreseData() // pedimos que ingrese sus datos 
mostrarPag() // mostramos la pagina

