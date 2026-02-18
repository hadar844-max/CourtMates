<?php
$servername = "localhost";
$username = "hadarze_hadarz"; // מה שמופיע ב-cPanel תחת 'משתמש MySQL'
$password = "Hadar0106";          // הסיסמה שהגדרת למשתמש
$dbname = "hadarze_courtmates_db";       // מה שמופיע תחת 'מסד נתונים MySQL'

// יצירת החיבור
$conn = new mysqli($servername, $username, $password, $dbname);

// בדיקת החיבור
if ($conn->connect_error) {
    die("החיבור נכשל: " . $conn->connect_error);
}



?>