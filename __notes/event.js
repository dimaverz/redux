//index.hmtl
<div class="controles" rel="js-controls">
   <a href="url-to-register-query" rel="nofollow js-register">reg</a>
   <a href="url-to-login-query" rel="nofollow js-login">login</a>
</div>

//index.js
$(document).ready(function(){

   $("[rel='js-controles']").on("click", "[rel*='js-']", function(evt){
      evt.preventDefault();
      evt.stopPropagation();
      evt.stopImmediatePropagation();

      var url = $(evt.target).attr("href");

      // [rel*='js-'] - select all with "js-" in rel value

   })

})
