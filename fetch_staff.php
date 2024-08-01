<?php

include 'connection.php';

if (!isset($_GET['id'])) {
    echo json_encode(['error' => 'ID parameter missing']);
    exit;
}

$staff_id = $_GET['id'];

$sql = "SELECT * FROM staff WHERE staff_id = ?";
$stmt = $conn->prepare($sql);

if ($stmt === false) {
    echo json_encode(['error' => 'Failed to prepare statement']);
    exit;
}

$stmt->bind_param("i", $staff_id);

$stmt->execute();

$stmt->bind_result($staff_id, $first_name, $middle_name, $last_name, $birth_date, $gender, $purok_assigned, $position, $civil_status, $image, $signature, $age, $contact_number);

if ($stmt->fetch()) {
    echo json_encode([
        'staff_id' => $staff_id,
        'first_name' => $first_name,
        'middle_name' => $middle_name,
        'last_name' => $last_name,
        // 'birth_date' => $birth_date,
        'gender' => $gender,
        'purok_assigned' => $purok_assigned,
        'position' => $position,
        'civil_status' => $civil_status,
        'image' => $image,
        'age' => $age,
        'contact_number' => $contact_number,
        'signature' => $signature
    ]);
} else {
    echo json_encode(['error' => 'Staff not found']);
}

$stmt->close();
$conn->close();

?>
