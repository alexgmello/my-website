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
    <meta name="description" content="Here you can check most of my creations, some are personal or study projects, and others were made for work.">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Alexandre Gomide da Silva Mello">

    <link rel="canonical" href="https://alexgmello.com/work">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="font-awesome/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="css/svvg.min.css">
    <link rel="stylesheet" href="css/fonts.min.css">
    <link rel="stylesheet" href="css/style.min.css">
</head>

<body>
    <!-- HEADER -->
    <?php include_once "header.php" ?>

    <div class="container">
        <button onclick="goTop()" id="topBtn" title="Back to top"><span><i class="fas fa-arrow-circle-up"></i></span></button>
        <div id="work">
            <article>
                <section class="work-filter">
                    <h2>What would you like to see?</h2>
                </section>

                <section class="work-filter">
                    <div id="FrontEnd" class="work-type filter-active">
                        <span><i class="fas fa-desktop fa-5x"></i></span>
                        <h1>Web Design</h1>
                    </div>
                    <div id="AudioVisual" class="work-type">
                        <span><i class="fas fa-play-circle fa-5x"></i></span>
                        <h1>Audio Visual</h1>
                    </div>
                    <div id="Nothing" class="work-type">
                        <span><i class="far fa-square fa-5x"></i></span>
                        <h1>Nothing</h1>
                    </div>
                </section>

                <section class="legend">
                    <p><strong>Legend:</strong></p>
                    <ul>
                        <li><p><i class="fas fa-mobile-alt mob-friendly"></i> Mobile Friendly</p></li>
                        <li><p><i class="fas fa-mobile-alt mob-not-friendly"></i> Not Mobile Friendly</p></li>
                        <li><p><i class="fas fa-graduation-cap"></i> Study</p></li>
                        <li><p><i class="fas fa-briefcase"></i> Work</p></li>
                    </ul>
                </section>
            </article>
        </div>
    </div>
    <div id="vid-anchor"></div>
    <div id="myWorks">

    <!-- FRONT END -->
    <section class="web">

    <div class="work-bg-4">
        <div class="container">
            <article class="work-web">
                <div><a href="FrontEnd/CorporateCompany/index.html" target="_blank"><img src="img/work/frontend-08.png" alt=""></a></div>
                <h3 class="highlight">Corporate Company</h3>
                <h4><i class="fas fa-lg fa-mobile-alt mob-friendly"></i> <i class="fas fa-lg fa-graduation-cap"></i></h4>
                <p>This were an exercise I was supposed to do a long time ago, but I decided to do just now, because of reasons. Now I took the opportunity to learn more about a specific CSS function (in this case, Flexbox). This site isn't a completely original creation, I used <a href="http://poggi.com.br" target="_blank" class="external-link">this site</a> as inspiration (for no particulary reason), made some slightly modifications on the layout and changed most of the content. It's better viewed on Google Chrome, since I only found out that the browsers don't react the same way to some types of flexbox content, after I finished. At least now I know that, and wont happen again.</p>
                <a class="work-button" href="FrontEnd/CorporateCompany/index.html" target="_blank"><span><i class="fas fa-external-link-square-alt"></i></span>Check it out</a>
            </article>
        </div>
    </div>

    <div class="work-bg-3">
        <div class="container">
            <article class="work-web">
                <div><a href="FrontEnd/AIDS/index.html" target="_blank"><img src="img/work/frontend-07.png" alt=""></a></div>
                <h3 class="highlight">Distance Learning Education - AIDS and New Biology</h3>
                <h4><i class="fas fa-lg fa-mobile-alt mob-not-friendly"></i> <i class="fas fa-lg fa-briefcase"></i></h4>
                <p>This was an adaptation of a distance learning course. What I did was gather the course material and make it more organized. The idea was to create something simple that could be recreated easely, since there were multiple courses, but with different subjects. This doesn't have a responsive content because this was created to be used by schools (or other kind of education institution), offline and with a desktop computer. Because this material doesn't belong to me and it isn't free to distribute, it's content have been altered/removed.</p>
                <a class="work-button" href="FrontEnd/AIDS/index.html" target="_blank"><span><i class="fas fa-external-link-square-alt"></i></span>Check it out</a>
            </article>
        </div>
    </div>

    <div class="work-bg-2">
        <div class="container">
            <article class="work-web">
                <div><a href="FrontEnd/Colors/index.html" target="_blank"><img src="img/work/frontend-06.png" alt=""></a></div>
                <h3 class="highlight">Distance Learning Education - Colors of The Sky</h3>
                <h4><i class="fas fa-lg fa-mobile-alt mob-not-friendly"></i> <i class="fas fa-lg fa-briefcase"></i></h4>
                <p>This was an adaptation of a distance learning course. What I did was gather the course material and make it more organized. The idea was to create something simple that could be recreated easely, since there were multiple courses, but with different subjects. This doesn't have a responsive content because this was created to be used by schools (or other kind of education institution), offline and with a desktop computer. Because this material doesn't belong to me and it isn't free to distribute, it's content have been altered/removed.</p>
                <a class="work-button" href="FrontEnd/Colors/index.html" target="_blank"><span><i class="fas fa-external-link-square-alt"></i></span>Check it out</a>
            </article>
        </div>
    </div>

    <div class="work-bg-1">
        <div class="container">
            <article class="work-web">
                <div><a href="FrontEnd/Metrology/index.html" target="_blank"><img src="img/work/frontend-05.png" alt=""></a></div>
                <h3 class="highlight">Distance Learning Education - Metrology</h3>
                <h4><i class="fas fa-lg fa-mobile-alt mob-not-friendly"></i> <i class="fas fa-lg fa-briefcase"></i></h4>
                <p>This was an adaptation of a distance learning course. What I did was gather the course material and make it more organized. The idea was to create something simple that could be recreated easely, since there were multiple courses, but with different subjects. This doesn't have a responsive content because this was created to be used by schools (or other kind of education institution), offline and with a desktop computer. Because this material doesn't belong to me and it isn't free to distribute, it's content have been altered/removed.</p>
                <a class="work-button" href="FrontEnd/Metrology/index.html" target="_blank"><span><i class="fas fa-external-link-square-alt"></i></span>Check it out</a>
            </article>
        </div>
    </div>

    <div class="work-bg-4">
        <div class="container">
            <article class="work-web">
                <div><a href="FrontEnd/GourmetHouse/index.html" target="_blank"><img src="img/work/frontend-04.png" alt=""></a></div>
                <h3 class="highlight">Gourmet House</h3>
                <h4><i class="fas fa-lg fa-mobile-alt mob-friendly"></i> <i class="fas fa-lg fa-graduation-cap"></i></h4>
                <p>This was a study made for a <a href="https://www.cotiinformatica.com.br/" target="_blank" class="external-link">web design course</a> that I made when I was first learning this subject. The layout wasn't made by me, I only wrote the code to make it "real".</p>
                <a class="work-button" href="FrontEnd/GourmetHouse/index.html" target="_blank"><span><i class="fas fa-external-link-square-alt"></i></span>Check it out</a>
            </article>
        </div>
    </div>

    <div class="work-bg-3">
        <div class="container">
            <article class="work-web">
                <div><a href="FrontEnd/a&bTechnolgy/index.html" target="_blank"><img src="img/work/frontend-03.png" alt=""></a></div>
                <h3 class="highlight">A&B Tecnologia</h3>
                <h4><i class="fas fa-lg fa-mobile-alt mob-friendly"></i> <i class="fas fa-lg fa-graduation-cap"></i></h4>
                <p>This was a study made for a <a href="https://www.cotiinformatica.com.br/" target="_blank" class="external-link">web design course</a> that I made when I was first learning this subject. The layout wasn't made by me, I only wrote the code to make it "real".</p>
                <a class="work-button" href="FrontEnd/a&bTechnolgy/index.html" target="_blank"><span><i class="fas fa-external-link-square-alt"></i></span>Check it out</a>
            </article>
        </div>
    </div>

    <div class="work-bg-2">
        <div class="container">
            <article class="work-web">
                <div><a href="FrontEnd/DenteClean/index.html" target="_blank"><img src="img/work/frontend-02.png" alt=""></a></div>
                <h3 class="highlight">Dente Clean</h3>
                <h4><i class="fas fa-lg fa-mobile-alt mob-not-friendly"></i> <i class="fas fa-lg fa-graduation-cap"></i></h4>
                <p>This was a study made for a <a href="https://www.cotiinformatica.com.br/" target="_blank" class="external-link">web design course</a> that I made when I was first learning this subject. The layout wasn't made by me, I only wrote the code to make it "real". This site isn't responsive because it was made during the beggining of the course, we learned about it at the course's mid-end.</p>
                <a class="work-button" href="FrontEnd/DenteClean/index.html" target="_blank"><span><i class="fas fa-external-link-square-alt"></i></span>Check it out</a>
            </article>
        </div>
    </div>

    <div class="work-bg-1">
        <div class="container">
            <article class="work-web">
                <div><a href="FrontEnd/BellaEstetica/index.html" target="_blank"><img src="img/work/frontend-01.png" alt=""></a></div>
                <h3 class="highlight">Bella Estética</h3>
                <h4><i class="fas fa-lg fa-mobile-alt mob-not-friendly"></i> <i class="fas fa-lg fa-graduation-cap"></i></h4>
                <p>This was a study made for a <a href="https://www.cotiinformatica.com.br/" target="_blank" class="external-link">web design course</a> that I made when I was first learning this subject. The layout wasn't made by me, I only wrote the code to make it "real". This site isn't responsive because it was made during the beggining of the course, we learned about it at the course's mid-end.</p>
                <a class="work-button" href="FrontEnd/BellaEstetica/index.html" target="_blank"><span><i class="fas fa-external-link-square-alt"></i></span>Check it out</a>
            </article>
        </div>
    </div>
    <!-- FOOTER -->
    <?php include "footer.php" ?>
    </section>

    <!-- MEDIA -->
    <section class="media">
    <ul id="svList">
        <li class="svThumb ytVideo" data-videoID="n8iirRcNKAk"><i class="fas fa-graduation-cap"></i> Um dia descontínuo</li>
        <li class="svThumb ytVideo" data-videoID="Z78uw3me8II"><i class="fas fa-graduation-cap"></i> Bike Adiante</li>
        <li class="svThumb ytVideo" data-videoID="uWwZxoTP6hQ"><i class="fas fa-graduation-cap"></i> GambiTech</li>
        <li class="svThumb ytVideo" data-videoID="Sa7bc6CMEkw"><i class="fas fa-graduation-cap"></i> Blah!</li>
        <li class="svThumb ytVideo" data-videoID="smo0h0rUeTE"><i class="fas fa-graduation-cap"></i> Saga (sonorization)</li>
        <li class="svThumb ytVideo" data-videoID="qUc7S5BjfKI"><i class="fas fa-graduation-cap"></i> Mochila Inteligente (simulation)</li>
        <li class="svThumb ytVideo" data-videoID="zKbmJ9qKJr4"><i class="fas fa-graduation-cap"></i> Mochila Inteligente (explanation)</li>
        <li class="svThumb ytVideo" data-videoID="KjG0p2JXuNA"><i class="fas fa-briefcase"></i> Football Championship (gallery)</li>
        <li class="svThumb ytVideo" data-videoID="O91moIwSS-4"><i class="fas fa-briefcase"></i> Football Championship (intro)</li>
        <li class="svThumb ytVideo" data-videoID="AQOH3AmoY2w"><i class="fas fa-briefcase"></i> Football Championship (line up)</li>
        <li class="svThumb ytVideo" data-videoID="_Yv57vQXnXY"><i class="fas fa-briefcase"></i> Football Championship (jumbotron)</li>
        <li class="svThumb ytVideo" data-videoID="vgYDsnDXRDc"><i class="fas fa-briefcase"></i> Football Championship (awards)</li>
        <li class="svThumb ytVideo" data-videoID="j9viftr3JMs"><i class="fas fa-briefcase"></i> Football Championship (match up)</li>
    </ul>
    <!-- FOOTER -->
    <?php include "footer.php" ?>
    </section>

    <!-- NOTHING -->
    <section class="nothing work-bg-1">
        <div class="container">
        <article>
            <h3 class="highlight">Here it is... NOTHING!</h3>
            <p>I told you that you would find only nothing here, didn't I? But you came anyway. Now I feel kinda bad...</p>
            <p>So here's a random cat picture for you. Cortesy of <strong><a href="https://source.unsplash.com/" target="_blank" rel="nofollow" class="highlight">Unsplash</a></strong>.</p>
            <img src="https://source.unsplash.com/960x540/?cat" alt="a picture of a kitty cat">
        </article>
        </div>
    <!-- FOOTER -->
    <?php include "footer.php" ?>
    </section>

    </div>

