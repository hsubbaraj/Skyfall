<html>
	<head>
		<title>Most Troll Game You Ever Played</title>
		<link href = "exercise5.css" rel = "stylesheet" type = "text/css">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
		<script src = "exercise5.js"></script>
	</head>
	<body>
		<header>
			<h2><p>Welcome to the Most Troll Game of All Time: <em>LIGTHS OUT</em></p></h2>
		</header>
		<table id = "colortable">
		<?php
			for($i = 0; $i <5; $i++) {
				echo "<tr>";
				for($j = 0; $j <5; $j++) {
					echo "<td class = 'onyellow'></td>";
				}
				echo "</tr>";
			}
		?>
		</table>
		<p class = "off">Congratulations! You have won the game!</p>
		<input type = "reset" height = "20px" width = "40px" type = "reset" id = "reset">
		<label for = "hacks">Hacks</label><input type = "button" height = "100px" width = "400px" id = "hacks">
	</body>
</html>