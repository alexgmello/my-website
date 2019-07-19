<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117928180-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-117928180-1');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hi, I'm a Interaction Designer - Welcome to my site. Enjoy!</title>
    <meta name="description" content="This is my personal website and portfolio. I'm a digital designer, my line of work consists mainly of video production, user experience, web and mobile related projects.">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Alexandre Gomide da Silva Mello">

    <link rel="canonical" href="https://alexgmello.com">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="font-awesome/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="css/fonts.min.css">
    <link rel="stylesheet" href="css/style.min.css">
</head>

<body>
    <!-- HEADER -->
    <?php include_once "header.php" ?>

    <div class="container">
        <div class="conteudo">
            <div id="painel-top">
                <img src="img/sobre/profile-pic-web.jpg" alt="my profile photo">
                <article id="main">
                    <h1>My name is <strong>Alexandre Gomide</strong></h1>
                    <h2>and I'm a <span class="highlight">Digital Designer</span></h2>
                </article>
            </div>

            <div id="painel-mid">
                <div id="infos">
                    <p><strong class="highlight">_</strong>Hi there, nice to see you here. As I said before, I'm Alexandre and I work as a Digital Designer, in my case this means that I'm a <strong class="highlight">Video Editor</strong> and a <strong class="highlight">Motion Designer</strong> (also, a soon to be <strong class="highlight">Visual Effects Artist</strong>).</p>
                    <p><strong class="highlight">_</strong>Right now I'm at a transitional period, I'm on my way to move to <strong class="highlight">London (Ontario, CA)</strong> and begin path to become a VFX artist.</p>
                </div>
                <div id="detalhes">
                    <p><strong class="highlight">_</strong>Bachelor of Design (PUC-Rio/2016) <strong class="highlight">:Education</strong></p>
                    <p><strong class="highlight">_</strong>CCEAD PUC-Rio (Jul/2017 - Jul/2019)<strong class="highlight"> :Work</strong></p>
                    <p><strong class="highlight">_</strong>SESC - Departamento Nacional (Mar/2015 - Sep/2015)</p>
                    <p><strong class="highlight">_</strong>Rio de Janeiro - Brazil <strong class="highlight">:Location</strong></p>
                    <p><strong class="highlight">_</strong>Portuguese (born and raised) <strong class="highlight">:Languages</strong></p>
                    <p><strong class="highlight">_</strong>English (solid as a rock)</p>
                    <p><strong class="highlight">_</strong>French (débutant)</p>
                    <p><strong class="highlight">_</strong>CCAA Best Student (1997) <strong class="highlight">:Awards</strong></p>
                    <p><strong class="highlight">_</strong>University Of Cambridge - ESOL Examinations, Pass with Merit (2007)</p>
                </div>
                <div id="detalhes-mob">
                    <h3><strong class="highlight">_Education</strong></h3>
                    <p>Bachelor of Design (PUC-Rio/2016)</p>
                    <h3><strong class="highlight">_Work</strong></h3>
                    <p>CCEAD PUC-Rio (Jul/2017 - Jul/2019)</p>
                    <p>SESC - Departamento Nacional (Mar/2015 - Sep/2015)</p>
                    <h3><strong class="highlight">_Location</strong></h3>
                    <p>Rio de Janeiro - Brazil</p>
                    <h3><strong class="highlight">_Languages</strong></h3>
                    <p>Portuguese (born and raised)</p>
                    <p>English (solid as a rock)</p>
                    <p><strong class="highlight">_</strong>French (débutant)</p>
                    <h3><strong class="highlight">_Awards</strong></h3>
                    <p>CCAA Best Student (1997)</p>
                    <p>University Of Cambridge - ESOL Examinations, Pass with Merit (2007)</p>
                </div>
            </div>

            <div id="painel-bot">
                <section class="">
                    <h2 class="highlight">My repertoire</h2>
                    <p><strong class="highlight">_</strong>Instead of tell you what I can do and how well I can do the specified thing using numbers, graphics or any other abstract method, I will let my work show you what I've made it so far. And also, here are a few suggestions for you to take a quick look.</p>
                </section>

                <section class="work-filter repertoire">
                <div id="latest-creation" class="check-out">
                    <a href="https://youtu.be/je_eVI1s5rc" target="_blank"><span><i class="fas fa-briefcase fa-lg fa-fw"></i></span>
                        <h3>Latest Creation</h3></a>
                </div>
                <div id="reading" class="check-out">
                    <a href="biofeedback.php"><span><i class="fas fa-book fa-lg fa-fw"></i></span>
                        <h3>Delightful Reading</h3></a>
                </div>
                <div id="everything" class="check-out">
                    <a href="work.php"><span><i class="fas fa-eye fa-lg fa-fw"></i></span>
                        <h3>See Everything</h3></a>
                </div>
            </section>
            </div>
        </div>
    </div>
    <!-- FOOTER -->
    <?php include_once "footer.php" ?>
<script src="js/jquery-2.1.1.min.js"></script>
<script src="js/clipboard.min.js"></script>
<script>
    //copy to clipboard
    var ctc = document.getElementById('ctc');
    var clipboard = new ClipboardJS(ctc);

    //tooltpip
    $(window).load(function() {
        $("#ctc").click(function(){
            $(".tooltip-hover").addClass("not-visible");
            $(".tooltip-click").addClass("visible");
       })

        $("#ctc").mouseleave(function() {
            $(".tooltip-hover").removeClass("not-visible");
            $(".tooltip-click").removeClass("visible");
        })
    })
</script>
</body>
</html>
