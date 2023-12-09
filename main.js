const submitBtn = document.getElementById("submit-btn");
const removeBtn = document.getElementById("remove-btn");

removeBtn.addEventListener("click", () => {
  const usersContainer = document.getElementById("user-name");
  usersContainer.innerHTML = "";
});

submitBtn.addEventListener("click", () => {
  let useNumber = document.getElementById("number-input").value;

  const removeInput = document.getElementById("input-form");
  removeInput.style.display = "none";

  if (useNumber == "") {
    alert("Pease Enter a number");
  } else if (useNumber == 0 || useNumber < 0) {
    document.getElementById("number-input").value = "";
    alert("Please enter a number greater than zero");
  } else if (useNumber > 15) {
    document.getElementById("number-input").value = "";
    alert("Please enter a number less than 15");
  } else {
    document.getElementById("number-input").value = "";
    async function apiCall() {
      try {
        for (let index = 1; index <= useNumber; index++) {
          let response = await fetch("https://randomuser.me/api/");

          let resData = await response.json();

          let userData = resData.results[0];

          const usersContainer = document.getElementById("user-name");

          const userName = document.createElement("h1");
          const photo = document.createElement("img");

          photo.src = userData.picture.large;

          userName.innerText = `Name : ${userData.name.first}`;

          usersContainer.appendChild(photo);
          usersContainer.appendChild(userName);
        }

        // console.log(userData);
      } catch (error) {
        console.log(error);
      }
    }
    apiCall();
  }
});
