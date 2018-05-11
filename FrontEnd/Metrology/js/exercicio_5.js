function exercicio_5() {
        var cont = 0;
        var a5=document.getElementById("blank_a5");
        var b5=document.getElementById("blank_b5");
        var c5=document.getElementById("blank_c5");
        var d5=document.getElementById("blank_d5");
        var e5=document.getElementById("blank_e5");
        var f5=document.getElementById("blank_f5");
        var g5=document.getElementById("blank_g5");
        var h5=document.getElementById("blank_h5");
        var i5=document.getElementById("blank_i5");
        var j5=document.getElementById("blank_j5");
        var k5=document.getElementById("blank_k5");

        //blank_a
        if((a5.value=="A")||(a5.value=="a"))
        {
            document.getElementById('blank_a5').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_a5').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_b
        if((b5.value=="B")||(b5.value=="b"))
        {
            document.getElementById('blank_b5').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_b5').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_c
        if((c5.value=="C")||(c5.value=="c"))
        {
            document.getElementById('blank_c5').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_c5').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_d
        if((d5.value=="D")||(d5.value=="d"))
        {
            document.getElementById('blank_d5').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_d5').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_e
        if((e5.value=="E")||(e5.value=="e"))
        {
            document.getElementById('blank_e5').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_e5').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_f
        if((f5.value=="F")||(f5.value=="f"))
        {
            document.getElementById('blank_f5').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_f5').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_g
        if((g5.value=="G")||(g5.value=="g"))
        {
            document.getElementById('blank_g5').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_g5').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_h
        if((h5.value=="H")||(h5.value=="h"))
        {
            document.getElementById('blank_h5').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_h5').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_i
        if((i5.value=="I")||(h5.value=="i"))
        {
            document.getElementById('blank_i5').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_i5').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_j
        if((j5.value=="J")||(j5.value=="j"))
        {
            document.getElementById('blank_j5').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_j5').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        //blank_k
        if((k5.value=="K")||(k5.value=="k"))
        {
            document.getElementById('blank_k5').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
            cont++;
        }
        else
        {
            document.getElementById('blank_k5').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
        }

        alertify.alert("Você acertou " + cont + " de 11 respostas.")
        .set('modal', true)
        .set({transition:"zoom"}).show()
        .set("basic", true);;
    }
