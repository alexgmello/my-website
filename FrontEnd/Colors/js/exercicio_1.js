function exercicio_1() {
    var cont = 0;
    var a1=document.getElementById("blank_a1");
    var b1=document.getElementById("blank_b1");
    var c1=document.getElementById("blank_c1");
    var d1=document.getElementById("blank_d1");
    var e1=document.getElementById("blank_e1");
    var f1=document.getElementById("blank_f1");
    var g1=document.getElementById("blank_g1");
    var h1=document.getElementById("blank_h1");
    var i1=document.getElementById("blank_i1");
    var j1=document.getElementById("blank_j1");
    var k1=document.getElementById("blank_k1");

    //blank_a
    if((a1.value=="radiação"))
    {    document.getElementById('blank_a1').style.backgroundColor='rgba(73, 195, 58, 0.9)';
        cont++;
    }
    else
    {
        document.getElementById('blank_a1').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
    }

    //blank_b
    if((b1.value=="vácuo"))
    {
        document.getElementById('blank_b1').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
        cont++;
    }
    else
    {
        document.getElementById('blank_b1').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
    }

    //blank_c
    if((c1.value=="eletromagnética"))
    {
        document.getElementById('blank_c1').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
        cont++;
    }
    else
    {
        document.getElementById('blank_c1').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
    }

    //blank_d
    if((d1.value=="Comprimento"))
    {
        document.getElementById('blank_d1').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
        cont++;
    }
    else
    {
        document.getElementById('blank_d1').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
    }

    //blank_e
    if((e1.value=="máximos"))
    {
        document.getElementById('blank_e1').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
        cont++;
    }
    else
    {
        document.getElementById('blank_e1').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
    }

    //blank_f
    if((f1.value=="centímetro"))
    {
        document.getElementById('blank_f1').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
        cont++;
    }
    else
    {
        document.getElementById('blank_f1').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
    }

    //blank_g
    if((g1.value=="Frequência"))
    {
        document.getElementById('blank_g1').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
        cont++;
    }
    else
    {
        document.getElementById('blank_g1').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
    }

    //blank_h
    if((h1.value=="máximos"))
    {
        document.getElementById('blank_h1').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
        cont++;
    }
    else
    {
        document.getElementById('blank_h1').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
    }

    //blank_i
    if((i1.value=="segundo"))
    {
        document.getElementById('blank_i1').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
        cont++;
    }
    else
    {
        document.getElementById('blank_i1').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
    }

    //blank_j
    if((j1.value=="hertz"))
    {
        document.getElementById('blank_j1').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
        cont++;
    }
    else
    {
        document.getElementById('blank_j1').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
    }

    //blank_k
    if((k1.value=="300"))
    {
        document.getElementById('blank_k1').style.backgroundColor= 'rgba(73, 195, 58, 0.9)';
        cont++;
    }
    else
    {
        document.getElementById('blank_k1').style.backgroundColor= 'rgba(249, 93, 93, 0.9)';
    }

    alertify.alert("Você acertou " + cont + " de 11 respostas.")
        .set('modal', true)
        .set({transition:"zoom"}).show()
        .set("basic", true);
}
