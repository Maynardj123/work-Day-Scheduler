// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

function displayTime(){
  var now = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(now);
}
setInterval(displayTime);


$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    var timeBlocks = $('.time-block')

    // loading a string of an array
    const hasSaved = Boolean(localStorage.getItem('schedule'))
    if (hasSaved) {
      // 
      const json = localStorage.getItem('schedule')
      const tasks = JSON.parse(json)
      for (let i = 0; i < tasks.length; i++) {
        timeBlocks.eq(i).find('.description').val(tasks[i])
      }


    }
  // TODO: get military hour from day.js
    const hour = 14
   
    // console.log(timeBlocks)
    timeBlocks.each((i, element) => {
      aHour = parseInt(element.id.split('-')[1])
      if (hour < aHour) {
        $(element).addClass('future')
      }else if(hour == aHour) {
        $(element).addClass('present')
      }else {
        $(element).addClass('past')
      }
    });

    $('.saveBtn').on('click', function(){
      let tasks = []
      for (let i = 0; i < timeBlocks.length; i++){
        tasks.push(timeBlocks.eq(i).find('.description').val())
      }
      console.log(tasks)
      // saving a sting of an array
      localStorage.setItem('schedule', JSON.stringify(tasks))
    })

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });