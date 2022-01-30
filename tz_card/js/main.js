$(function () {
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "17px",
    readOnly: false,
    ratedFill: "#f7bf4c",
    spacing: "8px",
  });

  $("#img-1").on("click", function () {
    $("#card-1").toggleClass("active");
  });
  $("#img-2").on("click", function () {
    $("#card-2").toggleClass("active");
  });
  $("#img-3").on("click", function () {
    $("#card-3").toggleClass("active");
  });
});
