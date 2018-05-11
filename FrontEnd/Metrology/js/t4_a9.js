function t4_a9() {
        var cont = 0;
        var a9=document.getElementById("blank_a9");
        var b9=document.getElementById("blank_b9");
        var c9=document.getElementById("blank_c9");
        var d9=document.getElementById("blank_d9");
        var e9=document.getElementById("blank_e9");
        var f9=document.getElementById("blank_f9");
        var g9=document.getElementById("blank_g9");
        var h9=document.getElementById("blank_h9");
        var i9=document.getElementById("blank_i9");
        var j9=document.getElementById("blank_j9");
        var k9=document.getElementById("blank_k9");
        var l9=document.getElementById("blank_l9");
        var m9=document.getElementById("blank_m9");

        //blank_a
        if((a9.value=="antirretrovirais"))
        {
            document.getElementById('blank_a9').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_a9').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_b
        if((b9.value=="AIDS"))
        {
            document.getElementById('blank_b9').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_b9').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_c
        if((c9.value=="receptor"))
        {
            document.getElementById('blank_c9').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_c9').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_d
        if((d9.value=="membrana"))
        {
            document.getElementById('blank_d9').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_d9').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_e
        if((e9.value=="fusão"))
        {
            document.getElementById('blank_e9').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_e9').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_f
        if((f9.value=="enzimas"))
        {
            document.getElementById('blank_f9').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_f9').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_g
        if((g9.value=="transcriptase"))
        {
            document.getElementById('blank_g9').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_g9').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_h
        if((h9.value=="integrase"))
        {
            document.getElementById('blank_h9').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_h9').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_i
        if((i9.value=="transcriptase"))
        {
            document.getElementById('blank_i9').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_i9').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_j
        if((j9.value=="DNA"))
        {
            document.getElementById('blank_j9').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_j9').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_k
        if((k9.value=="RNA"))
        {
            document.getElementById('blank_k9').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_k9').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_l
        if((l9.value=="timina"))
        {
            document.getElementById('blank_l9').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_l9').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_m
        if((m9.value=="protease"))
        {
            document.getElementById('blank_m9').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_m9').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }


        alertify.alert("Você acertou " + cont + " de 13 respostas.")
        .set('modal', true)
        .set({transition:"zoom"}).show()
        .set("basic", true);;
    }
