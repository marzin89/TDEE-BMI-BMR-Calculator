function updateToImperial() {

    const weight = document.getElementById('weight');

    const height = document.getElementById('height');

    weight.value = 'lbs';
        
    height.value = 'in';

}

function updateToMetric() {

    const weight = document.getElementById('weight');

    const height = document.getElementById('height');

    weight.value = 'kg';

    height.value = 'm';

}

function updateToMetricBMR() {

    const weight = document.getElementById('weight');

    const height = document.getElementById('height');

    weight.value = 'kg';

    height.value = 'cm';

}

function calculateBMI() {

    const weight = document.getElementById('weight');

    const height = document.getElementById('height');

    const imperial = document.getElementById('Imperial');

    const metric = document.getElementById('Metric');

    let result;

    if ( imperial.checked == true ) {

        result = 'Your BMI is ' + Math.round( 703 * weight.value / 
            
            ( height.value * height.value )) + '.';

        alert( result );

    } else if ( metric.checked == true ) {

        result = 'Your BMI is ' + Math.round( weight.value / height.value / 
            
            height.value * 10000 ) + '.';

        alert( result );

    }

}

function calculateBMR() {

    const weight = document.getElementById('weight');

    const height = document.getElementById('height');

    const imperial = document.getElementById('Imperial');

    const metric = document.getElementById('Metric');

    const male = document.getElementById('Male');

    const female = document.getElementById('Female');

    const age = document.getElementById('age');

    let result;

    switch ( true ) {

        case imperial.checked == true && male.checked == true :

            result = 'Your BMR is ' + Math.round( 66 + ( 6.2 * weight.value ) + 
        
                ( 12.7 * height.value ) - ( 6.76 * age.value )); + '.';

            alert( result );

        break;

        case imperial.checked == true && female.checked == true :

            result = 'Your BMR is ' + Math.round( 655.1 + ( 4.35 * weight.value ) + 
        
                ( 4.7 * height.value ) - ( 4.7 * age.value )) + '.';

            alert( result );

        break;

        case metric.checked == true && male.checked == true :

            result = 'Your BMR is ' + Math.round( 66.5 + ( 13.75 * weight.value ) + 
            
                ( 5.003 * height.value ) - ( 6.755 * age.value )) + '.';

            alert( result );

        break;

        case metric.checked == true && female.checked == true :

            result = 'Your BMR is ' + Math.round( 655.1 + ( 9.563 * weight.value ) + 
            
                ( 1.850 * height.value ) - ( 4.676 * age.value )) + '.';

            alert( result );

        break;

    }

}

function calculateTDEE() {

    const weight = document.getElementById('weight');

    const height = document.getElementById('height');

    const imperial = document.getElementById('Imperial');

    const metric = document.getElementById('Metric');

    const male = document.getElementById('Male');

    const female = document.getElementById('Female');

    const age = document.getElementById('age');

    const sedentary = document.getElementById('Sedentary');

    const light = document.getElementById('Light');

    const moderate = document.getElementById('Moderate');

    const intense = document.getElementById('Intense');

    let BMR;

    let result;

    switch ( true ) {

        case imperial.checked == true && male.checked == true :

            BMR = 66 + ( 6.2 * weight.value ) + ( 12.7 * height.value ) - 
            
                ( 6.76 * age.value );

        break;

        case imperial.checked == true && female.checked == true :

            BMR = 655.1 + ( 4.35 * weight.value ) + ( 4.7 * height.value ) - 
            
                ( 4.7 * age.value );

        break;

        case metric.checked == true && male.checked == true :

            BMR = 66.5 + ( 13.75 * weight.value ) + ( 5.003 * height.value ) - 
            
                ( 6.755 * age.value );

        break;

        case metric.checked == true && female.checked == true :

            BMR = 655.1 + ( 9.563 * weight.value ) + ( 1.850 * height.value ) - 
            
                ( 4.676 * age.value );

        break;

    }

    switch ( true ) {

        case sedentary.checked == true :

            result = 'Your TDEE is ' + Math.round( 1.2 * BMR ) + '.';

            alert( result );

        break;

        case light.checked == true :

            result = 'Your TDEE is ' + Math.round( 1.375 * BMR ) + '.';

            alert( result );

        break;

        case moderate.checked == true :

            result = 'Your TDEE is ' + Math.round( 1.55 * BMR ) + '.';

            alert( result );

        break;

        case intense.checked == true :

            result = 'Your TDEE is ' + Math.round( 1.725 * BMR ) + '.';

            alert( result );

    }

}

