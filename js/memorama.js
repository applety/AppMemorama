


var array_memoria = ['<img src=1.png id=imgmem>' ,'<img src=1.png id=imgmem>','<img src=2.png id=imgmem>','<img src=2.png id=imgmem>','<img src=3.png id=imgmem>','<img src=3.png id=imgmem>','<img src=4.png id=imgmem>','<img src=4.png id=imgmem>','<img src=5.png id=imgmem>','<img src=5.png id=imgmem>','<img src=6.png id=imgmem>','<img src=6.png id=imgmem>'];
var array_conceptos = [
'<b>LA CONSTITUCIÓN POLÍTICA</b> <br> La Constitución Política de los Estados Unidos Mexicanos, es un documento solemne, donde se desprenden todas las demás leyes, como las garantías individuales que goza todo ciudadano mexicano y también la manera como debe funcionar nuestro gobierno. Nos dice cómo debemos comportarnos, vivir juntos en nuestro territorio y encontrar soluciones a nuestros problemas.',
'<b>DIALOGO </b><br>Es una forma de conversación entre dos o más personas, que puede servir para buscar acuerdos en temas sobre los que se tienen distintas opiniones.',
'<b>DERECHOS DE LA NIÑEZ </b><br>En México, desde el 27 de abril del año 2000, fue aprobada La Ley para la protección de las niñas, niños y adolescentes y tiene como objetivo asegurarles un desarrollo pleno e integral, lo que implica la oportunidad de formarse física, mental, emocional, social y moralmente en condiciones de igualdad.',
'<b>RESPETO </b><br>El respeto es el valor fundamental para hacer o construir una convivencia familiar, comunitaria y social que busca armonía entre sus integrantes, así como entre éstos y la naturaleza.',
'<b>BANDERA NACIONAL </b><br>Es uno de los símbolos patrios, que nos identifica como mexicanos, consiste en un rectángulo dividido en tres franjas verticales en medidas idénticas, con colores en el siguiente orden a partir del asta: verde, blanco y rojo, en la franja blanca y al centro, tiene una águila posada en un nopal.',
'<b>INSTITUTO ELECTORAL DEL ESTADO (I.E.E.) </b><br>Es el organismo electoral, responsable de organizar las elecciones, para elegir a Gobernador, Diputados Locales y Miembros de los Ayuntamientos, así como, de coadyuvar en la promoción y difusión de la cultura política y educación cívica.'];

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
                    c=c.substr(9,1);
                    var con=array_conceptos[c-1];
                    //con=tildes_unicode(con);
                    console.log(con);
                    document.getElementById("leyenda").innerHTML='<div id="concepto">'+con+'</div>'
					//document.getElementById('memorama').style.display = "block";
					
                    virada_carta += 2;
                    //despejando los 2 array
                    valor_memoria = [];
                    memoria_carta_ids = [];
                    //chekea si la mesa entera esta despedida
                    if( virada_carta == array_memoria.length){
                        //alert("Felicidades, memorama completado, presiona F5 para jugar de Nuevo!!!");
						document.getElementById("leyenda2").innerHTML='<a href="memorama2.html" onMouseOver="document.getElementById(\'myaudio\').play()" target="_blank" ><img id="sig" src="mensaje1.png"></a>';
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
