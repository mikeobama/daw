function disp_prompt()
			{	
	var nombre='mike';
    var edad=25;
    var altura=180
    var casado=false;
	if (nombre!=null && nombre!="")
		{
			document.write("Hola " + nombre);
			document.write("<br/>");
            document.write('Tienes '+edad+' de edad')
            document.write("<br/>");
            document.write('Mides '+altura+' cm');
            document.write("<br/>");
            if (casado) {
                document.write('Lo siento pero estas casado');
            }else{
                document.write('Bravo, eres libre');
            }
        }
	}
disp_prompt()