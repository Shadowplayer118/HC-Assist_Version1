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
        url: 'medicine_load.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            var tableBody = $('.table-container #staff-table tbody');
            var templateRow = $('#template-row').clone().removeAttr('id').removeAttr('style');
            console.log(data);
            tableBody.empty();
            $.each(data, function(index, row) {
                var newRow = templateRow.clone();
                newRow.find('.id').text(row.item_name);
                newRow.find('.name').text(row.item_name + " " + row.item_name);  
                newRow.find('.position').text(row.item_name);
                newRow.find('.contact_number').text(row.item_name);
                newRow.find('.actions').html('<button class="edit-btn" data-id="' + row.item_name + '"><img src="../assets/mdi_eye.png" alt=""></button> <button class="delete-btn" data-id="' + row.item_name + '">  <img src="../assets/Vector-1.png" alt=""> </button>');
                tableBody.append(newRow);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error loading data: ' + textStatus, errorThrown);
        }
    });
}
