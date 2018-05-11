function exercicio_2() {
        var cont = 0;
        var a2=document.getElementById("blank_a2");
        var b2=document.getElementById("blank_b2");
        var c2=document.getElementById("blank_c2");
        var d2=document.getElementById("blank_d2");
        var e2=document.getElementById("blank_e2");
        var f2=document.getElementById("blank_f2");
        var g2=document.getElementById("blank_g2");

        //blank_a
        if((a2.value=="A")||(a2.value=="a"))
        {
            document.getElementById('blank_a2').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_a2').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_b
        if((b2.value=="B")||(b2.value=="b"))
        {
            document.getElementById('blank_b2').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_b2').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_c
        if((c2.value=="C")||(c2.value=="c"))
        {
            document.getElementById('blank_c2').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_c2').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_d
        if((d2.value=="D")||(d2.value=="d"))
        {
            document.getElementById('blank_d2').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_d2').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_e
        if((e2.value=="E")||(e2.value=="e"))
        {
            document.getElementById('blank_e2').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_e2').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_f
        if((f2.value=="F")||(f2.value=="f"))
        {
            document.getElementById('blank_f2').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_f2').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_g
        if((g2.value=="G")||(g2.value=="g"))
        {
            document.getElementById('blank_g2').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_g2').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        alertify.alert("Você acertou " + cont + " de 7 respostas.")
        .set('modal', true)
        .set({transition:"zoom"}).show()
        .set("basic", true);;
    }
