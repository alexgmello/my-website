function t2_a3() {
        var cont = 0;
        var a3=document.getElementById("blank_a3");
        var b3=document.getElementById("blank_b3");
        var c3=document.getElementById("blank_c3");
        var d3=document.getElementById("blank_d3");
        var e3=document.getElementById("blank_e3");
        var f3=document.getElementById("blank_f3");
        var g3=document.getElementById("blank_g3");

        //blank_a
        if((a3.value=="A")||(a3.value=="a"))
        {
            document.getElementById('blank_a3').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_a3').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_b
        if((b3.value=="B")||(b3.value=="b"))
        {
            document.getElementById('blank_b3').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_b3').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_c
        if((c3.value=="C")||(c3.value=="c"))
        {
            document.getElementById('blank_c3').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_c3').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_d
        if((d3.value=="D")||(d3.value=="d"))
        {
            document.getElementById('blank_d3').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_d3').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_e
        if((e3.value=="E")||(e3.value=="e"))
        {
            document.getElementById('blank_e3').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_e3').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_f
        if((f3.value=="F")||(f3.value=="f"))
        {
            document.getElementById('blank_f3').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_f3').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_g
        if((g3.value=="G")||(g3.value=="g"))
        {
            document.getElementById('blank_g3').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_g3').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        alertify.alert("Você acertou " + cont + " de 7 respostas.")
        .set('modal', true)
        .set({transition:"zoom"}).show()
        .set("basic", true);;
    }
