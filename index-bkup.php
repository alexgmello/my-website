<<<<<<< HEAD
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
    <title>Hi, I'm a Digital Designer - Welcome to my site. Enjoy!</title>
    <meta name="description" content="This is my personal website and portfolio. I'm a digital designer, and I mainly work with education. I also know my way around motion design and video editing and VFX.">
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
                    <h1>My name is <strong>Alexandre Mello</strong></h1>
                    <h2>and I'm a <span class="highlight">Digital Designer</span></h2>
                </article>
            </div>

            <div id="painel-mid">
                <div id="infos">
                    <p><strong class="highlight">_</strong>Hi there, nice to see you here. As I said before, I'm Alexandre and I work as a Digital Designer, I have worked as a <strong class="highlight">Instructional Designer</strong>, <strong class="highlight">Motion Designer</strong> and also as a <strong class="highlight">Video Editor</strong>.</p>
                    <p><strong class="highlight">_</strong>For the time being I'm living in <strong class="highlight">Montréal (Québec, CA)</strong>, but I'm currently don't have any strings attached anywhere, I don't mind moving to another place. I'm going to wherever life takes me.</p>
                </div>
                <div id="detalhes">
                    <!-- NOWADAYS -->
                    <p><strong class="highlight">_</strong>Instructional Designer @ Immigrant Services Association of Nova Scotia (Jun/2021 - Present)<strong class="highlight"> :Nowadays</strong></p>

                    <!-- PAST EXPERIENCES -->
                    <p><strong class="highlight">_</strong>Designer @ CCEAD PUC-Rio (Jul/2017 - Jul/2019)<strong class="highlight"> :Past Experiences</strong></p>
                    <p><strong class="highlight">_</strong>Motion Designer Intern @ SESC - National Department (Mar/2015 - Sep/2015)</p>

                    <!-- EDUCATION -->
                    <p><strong class="highlight">_</strong>VFX and Editing (Fanshawe College/2020)<strong class="highlight"> :Education</strong></p>
                    <p><strong class="highlight">_</strong>Bachelor of Design (PUC-Rio/2016)</p>

                    <!-- LOCATION -->
                    <p><strong class="highlight">_</strong>Montréal - Canada<strong class="highlight"> :Location</strong></p>

                    <!-- LANGUAGES -->
                    <p><strong class="highlight">_</strong>Portuguese (born and raised)<strong class="highlight"> :Languages</strong></p>
                    <p><strong class="highlight">_</strong>English (solid as a rock)</p>
                    <p><strong class="highlight">_</strong>French (débutant)</p>

                    <!-- AWARDS
                    <p><strong class="highlight">_</strong>CCAA Best Student (1997)<strong class="highlight"> :Awards</strong></p>
                    <p><strong class="highlight">_</strong>University Of Cambridge - ESOL Examinations, Pass with Merit (2007)</p>
                    -->

                </div>
                <div id="detalhes-mob">
                    <!-- NOWADAYS -->
                    <h3><strong class="highlight">_Nowadays</strong></h3>
                    <p>Instructional Designer @ Immigrant Services Association of Nova Scotia (Jun/2021 - Present)</p>

                    <!-- PAST EXPERIENCES -->
                    <h3><strong class="highlight">_Past Experiences</strong></h3>
                    <p>Designer @ CCEAD PUC-Rio (Jul/2017 - Jul/2019)</p>
                    <p>Motion Designer Intern @ SESC - National Department (Mar/2015 - Sep/2015)</p>

                    <!-- EDUCATION -->
                    <h3><strong class="highlight">_Education</strong></h3>
                    <p>VFX and Editing (Fanshawe College/2020)</p>
                    <p>Bachelor of Design (PUC-Rio/2016)</p>

                    <!-- LOCATION -->
                    <h3><strong class="highlight">_Location</strong></h3>
                    <p>Montréal - Canada</p>

                    <!-- LANGUAGES -->
                    <h3><strong class="highlight">_Languages</strong></h3>
                    <p>Portuguese (born and raised)</p>
                    <p>English (solid as a rock)</p>
                    <p>French (débutant)</p>

                    <!-- AWARDS
                    <h3><strong class="highlight">_Awards</strong></h3>
                    <p>CCAA Best Student (1997)</p>
                    <p>University Of Cambridge - ESOL Examinations, Pass with Merit (2007)</p>
                    -->

                </div>
            </div>

            <div id="painel-bot">
                <section class="">
                    <h2 class="highlight">My repertoire</h2>
                    <p><strong class="highlight">_</strong>Instead of tell you what I can do and how well I can do the specified thing using numbers, graphics or any other abstract method, I will let my work show you what I've made it so far. And also, here are a few suggestions for you to take a quick look.</p>
                </section>

                <section class="work-filter repertoire">
                <div id="latest-creation" class="check-out">
                    <a href="https://youtu.be/C4Po4rObP_Y" target="_blank"><span><i class="fas fa-briefcase fa-lg fa-fw"></i></span>
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
=======
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
    <title>Hi, I'm a Digital Designer - Welcome to my site. Enjoy!</title>
    <meta name="description" content="This is my personal website and portfolio. I'm a digital designer, and I mainly work with education. I also know my way around motion design and video editing and VFX.">
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
                    <h1>My name is <strong>Alexandre Mello</strong></h1>
                    <h2>and I'm a <span class="highlight">Digital Designer</span></h2>
                </article>
            </div>

            <div id="painel-mid">
                <div id="infos">
                    <p><strong class="highlight">_</strong>Hi there, nice to see you here. As I said before, I'm Alexandre and I work as a Digital Designer, I have worked as a <strong class="highlight">Instructional Designer</strong>, <strong class="highlight">Motion Designer</strong> and also as a <strong class="highlight">Video Editor</strong>.</p>
                    <p><strong class="highlight">_</strong>For the time being I'm living in <strong class="highlight">Montréal (Québec, CA)</strong>, but I'm currently don't have any strings attached anywhere, I don't mind moving to another place. I'm going to wherever life takes me.</p>
                </div>
                <div id="detalhes">
                    <!-- NOWADAYS -->
                    <p><strong class="highlight">_</strong>Instructional Designer @ Immigrant Services Association of Nova Scotia (Jun/2021 - Present)<strong class="highlight"> :Nowadays</strong></p>

                    <!-- PAST EXPERIENCES -->
                    <p><strong class="highlight">_</strong>Designer @ CCEAD PUC-Rio (Jul/2017 - Jul/2019)<strong class="highlight"> :Past Experiences</strong></p>
                    <p><strong class="highlight">_</strong>Motion Designer Intern @ SESC - National Department (Mar/2015 - Sep/2015)</p>

                    <!-- EDUCATION -->
                    <p><strong class="highlight">_</strong>VFX and Editing (Fanshawe College/2020)<strong class="highlight"> :Education</strong></p>
                    <p><strong class="highlight">_</strong>Bachelor of Design (PUC-Rio/2016)</p>

                    <!-- LOCATION -->
                    <p><strong class="highlight">_</strong>Montréal - Canada<strong class="highlight"> :Location</strong></p>

                    <!-- LANGUAGES -->
                    <p><strong class="highlight">_</strong>Portuguese (born and raised)<strong class="highlight"> :Languages</strong></p>
                    <p><strong class="highlight">_</strong>English (solid as a rock)</p>
                    <p><strong class="highlight">_</strong>French (débutant)</p>

                    <!-- AWARDS
                    <p><strong class="highlight">_</strong>CCAA Best Student (1997)<strong class="highlight"> :Awards</strong></p>
                    <p><strong class="highlight">_</strong>University Of Cambridge - ESOL Examinations, Pass with Merit (2007)</p>
                    -->

                </div>
                <div id="detalhes-mob">
                    <!-- NOWADAYS -->
                    <h3><strong class="highlight">_Nowadays</strong></h3>
                    <p>Instructional Designer @ Immigrant Services Association of Nova Scotia (Jun/2021 - Present)</p>

                    <!-- PAST EXPERIENCES -->
                    <h3><strong class="highlight">_Past Experiences</strong></h3>
                    <p>Designer @ CCEAD PUC-Rio (Jul/2017 - Jul/2019)</p>
                    <p>Motion Designer Intern @ SESC - National Department (Mar/2015 - Sep/2015)</p>

                    <!-- EDUCATION -->
                    <h3><strong class="highlight">_Education</strong></h3>
                    <p>VFX and Editing (Fanshawe College/2020)</p>
                    <p>Bachelor of Design (PUC-Rio/2016)</p>

                    <!-- LOCATION -->
                    <h3><strong class="highlight">_Location</strong></h3>
                    <p>Montréal - Canada</p>

                    <!-- LANGUAGES -->
                    <h3><strong class="highlight">_Languages</strong></h3>
                    <p>Portuguese (born and raised)</p>
                    <p>English (solid as a rock)</p>
                    <p>French (débutant)</p>

                    <!-- AWARDS
                    <h3><strong class="highlight">_Awards</strong></h3>
                    <p>CCAA Best Student (1997)</p>
                    <p>University Of Cambridge - ESOL Examinations, Pass with Merit (2007)</p>
                    -->

                </div>
            </div>

            <div id="painel-bot">
                <section class="">
                    <h2 class="highlight">My repertoire</h2>
                    <p><strong class="highlight">_</strong>Instead of tell you what I can do and how well I can do the specified thing using numbers, graphics or any other abstract method, I will let my work show you what I've made it so far. And also, here are a few suggestions for you to take a quick look.</p>
                </section>

                <section class="work-filter repertoire">
                <div id="latest-creation" class="check-out">
                    <a href="https://youtu.be/C4Po4rObP_Y" target="_blank"><span><i class="fas fa-briefcase fa-lg fa-fw"></i></span>
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
>>>>>>> c7ebb37efe2fd6d74e0b0a8ac4a913ab32e5a59f
