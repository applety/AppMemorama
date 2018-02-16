var array_memoria = ['<img src=19.png id=imgmem>' ,'<img src=19.png id=imgmem>','<img src=20.png id=imgmem>','<img src=20.png id=imgmem>','<img src=21.png id=imgmem>','<img src=21.png id=imgmem>','<img src=22.png id=imgmem>','<img src=22.png id=imgmem>'];
var array_conceptos = ['','','','','','','','','','','','','','','','','','',
'<b>LIBERTAD</b> <br> Es una de las condiciones que tiene el ciudadano mexicano y la ciudadana mexicana, de obrar en un sentido o en otro, dentro del marco legal; libertad a la expresión de ideas, de manifestarse, de transitar en todo el territorio mexicano, de profesar una religión.',
'<b>LEY ELECTORAL</b><br>En Puebla, es el Código de Instituciones y Procesos Electorales del Estado de Puebla, que reglamenta las normas constitucionales relativas, entre otras, a los derechos y obligaciones político-electorales de la ciudadanía, así como, la función estatal de organizar las elecciones de quienes integran el poder Legislativo, Ejecutivo y miembros de los Ayuntamientos.',
'<b>SOLIDARIDAD</b><br>Es el apoyo a intereses sociales que va más allá de los intereses personales.',
'<b>VOTO O SUFRAGIO </b><br>Es la manifestación única de la voluntad popular mediante la cual la ciudadanía expresa libremente su preferencia en asuntos políticos y constituye un derecho y una obligación.'];

    var valor_memoria = [];
    var memoria_carta_ids = [];
    var virada_carta = 0;
      
    
    
    Array.prototype.memoria_carta_embarajar = function(){
        var i = this.length, j, temp;
        while(--i > 0){
            j = Math.floor(Math.random() * (i+1));
            temp = this[j];
            this[j] = this[i];
            this[i] = temp;
        }
    }
/*function loadMedia(){
    img = new Image();
    img.src = 'carta_bg1.png';
    
}*/
function nuevaTabla(){
    virada_carta = 0;
    var output = '';
    array_memoria.memoria_carta_embarajar();
    for(var i = 0; i < array_memoria.length; i++){
        output += '<div id="carta_'+i+'" onclick="virarCartaMemoria(this,\''+array_memoria[i]+'\' )"></div>';
        
    }
    document.getElementById('table_memoria').innerHTML = output;
    document.getElementById("leyenda").innerHTML='<center><img src="memorama.png"></center>';
    /*document.getElementById("memorama").innerHTML='<img id="imgL" src="memorama.png">';*/
    document.getElementById('memorama').style.display = "none";
} 

function virarCartaMemoria(carta,valor){
    
    if(carta.innerHTML == "" && valor_memoria.length < 2){
        //carta.style.background = '#fff';
        carta.innerHTML = valor;
        if(valor_memoria.length == 0){
            valor_memoria.push(valor);
            memoria_carta_ids.push(carta.id);
        } else if(valor_memoria.length == 1){
                valor_memoria.push(valor);
                memoria_carta_ids.push(carta.id);
                if(valor_memoria[0] == valor_memoria[1]){
                    //alert(valor);
                    //document.getElementById("leyenda").textContent=document.getElementById("OK").textContent;
                    //document.getElementById("leyenda").innerHTML=valor.replace(".png", "_.png");
                     var  c =  valor;
                    c=c.substr(9,2);
                    console.log(c);
                    var con=array_conceptos[c-1];
                    //console.log(con);
                    document.getElementById("leyenda").innerHTML='<div id="concepto">'+con+'</div>'
                    //document.getElementById('memorama').style.display = "block";
                    
                    virada_carta += 2;
                    //despejando los 2 array
                    valor_memoria = [];
                    memoria_carta_ids = [];
                    //chekea si la mesa entera esta despedida
                    if( virada_carta == array_memoria.length){
                        //alert("Felicidades, memorama completado, presiona F5 para jugar de Nuevo!!!");
                        //document.getElementById("leyenda2").innerHTML='<a href="memorama4.html" onMouseOver="document.getElementById(\'myaudio\').play()" target="_blank" ><img id="xxx" src="mensaje1.png"></a>';
                        //document.getElementById('leyenda2').style.display = "inline-table";
                        
                        document.getElementById("leyenda2").innerHTML='<img src="felicidades.png"><a href="index.html"><img id ="salir" src="salir.png"></a>';
                        document.getElementById('leyenda2').style.display = "block";    
                       

                        //document.getElementById("leyenda").innerHTML="OK";
                        //document.getElementById('table_memoria').innerHTML = "";
                        //nuevaTabla();
                        playSound('clic.mp3');
                        loadMedia ();
                    }
                } 
                else
                {
                    function virarAtras(){
                        //las dos cartas se van a virar
                        //document.getElementById("leyenda").innerHTML='<img src="memorama.png">';
                        //document.getElementById('memorama').style.display = "none";
                        var carta_1 = document.getElementById(memoria_carta_ids[0]);
                        var carta_2 = document.getElementById(memoria_carta_ids[1]);
                        carta_1.style.background = 'url(0.png) no-repeat; 100% 100%;';
                        
                        carta_1.innerHTML = "";
                        carta_2.style.background = 'url(0.png) no-repeat; 100% 100%;';
                        
                        carta_2.innerHTML = "";
                        //despejando los 2 arrays
                        valor_memoria = [];
                        memoria_carta_ids = [];
                    }
                    setTimeout(virarAtras, 700);
                }
            }

        } 
        playSound('clic.mp3');
    }
