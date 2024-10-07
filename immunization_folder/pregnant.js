$(document).ready(function() {

    loadTable();
    
    var savedFilter = localStorage.getItem('nameInput');
    if (savedFilter) {
        $('#filtername').val(savedFilter);
        performFilter(savedFilter);}
   
    // document.getElementById('filtername').value = 'Shadow';
});


function loadTable() {
    $.ajax({
        url: 'pregnant_load.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            var tableBody = $('.table-container #staff-table tbody');
            var templateRow = $('#template-row').clone().removeAttr('id').removeAttr('style');
            console.log(data);
            tableBody.empty();
            $.each(data, function(index, row) {
                var newRow = templateRow.clone();
                newRow.find('.id').text(row.pregnant_id);
                newRow.find('.name').text(row.pregnant_id + " " + row.pregnant_id);  
                newRow.find('.position').text(row.pregnant_id);
                newRow.find('.contact_number').text(row.pregnant_id);
                newRow.find('.actions').html('<button class="edit-btn" data-id="' + row.pregnant_id + '"><img src="../assets/mdi_eye.png" alt=""></button> <button class="delete-btn" data-id="' + row.pregnant_id + '">  <img src="../assets/Vector-1.png" alt=""> </button>');
                tableBody.append(newRow);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error loading data: ' + textStatus, errorThrown);
        }
    });
}
