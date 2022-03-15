$("#design").click(function () {
  $('#design').html("<b>DESIGN<b>  <br><br> <small> Our design practice offers a range of of services <br> including brand strategy, strategy interaction and visual design and user experience testing. <br> Throughout your project, our designers create and implement visual design and workflows, solicit user <br> feedback and work with you to make sure what gets built <br>is what is needed.</small> <br><br>")

});

$("#development").click(function () {
  $('#development').html("<b>DEVELOPMENT<b>  <br><br>  <small>All engineers are fluent in the latest enterprise,mobile and web development technologies. <br> They collaborate with team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming. </small>")

});

$("#pmgmnt").click(function () {
  $('#pmgmnt').html("<b>PRODUCT MANAGEMENT<b>  <br><br><small>Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live.</small>")

});


$(".portfolio").hover(
  function () {
    $(this).stop().animate({
      "opacity": "0.5"
    });
  },
  function () {
    $(this).stop().animate({
      "opacity": "1"
    });
  },
  function () {
    $(".project").show(this);
  }, );

document.getElementById("submitButton").addEventListener("click", contactSubmit)
function contactSubmit() {
  var name = document.forms["contact-form"]["NAME"].value;
  var email = document.forms["contact-form"]["EMAIL"].value;
  var text = document.forms["contact-form"]["MESSAGE"].value;

  if (name === "") {
    alert("Please fill out the form before submit, Thank you.");

  } 
  else if (email === "") {
    alert(" Thankyou for reaching out. We'll get back to you shortly!");
  } 
  else if (text === "") {
    alert("Please fill out the form before submit, Thank you.");

  } 
  else {
    alert(name + text + ", Thankyou for reaching out. We'll get back to you shortly!");
  }
};