const heartCount = document.getElementById("heart-count");
const heartBtns = document.querySelectorAll(".heart-btn-id");
const callBtn = document.querySelectorAll(".call-btn");

// Heart Count
let count = 0;
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
    const card = call.closest(".card");
    const callAlert = card.querySelector(".call-allert");
    const contact = card.querySelector(".contact");

    const data = callAlert.textContent;
    const contactNmbr = contact.textContent;
    alert("calling " + data + " at " + contactNmbr);
    console.log(data);
  });
});
