function formatToSize(str, length, span = " ", prepend = false) {
    let LNG = str.length;
    let out = str;
    if (LNG < length) {
        for (let i = LNG; i < length; i++) {
            if (prepend) {
                out = span + out;
            } else {
                out += span;
            }
        }
    }
    return out;
}

export function makeDateObject() {
    const DATE = new Date();
    let out = {
        day: formatToSize(new String(DATE.getDate()), 2, "0", true),
        month: formatToSize(new String(DATE.getMonth() + 1), 2, "0", true),
        year: DATE.getFullYear(),
        y: DATE.getFullYear() % 100,
        hour: formatToSize(new String(DATE.getHours()), 2, "0", true),
        min: formatToSize(new String(DATE.getMinutes()), 2, "0", true),
        sec: formatToSize(new String(DATE.getSeconds()), 2, "0", true),
        mil: formatToSize(new String(DATE.getMilliseconds()), 2, "0", true),
        weekDay: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"][
            DATE.getDay()
        ],
        monthName: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"][DATE.getMonth()]
    }
    return out;
}