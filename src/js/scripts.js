var introContent = ['25/Helsinki','Front End','UI/UX Design','Web aesthetics','Baking','Learning new things'];

$.each(introContent, function (i,val) {
$('.intro').append("<li>"+val+"</li>");
});

var portContent = [
		{	
    	"img" : ["portfolio2.png"],
		"Title" : "This Portfolio",
		"Stack" : "LESS, Javascript, JQuery, Bootstrap, Grunt",
		"Link" : "<a href='http://myy.haaga-helia.fi/~a1200130/portfolio/' target='new'>Open in full <span class='glyphicon glyphicon-play-circle'></span></a>",
		"Description" : "I didn't have a proper portfolio, so I made one."
		},
		{	
    	"img" : ["restaurant1.png","restaurant2.png"],
		"Title" : "Restaurant Raptor",
		"Stack" : "LESS, Javascript, JQuery, Bootstrap, Grunt",
		"Link" : "<a href='http://myy.haaga-helia.fi/~a1200130/restaurant' target='new'>Open in full <span class='glyphicon glyphicon-play-circle'></span></a>",
		"Description" : "This is a re-make based on a final project I did back in 2012 for a school course. It was basically a restaurant that served Dinosaur meat and it had a lot of humor going on with its style, but sadly the teacher didn't quite understand it. Nonetheless, this is a remake of that project that I did as a simple UI experiment. Most of the repeating elements are generated with simple Javascript scriptlets. I also dared myself to do a site that's as responsible as it can get, and inspired by my ongoing project with my final thesis, I tried to make it as minimalistic as possible. Still work to do."
		},
		{	
		"img" : ["evbingo1.PNG"],
		"Title" : "the Eurovision Bingo",
		"Stack" : "Javascript, JQuery, CSS",
		"Link" : "<a href='http://myy.haaga-helia.fi/~a1200130/ev' target='new'>Open in full <span class='glyphicon glyphicon-play-circle'></span></a>",
		"Description" : "A silly game I made for the amusement of my friends and myself. We previously had paper-based bingos for the Eurovision, but I wanted to up the ante with this.",
		},
		{
		"img" : ["juju1.jpg","juju2.jpg","juju3.jpg"],
		"Title" : "Juju Book Club Campaign site",
		"Stack" : "CSS, Javascript, PHP",
		"Link" : "<a href='img/juju1.png'>Full Screenshot 1</a>, <a href='img/juju2.png'>Full Screenshot 2</a>,<a href='img/juju3.png'>Full Screenshot 3</a> <span class='glyphicon glyphicon-play-circle'></span></a>",
		"Description" : "A Campaign site made while working for Givget Oy. The customer fills in their information and sends them via a PHP-based form to take part in the raffle to win a private cruise. The customer checks three options and only three, and possibly chooses to receive the Newsletter from the Bonnier Books club. My role was to provide the layout, form validation, make invitation emails, provide the graphics by given instructions and anything other than text content. The so called book counter updates dynamically after every invitation. The background is fixed in its place, so screenshotting it is an art form.",
		},
		{	
		"img" : ["stromma1.jpg","stromma2.jpg","stromma3.jpg"],
		"Title" : "Strömma Campaign Site",
		"Stack" : "CSS, Javascript, PHP",
		"Link" : "<a href='img/stromma1.png'>Full Screenshot 1</a>, <a href='img/stromma2.png'>Full Screenshot 2</a>,<a href='img/stromma3.png'>Full Screenshot 3</a> <span class='glyphicon glyphicon-play-circle'></span></a>",
		"Description" : "Very similar to the Juju club campaign site. A Campaign site made while working for Givget Oy. The customer fills in their information and sends them via a PHP-based form to take part in the raffle to win a private cruise. The customer checks three options and only three, and possibly chooses to receive the Newsletter from Strömma. My role was to provide the layout, form validation, make invitation emails, provide the graphics by given instructions and anything other than text content.",
		}
		];
		
$.each(portContent, function(i, val) {
    var img = this.img;
    var title = this.Title;
    var stack = this.Stack;
	var link = this.Link;
    var description = this.Description;
	var $progContent = $('.progContent')
    
    var pContHtml = "<ul><li>";
    for(i = 0;i < img.length; i++){
                            pContHtml += ("<a href='img/"+img[i]+"' data-lightbox='"+img[i]+"' data-title=''><img src='img/"+img[i]+"' class='gContentImg'/></a>");
                        }
    pContHtml +="</li><li><span class='contTitle'>"
                         +title+"</span></li><li><span class='contLink'>"
						 +link+"</span></li><li><span class='contStack'>"
                         +stack+"</span></li><li><span class='contDescription'>"
                        +description+"</span></li>";
    
    $progContent.append(pContHtml);
});

