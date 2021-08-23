const posts = [
  { title: "post1", image: "image1", link: "link1" },
  { title: "post2", image: "image2", link: "link2" },
];

const apiPromise = fetch(
  "https://grandcircusco.github.io/demo-apis/donuts.json"
).then((res) => res.json());
console.log(apiPromise);

apiPromise.then((data) => {
  console.log("#1 All Data: " + data);
  console.log(data.results);
  console.log("# 2 Count data: " + data.count); //just the count
});

const countPromise = apiPromise
  .then((data) => {
    return "#3 countPromise chain: " + data.count;
  })
  .then((data) => {
    console.log(data);
  });

const top4Promise = countPromise
  .then((data) => {
    return "#4 test" + 8;
  })
  .then((data) => {
    console.log(data);
  });
