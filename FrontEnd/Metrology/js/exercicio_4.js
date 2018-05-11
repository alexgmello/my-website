function exercicio_4() {
        var cont = 0;
        var a4=document.getElementById("blank_a4");
        var b4=document.getElementById("blank_b4");
        var c4=document.getElementById("blank_c4");
        var d4=document.getElementById("blank_d4");
        var e4=document.getElementById("blank_e4");
        var f4=document.getElementById("blank_f4");

        //blank_a
        if((a4.value=="medições"))
        {
            document.getElementById('blank_a4').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_a4').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_b
        if((b4.value=="balança")||(b4.value=="régua"))
        {
            document.getElementById('blank_b4').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_b4').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_c
        if((c4.value=="balança")||(c4.value=="régua"))
        {
            document.getElementById('blank_c4').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_c4').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_d
        if((d4.value=="medida"))
        {
            document.getElementById('blank_d4').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_d4').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_e
        if((e4.value=="quilograma"))
        {
            document.getElementById('blank_e4').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_e4').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_f
        if((f4.value=="materializada"))
        {
            document.getElementById('blank_f4').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_f4').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        alertify.alert("Você acertou " + cont + " de 6 respostas.")
        .set('modal', true)
        .set({transition:"zoom"}).show()
        .set("basic", true);;
    }
