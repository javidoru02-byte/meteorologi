const cityId = document.getElementById("city-id");
const cityName = document.getElementById("city");

function findway(event) {
  const selectWay = document.querySelector(".select-way");
  if (event.target.type === "radio") {
    if (event.target.id === "by-name") {
      cityId.disabled = true;
      cityName.disabled = false;
    }
    if (event.target.id === "by-id") {
      cityName.disabled = true;
      cityId.disabled = false;
    }
  }
}

const selectWay = document.querySelector(".select-way");
selectWay.addEventListener("click", findway);
