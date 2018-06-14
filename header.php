<?php
    $pg = basename(substr($_SERVER['PHP_SELF'],0,strrpos($_SERVER['PHP_SELF'],'.'))); // get file name from url and strip extension
?>
<header>
    <div id="topo">
        <div class="container-menu">
            <nav id="menu">
                <a href="index.php" id="sobre-nav" class="<?php if($pg == 'index'){echo "ativo";} ?>">About</a>
                <a href="biofeedback.php" id="biofeedback-nav" class="<?php if($pg == 'biofeedback'){echo "ativo";} ?>">Biofeedback</a>
                <a href="work.php" id="work-nav" class="<?php if($pg == 'work'){echo "ativo";} ?>">Work</a>
            </nav>
        </div>
    </div>
</header>
