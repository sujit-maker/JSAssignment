const printMenuForDay = day => {
    switch (day) {
        case 'monday':
            console.log('Maggie');
            break;
        case 'tuesday':
            console.log('Pizza');
            break;
        case 'wednesday':
            console.log('Toast');
            break;
        case 'thursday':
            console.log('Butter');
            break;
        case 'friday':
            console.log('Bhel');
            break;
        case 'saturday':
            console.log('Shira');
            break;
        case 'sunday':
            console.log('Chicken Leg Piece');
            break;
        default:
            console.log('Invalid day entered.');
    }
};


printMenuForDay('monday'); 
printMenuForDay('friday'); 
printMenuForDay('InvalidDay'); 
