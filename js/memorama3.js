var array_memoria = ['<img src=13.png id=imgmem>' ,'<img src=13.png id=imgmem>','<img src=14.png id=imgmem>','<img src=14.png id=imgmem>','<img src=15.png id=imgmem>','<img src=15.png id=imgmem>','<img src=16.png id=imgmem>','<img src=16.png id=imgmem>','<img src=17.png id=imgmem>','<img src=17.png id=imgmem>','<img src=18.png id=imgmem>','<img src=18.png id=imgmem>'];
var array_conceptos = ['','','','','','','','','','','','',
'<b>CONGRESO DEL ESTADO</b> <br> El poder legislativo se deposita en una asamblea de Diputados que se denomina Congreso del Estado, se integra con 26 Diputados electos por el principio de mayoría relativa, y hasta por 15 Diputados por el principio de representación proporcional.',
'<b>CIUDADANÍA POLÍTICA</b><br>Son todos aquellos varones y mujeres de nacionalidad mexicana, nacidos en el territorio mexicano o fuera de él, pero de padre o madre de nacionalidad mexicana, que hayan cumplido 18 años y tengan un modo honesto de vivir. La ciudadanía mexicana también se puede adquirir por naturalización. Otro concepto de ciudadanía nos dice que tienen este estatus las personas titulares de derechos, aunque sean menores de edad.',
'<b>ABSTENCIONISMO </b><br>Se define como la no participación de los ciudadanos en los diferentes eventos de la vida política de un país; se puede manifestar de manera muy concreta cuando aquellos no ejercen su derecho ni cumplen con la obligación cívica de votar en los procesos electorales, o bien mediante una actitud pasiva y apática ante los diferentes actos y actividades políticos.',
'<b>IGUALDAD </b><br>Todos los ciudadanos mexicanos y ciudadanas mexicanas, tenemos la posibilidad de gozar de los mismos derechos y obligaciones, que señala la Constitución General, ser elegidos en igualdad de circunstancias para ocupar cargos públicos, empleos, sin distinción de la religión, sexo, etnia, clase social y otras.',
'<b>PLURALISMO </b><br>Aceptación de la diversidad en materia de expresiones, pensamientos, creencias, para favorecer el desarrollo humano.',
'<b>TOLERANCIA</b><br>Es la consideración que se tiene a las diferentes actitudes, expresiones o puntos de vista de las demás personas, aunque sean contrarias a las nuestras.'];
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
                        document.getElementById("leyenda2").innerHTML='<a href="memorama4.html" onMouseOver="document.getElementById(\'myaudio\').play()" target="_blank" ><img id="xxx" src="mensaje1.png"></a>';
                        document.getElementById('leyenda2').style.display = "inline-table";
                        
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
