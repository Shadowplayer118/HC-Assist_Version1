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

