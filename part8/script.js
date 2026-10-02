// example 1

document.getElementById("changeTextBtn").addEventListener("click", function () {
  let paragraph = document.getElementById("myParagraph");
  paragraph.textContent = "The paraghaph is changed";
});

// example 2

document
  .getElementById("highlightCityBtn")
  .addEventListener("click", function () {
    let cityHighLight = document.getElementById("cityList");
    cityHighLight.firstElementChild.classList.add("highlight");
  });

// example 3

document
  .getElementById("changeOrderBtn")
  .addEventListener("click", function () {
    let Order = document.getElementById("order");
    Order.textContent = "Order: Expresso";
  });

// example 4

document.getElementById("addItemBtn").addEventListener("click", function () {
  let taskList = document.createElement("li");
  taskList.innerText = "Butter";

  document.getElementById("shoppingList").appendChild(taskList);
});

// example 5

document.getElementById("removeTaskBtn").addEventListener("click", function () {
  let remove = document.getElementById("taskList");
  remove.lastElementChild.remove();
});

// example 7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaTeam")) {
    alert("You selected: " + event.target.textContent);
  }
});

// example 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedBack = document.getElementById("feedback");
    document.getElementById("feedbackDisply").textContent =
      `FeedBack is: ${feedBack}`;
  });

// example 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loadStatus").textContent = "DOM fully loaded";
});

// example 10 

document.getElementById("toggleHighlightBtn").addEventListener("click", function () {
    let descriptionText = document.getElementById("colorText");
    descriptionText.classList.toggle("highlight")
})