function commands_pulldown()
{
  // <select id="select"> を取得
  var select = document.getElementById('commands');

  // <option> 要素を宣言
  var blank_option = document.createElement('option');
  blank_option.setAttribute('value', '');
  blank_option.innerHTHML = '';
  select.appendChild(blank_option);

  var index_option = document.createElement('option');
  index_option.setAttribute('value', 'index');
  index_option.innerHTML = 'index';
  select.appendChild(index_option);

  var reminder_option = document.createElement('option');
  reminder_option.setAttribute('value', 'reminder');
  reminder_option.innerHTML = 'reminder';
  select.appendChild(reminder_option);
}

function commands_changed()
{
  var command = document.getElementById('commands').value;
  if (command == "index")
  {
    location.href = 'file://' + __dirname + '/index.html';
  }
  else
  {
    location.href = 'file://' + __dirname + '/commands' + '/reminder.html';
  }
}

