function t3_a8() {
        var cont = 0;
        var a8=document.getElementById("blank_a8");
        var b8=document.getElementById("blank_b8");
        var c8=document.getElementById("blank_c8");
        var d8=document.getElementById("blank_d8");
        var e8=document.getElementById("blank_e8");
        var f8=document.getElementById("blank_f8");
        var g8=document.getElementById("blank_g8");

        //blank_a
        if((a8.value=="A")||(a8.value=="a"))
        {
            document.getElementById('blank_a8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_a8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_b
        if((b8.value=="B")||(b8.value=="b"))
        {
            document.getElementById('blank_b8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_b8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_c
        if((c8.value=="C")||(c8.value=="c"))
        {
            document.getElementById('blank_c8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_c8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_d
        if((d8.value=="D")||(d8.value=="d"))
        {
            document.getElementById('blank_d8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_d8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_e
        if((e8.value=="E")||(e8.value=="e"))
        {
            document.getElementById('blank_e8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_e8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_f
        if((f8.value=="F")||(f8.value=="f"))
        {
            document.getElementById('blank_f8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_f8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_g
        if((g8.value=="G")||(g8.value=="g"))
        {
            document.getElementById('blank_g8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_g8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }


        alertify.alert("Você acertou " + cont + " de 7 respostas.")
        .set('modal', true)
        .set({transition:"zoom"}).show()
        .set("basic", true);;
    }
