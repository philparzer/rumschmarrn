import  moment from "moment"

export function hhmmssToSec(timeString: string):number {
    let timeStampStartTime = moment(timeString, "HH:mm:ss");
    let startHours = timeStampStartTime.hours();
    let startMinutes = timeStampStartTime.minutes();
    let startSeconds = timeStampStartTime.seconds();
    return (startHours * 3600) + (startMinutes * 60) + (startSeconds)
}