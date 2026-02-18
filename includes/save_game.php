<?php
// 1. חיבור למסד הנתונים באמצעות הקובץ שכבר בדקנו
include 'db_connect.php';

// 2. בדיקה אם הנתונים הגיעו בשיטת POST (כלומר מהטופס)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // קבלת הנתונים מהשדות של הטופס
    $court_name  = $_POST['courtName'];
    $game_date   = $_POST['gameDate'];
    $game_type   = $_POST['gameType'];
    $skill_level = $_POST['level'];
    $description = $_POST['description'];

    // 3. יצירת שאילתת SQL להכנסת הנתונים לטבלה
    // שימי לב ששמות העמודות (id, court_name וכו') חייבים להיות זהים למה שיצרת ב-phpMyAdmin
    $sql = "INSERT INTO games (court_name, game_date, game_type, skill_level, description) 
            VALUES ('$court_name', '$game_date', '$game_type', '$skill_level', '$description')";

    // 4. ביצוע השאילתה ובדיקה אם זה עבד
    if ($conn->query($sql) === TRUE) {
        // אם הצליח - נקפיץ הודעה ונחזור לדף הבית
        echo "<script>
                alert('New game created successfully!');
                window.location.href = '../index.html';
              </script>";
    } else {
        // אם הייתה שגיאה - נציג אותה
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // 5. סגירת החיבור
    $conn->close();
}
?>