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
    <meta name="description" content="This is my personal website and portfolio. I'm a digital designer, my line of work consists mainly of user experience, web design and mobile related projects.">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Alexandre Gomide da Silva Mello">

    <link rel="canonical" href="https://alexgmello.com/biofeedback">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="font-awesome/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="css/fonts.min.css">
    <link rel="stylesheet" href="css/style.min.css">
</head>

<body>
    <!-- HEADER -->
    <?php include_once "header.php" ?>

    <div class="container">
       <button onclick="goTop()" id="topBtn" title="Back to top"><span><i class="fas fa-arrow-circle-up"></i></span></button>
        <div id="biofeedback">
            <section>
                <h1 class="highlight">The Biofeedback's Influence In An Eletronic Game</h1>
                <h4>A game that utilizes biofeedback, to adjust the challenges proposed for the player</h4>
                <p>First of all, what you are about to read here, is just a small sample of the whole project. If you want (and know how to read in portuguese), you can read the complete article <a href="Biofeedback/The%20Biofeedback's%20Influence%20In%20An%20Eletronic%20Game.pdf" target="_blank" class="external-link">here</a>.</p>

                <article class="artigo">
                    <h2 class="highlight">_What is biofeedback?</h2>
                    <p>You can define "biofeedback" as a technic which is used to learn how to control body functions, for example, the heart rate. This helps to focus on subtle body changes, like, relax certain muscles to get a desireble result, to reduce pain. Essencialy, biofeedback gives you the power to use your thoughs, to control your own body, in a way that helps your health condiction or improve physical performance. Biofeedback is used a lot as a relaxation technic, and this is the my project's base development foundation. The player uses the control of his own body to try to manipulate the events inside the game.</p>
                    <p>This is a way for the game to understand something besides the player's aware decisions, like the press of a button or moving the analog stick. And now, the game gains the capacity to interact directly with the player's subconscious reply. Games can also use it to try and reach the <i>Flow</i>, <a href="https://www.researchgate.net/publication/224927532_Flow_The_Psychology_of_Optimal_Experience" target="_blank" class="external-link">that according to Mihaly [1990]</a>, it's a state when both player and game "get in syntony". In other words, the game is providing to the player a challenge which isn't hard enough to the point that causes frustation, nor easy enough to make him bored.</p>
                    <img src="img/biofeedback/biofeedback.png" alt="biofeedback graphic">
                    <p>There is also another concept that I think is important to mention, and this concept is the Affective Feedback. But what does this mean? Well, it basically means that both player and game are affected by the actions made by each other. For that to occur you also need to keep a affective feedback loop, which means, that the game rule will try to induce the player to act in a oposite manner than he usually would. For example, in a situation where he, the player, would normally be relaxed, he would have to be agitated, and vice versa, creating that way, a loop. But you have to be careful, because depending on how the game is designed, what should originally contained a affective feedback loop, can become only a biofeedback game. Let's say you're making a racing game, where the more relaxed the player is, the faster he goes. It's counter intuitive to remain calm when you're losing (or even in the first place). But once the player knows how mechanic works, what once was a physiologically natural respose, becomes a controlled information. And now the concept of affective feedback is lost. It's very important to keep that in mind when designing a game with affective gameplay in mind.</p>

                    <h2 class="highlight">_The part about game design</h2>
                    <p>So, what is this game all about...</p>
                    <p>It's about a chicken (a space chicken, to be more precise). Our hero's (the chicken) planet have been infected with a symbiotic parasite (very creative, I know), that spread it to every thing in the planet, living or not, and that it's all one big organism. Except you, the chicken, and now you have to escape, but in order to escape you have to make your way out through viscious monsters and deadly traps.</p>
                    <img class="gif" src="img/biofeedback/idle.gif" alt="space chicken, standing still">
                    <p>This is as a 2D platform game, you move in four direction (up, down, left and right). The games pace and difficult are partly controlled by the player's physiological sensations, in this case they are: blood pulse rate and galvanic skin response. These two are responsible for influence the level's hazards. The player's movement are controlled by a controller (horizontal movement) and by his breathing (vertical movement by blowing at a microphone). The player also have a lantern, that have it radius size influenced by a combination of his BPM and his breathing.</p>

                    <p>The game becomes harder as the player advances in-game. The design was thought to keep the player in a constant change of state, this means that he will face situations which if he stays in a relaxed state will be better and sometimes not. Why, simple because the more relaxed he is, slower the enemies will be, but in counter measure, his lantern will be weaker, which means that he will have a hard time exploring and avoiding death. Although there might be times where sacrificing view distance might turn out to be a better option.</p>
                    <article class="references">
                    <h2 class="highlight">_References</h2>
                    <p><strong>AMBINDER, M..</strong> Biofeedback in Gameplay: How Valve Measures Physiology to Enhance Gaming Experience. <i>VALVE</i>, 2011.</p>
                    <p><strong>BERSAK, D.; McDARBY, G.; AUGENBLICK, N.; McDARBY, P.; McDONNELL, D.; McDONALD, B.; KARKUN, R..</strong> Intelligent Biofeedback using an Immersive Competitive Environment. <i>Media Lab Europe</i>, 2014.</p>
                    <p><strong>CSIKSZENTMIHALYI, M..</strong> Flow: the psychology of optimal experience. <i>Harper & Row, New York, 1 <sup>st</sup> edition</i>, 1990</p>
                    <p><strong>GILLEADE, K.; DIX, A.; ALLANSON, J..</strong> Affective videogames and modes of affective games. <i>Lancaster University , Allanson Consulting</i>, 2005.</p>
                    <p><strong>NACKE, L.; KALYN, M.; LOUGH, C.; MANDRYK, R..</strong> Biofeedback Game Design: Using Direct and Indirect Physiological Control to Enhance Game Interaction. <i>University of Saskatchewan</i>, 2011.</p>
                    <p><strong>REYNOLDS, E..</strong> Quit Playing Games with My Heart: Biofeedback in Gaming. <i>Available at: <a href="http://www.gamasutra.com/blogs/ErinReynolds/20131029/203265/Quit_Playing_Games_with_My_Heart_Biofeedback_in_Gaming.php" target="_blank" class="external-link">gamasutra.com</a></i>, Last acess: September, 2015.</p>
                    </article>

                    <h2 class="artigo-fim highlight">That's all folks</h2>
                </article>
            </section>
        </div>
    </div>
    <!-- FOOTER -->
    <?php include_once "footer.php" ?>
<script src="js/jquery-2.1.1.min.js"></script>

<script>
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
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
