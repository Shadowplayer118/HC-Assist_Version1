
$(document).ready(function(){
    loadRef(); // Call the function when the page loads
    loadPreg();
    loadChild();
    loadDis();
    loadIm();
    loadRefStat(); // Call the function when the page loads
    loadPregStat();
    loadChildStat();
    loadDisStat();
    loadImStat();
    loadTotal();
    loadTotalStats();

});

function loadRef() {
    $.ajax({    
        url: "dashboard_php/countReferrals.php", // The PHP file that processes the request
        method: "GET", // Use GET request
        success: function(response) {
            // Update the HTML element with the response (row count)
            $("#ref-count").html(response);
        }
    });
}

function loadRefStat() {
    $.ajax({    
        url: "dashboard_php/statsReferrals.php", // The PHP file that processes the request
        method: "GET", // Use GET request
        success: function(response) {
            // Update the HTML element with the response (row count)
            $("#ref-per").html(response);
        }
    });
}

function loadPreg() {
    $.ajax({
        url: "dashboard_php/countPregnant.php", // The PHP file that processes the request
        method: "GET", // Use GET request
        success: function(response) {
            // Update the HTML element with the response (row count)
            $("#preg-count").html(response);
        }
    });
}

function loadPregStat() {
    $.ajax({
        url: "dashboard_php/statsPregnant.php", // The PHP file that processes the request
        method: "GET", // Use GET request
        success: function(response) {
            // Update the HTML element with the response (row count)
            $("#preg-per").html(response);
        }
    });
}

function loadChild() {
    $.ajax({
        url: "dashboard_php/countChildren.php", // The PHP file that processes the request
        method: "GET", // Use GET request
        success: function(response) {
            // Update the HTML element with the response (row count)
            $("#child-count").html(response);
        }
    });
}

function loadChildStat() {
    $.ajax({
        url: "dashboard_php/statsChildren.php", // The PHP file that processes the request
        method: "GET", // Use GET request
        success: function(response) {
            // Update the HTML element with the response (row count)
            $("#child-per").html(response);
        }
    });
}


function loadDis() {
    $.ajax({
        url: "dashboard_php/countDisease.php", // The PHP file that processes the request
        method: "GET", // Use GET request
        success: function(response) {
            // Update the HTML element with the response (row count)
            $("#dis-count").html(response);
        }
    });
}

function loadDisStat() {
    $.ajax({
        url: "dashboard_php/statsDisease.php", // The PHP file that processes the request
        method: "GET", // Use GET request
        success: function(response) {
            // Update the HTML element with the response (row count)
            $("#dis-per").html(response);
        }
    });
}

function loadIm() {
    $.ajax({
        url: "dashboard_php/countImmunization.php", // The PHP file that processes the request
        method: "GET", // Use GET request
        success: function(response) {
            // Update the HTML element with the response (row count)
            $("#Im-count").html(response);
        }
    });
}

function loadImStat() {
    $.ajax({
        url: "dashboard_php/statsImmunization.php", // The PHP file that processes the request
        method: "GET", // Use GET request
        success: function(response) {
            // Update the HTML element with the response (row count)
            $("#Im-per").html(response);
        }
    });
}


function loadTotal() {
    $.ajax({
        url: "dashboard_php/total.php", // The PHP file that processes the request
        method: "GET", // Use GET request
        success: function(response) {
            // Update the HTML element with the response (row count)
            $("#total-count").html(response);
        }
    });
}

function loadTotalStats() {
    $.ajax({
        url: "dashboard_php/total_stats.php", // The PHP file that processes the request
        method: "GET", // Use GET request
        success: function(response){
            // Update the HTML element with the response (row count)
            $("#total-percent").html(response);
        }
    });
}



