
$(function()
{

  $("#list").load("text/todo.txt");

  $("#create").click(function(){

    txt1 = "<p><span class = 'date'>01/01/2017<i onclick = 'handler(1, this)' class='icon-1 fa fa-pencil' aria-hidden='true'></i></span><span class = 'description'>New ToDo goes here...<i onclick = 'handler(2, this)' class='icon-1 fa fa-pencil' aria-hidden='true'></i></span><span class = 'deadline'>01/01/2017<i onclick = 'handler(3, this)'' class='icon-1 fa fa-pencil' aria-hidden='true'></i></span><span class = 'icons'><i onclick = 'handler(4, this)' class='icon-3 fa fa-exclamation-triangle' aria-hidden='true'></i><i onclick = 'handler(5, this)' class='icon-2 fa fa-trash-o'aria-hidden='true'></i></span></p>";
    $("#list").prepend(txt1);

  });


});

function handler(option, element)
{
  spanObj = element.parentNode;
  pObj = spanObj.parentNode;
  divObj = pObj.parentNode;

  switch(option)
  {
    case 1:
      var default_text = spanObj.firstChild.nodeValue;
      var new_value = window.prompt("Please enter the new date: ", default_text);
      spanObj.firstChild.nodeValue = new_value;
      break;
    case 2:
      var default_text = spanObj.firstChild.nodeValue;
      var new_value = window.prompt("Please enter the new description: ", default_text);
      spanObj.firstChild.nodeValue = new_value;
      break;
    case 3:
      var default_text = spanObj.firstChild.nodeValue;
      var new_value = window.prompt("Please enter the new deadline: ", default_text);
      spanObj.firstChild.nodeValue = new_value;
      break;
    case 4:
      if(pObj.style.opacity == 0.9)
      {
        pObj.style.opacity = 0.5;
      }
      else
      {
        pObj.style.opacity = 0.9;
      }
      break;
    case 5:
      divObj.removeChild(pObj);
      break;
    default:
      console.log("def");
  }
}


function save_changes(element)
{
  divObj = element.previousSibling.previousSibling;
  console.log(divObj.innerHTML);
  my_query = "data=" + divObj.innerHTML;
    try
  	{
  			xhttp = new XMLHttpRequest();

  			xhttp.onreadystatechange = function()
  			{
  				if(this.readyState == 4 && this.status == 200)
  				{
  					alert("Changes Saved!!!");
  				}
  			}
  			xhttp.open("POST", "./list_handle.php", true);
  			xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  			xhttp.send(my_query);

  	}
  	catch(err)
  	{
  			console.log(err);
  	}
}
