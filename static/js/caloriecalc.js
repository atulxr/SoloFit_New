document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calorie-form');
    const resultText = document.getElementById('calorie-result');
    const submitButton = document.getElementById('calorie-submit');

    submitButton.addEventListener('click', function() {
        const gender = document.querySelector('input[name="gender"]:checked');
        const age = parseInt(document.getElementById('age').value);
        const height = parseInt(document.getElementById('calorie-height').value);
        const weight = parseInt(document.getElementById('calorie-weight').value);
        const activity = document.getElementById('activity').value;

        if (!gender || isNaN(age) || isNaN(height) || isNaN(weight)) {
            alert('Please fill in all fields.');
            return;
        }

        let bmr;
        if (gender.value === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        let activityFactor;
        switch (activity) {
            case 'sedentary':
                activityFactor = 1.2;
                break;
            case 'light':
                activityFactor = 1.375;
                break;
            case 'moderate':
                activityFactor = 1.55;
                break;
            case 'active':
                activityFactor = 1.725;
                break;
            case 'very-active': 
                activityFactor = 1.9;
                break;
            case 'extra-active':
                activityFactor = 2.3;
                break;
            default:
                activityFactor = 1.2;
        }

        const calorieNeeds = Math.round(bmr * activityFactor);
        resultText.textContent = 'YOUR CALORIE NEEDING = ' + calorieNeeds;

        // Guidelines calculation
        const loseWeight = calorieNeeds - 500;
        const maintain = calorieNeeds + 200;
        const gainWeight = calorieNeeds + 500;

        resultText.nextElementSibling.innerHTML = `
            <h3>Guideline:</h3>
            <ul>
                <li>To Lose Weight: Take ${loseWeight} calories</li>
                <li>To Maintain: Take ${maintain} calories</li>
                <li>To Gain Weight: Take ${gainWeight} calories</li>
            </ul>
        `;
    });
});
