<?php
 	//Send some headers to keep the user's browser from caching the response
	header("Expires: Mon, 26 Jul 1997 05:00:00 GMT" ); 
	header("Last-Modified: " . gmdate( "D, d M Y H:i:s" ) . "GMT" ); 
	header("Cache-Control: no-cache, must-revalidate" ); 
	header("Pragma: no-cache" );

	try {
		//Create db query
		$username="bryllert_jonas";
		$password="jb3801";
		$database="bryllert_sunnyfield";
		mysql_connect(localhost,$username,$password);
		@mysql_select_db($database) or die( "Unable to select database");
	
		$mail = '"' . mysql_real_escape_string(htmlspecialchars($_POST["mail"])) . '"';
		// $mailFormatted = '`' . $mail . '`';
		$comment = mysql_real_escape_string(htmlspecialchars($_POST["comment"]));
		$commentFormatted = '"' . $comment . '"';
		$canPublish = $_POST["canpublish"];
		$canPublishBoolean = 0;
		if ($canPublish == "Yes") {
			$canPublishBoolean = 1;
		}
		$date = date_format(date_create(), 'Y-m-d H:i');
		$dateFormatted = '"' . $date . '"';
		// $date = "2020202";
		$query = "INSERT INTO `BLOG` VALUES (NULL ,  $mail, $commentFormatted, $dateFormatted,  $canPublishBoolean,  0);";
		$result = mysql_query($query);
		
		if ($result == TRUE) {
			echo 'Your comment has been succesfully submitted. Thank you!';
			// echo 'SQL: ' . $query;
			// echo '\nCanPublish: ' . $canPublish;
			mail('JonasBryllert@yahoo.ie', 'SunnyField comment', 'Successful insert of ' . $query);		
		}
		else {
			echo 'Failed to add comment' . $query;
			mail('JonasBryllert@yahoo.ie', 'SunnyField comment', 'Failed insert of ' . $query);		
		}
	} catch (Exception $e) {
 		echo 'Failed to add comment ' . $e ;
			mail('JonasBryllert@yahoo.ie', 'SunnyField comment', 'Failed with exception insert of ' . $query);		
	}
	// echo $query;
	// $mail = htmlspecialchars($_POST["mail"]);
	
	// echo "All param: ";
	// foreach($_POST as $var => $value)
	// {
		// echo $var . ':' . $value . " ";
	// }
    // phpinfo();
?>