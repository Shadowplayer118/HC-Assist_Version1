<?php
session_start();
include 'connection.php'; // Include your database connection file

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare and execute the statement
    $stmt = $conn->prepare("SELECT position, password FROM staff WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows == 1) {
        $stmt->bind_result($position, $password); // Bind the result to variables
        $stmt->fetch(); // Fetch the result
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        $_SESSION['position'] = $position; // Store the userType in the session
        if($position =='Admin'){
            header('Location: dashboard.html');
            exit();
   
        }
        else{
            echo "<script>
        alert('Incorrect Credentials!');
        window.location.href = 'index.html';
    </script>";
    exit();
        }
       
    } else {
       
        echo "<script>
        alert('Incorrect Credentials!');
        window.location.href = 'index.html';
    </script>";
    exit();
    
    }

    $stmt->close();
}
?>
