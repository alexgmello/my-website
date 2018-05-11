function t2_a4() {
        var cont = 0;
        var a4=document.getElementById("blank_a4");
        var b4=document.getElementById("blank_b4");
        var c4=document.getElementById("blank_c4");
        var d4=document.getElementById("blank_d4");
        var e4=document.getElementById("blank_e4");

        //blank_a
        if((a4.value=="A")||(a4.value=="a"))
        {
            document.getElementById('blank_a4').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_a4').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_b
        if((b4.value=="B")||(b4.value=="b"))
        {
            document.getElementById('blank_b4').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_b4').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_c
        if((c4.value=="C")||(c4.value=="c"))
        {
            document.getElementById('blank_c4').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_c4').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_d
        if((d4.value=="D")||(d4.value=="d")||(d4.value=="E")||(d4.value=="e"))
        {
            document.getElementById('blank_d4').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_d4').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_e
        if((e4.value=="E")||(e4.value=="e")||(e4.value=="D")||(e4.value=="d"))
        {
            document.getElementById('blank_e4').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_e4').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        alertify.alert("Você acertou " + cont + " de 5 respostas.")
        .set('modal', true)
        .set({transition:"zoom"}).show()
        .set("basic", true);;
    }
