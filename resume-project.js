$(document).ready(function(){
  $("#TableSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#Table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("#WholeTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


const elementButton1 = document.getElementById("Button1");

elementButton1.style.cursor = "pointer";
elementButton1.addEventListener("click", function(){
    window.location.href = "resume-profile-project.html";
});


const elementButton2 = document.getElementById("Button2");

elementButton2.style.cursor = "pointer";
elementButton2.addEventListener("click", function(){
    window.location.href = "resume-project-jQuery.html";
});


const elementButton3 = document.getElementById("Button3");

elementButton3.style.cursor = "pointer";
elementButton3.addEventListener("click", function(){
    window.location.href = "https://www.w3schools.com/jsref/jsref_link.asp";
});


const elementButton4 = document.getElementById("Button4");

elementButton4.style.cursor = "pointer";
elementButton4.addEventListener("click", function(){
    window.location.href = "https://www.w3schools.com/jsref/jsref_link.asp";
});

$(document).ready(function() {
  $("#addRow").click(function() {
    var newRow = $("<tr><td>New Name</td><td>New Age</td></tr>");
    $("#Table").append(newRow);
  });
});
