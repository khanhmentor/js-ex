//new Date(year, month, day, hours, minutes, seconds, miliseconds)
function countTime(date) {
  const date1 = new Date(date);
  const date2 = new Date(date);

  const startHour = date1.getHours();
  const startMin = date1.getMinutes();
  const endHour = date2.getHours();
  const endMin = date2.getMinutes();

  const myHour = startHour - endHour;
  const myMin = startMin - endMin;

  console.log(`Your Working time is ${myHour} Hours ${myMin} Mins`);
  return myHour;
}

function countSalary(date) {
  let timer = countTime(date);
  let sum = 0;

  sum = Math.floor(timer * 20000);
  console.log(`Your Salary is = ${sum} VND`);
}

// countSalary("Fri Apr 13 2023 10:10:56 GMT+0700 (Indochina Time)");
$(document).ready(function () {
  $("#btn").click(function () {
    const ftime = $("#ftime").val();
    const ltime = $("#ltime").val();
    console.log(ftime);
  });
});

// const myBirthday = new Date();

// console.log(myBirthday);
// console.log(myBirthday.getHours());
// console.log(myBirthday.getMinutes());
