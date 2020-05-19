var users = [
  { name: "Tom", gender: "male" },
  { name: "Maria", gender: "female" },
  { name: "Jason", gender: "male" },
  { name: "Tim", gender: "male" },
  { name: "Sora", gender: "female" },
];

var userList = document.querySelector("#userList");
var genderFilter = document.querySelector("#genderFilter");
render(userList,users);
genderFilter.addEventListener("change", function () {
  var selectedGender = this.value; //male or female
  console.log(selectedGender);
  //write code here
  var filteredUsers = users.filter(function (item) {
    return item.gender === selectedGender;
  });
  render(userList, filteredUsers);
});

function render(container, items) {
  //write code here
  var htmlItems = items.map(function (item) {
    return "<li>" + item.name + "</li>";
  });
  //htmlItems =
  //[]
  //biến array thành chuoi
  var html = htmlItems.join("");
  container.innerHTML = html;
}
