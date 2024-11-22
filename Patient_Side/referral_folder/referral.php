<?php

session_start();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="../../dashboard.css">
    <link rel="stylesheet" href="staff.css">
    <link rel="stylesheet" href="calendar.css">

    <title>Document</title>
</head>

<body>

    <div class="container">
        

        <!---------TOP-------------------------------------------------------------------------------------------------------------->

        <div class="top">
            <div class="top-content">
                <h1 class="title">HC-Assist</h1>
                <h1 class="location">Application > Referral</h1> <!---Note, this will usually be an anchor tag-->
                <div class="profile"><img src="../assets/profile.jpg" alt=""></div>
            </div>

        </div>



        <div class="staff-profile" id="staff-profile">




            <div class="staff-profile-container">
                <span class="close" style="position:relative; bottom:20px; right: 15px;">&times;</span>


                <div class="left">

                    <div class="profile-pic"><img src="assets/profile.jpg" alt=""></div>
                    <a href="index.html" class="logout">Logout</a>

                </div>


                <div class="right">

                    <div class="name">Dhaniel Malinao</div>
                    <div class="position">Admin</div>



                </div>




            </div>



        </div>



        <!---------SIDE-------------------------------------------------------------------------------------------------------------->

        <div class="side">

            <div class="side-bar">


                <div class="link">
                    <img src="" alt="">
                    <a href="../referral_folder/referral.php">Referrals</a>
                </div>

                <div class="link">
                    <img src="" alt="">
                    <a href="../calendar_folder/calendar.html">Calendar</a>
                </div>


                <div class="link">
                    <img src="" alt="">
                    <a href="../medicine_folder/medicine.html">Medicine</a>
                </div>
            </div>

        </div>
        <!---------MAIN-------------------------------------------------------------------------------------------------------------->
        <div class="main">

            <div class="main-container">



                <div class="refmodal">
                    <form id="referralForm">
                        <label for="edit-first_name">Patient Name</label><br>
                        <input type="text" id="edit-first_name" name="edit-first_name" value="<?=$_SESSION['username']?>" required><br>
                
                        <label for="description">Describe your illness</label><br>
                        <textarea id="description" name="description" class="description" required></textarea><br>
                
                        <label for="edit-patient_id">Patient ID</label><br>
                        <input type="hidden" id="edit-patient_id" name="edit-patient_id" value="<?=$_SESSION['patient_id']?>"  required><br>
                
                        <button type="submit" id="submitReferral">Submit Referral</button>
                    </form>
                </div>
                
                <div class="calendar-container">

                    <div class="calendar">
                        <div class="calendar-header">
                            <span class="prev" onclick="changeMonth(-1)">&#10094;</span>
                            <span id="month-year"></span>
                            <span class="next" onclick="changeMonth(1)">&#10095;</span>
                        </div>
                        <div class="calendar-days">
                            <div>Sun</div>
                            <div>Mon</div>
                            <div>Tue</div>
                            <div>Wed</div>
                            <div>Thu</div>
                            <div>Fri</div>
                            <div>Sat</div>
                        </div>
                        <div id="calendar-dates" class="calendar-dates">
                            <div class="status">
                                <div class="pregnant">q</div>
                                <div class="child">q</div>
                                <div class="medicine">q</div>
                            </div>

                        </div>
                    </div>

                </div>



                <!-- <div class="main-top-staff">
                    <button>Add Character</button>
                    <form action="" id="filterForm">
    
                        <button type = "submit" id="filter-btn" class="filter-btn">Filter</button>
    
                        <input type="text" id="filtername" name="name" value = "">
    
                    </form>
                </div>     -->

                <!-- <div class="table-container">
    
                    <table id="staff-table" class="staff-table">
    
                        <div class="header">
                            <thead>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </thead>
                        </div>
    
                        <tbody>
                            <tr id="template-row" style="display:none;" class="table_tr">
    
                                <td class="id"></td>
                                <td class="name"></td>
                                <td class="position"></td>
                                <td class="contact_number"></td>
                                <td class = "actions">      
                                <button class="delete-btn">Delete</button>
                                <button class="edit-btn">View</button>
                                </td>
    
                            </tr>
                        </tbody>
                    </table>
    
                </div>
            </div>
        -->

            </div>

        </div>
        <script src="../jquery.js"></script>

        <script src="../dashboard.js"></script>
        <script src="patient_referral_add.js"></script>
        <script src="referral.js"></script>
        <script src="calendar.js"></script>

</body>

</html>