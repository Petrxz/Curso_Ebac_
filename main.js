$(document).ready(function() {

    
    $('#taskForm').submit(function(event) {
      event.preventDefault(); 
      var taskName = $('#taskName').val();
      if (taskName !== '') {


        var listItem = $('<li>').text(taskName);
        listItem.click(function() {
          $(this).toggleClass('completed');
        });


        $('#taskList').append(listItem);
        $('#taskName').val('');
      }
    });
  });
  