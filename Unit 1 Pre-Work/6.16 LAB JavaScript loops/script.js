function drawTriangle(size) {

   // Your solution goes here
for (row = 0; row < size; row++) {
  line = ""
  for (col = 0; col <= row; col++) {
    line += "*"
  }
  console.log(line);
}
}
drawTriangle(4);

