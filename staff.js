$(document).ready(function() {

    loadTable();
    
    // var savedFilter = localStorage.getItem('nameInput');
    // if (savedFilter) {
    //     $('#filtername').val(savedFilter);
    //     performFilter(savedFilter);}
   
    // document.getElementById('filtername').value = 'Shadow';
});


function loadTable() {
    $.ajax({
        url: 'load_staff.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            var tableBody = $('.table-container #staff-table tbody');
            var templateRow = $('#template-row').clone().removeAttr('id').removeAttr('style');
            console.log(data);
            tableBody.empty();

            $.each(data, function(index, row) {
                var newRow = templateRow.clone();
                newRow.find('.id').text(row.staff_id);
                newRow.find('.name').text(row.first_name + " " + row.last_name);
                newRow.find('.position').text(row.position);
                newRow.find('.contact_number').text(row.contact_number);

                newRow.find('.actions').html('<button class="delete-btn" data-id="' + row.staff_id + '">Delete</button><button class="edit-btn" data-id="' + row.staff_id + '">Edit</button>');
                tableBody.append(newRow);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error loading data: ' + textStatus, errorThrown);
        }
    });
}



// Open modal
$('#openModalBtn').click(function() {
    $('#add-modal').show();
});

// Close modal
$('.close').click(function() {
    $('#add-modal').hide();
});

// Close modal when clicking outside
$(window).click(function(event) {
    if ($(event.target).is('#add-modal')) {
        $('#add-modal').hide();
    }
});


// Add character
$('#addForm').submit(function(event) {
    event.preventDefault();

    var formData = $(this).serialize();
    console.log(formData);

    $.ajax({
        url: 'staff_add.php',
        method: 'POST',
        data: formData,
        dataType: 'json',
        success: function(response) {
            console.log('Character added successfully: ', response);
            $('#add-modal').hide();
            // localStorage.setItem('nameInput','');
            // document.getElementById('filtername').value = "";
          
            location.reload();
            // loadTable();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error adding character: ', textStatus, errorThrown);
            location.reload();
            alert('Failed to add character, please try again.');
        }
    });
});


$('#staff-table').on('click', '.delete-btn', function() {
    if (!confirm('Are you sure you want to delete this Staff Member?')) {
        return;
    }

    var id = $(this).data('id');

    $.ajax({
        url: 'delete_staff.php',
        method: 'POST',
        data: { id: id },
        dataType: 'json',
        success: function(response) {
            console.log('Character deleted successfully:', response);
         
            location.reload();
            // loadTable(); // Reload the table to remove the deleted character
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error deleting character:', textStatus, errorThrown);
            alert('Failed to delete character. Please try again.');
        }
    });
});


//edit modal
$(document).on('click', '.edit-btn', function() {
    var id = $(this).data('id');
    
    $.ajax({
        url: 'fetch_staff.php',
        type: 'GET',
        data: { id: id },
        success: function(response) {
            try {
                var staff = JSON.parse(response);
                $('#edit-staff_id').val(staff.staff_id);
                $('#edit-first_name').val(staff.first_name);
                $('#edit-middle_name').val(staff.middle_name);
                $('#edit-last_name').val(staff.last_name);
                $('#edit-birthdate').val(staff.birthdate);
                $('#edit-gender').val(staff.gender);
                $('#edit-purok_assigned').val(staff.purok_assigned);
                $('#edit-position').val(staff.position);
                $('#edit-civil_status').val(staff.civil_status);
                $('#edit-image').val(staff.image); 
                $('#edit-age').val(staff.age);
                $('#edit-contact_number').val(staff.contact_number);
                $('#edit-signature').val(staff.signature);
                
                // Show the modal, use the appropriate method depending on your modal implementation
                $('#edit-modal').show();

                $('#edit-modal').show();

                console.log("Boyaka");
            } catch (e) {
                alert('Error parsing staffs details.');
                console.log(response);
                console.log(id);

            }
        },
        error: function() {
            alert('php is to blame');
        }
    });
});


// Close modal
$('.close-edit').click(function() {
    $('#edit-modal').hide();
});

// Close modal when clicking outside
$(window).click(function(event) {
    if ($(event.target).is('#edit-modal')) {
        $('#edit-modal').hide();
    }
});

// Edit character
$('#edit-form').submit(function(e) {
    e.preventDefault();

    var staff_id = $('#edit-staff_id').val();
    var first_name = $('#edit-first_name').val();
    var middle_name = $('#edit-middle_name').val();
    var last_name = $('#edit-last_name').val();
    var gender = $('#edit-gender').val();
    var purok_assigned = $('#edit-purok_assigned').val();
    var position = $('#edit-position').val();
    var image = $('#edit-image').val();
    var age = $('#edit-age').val();
    var contact_number = $('#edit-contact_number').val();
    var signature = $('#edit-signature').val();
    var username = $('#edit-username').val();

    $.ajax({
        url: 'staff_edit.php',
        type: 'POST',
        data: { staff_id: staff_id, first_name: first_name, middle_name: middle_name, last_name:last_name, gender:gender,purok_assigned:purok_assigned, position:position, image:image, age:age, contact_number:contact_number,signature:signature,username:username
         },
        success: function(response) {
            alert('Character updated successfully!');
            $('#edit-modal').hide();
            // loadTable(); 
            location.reload();
        },
        error: function() {
            console.log(response);
            alert('Error updating character.');
        }
    });
});
