<script>
$(document).ready(function(){
  $("tekst").mouseover(function(){
    $("tekst").css("background-color", "yellow");
  });
  $("tekst").mouseout(function(){
    $("tekst").css("background-color", "lightgray");
  });
});
</script>