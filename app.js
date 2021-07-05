function send() {
  let task = {
    Task_Name: document.getElementById("taskName").value,
    Task_Description: document.getElementById("taskDescription").value,
    Task_Status: "Pending",
    id: randomNumber(),
  };


  window.localStorage.setItem(task.Task_Name, JSON.stringify(task));
  document.getElementById("taskName").value = "";
  document.getElementById("taskDescription").value = "";
}

function randomNumber() {
  return Math.floor(Math.random() * 999);
}

function getTask() {
  var retrievedTask = document.getElementById("retrieveTask").value;
  let task = JSON.parse(window.localStorage.getItem(retrievedTask));
  if (task == null) {
    alert("Enter a valid task name");
  } else {
    console.log(task);

    document.getElementById("taskName").value = task.Task_Name;
    document.getElementById("taskDescription").value = task.Task_Description;
  }
}
