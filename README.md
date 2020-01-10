# About

This is a demo static website in HTML, CSS and JavaScript and can be accessed here: https://martins-k.github.io/demo-web/index.html.
## MySQL database setup

As Github Pages allow deploying static websites only, the PHP script in this website is removed.
In order to be able to run PHP, you will download the repository to your local machine, add the PHP script to the specific webpage and then run a local server environment to make the script work and connect to a MySQL database.

1. Download this repository to your local machine.

2. Open html/contact.html file and add the following PHP script after the closing ```</form> ``` tag (make sure to take into account the comments):

```php
<?php

	$hostname = "localhost";
//Make sure you have the correct username
	$username = "root";
//Make sure you have the correct password
	$password = "root";
//Make sure your database name is equal to mana_datubaze. See point no. 5
	$conn = mysqli_connect($hostname, $username, $password, "mana_datubaze");

	if (!$conn) {
		die("Could not establish connection! </br>".mysqli_connect_error());
	}

	if (isset($_POST['submit'])) {
		$user_email = $_POST['user-email'];
		if (!empty($user_email)) {
			$sql = "INSERT INTO `epastu_saraksts` (`user-email`) VALUES ('$user_email')";
//Make sure the table name in your database is equal to epastu_saraksts. See point no. 5
			mysqli_query($conn, $sql);
			echo "<center>Epasts veiksmīgi saglabāts!</center>";
		}
		else{
			die("<center>Some data were not provided!</center>");
		}			
	}

	$result = mysqli_query($conn, "SELECT * FROM `epastu_saraksts` ORDER BY `id` desc");
	if (mysqli_num_rows($result) > 0) {
		echo "<p> Ievadītie epasti:</p>";
		while($row = mysqli_fetch_assoc($result)) {
			echo "<div class='displayed-emails'><strong>Name: </strong>" . $row["user-email"] . "</div>";
		}
	}
	else{
		echo "Nav vēl ievadīts neviens epasts!";
		}
	mysqli_close($conn);

?>
```
3. Save ```html/contact.html``` as ```html/contact.php```.

4. Install and run a software, for example, MAMP or XAMPP, that enables to run a local server for hosting the website locally.

5. Use phpMyAdmin to create a new MySQL database and a new table in this database. Follow the comments in the above PHP script.

6. Start the local servers and the website is up and running.
