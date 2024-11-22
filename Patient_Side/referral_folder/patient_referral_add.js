$(document).ready(function () {
    $('#submitReferral').on('click', function (e) {
        e.preventDefault(); // Prevent default button behavior

        // Get the current date in YYYY-MM-DD format
        const currentDate = new Date().toISOString().split('T')[0];

        // Gather data from the form
        const data = {
            'edit-first_name': $('#edit-first_name').val(),
            'edit-patient_id': $('#edit-patient_id').val(), // Send patient_id
            'description': $('#description').val(),
            'approval_status': 'Pending', // Hardcode the approval status as "Pending"
            'referral_date': currentDate // Add current date to the data
        };

        $.ajax({
            url: 'patient_add.php', // PHP file that processes the form
            method: 'POST',
            data: data, // Send data as an object
            dataType: 'json',
            success: function (response) {
                if (response.status === 'success') {
                    alert(response.message); // Show success message
                    $('#referralForm')[0].reset(); // Reset the form fields
                } else {
                    alert(response.message); // Show error message
                }
            },
            error: function (xhr, status, error) {
                alert('An error occurred: ' + error); // Show AJAX error
            }
        });
    });
});
