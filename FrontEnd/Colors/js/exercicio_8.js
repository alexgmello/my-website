    function exercicio_8() {
        var cont = 0;
        var a8=document.getElementById("blank_a8");
        var b8=document.getElementById("blank_b8");
        var c8=document.getElementById("blank_c8");
        var d8=document.getElementById("blank_d8");
        var e8=document.getElementById("blank_e8");
        var f8=document.getElementById("blank_f8");
        var g8=document.getElementById("blank_g8");
        var h8=document.getElementById("blank_h8");
        var i8=document.getElementById("blank_i8");
        var j8=document.getElementById("blank_j8");

        //blank_a
        if((a8.value=="espalhamento"))
        {
            document.getElementById('blank_a8').style.backgroundColor=     'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_a8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_b
        if((b8.value=="moléculas"))
        {
            document.getElementById('blank_b8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_b8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_c
        if((c8.value=="escuro"))
        {
            document.getElementById('blank_c8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_c8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_d
        if((d8.value=="moléculas"))
        {
            document.getElementById('blank_d8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_d8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_e
        if((e8.value=="espalhada"))
        {
            document.getElementById('blank_e8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_e8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_f
        if((f8.value=="Terra"))
        {
            document.getElementById('blank_f8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_f8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_g
        if((g8.value=="azul"))
        {
            document.getElementById('blank_g8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_g8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_h
        if((h8.value=="longos"))
        {
            document.getElementById('blank_h8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_h8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_i
        if((i8.value=="curtos"))
        {
            document.getElementById('blank_i8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_i8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_j
        if((j8.value=="azul"))
        {
            document.getElementById('blank_j8').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_j8').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        alertify.alert("Você acertou " + cont + " de 10 respostas.")
        .set('modal', true)
        .set({transition:"zoom"}).show()
        .set("basic", true);;
    }
