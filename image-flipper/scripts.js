const images = ["puppy1", "puppy2", "puppy3"];
const btn = document.getElementById("btn");
const image = document.querySelector(".image");

// document.getElementById('btn').addEventListener('click', function

// )

function imageFlip() {
  var x = Math.floor(Math.random() * 3 + 1);

  console.log(x);

  if (document.getElementById('puppy').checked) {
    document.getElementById(
      "myImages"
    ).innerHTML = `<img src="img/puppy${x}.jpg" style="width: 200px;">
  `;
  } else {
    document.getElementById(
      "myImages"
    ).innerHTML = `<img src="img/kitten${x}.jpg" style="width: 200px;">
      `;
  }
}
// console.log(checked);