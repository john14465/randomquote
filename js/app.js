$(document).ready(function(){
    $.getJSON("https://talaikis.com/api/quotes", function(res){
      var num = 0;
      
      $('#quote').html('"'+res[num].quote+'"');
      $('#author').html('- ' + res[num].author + '');
      
      function randomNum(){
        num = Math.floor((Math.random() * 100) + 1);
        $('#quote').html('"'+res[num].quote+'"');
        $('#author').html('- ' + res[num].author + '');
        $('#tweet').href = "https://twitter.com/intent/tweet/?text=" + res[num].quote;
      };
      
      function tweet() {
        $("#tweet").attr("href", "https://twitter.com/intent/tweet/?text=" + res[num].quote + " - " + res[num].author);
      }
      $('#new').click(randomNum);
      $('#tweet').click(tweet);
    });
  });