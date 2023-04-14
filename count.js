//new Date(year, month, day, hours, minutes, seconds, miliseconds)
function countTime(ftime, ltime, type) {
  const date1 = new Date(ftime);
  const date2 = new Date(ltime);

  const startHour = date1.getHours();
  const startMin = date1.getMinutes();
  const endHour = date2.getHours();
  const endMin = date2.getMinutes();

  const myHour = Math.abs(endHour - startHour);
  const myMin =  Math.abs(endMin - startMin);

  const date = new Date(ftime).getDate();
  const month = new Date(ftime).getMonth();
  const year = new Date(ftime).getFullYear();

  if (type == 'year') {
    return month + '/' + year
  } 
  else if (type == 'date') {
    return date + '/' + month
  } 
  else if (type == 'min') {
    return myMin;
  }

  return myHour;
}

function calSalary(ftime, ltime) {
  let myHour = countTime(ftime, ltime, '');
  let sum = 0;

  sum = Math.floor(myHour * 20000);
  return sum
}

var calendarId = 'g.khanh123503@gmail.com';
var apiKey = 'AIzaSyCCbUE-gZELqnXTALoEkTGk15q3VzUD4Tg';

var url = 'https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + apiKey;

$.ajax({
  url: url,
  dataType: 'json',
  success: function(data) {
    sum = 0, i = 0;
    $.each(data.items, function(index, event) {
      var title = event.summary;
      var start = event.start.dateTime;
      var end = event.end.dateTime;
      
      if (title == 'Cheese Pasta') {
        salary = calSalary(start, end)
        hour = countTime(start, end, '')
        date = countTime(start, end, 'date')
        year = countTime(start, end, 'year')
        min = countTime(start, end, 'min')
        sum += salary
        i += 1
        $('table').append('<tr><td id="date"></td><td id="hour"></td><td id="salary"></td><td id="min"></td></tr>')
        $('#salary').attr('id', 'salary'+i)
        $('#salary'+i).text(salary)
        $('#hour').attr('id', 'hour'+i)
        $('#hour'+i).text(hour)
        $('#date').attr('id', 'date'+i)
        $('#date'+i).text(date)
        $('#min').attr('id', 'min'+i)
        $('#min'+i).text(min)
      }
    });
    $('.salary').text(sum)
    $('.date').text(year)
  },
  error: function(error) {
    console.log('Error: ' + error.responseText);
  }
});

/*https://console.cloud.google.com/*/