 // Question: What does this code do?
 $("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newReservation = {
      name: $("#name").val().trim(),
      email: $("#email").val().trim(),
      phone: $("#phone").val().trim(),
      uniqueID: $("#uniqueID").val().trim()
    };

 
    $.post("/api/reserve", newReservation)
      .then(function(data) {
        console.log("home.html", data);
        alert("New Reservation Add...");
      });
  });