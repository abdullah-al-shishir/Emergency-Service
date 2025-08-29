const heartCount = document.getElementById("heart-count");
const heartBtns = document.querySelectorAll(".heart-btn-id");
const callBtn = document.querySelectorAll(".call-btn");
const Token = document.getElementById("token");
// Heart Count
let count = 0;
let token = 100;
heartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    count++;
    heartCount.innerHTML = count;
    console.log(`Heart Button is clicked`);
  });
});

// Showing Alert when calling
callBtn.forEach((call) => {
  call.addEventListener("click", () => {
    if (token > 0) {
      token = token - 20;
      Token.innerHTML = token;
      console.log(token);
    } else if (token <= 0) {
      alert("You have no tokens left");
    }

    const card = call.closest(".card");
    const callAlert = card.querySelector(".call-allert");
    const contact = card.querySelector(".contact");

    const data = callAlert.textContent;
    const contactNmbr = contact.textContent;
    alert("calling " + data + " at " + contactNmbr);
    console.log(data);
  });
});
