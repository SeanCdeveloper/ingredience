var currentPage = 0;

$("document").ready(function() {
  //   Function to move forward from initial landing page
  function moveLanding() {
    $("#landing").addClass("animated fadeOutUp faster");
    $("#landing").on("animationend", function() {
      $("#landing").hide();
    });
    setTimeout(function() {
      $("#options")
        .show()
        .addClass("animated fadeInUp faster");
    }, 500);

    // $("#options").addClass('animated fadeInUp');
  }

  $(".chips").chips();

  function moveForward() {
    currentPage++;
    if (currentPage == 1) {
      $("#landing").addClass("animated fadeOutUp faster");
      $("#landing").on("animationend", function() {
        $("#landing").hide();
        $("#landing").removeClass("animated fadeOutUp faster");
      });
      setTimeout(function() {
        $("#options")
          .show()
          .addClass("animated fadeInUp faster");
      }, 500);
    } else if (currentPage == 2) {
      $("#options").addClass("animated fadeOutUp");
      $("#options").on("animationend", function() {
        $("#options").hide();
        $("#options").removeClass("animated fadeOutUp faster");
      });
      setTimeout(function() {
        $("#restrictionspage")
          .show()
          .addClass("animated fadeInUp faster");
      }, 500);
    } else if (currentPage == 3) {
      $("#restrictionspage").addClass("animated fadeOutUp");
      $("#restrictionspage").on("animationend", function() {
        $("#restrictionspage").hide();
        $("#restrictionspage").removeClass("animated fadeOutUp faster");
      });
      setTimeout(function() {
        $("#ingredientspage")
          .show()
          .addClass("animated fadeInUp faster");
      }, 500);
    }
  }

  //   Function to step back in page content -- THIS IS NOT COMPLETE DON'T JUDGE ME
  function moveBack() {
    if (currentPage == 3) {
      $("#ingredientspage")
        .removeClass("animated fadeInUp faster")
        .addClass("animated fadeOutDown faster");
      currentPage--;
      $("#restrictionspage").addClass("animated fadeInDown faster");
    } else if (currentPage == 2) {
      $("#restrictionspage")
        .removeClass("animated fadeInUp faster")
        .addClass("animated fadeOutDown faster");
    } else if (currentPage == 1) {
      $("#options")
        .removeClass("animated fadeInUp faster")
        .addClass("animated fadeOutDown faster");
    }
  }

  //   Page movement event handlers
  $("#startbutton").on("click", function() {
    moveForward();
  });
  $(".backbutton").click(function() {
    moveBack();
  });
  $(".nextbutton").click(function() {
    moveForward();
    // $(".nextbutton").unbind("click");
  });
  $("#submitingredients").click(function() {
    $("#ingredientspage")
      .show()
      .addClass("animated fadeOutUp faster");
    setTimeout(function() {
      $("#ingredientspage").hide();
    }, 300);
    setTimeout(function() {
      $("#carousel")
        .show()
        .addClass("animated fadeInUp faster");
      $(".carousel").carousel();
    }, 500);
  });
});

var intolerances = "";

function checkIntolerances() {
  event.preventDefault();
  $('input[type="checkbox"]').on("change", function() {
    var shellfish = $("#check0").prop("checked");
    var gluten = $("#check1").prop("checked");
    var dairy = $("#check2").prop("checked");
    var peanuts = $("#check3").prop("checked");
    //$("#inputSearch").val()
    //var checkMe = [shellfish, gluten, dairy, peanuts];
    // for (var i = 0; i < 5; i++) {
    // console.log(checkMe[i]);
    // }
    if (!shellfish && !gluten && !dairy && !peanuts) {
      intolerances = "";
    } else if (shellfish && gluten && dairy && peanuts) {
      intolerances = "shellfish,eggs,gluten,dairy,peanuts";
    } else if (shellfish && gluten && dairy && !peanuts) {
      intolerances = "shellfish,gluten,dairy";
    } else if (shellfish && gluten && !dairy && !peanuts) {
      intolerances = "shellfish,gluten";
    } else if (shellfish) {
      intolerances = "shellfish";
    } else if (gluten) {
      intolerances = "gluten";
    } else if (dairy) {
      intolerances = "dairy";
    } else if (peanuts) {
      intolerances = "peanuts";
    } else if (!shellfish && gluten && dairy && !peanuts) {
      intolerances = "gluten,dairy";
    } else if (!shellfish && gluten && dairy && peanuts) {
      intolerances = "gluten,dairy,peanuts";
    }
    console.log("..." + intolerances);
  });
}
// $(".nextbutton").on("click", function() {
//     checkIntolerances();
//     var queryUrl = "https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert";
//     var apiKey = "a24fa84bbda24ba5a81304ccf4121858";
//     //var apiKey = "3ecef2433f5d402daccaccdf1550dabe";
//     $.ajax({
//         url: queryUrl + "&apiKey=" + apiKey,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response.recipes[0]);
//     });
// });
