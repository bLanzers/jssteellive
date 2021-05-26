import "./popper.min.js";
import "./bootstrap.min.js";
import "./jquery.easing.min.js";
// import "./swiper.min.js";
import "./jquery.magnific-popup.js";
import "./morphext.min.js";
import "./isotope.pkgd.min.js";
import "./validator.min.js";
// import "./scripts.js";

/* Template: Aria - Business HTML Landing Page Template
   Author: Inovatik
   Created: Jul 2019
   Description: Custom JS file
*/


$(document).ready(function($){
	
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});

	
	/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
    // $(window).on('scroll load', function() {
	// 	if ($(".navbar").offset().top > 20) {
	// 		$(".fixed-top").addClass("top-nav-collapse");
	// 	} else {
	// 		$(".fixed-top").removeClass("top-nav-collapse");
	// 	}
    // });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	// $(function() {
	// 	$(document).on('click', 'a.page-scroll', function(event) {
	// 		var $anchor = $(this);
	// 		$('html, body').stop().animate({
	// 			scrollTop: $($anchor.attr('href')).offset().top
	// 		}, 600, 'easeInOutExpo');
	// 		event.preventDefault();
	// 	});
	// });

    // closes the responsive menu on menu item click
    // $(".navbar-nav li a").on("click", function(event) {
    // if (!$(this).parent().hasClass('dropdown'))
    //     $(".navbar-collapse").collapse('hide');
    // });


    /* Rotating Text - Morphtext */
	$("#js-rotating").Morphext({
		// The [in] animation type. Refer to Animate.css for a list of available animations.
		animation: "fadeIn",
		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		separator: ",",
		// The delay between the changing of each phrase in milliseconds.
		speed: 2000,
		complete: function () {
			// Called after the entrance animation is executed.
		}
    });
    

   
    
    /* Lightbox - Magnific Popup */
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
    });
    

    /* Filter - Isotope */
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    
    // filter items on button click
    $('.filters-button-group').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });	
    });
    

    /* Counter - CountTo */
	var a = 0;
	$(window).scroll(function() {
		if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
				countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
					},
					complete: function() {
					$this.text(this.countNum);
					//alert('finished');
					}
				});
			});
			a = 1;
			}
		}
    });


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });


    /* Call Me Form */
    // $("#callMeForm").validator().on("submit", function(event) {
    // 	if (event.isDefaultPrevented()) {
    //         // handle the invalid form...
    //         lformError();
    //         lsubmitMSG(false, "Please fill all fields!");
    //     } else {
    //         // everything looks good!
    //         event.preventDefault();
    //         lsubmitForm();
    //     }
    // });

    // function lsubmitForm() {
    //     // initiate variables with form content
	// 	var name = $("#lname").val();
	// 	var phone = $("#lphone").val();
	// 	var email = $("#lemail").val();
	// 	var select = $("#lselect").val();
    //     var terms = $("#lterms").val();
        
    //     $.ajax({
    //         type: "POST",
    //         url: "php/callmeform-process.php",
    //         data: "name=" + name + "&phone=" + phone + "&email=" + email + "&select=" + select + "&terms=" + terms, 
    //         success: function(text) {
    //             if (text == "success") {
    //                 lformSuccess();
    //             } else {
    //                 lformError();
    //                 lsubmitMSG(false, text);
    //             }
    //         }
    //     });
	// }

    // function lformSuccess() {
    //     $("#callMeForm")[0].reset();
    //     lsubmitMSG(true, "Request Submitted!");
    //     $("input").removeClass('notEmpty'); // resets the field label after submission
    // }

    // function lformError() {
    //     $("#callMeForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    //         $(this).removeClass();
    //     });
	// }

    // function lsubmitMSG(valid, msg) {
    //     if (valid) {
    //         var msgClasses = "h3 text-center tada animated";
    //     } else {
    //         var msgClasses = "h3 text-center";
    //     }
    //     $("#lmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    // }


    /* Contact Form */
    $("#contactForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            cformError();
            csubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            csubmitForm();
        }
    });

    function csubmitForm() {
        // initiate variables with form content
		var name = $("#cname").val();
		var email = $("#cemail").val();
        var message = $("#cmessage").val();
        var terms = $("#cterms").val();
        // $.ajax({
        //     type: "POST",
        //     url: "php/contactform-process.php",
        //     data: "name=" + name + "&email=" + email + "&message=" + message + "&terms=" + terms, 
        //     success: function(text) {
        //         if (text == "success") {
        //             cformSuccess();
        //         } else {
        //             cformError();
        //             csubmitMSG(false, text);
        //         }
        //     }
        // });
	}

    // function cformSuccess() {
    //     $("#contactForm")[0].reset();
    //     csubmitMSG(true, "Message Submitted!");
    //     $("input").removeClass('notEmpty'); // resets the field label after submission
    //     $("textarea").removeClass('notEmpty'); // resets the field label after submission
    // }

    // function cformError() {
    //     $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    //         $(this).removeClass();
    //     });
	// }

    function csubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


    /* Privacy Form */
    // $("#privacyForm").validator().on("submit", function(event) {
    // 	if (event.isDefaultPrevented()) {
    //         // handle the invalid form...
    //         pformError();
    //         psubmitMSG(false, "Please fill all fields!");
    //     } else {
    //         // everything looks good!
    //         event.preventDefault();
    //         psubmitForm();
    //     }
    // });

    // function psubmitForm() {
    //     // initiate variables with form content
	// 	var name = $("#pname").val();
	// 	var email = $("#pemail").val();
    //     var select = $("#pselect").val();
    //     var terms = $("#pterms").val();
        
    //     $.ajax({
    //         type: "POST",
    //         url: "php/privacyform-process.php",
    //         data: "name=" + name + "&email=" + email + "&select=" + select + "&terms=" + terms, 
    //         success: function(text) {
    //             if (text == "success") {
    //                 pformSuccess();
    //             } else {
    //                 pformError();
    //                 psubmitMSG(false, text);
    //             }
    //         }
    //     });
	// }

    // function pformSuccess() {
    //     $("#privacyForm")[0].reset();
    //     psubmitMSG(true, "Request Submitted!");
    //     $("input").removeClass('notEmpty'); // resets the field label after submission
    // }

    // function pformError() {
    //     $("#privacyForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    //         $(this).removeClass();
    //     });
	// }

    // function psubmitMSG(valid, msg) {
    //     if (valid) {
    //         var msgClasses = "h3 text-center tada animated";
    //     } else {
    //         var msgClasses = "h3 text-center";
    //     }
    //     $("#pmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    // }
    

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
    });
    
     /* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		autoplay: {
            delay: 4000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 20,
        breakpoints: {
            // when window is <= 992px
            992: {
                slidesPerView: 2
            },
            // when window is <= 768px
            768: {
                slidesPerView: 1
            } 
        }
    });


}); 



const $window = $(window);
const $body = $('body');

class Slideshow {
	constructor (userOptions = {}) {
    const defaultOptions = {
      $el: $('.slideshow'),
      showArrows: false,
      showPagination: true,
      duration: 10000,
      autoplay: true
    }

    let options = Object.assign({}, defaultOptions, userOptions);

		this.$el = options.$el;
		this.maxSlide = this.$el.find($('.js-slider-home-slide')).length;
    this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
    this.showPagination = options.showPagination;
		this.currentSlide = 1;
		this.isAnimating = false;
		this.animationDuration = 1200;
		this.autoplaySpeed = options.duration;
		this.interval;
		this.$controls = this.$el.find('.js-slider-home-button');
    this.autoplay = this.maxSlide > 1 ? options.autoplay : false;

		this.$el.on('click', '.js-slider-home-next', (event) => this.nextSlide());
		this.$el.on('click', '.js-slider-home-prev', (event) => this.prevSlide());
    this.$el.on('click', '.js-pagination-item', event => {
      if (!this.isAnimating) {
        this.preventClick();
  this.goToSlide(event.target.dataset.slide);
      }
    });

		this.init();
	}

  init() {
    this.goToSlide(1);
    if (this.autoplay) {
      this.startAutoplay();
    }

    if (this.showPagination) {
      let paginationNumber = this.maxSlide;
      let pagination = '<div class="pagination"><div class="container">';

      for (let i = 0; i < this.maxSlide; i++) {
        let item = `<span class="pagination__item js-pagination-item ${ i === 0 ? 'is-current' : ''}" data-slide=${i + 1}>${i + 1}</span>`;
        pagination  = pagination + item;
      }

      pagination = pagination + '</div></div>';

      this.$el.append(pagination);
    }
  }

  preventClick() {
		this.isAnimating = true;
		this.$controls.prop('disabled', true);
		clearInterval(this.interval);

		setTimeout(() => {
			this.isAnimating = false;
			this.$controls.prop('disabled', false);
      if (this.autoplay) {
			  this.startAutoplay();
      }
		}, this.animationDuration);
	}

	goToSlide(index) {
    this.currentSlide = parseInt(index);

    if (this.currentSlide > this.maxSlide) {
      this.currentSlide = 1;
    }

    if (this.currentSlide === 0) {
      this.currentSlide = this.maxSlide;
    }

    const newCurrent = this.$el.find('.js-slider-home-slide[data-slide="'+ this.currentSlide +'"]');
    const newPrev = this.currentSlide === 1 ? this.$el.find('.js-slider-home-slide').last() : newCurrent.prev('.js-slider-home-slide');
    const newNext = this.currentSlide === this.maxSlide ? this.$el.find('.js-slider-home-slide').first() : newCurrent.next('.js-slider-home-slide');

    this.$el.find('.js-slider-home-slide').removeClass('is-prev is-next is-current');
    this.$el.find('.js-pagination-item').removeClass('is-current');

		if (this.maxSlide > 1) {
      newPrev.addClass('is-prev');
      newNext.addClass('is-next');
    }

    newCurrent.addClass('is-current');
    this.$el.find('.js-pagination-item[data-slide="'+this.currentSlide+'"]').addClass('is-current');
  }

  nextSlide() {
    this.preventClick();
    this.goToSlide(this.currentSlide + 1);
	}

	prevSlide() {
    this.preventClick();
    this.goToSlide(this.currentSlide - 1);
	}

	startAutoplay() {
		this.interval = setInterval(() => {
			if (!this.isAnimating) {
				this.nextSlide();
			}
		}, this.autoplaySpeed);
	}

	destroy() {
		this.$el.off();
	}
}

(function() {
	let loaded = false;
	let maxLoad = 3000;

	function load() {
		const options = {
      showPagination: true
    };

    let slideShow = new Slideshow(options);
	}

	function addLoadClass() {
		$body.addClass('is-loaded');

		setTimeout(function() {
			$body.addClass('is-animated');
		}, 600);
	}

	$window.on('load', function() {
		if(!loaded) {
			loaded = true;
			load();
		}
	});

	setTimeout(function() {
		if(!loaded) {
			loaded = true;
			load();
		}
	}, maxLoad);

	addLoadClass();
})();

(function () {
    var expand;
    expand = function () {
        var $input, $search;
        $search = $('.search');
        $input = $('.input');
        if ($search.hasClass('close')) {
            $search.removeClass('close');
            $input.removeClass('square');
        } else {
            $search.addClass('close');
            $input.addClass('square');
        }
        if ($search.hasClass('close')) {
            $input.focus();
        } else {
            $input.blur();
        }
    };
    $(function () {
        var $accordion, $wideScreen;
        $accordion = $('#accordion').children('li');
        $wideScreen = $(window).width() > 767;
        if ($wideScreen) {
            $accordion.on('mouseenter click', function (e) {
                var $this;
                e.stopPropagation();
                $this = $(this);
                if ($this.hasClass('out')) {
                    $this.addClass('out');
                } else {
                    $this.addClass('out');
                    $this.siblings().removeClass('out');
                }
            });
        } else {
            $accordion.on('touchstart touchend', function (e) {
                var $this;
                e.stopPropagation();
                $this = $(this);
                if ($this.hasClass('out')) {
                    $this.addClass('out');
                } else {
                    $this.addClass('out');
                    $this.siblings().removeClass('out');
                }
            });
        }
    });
    $(function () {
        var $container, $menu, $menubtn, $navbar;
        $menubtn = $('#hb');
        $navbar = $('.navbar');
        $menu = $('.navigation');
        $container = $('.site-inner');
        $menubtn.on('click', function (e) {
            if ($menubtn.hasClass('active')) {
                $menubtn.removeClass('active');
                $menu.removeClass('slide-right');
                $container.removeClass('slide-right');
                $navbar.removeClass('slide-right');
            } else {
                $menubtn.addClass('active');
                $menu.addClass('slide-right');
                $container.addClass('slide-right');
                $navbar.addClass('slide-right');
            }
        });
    });
    $(function () {
        var $button, clickOrTouch;
        clickOrTouch = 'click touchstart';
        $button = $('#search-button');
        $button.on(clickOrTouch, expand);
    });
    $(function () {
        var $box;
        $box = $('.sm-box');
        $box.on('click', function (e) {
          e.preventDefault();
            var $this;
            $this = $(this);
            if ($this.hasClass('active')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
        });
    });
  }.call(this));
  
  $("select").each(function() {
    var $this = $(this),
        $options = $(this).children("option").length;
  
    $this.addClass("select-hidden");
    $this.wrap("<div class='select'></div>");
    $this.after("<div class='select-styled'></div>");
  
    var $styledSelect = $this.next("div.select-styled");
    $styledSelect.text($this.children("option").eq(0).text());
  
    var $list = $("<ul />", {
        "class": "select-options"
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < $options; i++) {
        $("<li />", {
            text: $this.children("option").eq(i).text(),
            rel: $this.children("option").eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children("li");
  
    $styledSelect.on("click", function(e) {
        e.stopPropagation();
        $("div.select-styled.active").each(function() {
            $(this).removeClass("active").next("ul.select-options").hide();
        });
  
        $(this).toggleClass("active").next("ul.select-options").toggle();
    });
  
    $listItems.on("click", function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass("active");
        $this.val($(this).attr("rel"));
        $list.hide();
    });
  
    $(document).on("click", function() {
        $styledSelect.removeClass("active");
        $list.hide();
    });
  
    $(".select-sibling").next(".select-styled").css({
      "border-top": "0px"
    });
  });
  
  (function () {
  var $addItem = $("#add-item");
  var $badge = $(".badge");
  var $count = 1;
  
  $addItem.on("click", function(e) {
    e.preventDefault();
    $badge.html($count++);
  });
  }.call(this));

  /*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransitions-prefixed !*/
 !function(e,n,t){function r(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?C.className.baseVal=n:C.className=n)}function o(e,n){return typeof e===n}function s(){var e,n,t,r,s,i,a;for(var f in w)if(w.hasOwnProperty(f)){if(e=[],n=w[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),g.push((r?"":"no-")+a.join("-"))}}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?l(r,t||n):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=f(_?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var s,i,a,l,u="modernizr",p=f("div"),c=d();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=o?o[r]:u+(r+1),p.appendChild(a);return s=f("style"),s.type="text/css",s.id="s"+u,(c.fake?c:p).appendChild(s),c.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=C.style.overflow,C.style.overflow="hidden",C.appendChild(c)),i=t(p,e),c.fake?(c.parentNode.removeChild(c),C.style.overflow=l,C.offsetHeight):p.parentNode.removeChild(p),!!i}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(n[o])+":"+r+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,r,s){function l(){p&&(delete N.style,delete N.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var u=m(e,r);if(!o(u,"undefined"))return u}for(var p,d,c,v,h,y=["modernizr","tspan"];!N.style;)p=!0,N.modElem=f(y.shift()),N.style=N.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=N.style[v],a(v,"-")&&(v=i(v)),N.style[v]!==t){if(s||o(r,"undefined"))return l(),"pfx"==n?v:!0;try{N.style[v]=r}catch(g){}if(N.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?v(a,n,r,s):(a=(e+" "+P.join(i+" ")+i).split(" "),u(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var g=[],C=n.documentElement,_="svg"===C.nodeName.toLowerCase(),w=[],x={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var S="Moz O ms Webkit",b=x._config.usePrefixes?S.split(" "):[];x._cssomPrefixes=b;var E=function(n){var r,o=prefixes.length,s=e.CSSRule;if("undefined"==typeof s)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+n;for(var i=0;o>i;i++){var a=prefixes[i],f=a.toUpperCase()+"_"+r;if(f in s)return"@-"+a.toLowerCase()+"-"+n}return!1};x.atRule=E;var P=x._config.usePrefixes?S.toLowerCase().split(" "):[];x._domPrefixes=P;var z={elem:f("modernizr")};Modernizr._q.push(function(){delete z.elem});var N={style:z.elem.style};Modernizr._q.unshift(function(){delete N.style}),x.testAllProps=h;x.prefixed=function(e,n,t){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=i(e)),n?h(e,n,t):h(e,"pfx"))};x.testAllProps=y,Modernizr.addTest("csstransitions",y("transition","all",!0)),s(),r(g),delete x.addTest,delete x.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);


 /**
  * main.js
  * http://www.codrops.com
  *
  * Licensed under the MIT license.
  * http://www.opensource.org/licenses/mit-license.php
  *
  * Copyright 2015, Codrops
  * http://www.codrops.com
  */
 ;(function(window) {
 
     'use strict';
 
  /*!
  * classie v1.0.1
  * class helper functions
  * from bonzo https://github.com/ded/bonzo
  * MIT license
  *
  * classie.has( elem, 'my-class' ) -> true/false
  * classie.add( elem, 'my-new-class' )
  * classie.remove( elem, 'my-unwanted-class' )
  * classie.toggle( elem, 'my-class' )
  */
 
 /*jshint browser: true, strict: true, undef: true, unused: true */
 /*global define: false, module: false */
 
     // class helper functions from bonzo https://github.com/ded/bonzo
 
     function classReg( className ) {
       return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
     }
 
     // classList support for class management
     // altho to be fair, the api sucks because it won't accept multiple classes at once
     var hasClass, addClass, removeClass;
 
     if ( 'classList' in document.documentElement ) {
       hasClass = function( elem, c ) {
         return elem.classList.contains( c );
       };
       addClass = function( elem, c ) {
         elem.classList.add( c );
       };
       removeClass = function( elem, c ) {
         elem.classList.remove( c );
       };
     }
     else {
       hasClass = function( elem, c ) {
         return classReg( c ).test( elem.className );
       };
       addClass = function( elem, c ) {
         if ( !hasClass( elem, c ) ) {
           elem.className = elem.className + ' ' + c;
         }
       };
       removeClass = function( elem, c ) {
         elem.className = elem.className.replace( classReg( c ), ' ' );
       };
     }
 
     function toggleClass( elem, c ) {
       var fn = hasClass( elem, c ) ? removeClass : addClass;
       fn( elem, c );
     }
 
     var classie = {
       // full names
       hasClass: hasClass,
       addClass: addClass,
       removeClass: removeClass,
       toggleClass: toggleClass,
       // short names
       has: hasClass,
       add: addClass,
       remove: removeClass,
       toggle: toggleClass
     };
 
     // transport
     if ( typeof define === 'function' && define.amd ) {
       // AMD
       define( classie );
     } else if ( typeof exports === 'object' ) {
       // CommonJS
       module.exports = classie;
     } else {
       // browser global
       window.classie = classie;
     }
 
 
   $(document).ready(function() {
 
     var support = { transitions: Modernizr.csstransitions },
         // transition end event name
         transEndEventNames = { 'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend' },
         transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
         onEndTransition = function( el, callback ) {
             var onEndCallbackFn = function( ev ) {
                 if( support.transitions ) {
                     if( ev.target != this ) return;
                     this.removeEventListener( transEndEventName, onEndCallbackFn );
                 }
                 if( callback && typeof callback === 'function' ) { callback.call(this); }
             };
             if( support.transitions ) {
                 el.addEventListener( transEndEventName, onEndCallbackFn );
             }
             else {
                 onEndCallbackFn();
             }
         },
         // the pages wrapper
         stack = document.querySelector('.pages-stack'),
         // the page elements
         pages = [].slice.call(stack.children),
         // total number of page elements
         pagesTotal = pages.length,
         // index of current page
         current = 0,
         // menu button
         menuCtrl = document.querySelector('button.menu-button'),
         // the navigation wrapper
         nav = document.querySelector('.pages-nav'),
         // the menu nav items
         navItems = [].slice.call(nav.querySelectorAll('.link--page')),
         // check if menu is open
         isMenuOpen = false;
 
     function init() {
         buildStack();
         initEvents();
     }
 
     function buildStack() {
         var stackPagesIdxs = getStackPagesIdxs();
 
         // set z-index, opacity, initial transforms to pages and add class page--inactive to all except the current one
         for(var i = 0; i < pagesTotal; ++i) {
             var page = pages[i],
                 posIdx = stackPagesIdxs.indexOf(i);
 
             if( current !== i ) {
                 classie.add(page, 'page--inactive');
 
                 if( posIdx !== -1 ) {
                     // visible pages in the stack
                     page.style.WebkitTransform = 'translate3d(0,100%,0)';
                     page.style.transform = 'translate3d(0,100%,0)';
                 }
                 else {
                     // invisible pages in the stack
                     page.style.WebkitTransform = 'translate3d(0,75%,-300px)';
                     page.style.transform = 'translate3d(0,75%,-300px)';
                 }
             }
             else {
                 classie.remove(page, 'page--inactive');
             }
 
             page.style.zIndex = i < current ? parseInt(current - i) : parseInt(pagesTotal + current - i);
 
             if( posIdx !== -1 ) {
                 page.style.opacity = parseFloat(1 - 0.1 * posIdx);
             }
             else {
                 page.style.opacity = 0;
             }
         }
     }
 
     // event binding
     function initEvents() {
         // menu button click
         menuCtrl.addEventListener('click', toggleMenu);
 
         // navigation menu clicks
         navItems.forEach(function(item) {
             // which page to open?
             var pageid = item.getAttribute('href').slice(1);
             item.addEventListener('click', function(ev) {
                 ev.preventDefault();
                 openPage(pageid);
             });
         });
 
         // clicking on a page when the menu is open triggers the menu to close again and open the clicked page
         pages.forEach(function(page) {
             var pageid = page.getAttribute('id');
             page.addEventListener('click', function(ev) {
                 if( isMenuOpen ) {
                     ev.preventDefault();
                     openPage(pageid);
                 }
             });
         });
 
         // keyboard navigation events
         document.addEventListener( 'keydown', function( ev ) {
             if( !isMenuOpen ) return;
             var keyCode = ev.keyCode || ev.which;
             if( keyCode === 27 ) {
                 closeMenu();
             }
         } );
     }
 
     // toggle menu fn
     function toggleMenu() {
         if( isMenuOpen ) {
             closeMenu();
         }
         else {
             openMenu();
             isMenuOpen = true;
         }
     }
 
     // opens the menu
     function openMenu() {
         // toggle the menu button
         classie.add(menuCtrl, 'menu-button--open')
         // stack gets the class "pages-stack--open" to add the transitions
         classie.add(stack, 'pages-stack--open');
         // reveal the menu
         classie.add(nav, 'pages-nav--open');
 
         // now set the page transforms
         var stackPagesIdxs = getStackPagesIdxs();
         for(var i = 0, len = stackPagesIdxs.length; i < len; ++i) {
             var page = pages[stackPagesIdxs[i]];
             page.style.WebkitTransform = 'translate3d(0, 75%, ' + parseInt(-1 * 200 - 50*i) + 'px)'; // -200px, -230px, -260px
             page.style.transform = 'translate3d(0, 75%, ' + parseInt(-1 * 200 - 50*i) + 'px)';
         }
     }
 
     // closes the menu
     function closeMenu() {
         // same as opening the current page again
         openPage();
     }
 
     // opens a page
     function openPage(id) {
         var futurePage = id ? document.getElementById(id) : pages[current],
             futureCurrent = pages.indexOf(futurePage),
             stackPagesIdxs = getStackPagesIdxs(futureCurrent);
 
         // set transforms for the new current page
         futurePage.style.WebkitTransform = 'translate3d(0, 0, 0)';
         futurePage.style.transform = 'translate3d(0, 0, 0)';
         futurePage.style.opacity = 1;
 
         // set transforms for the other items in the stack
         for(var i = 0, len = stackPagesIdxs.length; i < len; ++i) {
             var page = pages[stackPagesIdxs[i]];
             page.style.WebkitTransform = 'translate3d(0,100%,0)';
             page.style.transform = 'translate3d(0,100%,0)';
         }
 
         // set current
         if( id ) {
             current = futureCurrent;
         }
 
         // close menu..
         classie.remove(menuCtrl, 'menu-button--open');
         classie.remove(nav, 'pages-nav--open');
         onEndTransition(futurePage, function() {
             classie.remove(stack, 'pages-stack--open');
             // reorganize stack
             buildStack();
             isMenuOpen = false;
         });
     }
 
     // gets the current stack pages indexes. If any of them is the excludePage then this one is not part of the returned array
     function getStackPagesIdxs(excludePageIdx) {
         var nextStackPageIdx = current + 1 < pagesTotal ? current + 1 : 0,
             nextStackPageIdx_2 = current + 2 < pagesTotal ? current + 2 : 1,
             idxs = [],
 
             excludeIdx = excludePageIdx || -1;
 
         if( excludePageIdx != current ) {
             idxs.push(current);
         }
         if( excludePageIdx != nextStackPageIdx ) {
             idxs.push(nextStackPageIdx);
         }
         if( excludePageIdx != nextStackPageIdx_2 ) {
             idxs.push(nextStackPageIdx_2);
         }
 
         return idxs;
     }
 
     init();
 
 });
 
 })(window);
 
  