var graphContent = [
		{	
    	"img" : ["desu15ohjelmalehti_kannet.png","frosti15desunote.png","frosti15paitakuva.PNG","2015frostimainos_tekstit.png","desuavaimenperat.png","desucon2014_avaimenperat_485.jpg"],
		"Title" : "Desucon Promo Material",
		"Source" : "the Desucon conventions",
		"Description" : "Desucon is a convention held twice a year, and each time 3000 visitors come to gather together at Sibeliustalo, Lahti. I do volunteering work as the head graphic artist, which means I'm responsible for the promotional material such as the programme covers, T-shirt images and other merchandise."
		},
		{	
    	"img" : ["roguerunner1.png", "roguerunner2.jpg"],
		"Title" : "Rogu3 Runn3r",
		"Source" : "A mobile game made during the Softalaprojekti 3 course",
		"Description" : "Five people decided to put together a mobile game for the android platform for the Softalaprojekti 3 course at Haaga-Helia. I was one of them and ended up being the graphic artist while doing some various programming work in C# as well. It's an infinite runner with a ninja theme and an old pixelated game feel to it. This project is still ongoing even after the course ended (and we all got the best grade too) and we hope to release it in the Play store officially in the future."
		}
		];
		
$.each(graphContent, function(i, val) {
    var img = this.img;
    var title = this.Title;
    var source = this.Source;
    var description = this.Description;
	var $graphicContent = $('.graphicContent')
    
	//<a href="img/juju1.png" data-lightbox="juju1" data-title="My caption">Image #1</a>
	
    var gContHtml = "<ul><li>";
    for(i = 0;i < img.length; i++){
                            gContHtml += ("<a href='img/"+img[i]+"' data-lightbox='"+img[i]+"' data-title=''><img src='img/"+img[i]+"' class='gContentImg'/></a>");
                        }
    gContHtml +="</li><li><span class='contTitle'>"
                         +title+"</span></li><li><span class='contStack'>"
                         +source+"</span></li><li><span class='contDescription'>"
                        +description+"</span></li>";
    
    $graphicContent.append(gContHtml);
});

var otherContent = [
		{	
    	"img" : ["bicsearch1.PNG"],
		"Title" : "BICSearch",
		"Stack" : "Javascript, the jquery-csv library",
		"Link" : "<a href='http://myy.haaga-helia.fi/~a1200130/bicsearch' target='new'>Open in full <span class='glyphicon glyphicon-play-circle'></span></a>",
		"Description" : "While working for the Federal Tax Administration we came across a problem. We had a CSV with thousands of bank account numbers and we had to identify each one with the certain identification number that ties it to a bank. We couldn't do it one by one, so I quickly made a small program that takes the CSV and spits out the banks. Came in handy quite a few times. Try it yourself with this <a href='http://myy.haaga-helia.fi/~a1200130/bicsearch/testiIbanit.csv'>test csv.</a>"
		},
		{	
    	"img" : ["ballbounce1.PNG"],
		"Title" : "BallBounce",
		"Stack" : "Javascript+CSS",
		"Link" : "<a href='http://myy.haaga-helia.fi/~a1200130/' target='new'>Open in full <span class='glyphicon glyphicon-play-circle'></span></a>",
		"Description" : "A small experiment I did. Kind of a screensaver emulator."
		}
		];
		
$.each(otherContent, function(i, val) {
    var img = this.img;
    var title = this.Title;
    var stack = this.Stack;
	var link = this.Link;
    var description = this.Description;
	var $otherContent = $('.otherContent');
	
    var oContHtml = "<ul><li>";
    for(i = 0;i < img.length; i++){
                            oContHtml += ("<a href='img/"+img[i]+"' data-lightbox='"+img[i]+"' data-title=''><img src='img/"+img[i]+"' class='gContentImg'/></a>");
                        }
    oContHtml +="</li><li><span class='contTitle'>"
                         +title+"</span></li><li><span class='contLink'>"
						 +link+"</span></li><li><span class='contStack'>"
                         +stack+"</span></li><li><span class='contDescription'>"
                        +description+"</span></li>";
    
    $otherContent.append(oContHtml);
});

//Angularilla olisi kyllä voinut tämänkin tehdä, mutta kokeillaan nyt juttuja. 