<script src="js/jquery-2.1.1.min.js"></script>
<script src="js/speedvault.js"></script>
<script>
    window.onbeforeunload = function(){ window.scrollTo(0,0); }

    $(window).load(function(){
        $("#FrontEnd").click(function() {
            $("#myWorks").children().fadeOut(15);
            $("#myWorks .web").delay(20).fadeIn(500);
            $(".work-type").removeClass("filter-active");
            $(this).addClass("filter-active");
        })

        $("#AudioVisual").click(function(){
            $("#myWorks").children().fadeOut(15);
            $("#myWorks .media").delay(20).fadeIn(500);
            $(".work-type").removeClass("filter-active");
            $(this).addClass("filter-active");
        })

        $("#Nothing").click(function(){
            $("#myWorks").children().fadeOut(15);
            $("#myWorks .nothing").delay(20).fadeIn(500);
            $(".work-type").removeClass("filter-active");
            $(this).addClass("filter-active");
        })
    })
</script>
<script>
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
            document.getElementById("topBtn").style.display = "block";
        } else {
            document.getElementById("topBtn").style.display = "none";
        }
    }

    var timeOut;
    function goTop() {
        if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
            window.scrollBy(0,-75);
            timeOut=setTimeout('goTop()',10);
        }
        else clearTimeout(timeOut);
    }
</script>
</body>
</html>
