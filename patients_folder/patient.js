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
        url: 'patient_load.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            var tableBody = $('.table-container #patient-table tbody');
            var templateRow = $('#template-row').clone().removeAttr('id').removeAttr('style');
            console.log(data);
            tableBody.empty();
            $.each(data, function(index, row) {
                var newRow = templateRow.clone();
                newRow.find('.id').text(row.patient_id);
                newRow.find('.name').text(row.first_name + " " + row.last_name);  
                newRow.find('.age').text(row.age);
                newRow.find('.contact_number').text(row.contact_number);
                newRow.find('.actions').html('<button class="delete-btn" data-id="' + row.patient_id + '"> Delete </button> <button class="edit-btn" data-id="' + row.patient_id + '">View</button>');
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
    console.log("fuck")
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
        url: 'patient_add.php',
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




$('#patient-table').on('click', '.delete-btn', function() {
    if (!confirm('Are you sure you want to delete this patient?')) {
        return;
    }

    var id = $(this).data('id');

    $.ajax({
        url: 'patient_delete.php',
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
        url: 'patient_fetch.php',
        type: 'GET',
        data: { id: id },
        success: function(response) {
            try {
                var patient = JSON.parse(response);
                $('#edit-patient_id').val(patient.patient_id);
                $('#edit-first_name').val(patient.first_name);
                $('#edit-middle_name').val(patient.middle_name);
                $('#edit-last_name').val(patient.last_name);
                $('#edit-gender').val(patient.gender);
                var birthdate = patient.birth_date.split(' ')[0];
                $('#edit-birthdate').val(birthdate);
                $('#edit-purok').val(patient.purok);
                $('#edit-household').val(patient.household);
                $('#edit-civil_status').val(patient.civil_status);
                $('#edit-age').val(patient.age);
                $('#edit-contact_number').val(patient.contact_number);
                $('#edit-blood_type').val(patient.blood_type);
                
                // Show the modal, use the appropriate method depending on your modal implementation
                $('#edit-modal').show();

                // $('#edit-modal').show();

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



//Allow Edit
document.getElementById('allow-edit').addEventListener('click', function() {
    // Get all input elements and the submit button
    var inputs = document.querySelectorAll('#edit-form input');
    var submitButton = document.getElementById('save-changes');
  
    // Check the current state (enabled or disabled) of the first input field
    var isDisabled = inputs[0].disabled;
  
    // Toggle the disabled state for all inputs and the submit button
    inputs.forEach(function(input) {
      input.disabled = !isDisabled;
    });
    submitButton.disabled = !isDisabled;
  });


  // Edit character
$('#edit-form').submit(function(e) {
    e.preventDefault();

    var patient_id = $('#edit-patient_id').val();
    var first_name = $('#edit-first_name').val();
    var middle_name = $('#edit-middle_name').val();
    var last_name = $('#edit-last_name').val();
    var birth_date = $('#edit-birth_date').val();
    var gender = $('#edit-gender').val();
    var purok = $('#edit-purok').val();
    var household = $('#edit-household').val();
    var civil_status = $('#edit-civil_status').val();
    var age = $('#edit-age').val();
    var contact_number = $('#edit-contact_number').val();


    var blood_type = $('#edit-blood_type').val();

    $.ajax({
        url: 'patient_edit.php',
        type: 'POST',
        data: { patient_id: patient_id, first_name: first_name, middle_name: middle_name,
             last_name:last_name, gender:gender,purok:purok, household:household, age:age,
              contact_number:contact_number,signature:signature,birth_date:birth_date, civil_status:civil_status,
               blood_type:blood_type
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






