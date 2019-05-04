var topic = [
    "介紹",
    "連假",
    "不上課",
    "JS",
    "校慶停課",
    "JS",
    "連假",
    "JS",
    "期中考"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth - 1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,23);