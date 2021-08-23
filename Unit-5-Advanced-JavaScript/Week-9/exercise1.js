fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.results);
    const objects = data.results;
    /*      function isCake(objects) {
      return objects.name === "Cake";
    }
    console.log(objects.find(isCake));  */
    const cakeDay = data.results.find((element) => element.name === "Cake");
    console.log(cakeDay);
    const startDiv = document.getElementById("start");
    const titleEl = document.createElement("p");
    titleEl.innerText = "ID: 6 = " + cakeDay.name;
    console.log(titleEl);
    startDiv.appendChild(titleEl);
  });
