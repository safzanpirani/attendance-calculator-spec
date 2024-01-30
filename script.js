function calculateAttendance() {
    const attendedClasses = document.getElementById('attendedClasses').value;
    const totalClasses = document.getElementById('totalClasses').value;

    const attendance = (attendedClasses / totalClasses) * 100;
    const classesNeeded = calculateClassesNeeded(attendedClasses, totalClasses);
    const daysNeeded = Math.ceil(classesNeeded / 6);

    document.getElementById('result').innerText = `Your attendance is: ${attendance.toFixed(2)}%. 
    You need to attend ${classesNeeded} more classes (${daysNeeded} days) to reach 75% attendance.`;
}

function calculateClassesNeeded(attended, total) {
    let needed = 0;
    while ((attended / total) < 0.75) {
        attended += 1;
        total += 1;
        needed += 1;
    }
    return needed;
}
