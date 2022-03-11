
$("#design").click(function () {
    $('#design').html("<b>DESIGN<b>  <br><br> <small> Our design practice offers a range of of services <br> including brnd strategy, strategy interaction and user experince testing. <br> Throughout your project, our designers create and implement visual design and workflows, solicit user <br> feedback and work with you to make sure what gets built <br>is what is needed.</small> <br><br>")
    
});

$("#development").click(function () {
    $('#development').html("<b>DEVELOPMENT<b>  <br><br>  <small>all engineers are fluent in the latest enterprice,mobile and web development technologies. <br> They collaborate with team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming. </small>")
    
});

$("#pmgmnt").click(function () {
    $('#pmgmnt').html("<b>PRODUCT MANAGEMENT<b>  <br><br><small>Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live.</small>")

});


$(".portfolio").hover(
    function() {
    $(this).stop().animate({"opacity": "0.5"});
  }, function () {
      $(".project").show(this);
  },
  function () {
    $(".project").hide(this);
},
  function() {
    $(this).stop().animate({"opacity": "1"});
  });