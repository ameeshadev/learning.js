<!DOCTYPE html>
<html>
<body>
    <h2> javascript <i>continue loop</i> </h2>
    <p> The continue statement <b>"jumps over of the loop"</b> </p>
    <p id="demo"></p> <script>
        let numbers = ""; // Initialize as an empty string
        for (let i = 0; i < 10; i++) { // Semicolon here!
            if (i == 6) {
                continue;
            }
            numbers += "The numbers are: " + i + "<br>"; // Add a line break for better formatting
        }
        document.getElementById("demo").innerHTML = numbers;
    </script>
</body>
</html>
