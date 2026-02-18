$(document).ready(function() {
    // --- 1. דרישת JQuery: אפקט כניסה חלק לכל הדף (סעיף 43) ---
    $('main').hide().fadeIn(1000);

    // --- 2. טיפול בטופס יצירת משחק (create-game.html) ---
    const gameForm = document.getElementById('createGameForm');
    
    if (gameForm) {
        gameForm.addEventListener('submit', function(event) {
            let isValid = true;
            let errorMessage = "";

            // ולידציה 1 (JS): בדיקה שהתאריך אינו מהעבר (סעיף 31-32)
            const gameDateVal = document.getElementById('gameDate').value;
            const gameDate = new Date(gameDateVal);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (!gameDateVal || gameDate < today) {
                isValid = false;
                errorMessage += "You cannot schedule a game in the past.\n";
                document.getElementById('gameDate').classList.add('is-invalid'); // עיצוב דינמי (סעיף 38)
            } else {
                document.getElementById('gameDate').classList.remove('is-invalid');
            }

            // ולידציה 2 (JS): בדיקה ששם המגרש ארוך מספיק (סעיף 31-32)
            const courtName = document.getElementById('courtName').value;
            if (courtName.trim().length < 3) {
                isValid = false;
                errorMessage += "Court name must be at least 3 characters long.\n";
                document.getElementById('courtName').classList.add('is-invalid'); // עיצוב דינמי
            } else {
                document.getElementById('courtName').classList.remove('is-invalid');
            }

            // אם אחת הולידציות נכשלה - עוצרים את השליחה ומציגים פידבק (סעיף 13)
            if (!isValid) {
                event.preventDefault();
                alert(errorMessage);
            }
        });
    }

    // --- 3. דרישה: אלמנט שמגיב לאירוע JQuery (סעיף 36, 42) ---
    // שינוי בהירות הכפתורים במעבר עכבר
    $('.btn-warning').on('mouseenter', function() {
        $(this).css('filter', 'brightness(1.2)');
    }).on('mouseleave', function() {
        $(this).css('filter', 'brightness(1)');
    });

    // --- 4. פונקציונליות למסך "המשחקים שלי" (my-games.html) ---
    // שימוש ב-JQuery SlideUp למחיקת כרטיס משחק באנימציה (סעיף 43)
    $('.leave-game-btn').on('click', function() {
        const cardContainer = $(this).closest('.game-card-container');
        
        if(confirm("Are you sure you want to leave this game?")) {
            cardContainer.slideUp(500, function() {
                $(this).remove();
                
                // בדיקה אם הרשימה התרוקנה (כתיבה ל-DOM - סעיף 37)
                if ($('.game-card-container').length === 0) {
                    $('#myGamesList').html('<div class="col-12 text-center mt-5"><p class="text-muted lead">You have no scheduled games.</p></div>');
                }
            });
        }
    });
});