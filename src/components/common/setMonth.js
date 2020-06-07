export function setMonth(Month) {
    switch (+Month) {
        case 0:
            Month = "January";
            break;
        case 1:
            Month = "February";
            break;
        case 2:
            Month = "March";
            break;
        case 3:
            Month = "April";
            break;
        case 4:
            Month = "May";
            break;
        case 5:
            Month = "June";
            break;
        case 6:
            Month = "July";
            break;
        case 7:
            Month = "August";
            break;
        case 8:
            Month = "September";
            break;
        case 9:
            Month = "October";
            break;
        case 10:
            Month = "November";
            break;
        case 11:
            Month = "December";
            break;
    }
    return Month
}

