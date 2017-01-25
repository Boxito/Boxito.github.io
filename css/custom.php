<?php
	header("Content-type: text/css; charset: UTF-8");
	
	$boxito_rojo = '#EB0029';
	$boxito_rojo_claro = "#FB0029";
	$boxito_rojo_oscuro = "#CB0029";
?>
@charset "UTF-8";
/* CSS Document */
nav,
footer.page-footer
{
	background: <?php echo $boxito_rojo ?>;
}

/* Page loader */
.progress 
{
 	position: absolute;
 	left: 0px;
 	top: 0px;
 	z-index: 2;
 	margin-top: 0px;
	height: 8px;
}
.progress .determinate {
	background-color: <?php echo $boxito_rojo_oscuro ?>;
}