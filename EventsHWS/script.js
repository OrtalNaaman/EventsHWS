// function showOrHide(character) {
//   const element = document.getElementById("lower_li");
//   const cssObj = window.getComputedStyle(element, null);
//   let lowerLiDis = cssObj.getPropertyValue("display");
//   if (lowerLiDis == "none") {
//     element.innerHTML = character;
//     element.style.display = "block";
//   } else element.style.display = "none";
// }
function showOrHide(character) {
  var get_lower_li = document.getElementById("lower_li");
  if (
    get_lower_li.style.display == "none" ||
    get_lower_li.style.display == ""
  ) {
    get_lower_li.style.display = "block";
    switch (character) {
      case "Mickey Mouse":
        get_lower_li.innerHTML =
          "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pZzxQgoLZdQo00AfilvitwFlcr8fNi9IYNhHZRyIc9j_xsDt55w4HyGwB1ZRxhN6vR0&usqp=CAU'/>";
        break;
      case "Minnie Mouse":
        get_lower_li.innerHTML =
          "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GFM2S1pSP-1ueNtYophggFvacziDuYj5e4WGMyu78gKhw4k0b4yKJxOco38-WZfUBzE&usqp=CAU'/>";
        break;
      case "Donald Duck":
        get_lower_li.innerHTML =
          "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxmiWWGguaUYjhLsIhV9W13tGRZLpMYxWJCOZWY2ApXfOVuN89fgaWwaF56mhtfqL6dI&usqp=CAU'/>";
        break;
      case "Daisy Duck":
        get_lower_li.innerHTML =
          "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcJsY1Fmnmlmrpmk2eel78RzBNGWQZDqzjHznH4ahqERvL7ZB1XVe2QKxmZJUVQR4OEc&usqp=CAU'/>";
        break;
    }
  } else get_lower_li.style.display = "none";
}
