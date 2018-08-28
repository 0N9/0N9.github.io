background_buffer_1=""
background_buffer_2=""
current_background_buffer=""
text_buffer_1=""
text_buffer_2=""
current_text_buffer=""
data_buffer_1=""
data_buffer_2=""
current_data_buffer=""
sound_buffer_1=""
sound_buffer_2=""
current_sound_buffer=""
session_id=""
fade_time=2000
max_line_len=800
var pre_loaded_images=[]
var current_data=""
var current_sound=""
$(document).ready(function(){$(".inspirobot-pink-bright").hide()
prepareInspiroflow()})
function prepareInspiroflow(){background_buffer_1=$(".background-buffer-1")
background_buffer_2=$(".background-buffer-2")
current_background_buffer=background_buffer_1
background_buffer_1.hide()
background_buffer_2.hide()
text_buffer_1=$(".text-buffer-1")
text_buffer_2=$(".text-buffer-2")
current_text_buffer=text_buffer_1
text_buffer_1.hide()
text_buffer_2.hide()
img=getRandomImage("night,sky")
setBackground(img)
setupSession()
$('.btn-start').click(start)}
function setupSession(){baseUrl=getRequestUrl()
url=baseUrl+'api?getSessionID=1'
$.get(url,function(response){session_id=response
preLoadData()})}
var timeAtStart=0
function start(){$(".inspirobot-pink-bright").fadeIn(fade_time/2);$(".intro-page").fadeOut(fade_time)
$(".btn-start-container").fadeOut(fade_time)
$(".intro-container").fadeOut(fade_time)
setInterval(running,100);}
function running(){if(current_data===""){current_data=current_data_buffer
current_sound=current_sound_buffer
current_sound.play()}
currentTime=current_sound.seek()
if(current_data_buffer.length==3){preLoadData()}
if(current_data[0]['type']=="info"){current_data.shift()}
if(currentTime>current_data[0]['time']){event=current_data.shift()
if(event['type']=='transition'){imageID=event['image']
img=getFullImageUrl(imageID)
setBackground(img,event['duration']*1000)
current_text_buffer.fadeOut(event['duration']*1000)}
if(event['type']=='quote'){setText(event['text'],event['duration'])}
if(event['type']=='stop'){current_text_buffer.fadeOut(fade_time)
current_background_buffer.fadeOut(fade_time)
current_data=""
return}}
if(currentTime+2>current_data[0]['time']){if(current_data[0]['type']=='transition'){imageID=current_data[0]['image']
img=getFullImageUrl(imageID)
if(pre_loaded_images.includes(img)==false){pre_loaded_images.push(img)
preLoadImage(img)}}}}
function getRequestUrl(){if(window.location.port){baseUrl=window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/"}
else{baseUrl=window.location.protocol+"//"+window.location.hostname+"/"}
return baseUrl}
var preloadingData=false
function preLoadData(){if(preloadingData==true){return}
baseUrl=getRequestUrl()
url=baseUrl+'api?generateFlow=1'
url+='&sessionID='+session_id
preloadingData=true
$.get(url,function(response){preloadingData=false
if(current_data_buffer==data_buffer_1){current_data_buffer=data_buffer_2}
else if(current_data_buffer==data_buffer_2){current_data_buffer=data_buffer_1}
if(current_sound_buffer==sound_buffer_1){current_sound_buffer=sound_buffer_2}
else if(current_sound_buffer==sound_buffer_2){current_sound_buffer=sound_buffer_1}
current_data_buffer=response['data']
current_sound_buffer=new Howl({src:[response['mp3']],format:'mp3'});})}
function preLoadImage(Url){var imageBuffer=new Image();imageBuffer.src=Url}
function setBackground(Url,FadeTime){var imageBuffer=new Image();imageBuffer.src=Url
$(imageBuffer).load(function(){if(current_background_buffer==background_buffer_1){background_buffer_1.fadeOut(FadeTime,function(){$(this).removeClass("ken-burns")})
current_background_buffer=background_buffer_2}
else if(current_background_buffer==background_buffer_2){background_buffer_2.fadeOut(FadeTime,function(){$(this).removeClass("ken-burns")})
current_background_buffer=background_buffer_1}
current_background_buffer.css("background-image","url("+$(this).attr("src")+")")
current_background_buffer.fadeIn(FadeTime)
current_background_buffer.addClass("ken-burns")});}
function setText(Text,Duration){current_text_buffer.fadeOut(fade_time)
if(current_text_buffer==text_buffer_1){current_text_buffer=text_buffer_2}
else if(current_text_buffer==text_buffer_2){current_text_buffer=text_buffer_1}
current_text_buffer.html("")
pos=getRandomTextPosition(Text.length)
current_text_buffer.css('margin-left',pos[0]+'px');current_text_buffer.css('margin-top',pos[1]+'px');current_text_buffer.show()
teletype(Text,current_text_buffer,Duration)}
function teletype(Text,El,Duration){duration=Duration*1000
duration-=250
i=0
while(true){var matches=Text.match(/\[(.*?)\]/);if(matches){for(i=0;i<matches.length;i++){if(isOdd(i)==false){continue}
pauseLength=matches[i].replace(/^\D+/g,'')
duration-=pauseLength*1000
replaceChar="|".repeat(pauseLength)
Text=Text.replace("["+matches[i]+"]",replaceChar)}}
else{break}
i+=1
if(i==10){break}}
textlen=Text.length
countDot=(Text.match(/\./g)||[]).length;countComma=(Text.match(/,/g)||[]).length;countQuestionmark=(Text.match(/\?/g)||[]).length;countColon=(Text.match(/\:/g)||[]).length;if(Text[Text.length-1]=="."){countDot-=1}
textlen+=countDot*4
textlen+=countComma*4
textlen+=countQuestionmark*4
textlen+=countColon*4
speed=duration/textlen
_teletype(Text,El,speed)}
function _teletype(Text,El,Speed){letter=Text.charAt(0)
text=Text.substr(1);if(letter!="|"){currentText=El.html()
El.html(currentText+letter)}
if(letter==" "){posLeft=parseInt(El.css("margin-left"))
nextWord=text.split(" ")[0]
lines=El.html().split("<br>")
currentLine=lines[lines.length-1]
padding=$(window).width()/20
lenghtWithNextWord=calcTextWidth(currentLine+nextWord,El)
if(posLeft+lenghtWithNextWord+padding>$(window).width())
{currentText=El.html()
El.html(currentText+"<br>")}
else if(lenghtWithNextWord>max_line_len){currentText=El.html()
El.html(currentText+"<br>")}}
nextLetterTime=Speed+randInt(-5,5)
if(letter=="."){nextLetterTime=Speed*4}
if(letter==","){nextLetterTime=Speed*4}
if(letter=="?"){nextLetterTime=Speed*4}
if(letter==":"){nextLetterTime=Speed*4}
if(letter=="|"){nextLetterTime=1000}
if(text!=""){setTimeout(function(){_teletype(text,El,Speed)},nextLetterTime)}
else{}}
function getFullImageUrl(ImageID){url="https://source.unsplash.com/"
url+=ImageID+"/"
url+="1600x900"
return url}
function getRandomImage(Theme){url="https://source.unsplash.com/1600x900/?"
url+=Theme
url+="&random="+makeid()
return url}
function makeid(){var text="";var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var i=0;i<5;i++)
text+=possible.charAt(Math.floor(Math.random()*possible.length));return text;}
function getRandomTextPosition(TextLength){w=$(window).width()
h=$(window).height()
paddingX=w/20
paddingY=(h/15)+30
if(TextLength>350){$(".inspiroflow_text").addClass("inspiroflow_text_small")
return[paddingX,paddingY]}
else{$(".inspiroflow_text").removeClass("inspiroflow_text_small")}
x=parseInt(randInt(paddingX,w/2.5))
y=parseInt(randInt(paddingY,h/1.7))
if(w<500){paddingX=w/25
paddingY=h/15
x=parseInt(randInt(paddingX,w/5))
y=parseInt(randInt(paddingY,h/2.5))}
return[x,y]}
function randomChoice(arr){return arr[Math.floor(arr.length*Math.random())];}
function randInt(start,stop){max=stop-start
max+=1
num=Math.floor(Math.random()*Math.floor(max));return num+start}
function isOdd(num){return num%2;}
function calcTextWidth(text,parentElem){el=$(".text-buffer-meter")
el.empty()
el.append('<p>'+text+'</p>')
width=el.width()
el.empty()
return width}