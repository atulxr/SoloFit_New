document.addEventListener('DOMContentLoaded', function() {
    const exerciseSelect = document.getElementById('exercise-select');
    const exercisePic = document.getElementById('exercise-pic');
    const showExerciseButton = document.getElementById('show-exercise');

    showExerciseButton.addEventListener('click', function() {
        const selectedExercise = exerciseSelect.value;
        let imageUrl = '';

        // Define image URLs for each exercise
        switch (selectedExercise) {
            case 'air-squat':
                imageUrl = 'static/img/exercises/air-squat.svg';
                break;
            case 'barbell-row':
                imageUrl = 'static/img/exercises/barbell-row.svg';
                break;
            case 'bench-press':
                imageUrl = 'static/img/exercises/bench-press.svg';
                break;
            case 'burpee':
                imageUrl = 'static/img/exercises/burpee.svg';
                break;
            case 'cable-cross':
                imageUrl = 'static/img/exercises/cable-cross.svg';
                break;
            case 'cable-pullover':
                imageUrl = 'static/img/exercises/cable-pullover.svg';
                break;
            case 'calf-raise':
                imageUrl = 'static/img/exercises/calf-raise.svg';
                break;
            case 'chair-dips':
                imageUrl = 'static/img/exercises/chair-dips.svg';
                break;
            case 'clean-and-press':
                imageUrl = 'static/img/exercises/clean-and-press.svg';
                break;
            case 'crunch':
                imageUrl = 'static/img/exercises/crunch.svg';
                break;
            case 'deadlift':
                imageUrl = 'static/img/exercises/deadlift.svg';
                break;
            case 'decline-pushup':
                imageUrl = 'static/img/exercises/decline-pushup.svg';
                break;
            case 'dumbbel-curl':
                imageUrl = 'static/img/exercises/dumbbel-curl.svg';
                break;
            case 'front-raise':
                imageUrl = 'static/img/exercises/front-raise.svg';
                break;
            case 'front-squat':
                imageUrl = 'static/img/exercises/front-squat.svg';
                break;
            case 'hammer-curl':
                imageUrl = 'static/img/exercises/hammer-curl.svg';
                break;
            case 'high-knee':
                imageUrl = 'static/img/exercises/high-knee.svg';
                break;
            case 'incline-bench-press':
                imageUrl = 'static/img/exercises/incline-bench-press.svg';
                break;
            case 'incline-dumbbell-press':
                imageUrl = 'static/img/exercises/incline-dumbbell-press.svg';
                break;
            case 'jumping-jack':
                imageUrl = 'static/img/exercises/jumping-jack.svg';
                break;
            case 'jump-squat':
                imageUrl = 'static/img/exercises/jump-squat.svg';
                break;
            case 'lateral-raise':
                imageUrl = 'static/img/exercises/lateral-raise.svg';
                break;
            case 'lat-pulldown':
                imageUrl = 'static/img/exercises/lat-pulldown.svg';
                break;
            case 'leg-curl':
                imageUrl = 'static/img/exercises/leg-curl.svg';
                break;
            case 'leg-extension':
                imageUrl = 'static/img/exercises/leg-extension.svg';
                break;
            case 'lunge':
                imageUrl = 'static/img/exercises/lunge.svg';
                break;
            case 'muscle-up':
                imageUrl = 'static/img/exercises/muscle-up.svg';
                break;
            case 'overhead-press':
                imageUrl = 'static/img/exercises/overhead-press.svg';
                break;
            case 'overhead-tricep':
                imageUrl = 'static/img/exercises/overhead-tricep.svg';
                break;
            case 'pullup':
                imageUrl = 'static/img/exercises/pullup.svg';
                break;
            case 'pushup':
                imageUrl = 'static/img/exercises/pushup.svg';
                break;
            case 'shrug':
                imageUrl = 'static/img/exercises/shrug.svg';
                break;
            case 'skull-crusher':
                imageUrl = 'static/img/exercises/skull-crusher.svg';
                break;
            case 'sl-deadlift':
                imageUrl = 'static/img/exercises/sl-deadlift.svg';
                break;
            case 'squat':
                imageUrl = 'static/img/exercises/squat.svg';
                break;
            case 'squat-clean-and-press':
                imageUrl = 'static/img/exercises/squat-clean-and-press.svg';
                break;
            case 'wall-sit':
                imageUrl = 'static/img/exercises/wall-sit.svg';
                break;
            case 'z-bar-curl':
                imageUrl = 'static/img/exercises/z-bar-curl.svg';
                break;
            default:
                imageUrl = 'exercises/img/default-exercise.jpg'; // Default image if exercise not found
        }

        // Update the image source
        exercisePic.src = imageUrl;

        // Set the background color to #white and add padding and rounded corners
        exercisePic.style.backgroundColor = 'white';
        exercisePic.style.padding = '20px'; // Adjust padding as needed
        exercisePic.style.borderRadius = '15px'; // Add rounded corners
        // Set image size
        if (window.matchMedia("(max-width: 300px)").matches) {
            // For mobile devices
            exercisePic.style.width = '400px'; // Adjust width for mobile devices
        } else {
            // For other devices
            exercisePic.style.width = '900px'; // Adjust width for other devices
        }
        exercisePic.style.height = 'auto'; // Maintain aspect ratio
    });
});
