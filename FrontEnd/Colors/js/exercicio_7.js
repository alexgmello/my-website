    function exercicio_7() {
        var cont = 0;
        var a7=document.getElementById("blank_a7");
        var b7=document.getElementById("blank_b7");
        var c7=document.getElementById("blank_c7");
        var d7=document.getElementById("blank_d7");
        var e7=document.getElementById("blank_e7");
        var f7=document.getElementById("blank_f7");
        var g7=document.getElementById("blank_g7");
        var h7=document.getElementById("blank_h7");
        var i7=document.getElementById("blank_i7");
        var j7=document.getElementById("blank_j7");
        var k7=document.getElementById("blank_k7");
        var l7=document.getElementById("blank_l7");
        var m7=document.getElementById("blank_m7");
        var n7=document.getElementById("blank_n7");
        var o7=document.getElementById("blank_o7");

        //blank_a
        if((a7.value=="cones"))
        {    document.getElementById('blank_a7').style.backgroundColor='rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_a7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_b
        if((b7.value=="azul"))
        {
            document.getElementById('blank_b7').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_b7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_c
        if((c7.value=="RGB"))
        {
            document.getElementById('blank_c7').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_c7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_d
        if((d7.value=="vermelhos"))
        {
            document.getElementById('blank_d7').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_d7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_e
        if((e7.value=="violeta"))
        {
            document.getElementById('blank_e7').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_e7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_f
        if((f7.value=="menor"))
        {
            document.getElementById('blank_f7').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_f7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_g
        if((g7.value=="violeta"))
        {
            document.getElementById('blank_g7').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_g7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_h
        if((h7.value=="olhos"))
        {
            document.getElementById('blank_h7').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_h7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_i
        if((i7.value=="violeta"))
        {
            document.getElementById('blank_i7').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_i7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_j
        if((j7.value=="vermelho"))
        {
            document.getElementById('blank_j7').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_j7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_k
        if((k7.value=="azul"))
        {
            document.getElementById('blank_k7').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_k7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_l
        if((l7.value=="visão"))
        {
            document.getElementById('blank_l7').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_l7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_m
        if((m7.value=="branca"))
        {
            document.getElementById('blank_m7').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_m7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_n
        if((n7.value=="maiores"))
        {
            document.getElementById('blank_n7').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_n7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_o
        if((o7.value=="Mie"))
        {
            document.getElementById('blank_o7').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_o7').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        alertify.alert("Você acertou " + cont + " de 15 respostas.")
        .set('modal', true)
        .set({transition:"zoom"}).show()
        .set("basic", true);;
    }
