var activeNavItem = $(".nav-item.active")
$(".nav-item").click(function () {
  var navItemText = $(this).find("a").text()
  console.log(`${navItemText} Clicked!`)
  activeNavItem.removeClass("active")
  $(this).addClass("active")
  activeNavItem = $(this)
  navigateTo(navItemText)
})

function navigateTo(s) {
  switch (s) {
    case "About":
      console.log("Navigating to About")
      $("html, body").animate({
        scrollTop: 0
      }, 2000)
      break
    case "Skills":
      console.log("Navigating to Skills")
      $("html, body").animate({
        scrollTop: $(".skills").offset().top
      })
      break
    case "Work":
      console.log("Navigating to Work")
      $("html, body").animate({
        scrollTop: $(".work").offset().top
      })
      break
    case "Contact":
      console.log("Navigating to Contact")
      $("html, body").animate({
        scrollTop: $(".contact").offset().top
      })
      break
    default:
  }
}

$(".ftr-item").click(function () {
  navigateTo($(this).text())
})