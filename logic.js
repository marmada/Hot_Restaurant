 // Question: What does this code do?
 $("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newReservation = {
      name: $("#reserve_name").val().trim(),
      email: $("#reserve_email").val().trim(),
      phone: $("#reserve_phone").val().trim(),
      uniqueID: $("#reserve_uniqueID").val().trim()
    };

 
    $.post("/api/reserve", newReservation)
      .then(function(data) {
        console.log("reserve.html", data);
        alert("New Reservation Add...");
      });
  });