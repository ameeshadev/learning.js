<!DOCTYPE html>
<html>
<body>

<h2>JavaScript break</h2>
<p> JavaScript <mark> label:</mark> </p>

<p id="demo"></p>

<script>
const friend = ["honey", "kamal", "uma", "prassu"];
let text = "";

list: {
    text += friend[0] + "<br>";
    text += friend[1] + "<br>";
    break list; // This break exits the labeled block
    text += friend[2] + "<br>"; // These lines are skipped
    text += friend[3] + "<br>";
}

document.getElementById("demo").innerHTML = text; // Assign the 'text' string
</script>

</body>
</html>
