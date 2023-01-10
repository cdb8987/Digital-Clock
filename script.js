function timeUpdater() {

    let d = new Date;
    console.log(d);

    let myHours = String(d.getHours());

    let myMinutes = String(d.getMinutes());
    if (myMinutes.length < 2) { myMinutes = '0' + myMinutes };
    let mySeconds = String(d.getSeconds());
    if (mySeconds.length < 2) { mySeconds = '0' + mySeconds };
    let myDay = String(d.getDay());
    if (myDay.length < 2) { myDay = '0' + myDay }
    let myMonth = String(d.getMonth());
    if (myMonth.length < 2) { myMonth = '0' + myMonth };
    let myDate = String(d.getDate());
    if (myDate.length < 2) { myDate = '0' + myDate };
    let myYear = d.getFullYear();

    let amPm = 'AM';
    if (Number(myHours) >= 12) { amPm = 'PM' }
    if (Number(myHours) > 12) { myHours = String(Number(myHours) - 12) }
    if (myHours.length < 2) { myHours = '0' + myHours };
    console.log(myHours, typeof myHours)

    //takes a two character number representing Month and Day and returns full words from a dictionary-style-object
    const dayObjectPairs = {
        '01': 'Monday', '02': 'Tuesday', '03': 'Wednesday', '04': 'Thursday', '05': 'Friday', '06': 'Saturday', '07': 'Sunday'
    }
    const monthObjectPairs = {
        '00': 'January', '01': 'February', '02': 'March', '03': 'April', '04': 'May', '05': 'June', '06': 'July', '07': 'August', '08': 'September', '09': 'October', '10': 'November', '11': 'December'
    }


    let fullMonth = monthObjectPairs[myMonth] //these are the date values that wil be displayed
    let fullDay = dayObjectPairs[myDay]

    myTime = document.getElementById('time')
    myTime.innerText = String(myHours) + ':' + String(myMinutes) + ':' + String(mySeconds) + ` ${amPm}`  //Changes HTML to display time 

    myFullDate = document.getElementById('date')
    myFullDate.innerText = fullDay + ', ' + fullMonth + ' ' + myDate + ' ' + myYear // Changes HTML to display date

    console.log(fullDay, fullMonth)
    repeater = setInterval(timeUpdater, 1000)

}

timeUpdater()