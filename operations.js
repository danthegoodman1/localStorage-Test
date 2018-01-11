// Check for a stored name:
if (typeof(Storage) !== "undefined") {
    var lStor = localStorage.getItem("storedName");
    if(lStor == null || lStor == "undefined") {
        console.log("No name found")
    } else {
        console.log("Got stored name: "+lStor);
        $("#nameInput").val(lStor);
        // Get the content of the input
        var nameContent = $('#nameInput').val();
        $("#nameInput").hide();
        // Set the content of the input
        $('#theHeader').html(nameContent);
        $('#theHeader').show();
        $("#theSaveButton").hide();
        $('#theEditButton').show();
    }
} else {
    console.log("Sorry, your browser does not support Web Storage...");
}

// Make the event listener for the button
$("#theSaveButton").on('click', function() {
    // Get the content of the input
    var nameContent = $('#nameInput').val();
    $("#nameInput").hide();
    console.log(`Got name: '${nameContent}'`);

    // Save the content to local storage
    localStorage.setItem("storedName", nameContent);

    // Set the content of the input
    $('#nameInput').val(nameContent);

    // Set the content of the input
    $('#theHeader').html(nameContent);
    $('#theHeader').show();
    $("#theSaveButton").hide();
    $('#theEditButton').show();

});

$("#theEditButton").on('click', function() {

    $('#theHeader').hide();
    $('#theEditButton').hide();
    $("#theSaveButton").show();
    $("#nameInput").show();
});

// <button id=theSaveButton” onclick=“hideBtn();”>
// <script type=“text/javascript”>
// function hideBtn() {
// document.getElementById("theSaveButton").style.display(“none”);
// }
// </script>

// Check browser support