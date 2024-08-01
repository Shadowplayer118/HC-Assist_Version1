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
                newRow.find('.name').text(row.first_name);
                newRow.find('.position').text(row.position);
                newRow.find('.contact_number').text(row.contact_number);

                newRow.find('.actions').html('<button class="delete-btn" data-id="' + row.id + '">Delete</button><button class="edit-btn" data-id="' + row.id + '">Edit</button>');
                tableBody.append(newRow);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error loading data: ' + textStatus, errorThrown);
        }
    });
}


