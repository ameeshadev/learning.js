<!DOCTYPE html>
<html>
<body>

<h2>JavaScript While Loop</h2>

<p id="demo"></p>

<script>
let sum = "";
let i = 0;
do{
sum += "<br>number " + i;
  i++;
}
while (i < 10) 
document.getElementById("demo").innerHTML = sum;
</script>
</body>
</html>
