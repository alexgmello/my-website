function exercicio_6() {
        var cont = 0;
        var a6=document.getElementById("blank_a6");
        var b6=document.getElementById("blank_b6");
        var c6=document.getElementById("blank_c6");
        var d6=document.getElementById("blank_d6");
        var e6=document.getElementById("blank_e6");

        //blank_a
        if((a6.value=="A")||(a6.value=="a"))
        {
            document.getElementById('blank_a6').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_a6').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_b
        if((b6.value=="B")||(b6.value=="b"))
        {
            document.getElementById('blank_b6').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_b6').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_c
        if((c6.value=="C")||(c6.value=="c"))
        {
            document.getElementById('blank_c6').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_c6').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_d
        if((d6.value=="D")||(d6.value=="d"))
        {
            document.getElementById('blank_d6').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_d6').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_e
        if((e6.value=="E")||(e6.value=="e"))
        {
            document.getElementById('blank_e6').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_e6').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        alertify.alert("Você acertou " + cont + " de 5 respostas.")
        .set('modal', true)
        .set({transition:"zoom"}).show()
        .set("basic", true);;
    }
