<?php
	//Send some headers to keep the user's browser from caching the response
	header("Expires: Mon, 26 Jul 1997 05:00:00 GMT" ); 
	header("Last-Modified: " . gmdate( "D, d M Y H:i:s" ) . "GMT" ); 
	header("Cache-Control: no-cache, must-revalidate" ); 
	header("Pragma: no-cache" );

	//Create db query
	$username="bryllert_jonas";
	$password="jb3801";
	$database="bryllert_sunnyfield";
	mysql_connect(localhost,$username,$password);
	@mysql_select_db($database) or die( "Unable to select database");
//	$query = "SELECT email, message, date_format(time, '%h:%i') as time FROM blog";
	$query = "SELECT * FROM BLOG WHERE PUBLISH=TRUE ORDER BY TIME DESC" ;
	$result=mysql_query($query);

	//Create the JSON response.
	$json = '{"blogs": {';

		
	//Loop through each message and create an XML message node for each.
	$num=mysql_numrows($result);
	if($num > 0) {
		$json .= '"blog":[ ';	
		while ($i < $num) {
			$email=mysql_result($result,$i,"EMAIL");
			$message=mysql_result($result,$i,"MESSAGE");
			$time=mysql_result($result,$i,"TIME");
			$json .= '{';
			$json .= '"email":  "' .htmlspecialchars($email). '",
					"message": "' .htmlspecialchars($message). '",
					"time": "' .$time. '"
			},';
			$i++;
		}
		$json = substr($json, 0, -1);//remove last comma
		$json .= ']';
	} else {
		//Send an empty message to avoid a Javascript error when we check for message lenght in the loop.
		$json .= '"blog":[]';
	}

	//Close our response
	$json .= '}}';
	echo $json;
	
//	Json description
//	{"blogs": {
//		"blog":[
//			{"email": "JonasBryllert@yahoo.ie",
//			"message": "xxxxxx",
//			"time": "2012-02-08 13:45"},
//			
//			{"email": "JonasBryllert@yahoo.ie",
//			"message": "xxxxxx",
//			"time": "2012-02-08 13:45"},
//			]
//		}
//	}
?>

