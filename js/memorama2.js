var array_memoria = ['<img src=7.png id=imgmem>' ,'<img src=7.png id=imgmem>','<img src=8.png id=imgmem>','<img src=8.png id=imgmem>','<img src=9.png id=imgmem>','<img src=9.png id=imgmem>','<img src=10.png id=imgmem>','<img src=10.png id=imgmem>','<img src=11.png id=imgmem>','<img src=11.png id=imgmem>','<img src=12.png id=imgmem>','<img src=12.png id=imgmem>'];
var array_conceptos = ['','','','','','',
'<b>RESPONSABILIDAD</b> <br> Es la capacidad que tenemos las personas de responder por nuestros propios actos, que son libres; pero también, responder por las consecuencias que éstos nos acarreen.',
'<b>ESCUDO NACIONAL</b><br>Es un símbolo patrio, cuya imagen -el águila posada en un nopal, devorando una serpiente- es una representación de la leyenda sobre el origen de la nación mexicana.',
'<b>DERECHOS HUMANOS </b><br>Los derechos humanos son los derechos que tenemos todas y todos por el solo hecho de ser personas. Todas las personas tenemos derecho a la vida, a la libertad, la igualdad, la integridad, la propiedad, la seguridad jurídica; así como a otros que hacen más digna la vida, entre otros: derecho a la salud, a la educación, al trabajo y a decidir el número de hijos.',
'<b>VALOR </b><br>Es la estimación básica acerca de lo que se considera bueno, correcto deseable y es preferido por encima de otras cosas, es aquello que por su naturaleza nos ofrece una utilidad o beneficio.',
'<b>EDUCACIÓN CÍVICA </b><br>Es el proceso por medio del cual, se promueve el conocimiento y la comprensión del conjunto de normas que regulan la vida social, la formación de valores y actitudes que permiten al individuo integrarse a la sociedad, contribuyendo al bienestar colectivo.',
'<b>FRATERNIDAD</b><br>Es la armonía, afecto y relación de cordialidad que existe entre los seres humanos.'];


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
                        document.getElementById("leyenda2").innerHTML='<a href="memorama3.html" onMouseOver="document.getElementById(\'myaudio\').play()" target="_blank" ><img id="xxx" src="mensaje1.png"></a>';
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
