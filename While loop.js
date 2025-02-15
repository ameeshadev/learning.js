<!DOCTYPE html>
<html>
<body>

<h2>JavaScript While Loop</h2>

<p id="demo"></p>

<script>
let sum = "";
let i = 0;
while (i < 10) {
  sum += "<br>number " + i;
  i++;
}
document.getElementById("demo").innerHTML = sum;
</script>
</body>
</html>
