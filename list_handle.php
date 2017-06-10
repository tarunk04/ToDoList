<?php

	$data = $_POST["data"];
	$myfile = fopen("text/todo.txt", "w") or die("Unable to open file!");
	fwrite($myfile, $data);
	fclose($myfile);

?>
