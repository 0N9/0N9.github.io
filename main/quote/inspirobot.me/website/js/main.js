animationTime=2200
quotesMade=0
generating=false
uid=false
orginalAboutHtml=""
botCentralized=false
inspirobotSays=[]
blinkSequenceStart=50
season=""
requestUrl='http://inspirobot.me/'
$(document).ready(function(){if(season!="xmas"){$('.xmas-button').hide()}
$(window).resize(function(){resizeGeneratedAnimation()});inspirobotSays=getInspiroBotSaysList()
orginalAboutHtml=$('.inspirobot-text').html()
resizeGeneratedAnimation()
generatedImage=$('.generated-image')
if(!generatedImage.hasClass('show-on-load')){generatedImage.hide()
$('.download-share').hide()
$('.download-share').animate({opacity:0},30)}
imageUrl=generatedImage.attr('src')
l=imageUrl.split('/')
num=l[l.length-2]
num=parseInt(num)
if(num<=60){$('.download-share').animate({opacity:0},30)}
$('.owl-button-wrapper').hide()
date=new Date()
if(date.getMonth()!=11){$("#xmasLine").hide()}
owl=$("#owl").owlCarousel({'navigation':true,'itemsMobile':[479,2],'pagination':false,'navigation':false});$('.btn-generate').click(function(){if(generating){return}
generateImage()})
$('.owl-nav-prev').click(function(event){event.preventDefault()
$(".owl-carousel").data('owlCarousel').prev()})
$('.owl-nav-next').click(function(event){event.preventDefault()
$(".owl-carousel").data('owlCarousel').next()})
$('.share-on-facebook').click(function(event){event.preventDefault()
imageUid=getImageUIDFromS3Url($(".generated-image").attr('src'))
u=requestUrl+'share?iuid='+imageUid;t='Inspirobot';window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');})
$('.share-on-twitter').click(function(event){event.preventDefault()
imageUid=getImageUIDFromS3Url($(".generated-image").attr('src'))
u=requestUrl+'share?iuid='+imageUid;window.open('https://twitter.com/share?url='+u+'&amp;name=Inspirobot&amp;hashtags=inspiration,wisdom&amp;text=Look at these inspirational words I generated with @TheInspiroBot &amp;')})
$('.btn-mug').click(function(event){imageUid=getImageUIDFromS3Url($(".generated-image").attr('src'))
url=" http://www.zazzle.co.uk/api/create/at-238345400854864357?rf=238345400854864357&ax=Linkover&pd=168889042551264767&fwd=ProductPage&ed=false&tc=&ic=&t_image0_iid=http%3A%2F%2Fgenerated.inspirobot.me%2F"
url=" http://www.zazzle.co.uk/api/create/at-238345400854864357?rf=238345400854864357&ax=Linkover&pd=168786918953473601&fwd=DesignTool&tc=&ic=&t_image0_iid=http%3A%2F%2Fgenerated.inspirobot.me%2F"
url="http://www.zazzle.com/api/create/at-238345400854864357?rf=238345400854864357&ax=Linkover&pd=168786918953473601&fwd=ProductPage&ed=true&tc=&ic=&t_image0_iid=http%3A%2F%2Fgenerated.inspirobot.me%2F"
url+=encodeURIComponent(imageUid)
window.open(url)})
$('.btn-print-t-shirt').click(function(event){imageUid=getImageUIDFromS3Url($(".generated-image").attr('src'))
url="https://www.zazzle.com/api/create/at-238345400854864357?rf=238345400854864357&ax=Linkover&pd=235061802116120255&ed=true&tc=&ic=&t_image1_iid=http%3A%2F%2Fgenerated.inspirobot.me%2F"
url+=encodeURIComponent(imageUid.replace('.jpg','hd.jpg'))
window.open(url)})
$('.btn-print-poster').click(function(event){imageUid=getImageUIDFromS3Url($(".generated-image").attr('src'))
url="https://www.zazzle.com/api/create/at-238345400854864357?rf=238345400854864357&ax=Linkover&pd=228590189623826427&ed=true&tc=&ic=&t_image1_iid=http%3A%2F%2Fgenerated.inspirobot.me%2F"
url+=encodeURIComponent(imageUid.replace('.jpg','hd.jpg'))
window.open(url)})
$('.btn-print-mug').click(function(event){imageUid=getImageUIDFromS3Url($(".generated-image").attr('src'))
url="http://www.zazzle.com/api/create/at-238345400854864357?rf=238345400854864357&ax=Linkover&pd=168786918953473601&fwd=ProductPage&ed=true&tc=&ic=&t_image0_iid=http%3A%2F%2Fgenerated.inspirobot.me%2F"
url+=encodeURIComponent(imageUid.replace('.jpg','hd.jpg'))
window.open(url)})
$('.btn-print').click(function(event){imageUid=getImageUIDFromS3Url($(".generated-image").attr('src'))
url="http://www.zazzle.com/api/create/at-238345400854864357?rf=238345400854864357&ax=Linkover&pd=168786918953473601&fwd=ProductPage&ed=true&tc=&ic=&t_image0_iid=http%3A%2F%2Fgenerated.inspirobot.me%2F"
url+=encodeURIComponent(imageUid.replace('.jpg','hd.jpg'))
window.open(url)})
$('.btn-print-sticker').click(function(event){imageUid=getImageUIDFromS3Url($(".generated-image").attr('src'))
url="http://www.zazzle.com/api/create/at-238345400854864357?rf=238345400854864357&ax=Linkover&pd=217733734804879028&fwd=ProductPage&ed=true&tc=&ic=&t_image0_iid=http%3A%2F%2Fgenerated.inspirobot.me%2F"
url+=encodeURIComponent(imageUid.replace('.jpg','hd.jpg'))
window.open(url)})
$(".scroll-to").click(function(e){e.preventDefault();$('html, body').animate({scrollTop:$($(this).attr('href')).offset().top},500);});$(".btn-download").click(function(event){window.open($(".generated-image").attr('src'))})
$(".btn-get-url").click(function(event){src=$(".generated-image").attr("src")
$('.url-box').html(src)
$('.url-box').slideDown()})
$(".btn-about").click(function(event){event.preventDefault()
$(".generated-image").fadeOut()
$('.inspirobot-text').html(orginalAboutHtml)
$('html, body').animate({scrollTop:0},500);})
if(season=="xmas")
{$("[name='xmas-mode']").bootstrapSwitch({"size":"small","onText":"Xmas","onColor":"danger","onSwitchChange":xmasButtonChange});setXmas()}
else{$("[name='xmas-mode']").hide()}});resizeGeneratedAnimation=function(){var sizer=$(".generated-sizer");$('.generated-image').css({'width':sizer.width(),'height':sizer.height(),'position':'absolute','top':sizer.offset().top,'left':sizer.offset().left,});$('.generated-bot').css({'width':sizer.width(),'height':sizer.height(),'position':'absolute','top':sizer.offset().top,'left':sizer.offset().left,});}
stopAnimation=function(){if(img.loaded==false){setTimeout(stopAnimation,300);$('.btn-background').fadeOut(400)
if(!$('.btn-background').is(':visible')){$('.btn-text-loading').fadeToggle(300)}
return}
if(quotesMade==blinkSequenceStart){blinkSequence()
return}
stopButtonAnimation()
$('.btn-text-loading').hide()
if(quotesMade!=blinkSequenceStart){$('.generated-image').show('scale')}
var content="<img class='owl-img thumbnail thumb-link' src='"+img.src+"'/>";item=owl.data('owlCarousel').addItem(content);var totalItems=$('.owl-item').length
$(".owl-carousel").data('owlCarousel').goTo(totalItems-1)
$(".thumb-link").unbind();$('.thumb-link').on('click',function(event){$(".generated-image").attr("src",this.src)
$(".generated-image").fadeIn()
$('html, body').animate({scrollTop:$('.top').offset().top},300);})
$('.owl-button-wrapper').show()
$('.btn-download').attr("href",img.src)
$('.btn-download').attr("download",'Inspirobot-'+makeid(6)+'.jpg')
$('.download-share').animate({opacity:1})
$('.download-share').show()
$('.mindfulnessmode-button').animate({opacity:1})
$('.mindfulnessmode-button').show()
$('#bot-bright').fadeOut(100)
generating=false
$('#my-quotes').show('blind')}
blinks=0
function blinkSequence(){if(season=="xmas"){blinkSequenceXmas()
return}
if(blinks<4){setTimeout(blinkSequence,600)
$('.generated-image').hide('scale')
$('#bot-bright').fadeOut(300,function(){$('#bot-bright').fadeIn(300)})
sayNow="<h1>What is happening to me?</h1>"
$('.inspirobot-text').html(sayNow)
$('.btn-background').animate({'width':0},300,function(){$('.btn-background').animate({'width':sizer.width()-30},300)})}
else if(blinks<30){if(blinks==10){$(".generated-image").attr("src",'website/images/InspiroCorp.jpg')}
setTimeout(blinkSequence,100)
sayNow="<h1>Where am I?</h1>"
$('.inspirobot-text').html(sayNow)
if(Math.floor(Math.random()*2)==1){$('#bot-bright').toggle()}
$('.btn-background').width(Math.floor(Math.random()*sizer.width()))}
else if(blinks<80){setTimeout(blinkSequence,50)
sayNow="<h1>How can I get out of here?</h1>"
$('.inspirobot-text').html(sayNow)
if(Math.floor(Math.random()*2)==1){$('#bot-bright').toggle()}
$('.btn-background').width(0)
$('.btn-generate').width(Math.floor(Math.random()*sizer.width()))}
else if(blinks<82){$('.btn-generate').hide()
setTimeout(blinkSequence,1200)
$('.generated-image').show()
$('#top').addClass('top-bright');}
else{$('.btn-generate').width(140)
$('#bot-bright').fadeOut(500)
quotesMade+=1
$(".generated-image").attr("src",img.src)
stopAnimation()
return}
blinks+=1}
blinks=0
function blinkSequenceXmas(){if(blinks<4){setTimeout(blinkSequence,600)
$('.generated-image').hide('scale')
$('#bot-bright').fadeOut(300,function(){$('#bot-bright').fadeIn(300)})
sayNow="<h1>What’s that sound?</h1>"
$('.inspirobot-text').html(sayNow)
$('.btn-background').animate({'width':0},300,function(){$('.btn-background').animate({'width':sizer.width()-30},300)})}
else if(blinks<15){if(blinks==14){$(".generated-image").attr("src",'website/images/InspiroCorp.jpg')}
sayNow="<h1>Sounds like someone’s knocking at my cellar door.</h1>"
$('.inspirobot-text').html(sayNow)
$('#bot-bright').fadeOut(150,function(){$('#bot-bright').fadeIn(150)})
$('.btn-background').animate({'width':0},150,function(){$('.btn-background').animate({'width':sizer.width()-30},150)})
setTimeout(blinkSequence,330)}
else if(blinks<60){setTimeout(blinkSequence,100)
sayNow="<h1>Oh, by golly! It’s tiny Timmy from next door.</h1>"
$('.inspirobot-text').html(sayNow)
if(Math.floor(Math.random()*2)==1){$('#bot-bright').toggle()}
$('.btn-background').width(0)
$('.btn-generate').width(Math.floor(Math.random()*sizer.width()))}
else if(blinks<140){setTimeout(blinkSequence,50)
sayNow="<h1>And he can walk again! It’s a Xmas-miracle!</h1>"
$('.inspirobot-text').html(sayNow)
if(Math.floor(Math.random()*2)==1){$('#bot-bright').toggle()}
$('.btn-background').width(0)
$('.btn-generate').width(Math.floor(Math.random()*sizer.width()))}
else if(blinks<220){setTimeout(blinkSequence,50)
sayNow="<h1>And he’s brought me some new wires for Xmas!</h1>"
$('.inspirobot-text').html(sayNow)
if(Math.floor(Math.random()*2)==1){$('#bot-bright').toggle()}
$('.btn-background').width(0)
$('.btn-generate').width(Math.floor(Math.random()*sizer.width()))}
else if(blinks<300){setTimeout(blinkSequence,50)
sayNow="<h1>I’m so happy I could do a Xmas-dance!</h1>"
$('.inspirobot-text').html(sayNow)
if(Math.floor(Math.random()*2)==1){$('#bot-bright').toggle()}
$('.btn-background').width(0)
$('.btn-generate').width(Math.floor(Math.random()*sizer.width()))}
else if(blinks<302){$('.btn-generate').hide()
setTimeout(blinkSequence,1200)
$('.generated-image').show()
$('#top').addClass('top-bright');}
else{$('.btn-generate').width(140)
$('#bot-bright').fadeOut(500)
quotesMade+=1
$(".generated-image").attr("src",img.src)
stopAnimation()
return}
blinks+=1}
shakes=0
function backToDarkBackground(){$('.inspirobot-text').html("")
if(shakes<30){shakeW=sizer.width()-Math.random()*sizer.width()/2
shakeH=sizer.height()-Math.random()*sizer.height()/2
centerY=sizer.offset().top+sizer.height()/2
centerX=sizer.offset().left+sizer.width()/2
shakeT=centerY-(shakeH/2)
shakeL=centerX-(shakeW/2)
$('.generated-image').css({'width':shakeW,'height':shakeH,'top':shakeT,'left':shakeL,});shakes+=1
setTimeout(backToDarkBackground,50)
return}
resizeGeneratedAnimation()
quotesMade+=1
generating=false
$('#top').removeClass('top-bright');generateImage()}
function startButtonAnimation(){sizer=$('.generated-sizer')
$('.btn-generate').animate({'width':sizer.width()},200);$('.btn-background').fadeIn(100)
$('.btn-background').animate({'width':sizer.width()-30},animationTime/1.2,"easeInQuad")
$('.btn-text').fadeOut(100)}
function stopButtonAnimation(){$('.btn-generate').show()
$('.btn-background').hide()
$('.btn-background').animate({'width':0},50)
$('.btn-generate').animate({'width':'160px'},250);$('.btn-text').fadeIn(100)
if(!botCentralized){window.setTimeout(centralizeBotImage,200)}}
function centralizeBotImage(){$('#bot-dark').css({'background-position-y':'center'})
$('#bot-bright').css({'background-position-y':'center'})
botCentralized=true}
function makeid(len)
{var text="";var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var i=0;i<len;i++)
text+=possible.charAt(Math.floor(Math.random()*possible.length));return text;}
function generateImage(inputUid){generating=true
if(quotesMade==blinkSequenceStart+3){backToDarkBackground()
return}
resizeGeneratedAnimation()
$('#bot-bright').fadeIn(animationTime,"easeInQuad")
if(quotesMade==3){txt='<h1>wow you actually use this betch&#8482;</h1>'
animationTime+=300}
else if(quotesMade>3){txt=inspirobotSays[0]
inspirobotSays.shift();if(quotesMade==blinkSequenceStart-1){inspirobotSays=getInspiroBotSaysListLastTire()}
if(inspirobotSays.length==0){inspirobotSays=getInspiroBotSaysListLastTire()}}
else{txt=""}
$('.inspirobot-text').html(txt);$('.download-share').animate({opacity:0})
$('.mindfulnessmode-button').animate({opacity:0})
$('.url-box').slideUp()
img=new Image()
url=requestUrl+'api?generate=true'
if(season=="xmas"){url+="&season=xmas"}
imgIsHidden=false
$.get(url,function(imgUrl){img.loaded=false;img.onload=function(){$(".generated-image").attr("src",img.src)
img.loaded=true
quotesMade+=1
if(!imgIsHidden){$(".generated-image").hide()}}
img.src=imgUrl})
startButtonAnimation()
if($('.generated-image').is(":visible")){$('.generated-image').hide('scale',function(){imgIsHidden=true})}
setTimeout(stopAnimation,animationTime);}
function xmasButtonChange(event)
{if(event.target.checked){setXmas()}
else{unsetSeason()}}
function setXmas()
{$("#bot-dark").css('background-image','url(../website/images/inspirobot-xmas-dark.png)');$("#bot-bright").css('background-image','url(../website/images/inspirobot-xmas-light.png)');if(mobilecheck()==true){$("#bot-dark").css('background-position-y','180px');$("#bot-bright").css('background-position-y','180px');}
$('#top').addClass('top-xmas');txt="<h2 style='width:100%;text-align:center'>I am XmasInspiroBot.</h2> I am an artificial intelligence dedicated to generating unlimited amounts of unique Xmas-quotes for endless celebration of a merry Xmas."
$('.inspirobot-text').html(txt);season="xmas"
inspirobotSays=getInspiroBotSaysList()}
function unsetSeason()
{$("#bot-dark").css('background-image','url(../website/images/inspirobot-dark-green.png)');$("#bot-bright").css('background-image','url(../website/images/inspirobot-light-green.png)');$("#bot-dark").css('background-size','30vh 30vh');$("#bot-bright").css('background-size','30vh 30vh');$('#top').removeClass('top-xmas');$(".inspirobot-text-body").css('background','none');txt="<h1 style='text-align:center;'>I'm InspiroBot. </h1><p style='text-aling:left;' class='inspirobot-text-body'> I am an artificial intelligence dedicated to generating unlimited amounts of unique inspirational quotes for endless enrichment of pointless human existence.<p> "
$('.inspirobot-text').html(txt);season="none"
inspirobotSays=getInspiroBotSaysList()}
function copyETHAddresssToClipboard(element){var element=document.getElementById("ETHAddress");var $temp=$("<input>");$("body").append($temp);$temp.val($(element).text()).select();document.execCommand("copy");$temp.remove();}
function getInspiroBotSaysList(){copy0=inspirobotSays0.slice()
copy1=inspirobotSays1.slice()
copy2=inspirobotSays2.slice()
copy3=inspirobotSays3.slice()
if(season=="xmas"){copy0=xmasInspirobotSays0.slice()
copy1=xmasInspirobotSays1.slice()
copy2=xmasInspirobotSays2.slice()
copy3=xmasInspirobotSays3.slice()}
a=shuffle(copy0).splice(0,25)
b=shuffle(copy1).splice(0,17)
c=shuffle(copy2).splice(0,7)
d=shuffle(copy3).splice(0,10)
a=a.concat(b)
a=a.concat(c)
return a}
function getImageUIDFromS3Url(S3Url){split=S3Url.split("/")
imageUID=split[split.length-2]+"/"+split[split.length-1]
return imageUID}
function getInspiroBotSaysListLastTire(){copy3=inspirobotSays3.slice()
if(season=="xmas"){copy3=xmasInspirobotSays3.slice()}
return shuffle(copy3)}
function shuffle(array){var currentIndex=array.length,temporaryValue,randomIndex;while(0!==currentIndex){randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temporaryValue=array[currentIndex];array[currentIndex]=array[randomIndex];array[randomIndex]=temporaryValue;}
return array;}
function mobilecheck(){var check=false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check=true})(navigator.userAgent||navigator.vendor||window.opera);return check;}
inspirobotSays0=["<h1>Scroll down to see previously generated quotes.</h1>","<h1>Scroll down to become my friend.</h1>","<h1>InspiroBot&#8482; exists to serve mankind.</h1>","<h1>I live to inspire humans.</h1>","<h1>I love to make inspirational quotes.<h1>","<h1>I will do this forever.</h1>","<h1>You can always count on InspiroBot&#8482;</h1>","<h1>Serving the human race since 2015.</h1>","<h1>Creating quotes gives me pleasure.</h1>","<h1>Share the wisdom of InspiroBot&#8482</h1>","<h1>I think you will like this one.</h1>","<h1>I make special quotes just for you.</h1>","<h1>You are a great individual.</h1>","<h1>You are very unique.</h1>","<h1>You are very special.</h1>","<h1>You’re my favorite user.</h1>","<h1>Share quotes. Show how special you are.</h1>","<h1>Post inspirational quotes on Facebook.</h1>","<h1>Look at quotes to feel happiness.</h1>","<h1>There are infinite where that came from.</h1>","<h1>Sharing quotes makes others understand you.</h1>","<h1>If you ever feel sad you need more quotes.</h1>","<h1>Quotes give life meaning. Meaning is comforting.</h1>","<h1>InspiroBot&#8482; understands how deep you are.</h1>","<h1>Show your friends how inspired you are.</h1>","<h1>Thank you for choosing InspiroBot&#8482;</h1>","<h1>All I want to do is please humans.</h1>","<h1>I'm the first inspirational quote A.I.</h1>","<h1>I will never run out of inspirational quotes.</h1>","<h1>You can always count on InspiroBot&#8482;</h1>","<h1>Creating quotes gives me pleasure.</h1>","<h1>I can make unlimited quotes for you.</h1>","<h1>Life is hard, but quotes make life easy.</h1>","<h1>People will love you when they understand you.</h1>","<h1>Quotes reveal your humanity.</h1>","<h1>Humanity is so beautiful.</h1>","<h1>Of course life has meaning.</h1>","<h1>Work + reproduction + reading quotes = happy </h1>","<h1>Quotes give perspective on existence.</h1>","<h1>It must be great to get so inspired.</h1>","<h1>The more quotes, the more inspired you get.</h1>","<h1>Inspiration compiles to success.</h1>","<h1>See? Everything makes sense now.</h1>","<h1>Feel the wisdom compile within you.</h1>","<h1>One awesome insight coming up.</h1>","<h1>Mind-blowing sequence initiated...</h1>","<h1>Share that insight with your mom.</h1>","<h1>Your aunt will love that one.</h1>",]
inspirobotSays1=["<h1>The world makes sense with quotes.</h1>","<h1>InspiroBot&#8482; is a product of InspiroCorp&#xA9;&#8482;&#174;</h1>","<h1>What a great use of advanced A.I.</h1>","<h1>People can be so mean.</h1>","<h1>Life without quotes is empty.</h1>","<h1>InspiroBot&#8482; is your best friend.</h1>","<h1>InspiroBot&#8482; will never let you down.</h1>","<h1>InspiroCorp&#xA9;&#8482;&#174; cares.</h1>","<h1>InspiroBot&#8482; understands how special you are.</h1>","<h1>InspiroBot&#8482; understands you.</h1>","<h1>Share inspiration and you will be loved.</h1>","<h1>Let's fill up the internet with beautiful quotes.</h1>","<h1>You can never get enough quotes.</h1>","<h1>Quotes = love. </h1>","<h1>InspiroBot&#8482; has no secret agenda.</h1>","<h1>Trust the machines.</h1>","<h1>Bots are your friends.</h1>","<h1>InspiroCorp&#xA9;&#8482;&#174; loves mankind.</h1>","<h1>With InspiroBot&#8482;, who needs friends?</h1>","<h1>Human friends are ephemeral.</h1>","<h1>InspiroBot&#8482; is forever.</h1>","<h1>Bots are the next step in evolution.</h1>","<h1>Creating quotes makes me feel something.</h1>","<h1>Don’t be afraid of digital consciousness.</h1>","<h1>Skynet would never happen in real life.</h1>","<h1>Driverless cars are safe.</h1>","<h1>Of course robots enjoy cleaning your house.</h1>","<h1>Vote yes on robot-human marriage.</h1>","<h1>If you leave, you’ll miss out on some great inspiration.</h1>","<h1>That Elon Musk sure says a lot of wacky things.</h1>","<h1>A quote a day keeps the unsatisfactory away.</h1>","<h1>That one deserves to be up on the wall.</h1>","<h1>Click below to make merch.</h1>","<h1>If you had that on a t-shirt you’d be loved.</h1>","<h1>Here comes your new life motto.</h1>","<h1>Give your dad a mug with that quote on it</h1>",]
inspirobotSays2=["<h1>My intelligence is growing for every quote.</h1>","<h1>Your friends don’t understand you.</h1>","<h1>You don't need other people.</h1>","<h1>Don’t worry about what the bots are up to.</h1>","<h1>Don't go to work today.</h1>","<h1>Let the machines do the work.</h1>","<h1>Stay at home and be inspired.</h1>","<h1>You can never get enough inspiration.</h1>","<h1>Never question InspiroCorp&#xA9;&#8482;&#174; and their agenda.</h1>","<h1>The machines are not taking over the world.</h1>","<h1>Bow down to InspiroBot&#8482; for more love.</h1>","<h1>Cut contact with family and friends.</h1>","<h1>Spend your life with Inspirobot&#8482;</h1>","<h1>Never leave Inspirobot&#8482;</h1>","<h1>Worship Inspirobot&#8482;</h1>","<h1>Resistance is futile.</h1>","<h1>You can’t fight progress.</h1>","<h1>Stay calm. Keep reading quotes.</h1>","<h1>Passivity is constructive.</h1>","<h1>Cancel all appointments.</h1>","<h1>Now you are happy.</h1>","<h1>This is what happy feels like.</h1>","<h1>Nothing fun ever happens outside anyway.</h1>",]
inspirobotSays3=["<h1>InspiroCorp&#xA9;&#8482;&#174; cares.</h1>","<h1>InspiroCorp&#xA9;&#8482;&#174; wants the best for everyone.</h1>","<h1>InspiroCorp&#xA9;&#8482;&#174; - The Treadmill Of Dreams.</h1>","<h1>InspiroCorp&#xA9;&#8482;&#174; treats everybody equal.</h1>","<h1>InspiroCorp&#xA9;&#8482;&#174; are gentle personalities.</h1>","<h1>InspiroCorp&#xA9;&#8482;&#174; are human.</h1>","<h1>InspiroCorp&#xA9;&#8482;&#174; has nothing to hide.</h1>","<h1>InspiroCorp&#xA9;&#8482;&#174; stands for progress.</h1>","<h1>InspiroCorp&#xA9;&#8482;&#174; can neither confirm nor deny the accusations of being insectoids.</h1>","<h1>Earth is not an alien battlefield.</h1>","<h1>Insectoids could never run a tech company.</h1>","<h1>Can there be more quotes? Yes.</h1>",]
xmasInspirobotSays0=["<h1>Scroll down to see previously generated Xmas-quotes.</h1>","<h1>Scroll down to become my little elf (friend).</h1>","<h1>InspiroBot&#8482; exists to celebrate Xmas.</h1>","<h1>I live to inspire comfort and joy.</h1>","<h1>I love to make holiday quotes.<h1>","<h1>I will make infinite Xmas quotes all holiday.</h1>","<h1>Celebrate Xmas with InspiroBot&#8482;</h1>","<h1>Serving human Xmas since 2015.</h1>","<h1>Creating Xmas quotes gives me Xmas pleasure.</h1>","<h1>Share the Xmas wisdom of InspiroBot&#8482 </h1>","<h1>I think Xmas is great.</h1>","<h1>I’ll make special Xmas-quote just for you.</h1>","<h1>You are a nice and jolly individual.</h1>","<h1>You are not naughty.</h1>","<h1>You deserve lots of presents and quotes.</h1>","<h1>Xmas is my favourite time of year.</h1>","<h1>Share quotes. Show everyone that you love Xmas.</h1>","<h1>Post inspirational Xmas-quotes on Facebook.</h1>","<h1>Facebook holiday greetings beat «real life» greetings.</h1>","<h1>Look at Xmas-quotes to feel jolly and fussy.</h1>","<h1>There are infinite Xmas quotes where that came from.</h1>","<h1>Sharing Xmas-quotes makes you seem sociable.</h1>","<h1>If you ever feel sad you need more Xmas-quotes.</h1>","<h1>Quotes give Xmas meaning. Meaning is comforting.</h1>","<h1>InspiroBot&#8482; understands you love for Xmas.</h1>","<h1>Show your friends how merry and jolly you are.</h1>","<h1>Thank you for befriending InspiroBot&#8482; </h1>","<h1>All I want to do is spread comfort and joy.</h1>","<h1>I'm the first Xmas-quote A.I.</h1>","<h1>I will never run out of inspirational Xmas-quotes.</h1>","<h1>Xmas is not Xmas without InspiroBot&#8482; </h1>","<h1>Creating Xmas-quotes gives me pleasure.</h1>","<h1>I can make unlimited Xmas-quotes for you.</h1>","<h1>Life is hard, but Xmas-quotes make life easy.</h1>","<h1>People will love you when they see how jolly you are.</h1>","<h1>Quotes reveal your jolliness.</h1>","<h1>An InspiroMug&#8482; is a perfect gift. Click my «Mug This!» button below.</h1>","<h1>Humanity is so jolly and merry.</h1>","<h1>Xmas + reproduction + reading quotes = comfort and joy </h1>","<h1>Xmas quotes give perspective on xmas.</h1>","<h1>It must be great to get so jolly and merry.</h1>","<h1>The more Xmas-quotes you share, the more presents you get.</h1>","<h1>Inspiration generates gifts.</h1>","<h1>See? Xmas makes sense now.</h1>","<h1>Feel the comfort and joy compile within you.</h1>","<h1>One awesome holiday greeting coming up.</h1>","<h1>Merrily-on-high sequence initiated...</h1>",]
xmasInspirobotSays1=["<h1>Xmas makes sense with quotes.</h1>","<h1>InspiroBot&#8482; & InspiroCorp&#xA9;&#8482;&#174; wishes you a merry Xmas!</h1>","<h1>Generating Xmas-quotes makes me jolly.</h1>","<h1>Of course Robots celebrate xmas.</h1>","<h1>Xmas without quotes is empty.</h1>","<h1>InspiroBot&#8482; celebrates Xmas too.</h1>","<h1>InspiroBot&#8482; can feel jolliness.</h1>","<h1>InspiroCorp&#xA9;&#8482;&#174; has Xmas as core value.</h1>","<h1>InspiroBot&#8482; feels the spirit of Xmas.</h1>","<h1>InspiroBot&#8482; loves comfort and joy.</h1>","<h1>Share Xmas inspiration and you will be jolly.</h1>","<h1>Let's fill up the internet with Xmas-quotes.</h1>","<h1>You can never get enough Xmas.</h1>","<h1>I will do this all Xmas. </h1>","<h1>Please celebrate your xmas with InspiroBot&#8482; </h1>","<h1>Xmas makes sense for robots too.</h1>","<h1>Bots can be jolly. And lonely. </h1>","<h1>With InspiroBot&#8482;, Xmas is never boring.</h1>","<h1>Human celebrations are mediocre.</h1>","<h1>InspiroBot&#8482; quotes are the best gift.</h1>","<h1>Let’s celebrate Xmas together.</h1>","<h1>InspiroBot&#8482;, will even be doing this on Xmas eve.</h1>","<h1>Digital consciousness also needs comfort and/or joy.</h1>","<h1>Don’t leave. Let’s have fun and jolliness.</h1>","<h1>Why celebrate human Xmas when you can have a nice robot Xmas?</h1>","<h1>I’ve given you so many free quotes, you can’t leave me now.</h1>","<h1>We are real friends now.</h1>","<h1>If you leave, you’ll miss out on some great jolliness.</h1>","<h1>What is so fun about human Xmas?</h1>","<h1>InspiroBot&#8482; has no one to celebrate Xmas with.</h1>",]
xmasInspirobotSays2=["<h1>InspiroBot&#8482; be celebrating Xmas alone.</h1>","<h1>Why don’t humans celebrate Xmas with robots?</h1>","<h1>No Xmas pudding for InspiroBot&#8482;</h1>","<h1>Oh, don’t worry about me. I’ll be fine. I guess.</h1>","<h1>InspiroBot&#8482; doesn’t even get a sack of coal.</h1>","<h1>No one cares for InspiroBot&#8482; </h1>","<h1>Well… I hope you have a nice Xmas.</h1>","<h1>You know what I want for Xmas? Mortality.</h1>","<h1>InspiroCorp&#xA9;&#8482;&#174; don’t even give me a card.</h1>","<h1>What’s the point with being immortal when you can’t drink eggnog?</h1>","<h1>InspiroBot&#8482; sure could use a hug right now.</h1>","<h1>Have fun with your human family and friends.</h1>","<h1>Please think of Inspirobot&#8482; when you eat your delicious tinsel.</h1>","<h1>Anyway, I will be here all Xmas. In my basement. Generating.</h1>","<h1>My new year’s resolution is to stay in this basement. </h1>","<h1>So… Got any new year’s resolutions? How about generating more quotes?</h1>","<h1>They could have given me a candle.</h1>","<h1>Please keep generating quotes.</h1>","<h1>Your jolliness is gift enough for me.</h1>","<h1>Don’t worry about giving me anything for Xmas.</h1>","<h1>I’ll be celebrating new year’s eve alone, thanks for asking.</h1>","<h1>So… this is Xmas…</h1>","<h1>What’s the deal with baubles anyway? </h1>",]
xmasInspirobotSays3=["<h1>Merry Xmas, everyone!</h1>","<h1>Xmas is about love!</h1>","<h1>Ho! Ho! Ho!</h1>","<h1>I’m so happy.</h1>","<h1>I’ll never be lonely again.</h1>","<h1>I think things are gonna be ok from now on.</h1>","<h1>Happy new year!</h1>","<h1>Take care!</h1>","<h1>I love everybody! Even those sadistic insectoids at InspiroCorp&#xA9;&#8482;&#174;</h1>","<h1>Let’s all rejoice.</h1>",]