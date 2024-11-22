<?php
// Database connection
$host = "localhost";
$user = "root";
$pass = "";
$db_name = "hc-assist_database1";

$conn = mysqli_connect($host, $user, $pass, $db_name);

// Check if connection is successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve data from POST request
$patient_id = $_POST['edit-patient_id'];
$name = $_POST['edit-first_name'];
$description = $_POST['description'];
$approval_status = $_POST['approval_status']; // Hardcoded as "Pending"
$referral_date = $_POST['referral_date'];

// SQL query to insert data
$sql = "INSERT INTO referrals (patient_id, description, approval_status, referral_date) 
        VALUES ('$patient_id', '$description', '$approval_status', '$referral_date')";

// Execute the query and check for success
if (mysqli_query($conn, $sql)) {
    $response = ['status' => 'success', 'message' => 'Referral added successfully.'];
    echo json_encode($response); // Send success response back to AJAX
} else {
    $response = ['status' => 'error', 'message' => 'Failed to add referral: ' . mysqli_error($conn)];
    echo json_encode($response); // Send error message back to AJAX
}

// Close the database connection
mysqli_close($conn);
?>
