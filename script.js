const enddate = "16 Feb 2024 10:00 PM";

document.getElementById("end-date").innerText = enddate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(enddate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return;
  inputs[0].value = Math.floor(diff / 3600 / 24); //days
  inputs[1].value = Math.floor(diff / 3600) % 24; //Hours
  inputs[2].value = Math.floor(diff / 60) % 60; // Minutes
  inputs[3].value = Math.floor(diff) % 60;

  // convert into days
}

clock();
/**
 *  1 day = 24hrs
 * 1 hr = 60 mins
 * 60min = 3600sec
 */
setInterval(() => {
  clock();
}, 1000);
