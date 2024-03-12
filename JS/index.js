console.log("your index.js is working correctly");
$(".view-project").on("click", function (e) {
  console.log($(this).next());
  $(this).next().toggleClass("hidden");
  let buttonText = $(this).text();
  console.log(buttonText);
  if (buttonText === "view details") {
    $(this).text("hide details");
  } else {
    $(this).text("view details");
  }
  //   $(".workGrid").css("background-color", "lavender");
});
