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
  table = document.getElementById("sortTable");
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
    window.location.href = "resume-projet-experiments.html";
});


const elementButton4 = document.getElementById("Button4");

elementButton4.style.cursor = "pointer";
elementButton4.addEventListener("click", function(){
    window.location.href = "resume-project.html";
});

$(document).ready(function() {
  $("#addRow").click(function() {
    var newRow = $("<tr><td>New Name</td><td>New Age</td></tr>");
    $("#Table").append(newRow);
  });
});

function modalPopup(){
    var modal=document.getElementById("myModal");
    modal.style.display="block";
}

function modalClose(){
    var modal=document.getElementById("myModal");
    modal.style.display="none";
}

function addRow(){
    var table = document.getElementById("Table");
    var newBookTitle = document.getElementById("nameInput").value;
    var newBookAuthor = document.getElementById("authorName").value;
    var newBookDate = document.getElementById("date").value;

    var newRow = document.createElement("tr");
    var newTitleElement = document.createElement("td");
    var newAuthorElement = document.createElement("td");
    var newDateElement = document.createElement("td");
    var buttonsElement = document.createElement("td");
    
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("onclick",`remove(${table.children.length})`);
    
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("onclick",`Edit(${table.children.length})`);
    
    buttonsElement.appendChild(removeButton);
    buttonsElement.appendChild(editButton);

    newTitleElement.textContent = newBookTitle;
    newAuthorElement.textContent = newBookAuthor;
    newDateElement.textContent = newBookDate;

    newRow.appendChild(newTitleElement);
    newRow.appendChild(newAuthorElement);
    newRow.appendChild(newDateElement);
    newRow.appendChild(buttonsElement);
    
    document.getElementById("Table").appendChild(newRow);

    document.getElementById("nameInput").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("date").value = "";

    alert("SUCCESS");
}

function remove(n){
    var table = document.getElementById("Table");
    var rowToRemove = table.children[n];
    rowToRemove.style.display = "none";

    alert("You Successfuly Removed One")
}

function Edit(n){
    var table = document.getElementById("Table");
    var rowToEdit = table.children[n];
    var titleColumn = rowToEdit.children[0];
    var authorColumn = rowToEdit.children[1];
    var dateColumn = rowToEdit.children[2];
    var buttonsColumn = rowToEdit.children[3];
    var editButton = buttonsColumn.children[1];

    if(editButton.textContent=="Edit")
        {
            titleColumn.contentEditable = true;
            authorColumn.contentEditable = true;
            dateColumn.contentEditable = true;
            editButton.textContent = "Done";
        }
    else
        {
            titleColumn.contentEditable = false;
            authorColumn.contentEditable = false;
            dateColumn.contentEditable = false;
            editButton.textContent = "Edit";

            alert("You Successfuly Edited!")
        }
}
