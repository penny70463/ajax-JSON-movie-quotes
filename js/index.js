   var currentQuote='';
   var currentMovie='';
   var quotesData;

var colors = ['rgba(246,193,212, 0.7)', 'rgba(106,155,250, 0.7)', 'rgba(153,194,208, 0.7)', 'rgba(38,233,237, 0.7)', 'rgba(106,155,250, 0.7)', 'rgba(246,193,212, 0.7)', 'rgba(146,244,116, 0.7)', 'rgba(244,221,116, 0.7)', "rgba(246,144,236, 0.7)",'rgba(218,188,231, 0.7)'];
function getQuotes(){
  return  $.ajax({ 
    url: 'https://gist.githubusercontent.com/penny70463/a25fabf26209d500ff281e1630e4de1c/raw/7a645ad3bd4642f6b05082c329d885b16b75e1a8/movie.json', 
    
    success:function(jsonQuotes){
      quotesData=JSON.parse(jsonQuotes);
      console.log(quotesData);}
     })
}
function getRandomQuote(){
  return quotesData.moviequotes[Math.floor(Math.random()*quotesData.moviequotes.length)]
}

function getQuote(){
  let randomQuote=getRandomQuote();
  currentQuote=randomQuote.quote;
  currnetMovie=randomQuote.movie;
   $('.moviequote').text('"'+randomQuote.quote+'"');
  $('.movie').text('電影--'+randomQuote.movie);
  var color = Math.floor(Math.random() * colors.length);
  $(".quote1").animate({
        backgroundColor: colors[color]
      }, 1000);
  var str=colors[color].replace(/, 0.7/,',0.6');
  $(".quote2").animate({
   backgroundColor: str
      }, 1000);
  var d = new Date();
    $("body").attr("background-image", 'url('+"https://source.unsplash.com/1080x720/?nature,water"+d.getTime())+')'; 
}
$(document).ready(function(){
  getQuotes().then(()=>{getQuote()});
  $('#push').on('click',getQuote);
 
})