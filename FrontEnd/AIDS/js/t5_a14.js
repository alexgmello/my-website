function t5_a14() {
        var cont = 0;
        var a14=document.getElementById("blank_a14");
        var b14=document.getElementById("blank_b14");
        var c14=document.getElementById("blank_c14");
        var d14=document.getElementById("blank_d14");
        var e14=document.getElementById("blank_e14");
        var f14=document.getElementById("blank_f14");
        var g14=document.getElementById("blank_g14");
        var h14=document.getElementById("blank_h14");

        //blank_a
        if((a14.value=="A")||(a14.value=="a"))
        {
            document.getElementById('blank_a14').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_a14').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_b
        if((b14.value=="B")||(b14.value=="b"))
        {
            document.getElementById('blank_b14').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_b14').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_c
        if((c14.value=="C")||(c14.value=="c"))
        {
            document.getElementById('blank_c14').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_c14').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_d
        if((d14.value=="D")||(d14.value=="d"))
        {
            document.getElementById('blank_d14').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_d14').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_e
        if((e14.value=="E")||(e14.value=="e"))
        {
            document.getElementById('blank_e14').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_e14').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_f
        if((f14.value=="F")||(f14.value=="f"))
        {
            document.getElementById('blank_f14').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_f14').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_g
        if((g14.value=="G")||(g14.value=="g"))
        {
            document.getElementById('blank_g14').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_g14').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_h
        if((h14.value=="H")||(h14.value=="h"))
        {
            document.getElementById('blank_h14').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_h14').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }


        alertify.alert("Você acertou " + cont + " de 8 respostas.")
        .set('modal', true)
        .set({transition:"zoom"}).show()
        .set("basic", true);;
    }
