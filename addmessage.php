<?php
try{
	$conn = new PDO("mysql:host=localhost;dbname=mysitedb", 'root', 'root');
	
	if (empty($_POST['name'])) {
            exit("Поле не заполнено");
        }
        if (empty($_POST['email'])) {
            exit("Поле не заполнено");
        }
        if (empty($_POST['content'])) {
            exit("Поле не заполнено");
        }

        $query = "INSERT INTO message VALUES(NULL, :name, :email, NOW())";
	$msg = $conn->prepare($query);
	$msg->execute(['name' => $_POST['name'], 'email' => $_POST['email']]);
	
	$msq_id = $conn->lastInsertId();
	
	$query = "INSERT INTO `message_content` (`content_id`, `content`, `message_id`) VALUES (NULL, :content, :message_id)";
	
	$msg = $conn->prepare($query);
	$msg->execute(['content' => $_POST['content'], 'message_id' => $msq_id]);
	
	header("Location: index.php");
}
catch(PDOExeption $e){
	echo "error";
}




?>