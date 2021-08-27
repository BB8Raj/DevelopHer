const mainContainer = document.getElementById("div-loop");
const secondContainer = document.getElementById("ten-loop-start");
const thridContainer = document.getElementById("limitedJson");
var linkText = document.createTextNode("my title text");
const allPosts = document.getElementById("loop");
const topTenPosts = document.getElementById("ten-ten");

const limitSection = document.getElementById("limit");

const startDiv = document.getElementById("output");
const postArray = [
  { title: "post1", image: "image1", link: "link1" },
  { title: "post2", image: "image2", link: "link2" },
];

//document.getElementById("array-start").innerText = JSON.stringify(postArray);

//fecth is a function with manadatory arg (the link).
//It returns a promise
fetch("https://www.reddit.com/r/aww/.json") //grab json data
  .then((response) => response.json()) //convets promise (the response) to json
  .catch(function (err) {
    console.log(err); // Log error if any
  })

  .then((object) => {
    console.log(object); //returns object Listing
    console.log(object.data.children); //returns Array
    let redditArray = object.data.children; //declaring array

    //loop through every OBJECT in json array
    for (var i = 0; i < redditArray.length; i++) {
      var createTitle = document.createElement("div");
      createTitle.innerHTML = "Title: " + redditArray[i].data.title;
      createTitle.classList = "title";
      mainContainer.appendChild(createTitle);

      var createImg = document.createElement("img");
      createImg.src = redditArray[i].data.thumbnail;
      createImg.classList = "images";
      createImg.title = "Image of post, click to see Post";
      createImg.href = redditArray[i].data.url;
      //mainContainer.appendChild(createImg);

      //seperate
      var a = document.createElement("a");
      //var linkText = document.createTextNode("Link to Aww");
      //a.appendChild(linkText);
      a.classList = "links";
      //a.setAttribute("href", redditArray[i].data.url); //set link path
      //a.title = "Link to the post";
      a.href = redditArray[i].data.url;
      //mainContainer.appendChild(a);

      //Img+link combo
      a.appendChild(createImg); // append to link
      mainContainer.appendChild(a);
    }

    console.log(redditArray[4]); //returns specific object of Array
    console.log(redditArray[4].data.title);
    console.log(redditArray[4].data.thumbnail);
    console.log(redditArray[4].data.url);
    console.log(object.data.children[4].data.url);

    //hardcoded test
    /* let newPostTest = document.createElement("ul");
    newPostTest.innerText =
      "Title: " +
      redditArray[4].data.title +
      "Picture: " +
      redditArray[4].data.thumbnail +
      " Link: " +
      redditArray[4].data.permalink;
    //add to div
    startDiv.appendChild(newPostTest);

    const titleEl = document.createElement("div");
    titleEl.innerText = object.data.children[4].data.title;
    console.log(titleEl);
    startDiv.appendChild(titleEl);

    const awwImg = document.createElement("img");
    awwImg.src = object.data.children[4].data.thumbnail;
    console.log(awwImg);
    startDiv.appendChild(awwImg);

    const awwLink = document.createElement("a");
    awwLink.appendChild(linkText);
    awwLink.href = object.data.children[4].data.url;
    awwLink.baseURI = object.data.children[4].data.url;
    awwLink.setAttribute("href", object.data.children[4].data.url);
    console.log(awwLink);
    startDiv.appendChild(awwLink); */
  });

const showTopTen = document.getElementById("top-ten");
showTopTen.addEventListener("click", () => {
  allPosts.style.display = "none";
  topTenPosts.style.display = "block";
  limitSection.style.display = "none";
});

const showAllPosts = document.getElementById("all-posts");
showAllPosts.addEventListener("click", () => {
  allPosts.style.display = "block";
  topTenPosts.style.display = "none";
  limitSection.style.display = "none";
});

fetch("https://www.reddit.com/r/aww/.json") //grab json data
  .then((response) => response.json()) //convets promise (the response) to json
  .catch(function (err) {
    console.log(err); // Log error if any
  })

  .then((object) => {
    console.log(object); //returns object Listing
    console.log(object.data.children); //returns Array
    let redditArray = object.data.children; //declaring array

    //loop through every OBJECT in json array
    for (var x = 10; x <= redditArray.length; x--) {
      var createTitle = document.createElement("div");
      createTitle.innerHTML = "Title: " + redditArray[x].data.title;
      createTitle.classList = "title";
      secondContainer.appendChild(createTitle);
      console.log(redditArray.length);

      var createImg = document.createElement("img");
      createImg.src = redditArray[x].data.thumbnail;
      createImg.classList = "images";
      createImg.title = "Image of post, click to see Post";
      createImg.href = redditArray[x].data.url;
      //mainContainer.appendChild(createImg);

      //seperate
      var a = document.createElement("a");
      //var linkText = document.createTextNode("Link to Aww");
      //a.appendChild(linkText);
      a.classList = "links";
      //a.setAttribute("href", redditArray[i].data.url); //set link path
      //a.title = "Link to the post";
      a.href = redditArray[x].data.url;
      //mainContainer.appendChild(a);

      //Img+link combo
      a.appendChild(createImg); // append to link
      secondContainer.appendChild(a);
    }
  });

const limitedPosts = document.getElementById("limited-ten");
limitedPosts.addEventListener("click", () => {
  allPosts.style.display = "none";
  topTenPosts.style.display = "none";
  limitSection.style.display = "block";
});

fetch("https://www.reddit.com/r/aww/.json?limit=9") //grab json data
  .then((response) => response.json()) //convets promise (the response) to json
  .catch(function (err) {
    console.log(err); // Log error if any
  })

  .then((object) => {
    console.log(object); //returns object Listing
    console.log(object.data.children); //returns Array
    let redditArray = object.data.children; //declaring array

    //loop through every OBJECT in json array
    for (var i = 0; i < redditArray.length; i++) {
      var createTitle = document.createElement("div");
      createTitle.innerHTML = "Title: " + redditArray[i].data.title;
      createTitle.classList = "title";
      thridContainer.appendChild(createTitle);

      var createImg = document.createElement("img");
      createImg.src = redditArray[i].data.thumbnail;
      createImg.classList = "images";
      createImg.title = "Image of post, click to see Post";
      createImg.href = redditArray[i].data.url;
      //mainContainer.appendChild(createImg);

      //seperate
      var a = document.createElement("a");
      //var linkText = document.createTextNode("Link to Aww");
      //a.appendChild(linkText);
      a.classList = "links";
      //a.setAttribute("href", redditArray[i].data.url); //set link path
      //a.title = "Link to the post";
      a.href = redditArray[i].data.url;
      //mainContainer.appendChild(a);

      //Img+link combo
      a.appendChild(createImg); // append to link
      thridContainer.appendChild(a);
    }
  });

//map accpets function
//when have promises need then?
