let donateInput = document.querySelector("#another-amount");
let labels = document.getElementsByTagName("label");
let inputs = document.getElementsByTagName("input");


donateInput.oninput = function () {
  if (this.value.length > 4) {
      this.value = this.value.slice(0,4);
  }
}

for(let i = 0; i < 8; i++) {
  labels[i].addEventListener("click", function () {
    donateInput.value = (labels[i].dataset.donationAmount).slice(1,5);
  })
}

donateInput.oninput = function () {
  for(let i = 0; i < 8; i++) {
    if(donateInput.value == labels[i].dataset.donationAmount.slice(1,5)) {
      for(let j = 0; j < 8; j++) {
        inputs[i].checked = true;
      }
    } else {
      inputs[i].checked = false;
    }
  }
}
