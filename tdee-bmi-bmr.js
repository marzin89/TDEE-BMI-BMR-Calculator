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

function calculateBMI() {

    const weight = document.getElementById('weight');

    const height = document.getElementById('height');

    const imperial = document.getElementById('Imperial');

    const metric = document.getElementById('Metric');

    let result;

    if ( imperial.checked == true ) {

        result = 'Your BMI is ' + Math.round( 703 * weight.value / ( height.value * height.value )) + '.';

        alert( result );

    } else if ( metric.checked == true ) {

        result = 'Your BMI is ' + Math.round( weight.value / ( height.value * height.value )) + '.';

        alert( result );

    }

}



