<?php
	//Send some headers to keep the user's browser from caching the response
	header("Expires: Mon, 26 Jul 1997 05:00:00 GMT" ); 
	header("Last-Modified: " . gmdate( "D, d M Y H:i:s" ) . "GMT" ); 
	header("Cache-Control: no-cache, must-revalidate" ); 
	header("Pragma: no-cache" );
	header("Content-Type: text/xml; charset=utf-8");

?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>New Web Project</title>
	</head>
	<body>
		<h1>New Web Project Page</h1>
		<?php
			echo "Now this is coming from the PHP server";
			echo date('H:i:s');
			echo ("<br />");
			$username="bryllert_jonas";
			$password="jb3801";
			$database="bryllert_sunnyfield";
			mysql_connect(localhost,$username,$password);
			@mysql_select_db($database) or die( "Unable to select database");
			$query="SELECT * FROM MAILLIST";
			$result=mysql_query($query);
			$num=mysql_numrows($result);
			echo("<br />");
			echo ("$num: ");
			echo($num);
			echo("<br />");
			$i=0;
			while ($i < $num) {
				$id=mysql_result($result,$i,"ID");
				$name=mysql_result($result,$i,"NAME");
				$mail=mysql_result($result,$i,"MAIL");
				echo("<br />");
				echo ("$id Name: ");
				echo $name;
				echo("<br />");
				echo ("Mail: ");
				echo $mail;

				$i++;
			}
			mysql_close();
			
			
        ?>
    </body>
</html>
