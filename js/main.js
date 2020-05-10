$(".img-wrapper").hover(
  function () {
    $(this).find(".img-overlay").animate({ opacity: 1 }, 600);
  }, function () {
    $(this).find(".img-overlay").animate({ opacity: 0 }, 600);
  }
);

let $overlay = $('<div id="overlay"></div>');
let $image = $("<img>");
let $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
let $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
let $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
$("#gallery").append($overlay);

$overlay.hide();

$(".img-overlay").click(function (event) {
  event.preventDefault();
  let imageLocation = $(this).prev().attr("href");
  $image.attr("src", imageLocation);
  $overlay.fadeIn("slow");
});

$overlay.click(function () {
  $(this).fadeOut("slow");
});

$nextButton.click(function (event) {
  $("#overlay img").hide();
  let $currentImgSrc = $("#overlay img").attr("src");
  let $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
  let $nextImg = $($currentImg.closest(".image").next().find("img"));
  let $images = $("#image-gallery img");
  if ($nextImg.length > 0) {
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  } else {
    $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
  }
  event.stopPropagation();
});

$prevButton.click(function (event) {
  $("#overlay img").hide();
  let $currentImgSrc = $("#overlay img").attr("src");
  let $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
  let $nextImg = $($currentImg.closest(".image").prev().find("img"));
  $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  event.stopPropagation();
});

$exitButton.click(function () {
  $("#overlay").fadeOut("slow");
});