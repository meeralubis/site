(function(a) {
  function r(b) {
    $ID = a(b).attr("id") + "-svg-gradient";
    a(".pie_progress").asPieProgress({
      namespace: "asPieProgress",
      classes: {
        element: "pie_progress",
        number: "pie_progress__number"
      },
      min: 0,
      max: 100,
      size: 150,
      speed: 30,
      barsize: "8",
      fillcolor: "none",
      easing: "ease"
    });
    a(b).find(".pie_progress").each(function() {
      a(this).asPieProgress("go", a(this).attr("data-goal") + "%")
    });
    a(b).find("svg linearGradient").attr("id", $ID);
    a(b).find(".pie_progress svg path").each(function() {
      a(this).attr("stroke", "url(#" + $ID + ")")
    })
  }

  function t() {
    a(".countdown:not(.countdown-inited)").each(function() {
      a(this).addClass("countdown-inited").countdown(a(this).attr("data-due-date"), function(b) {
        var c = a(b.target).closest(".countdown-cont").find("div.daysCountdown").attr("title"),
          d = a(b.target).closest(".countdown-cont").find("div.hoursCountdown").attr("title"),
          f = a(b.target).closest(".countdown-cont").find("div.minutesCountdown").attr("title"),
          h = a(b.target).closest(".countdown-cont").find("div.secondsCountdown").attr("title");
        a(this).html(b.strftime(['<div class="row"><div class="col-xs-12 col-sm-6 col-md-3"><span class="number-wrap"><span class="number display-2">%D</span><span mbr-text class="period display-7">',
          c, '</span><span class="dot">:</span></span></div><div class="col-xs-12 col-sm-6 col-md-3"><span class="number-wrap"><span class="number display-2">%H</span><span mbr-text class="period display-7">', d, '</span><span class="dot">:</span></span></div><div class="col-xs-12 col-sm-6 col-md-3"><span class="number-wrap"><span class="number display-2">%M</span><span mbr-text class="period display-7">', f, '</span><span class="dot">:</span></span></div><div class="col-xs-12 col-sm-6 col-md-3"><span class="number-wrap"><span class="number display-2">%S</span><span mbr-text class="period display-7">',
          h, "</span></span></div></div>"
        ].join("")))
      })
    });
    a(".countdown:not(.countdown-inited)").each(function() {
      a(this).countdown(a(this).attr("data-due-date"), function(b) {
        a(this).text(b.strftime("%D days %H:%M:%S"))
      })
    })
  }

  function A() {
    a(".flip-card:not(.builderCard)").each(function() {
      a(this).addClass("builderCard")
    })
  }

  function x(b) {
    0 !== a(b).find(".nav-tabs").length && a(b).outerFind('section[id^="tabs"]').each(function() {
      var b = a(this).attr("id"),
        d = a(this).find(".nav-tabs .nav-item"),
        f = a(this).find(".tab-pane");
      f.removeClass("active").eq(0).addClass("active");
      d.find("a").removeClass("active").removeAttr("aria-expanded").eq(0).addClass("active");
      f.each(function() {
        a(this).attr("id", b + "_tab" + a(this).index())
      });
      d.each(function() {
        a(this).find("a").attr("href", "#" + b + "_tab" + a(this).index())
      })
    })
  }

  function u(b) {
    a(b).find(".carousel-item:first").addClass("active")
  }

  function m(b) {
    b = a(b);
    var c = b.attr("ID") + "-carousel";
    b.find(".carousel").attr("id", c);
    b.find(".carousel-controls a").attr("href", "#" + c);
    u(b)
  }

  function v(b) {
    b =
      a(b);
    var c = b.find(".carousel-item").length,
      d = b.find(".carousel-inner").attr("data-visible");
    c < d && (d = c);
    b.find(".carousel-inner").attr("class", "carousel-inner slides" + d);
    b.find(".clonedCol").remove();
    b.find(".carousel-item .col-md-12").each(function() {
      2 > d ? a(this).attr("class", "col-md-12") : "5" == d ? a(this).attr("class", "col-md-12 col-lg-15") : a(this).attr("class", "col-md-12 col-lg-" + 12 / d)
    });
    b.find(".carousel-item").each(function() {
      for(var b = a(this), c = 1; c < d; c++) {
        b = b.next();
        b.length || (b = a(this).siblings(":first"));
        var e = b.index();
        b.find(".col-md-12:first").clone().addClass("cloneditem-" + c).addClass("clonedCol").attr("data-cloned-index", e).appendTo(a(this).children().eq(0))
      }
    })
  }

  function w(b) {
    b = a(b);
    var c = b.find(".carousel-item").length,
      d = b.find(".carousel-inner").attr("data-visible");
    c < d && (d = c);
    b.find(".clonedCol").remove();
    b.find(".carousel-item").each(function() {
      for(var b = a(this), c = 1; c < d; c++) {
        b = b.next();
        b.length || (b = a(this).siblings(":first"));
        var e = b.index();
        b.find(".col-md-12:first").clone().addClass("cloneditem-" +
          c).addClass("clonedCol").attr("data-cloned-index", e).appendTo(a(this).children().eq(0))
      }
    })
  }

  function n(b) {
    b.stopPropagation();
    b.preventDefault();
    b = a(b.target);
    var c;
    b.closest(".clonedCol").length ? (c = b.closest(".clonedCol"), c = c.attr("data-cloned-index")) : (c = b.closest(".carousel-item"), c = c.index());
    c = a(b.closest(".carousel-inner").find(".carousel-item")[c]).find("img")[0];
    0 < b.parents(".clonedCol").length && c.click()
  }

  function z(b) {
    var c = a(b).find(".table tbody tr").length;
    a(b).find(".dataTables_info").text("Showing " +
      c + " entries")
  }
  var e = a("html").hasClass("is-builder");
  a.extend(a.easing, {
    easeInOutCubic: function(a, c, d, f, e) {
      return 1 > (c /= e / 2) ? f / 2 * c * c * c + d : f / 2 * ((c -= 2) * c * c + 2) + d
    }
  });
  a.fn.outerFind = function(a) {
    return this.find(a).addBack(a)
  };
  a.fn.footerReveal = function() {
    function b() {
      c.outerHeight() <= f.outerHeight() ? (c.css({
        "z-index": -999,
        position: "fixed",
        bottom: 0
      }), c.css({
        width: d.outerWidth()
      }), d.css({
        "margin-bottom": c.outerHeight()
      })) : (c.css({
        "z-index": "",
        position: "",
        bottom: ""
      }), c.css({
        width: ""
      }), d.css({
        "margin-bottom": ""
      }))
    }
    var c = a(this),
      d = c.prev(),
      f = a(window);
    b();
    f.on("load resize", function() {
      b()
    });
    return this
  };
  (function(a, c) {
    var d = function(a, b, c) {
      var d;
      return function() {
        var e = this,
          k = arguments;
        d ? clearTimeout(d) : c && a.apply(e, k);
        d = setTimeout(function() {
          c || a.apply(e, k);
          d = null
        }, b || 100)
      }
    };
    jQuery.fn[c] = function(a) {
      return a ? this.bind("resize", d(a)) : this.trigger(c)
    }
  })(jQuery, "smartresize");
  a.isMobile = function(b) {
    var c = [],
      d = {
        blackberry: "BlackBerry",
        android: "Android",
        windows: "IEMobile",
        opera: "Opera Mini",
        ios: "iPhone|iPad|iPod"
      };
    b = "undefined" == a.type(b) ? "*" : b.toLowerCase();
    "*" == b ? c = a.map(d, function(a) {
      return a
    }) : b in d && c.push(d[b]);
    return !(!c.length || !navigator.userAgent.match(new RegExp(c.join("|"), "i")))
  };
  var B = function() {
    var b = a('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),
      c = b[0],
      d = parseInt(window.innerHeight / 2, 10),
      c = parseInt((window.getComputedStyle ? getComputedStyle(c, null) : c.currentStyle).height, 10);
    b.remove();
    return c == d
  }();
  a(function() {
    function b() {
      a(this).css("height",
        9 * a(this).parent().width() / 16)
    }

    function c(b) {
      setTimeout(function() {
        a(b).outerFind(".mbr-parallax-background").jarallax({
          speed: .6
        }).css("position", "relative")
      }, 0)
    }

    function d(b) {
      a(b).outerFind("[data-bg-video]").each(function() {
        var b = a(this).attr("data-bg-video"),
          c = b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),
          d = a('<div class="mbr-background-video-preview">').hide().css({
            backgroundSize: "cover",
            backgroundPosition: "center"
          });
        a("> *:eq(0)", this).before(d);
        if(c && (/youtube/g.test(c[3]) || /vimeo/g.test(c[3])))
          if(c && /youtube/g.test(c[3])) b = "http" + ("https:" === location.protocol ? "s" : "") + ":", b += "//img.youtube.com/vi/" + c[6] + "/maxresdefault.jpg", a("<img>").on("load", function() {
            if(120 === (this.naturalWidth || this.width)) {
              var a = this.src.split("/").pop();
              switch(a) {
                case "maxresdefault.jpg":
                  this.src = this.src.replace(a, "sddefault.jpg");
                  break;
                case "sddefault.jpg":
                  this.src = this.src.replace(a, "hqdefault.jpg");
                  break;
                default:
                  e && d.css("background-image", 'url("images/no-video.jpg")').show()
              }
            } else d.css("background-image", 'url("' + this.src + '")').show()
          }).attr("src", b), !a.fn.YTPlayer || e || a.isMobile() || a("> *:eq(1)", this).before('<div class="mbr-background-video"></div>').prev().YTPlayer({
            videoURL: c[6],
            containment: "self",
            showControls: !1,
            mute: !0
          });
          else {
            if(c && /vimeo/g.test(c[3])) {
              var k = new XMLHttpRequest;
              k.open("GET", "https://vimeo.com/api/v2/video/" + c[6] + ".json", !0);
              k.onreadystatechange = function() {
                if(4 === this.readyState)
                  if(200 <=
                    this.status && 400 > this.status) {
                    var a = JSON.parse(this.responseText);
                    d.css("background-image", 'url("' + a[0].thumbnail_large + '")').show()
                  } else e && d.css("background-image", 'url("images/no-video.jpg")').show()
              };
              k.send();
              k = null;
              !a.fn.vimeo_player || e || a.isMobile() || a("> *:eq(1)", this).before('<div class="mbr-background-video"></div>').prev().vimeo_player({
                videoURL: b,
                containment: "self",
                showControls: !1,
                mute: !0
              })
            }
          }
        else e && d.css("background-image", 'url("images/video-placeholder.jpg")').show()
      })
    }
    a("html").addClass(a.isMobile() ?
      "mobile" : "desktop");
    a(window).scroll(function() {
      a(".mbr-navbar--sticky").each(function() {
        var b = 10 < a(window).scrollTop() ? "addClass" : "removeClass";
        a(this)[b]("mbr-navbar--stuck").not(".mbr-navbar--open")[b]("mbr-navbar--short")
      })
    });
    a.isMobile() && navigator.userAgent.match(/Chrome/i) ? function(b, c) {
        var d = [b, b];
        d[c > b ? 0 : 1] = c;
        a(window).smartresize(function() {
          var b = a(window).height();
          0 > a.inArray(b, d) && (b = d[a(window).width() > b ? 1 : 0]);
          a(".mbr-section--full-height").css("height", b + "px")
        })
      }(a(window).width(), a(window).height()) :
      B || (a(window).smartresize(function() {
        a(".mbr-section--full-height").css("height", a(window).height() + "px")
      }), a(document).on("add.cards", function(b) {
        a("html").hasClass("mbr-site-loaded") && a(b.target).outerFind(".mbr-section--full-height").length && a(window).resize()
      }));
    a(window).smartresize(function() {
      a(".mbr-section--16by9").each(b)
    });
    a(document).on("add.cards changeParameter.cards", function(c) {
      var d = a(c.target).outerFind(".mbr-section--16by9");
      d.length ? d.attr("data-16by9", "true").each(b) : a(c.target).outerFind("[data-16by9]").css("height",
        "").removeAttr("data-16by9")
    });
    a.fn.jarallax && !a.isMobile() && (a(window).on("update.parallax", function(b) {
      setTimeout(function() {
        var b = a(".mbr-parallax-background");
        b.jarallax("coverImage");
        b.jarallax("clipContainer");
        b.jarallax("onScroll")
      }, 0)
    }), e ? (a(document).on("add.cards", function(b) {
      c(b.target);
      a(window).trigger("update.parallax")
    }), a(document).on("changeParameter.cards", function(b, d, f, e) {
      if("bg" === d) switch(a(b.target).jarallax("destroy").css("position", ""), e) {
        case "type":
          !0 === f.parallax && c(b.target);
          break;
        case "value":
          "image" === f.type && !0 === f.parallax && c(b.target);
          break;
        case "parallax":
          !0 === f.parallax && c(b.target)
      }
      a(window).trigger("update.parallax")
    })) : c(document.body), a(window).on("shown.bs.tab", function(b) {
      a(window).trigger("update.parallax")
    }));
    var f, h, y = 0,
      g = null,
      p = !a.isMobile();
    a(window).scroll(function() {
      h && clearTimeout(h);
      var b = a(window).scrollTop(),
        c = b <= y || p;
      y = b;
      if(g) {
        var d = b > g.breakPoint;
        c ? d != g.fixed && (p ? (g.fixed = d, a(g.elm).toggleClass("is-fixed")) : h = setTimeout(function() {
          g.fixed = d;
          a(g.elm).toggleClass("is-fixed")
        }, 40)) : (g.fixed = !1, a(g.elm).removeClass("is-fixed"))
      }
    });
    a(document).on("add.cards delete.cards", function(b) {
      f && clearTimeout(f);
      f = setTimeout(function() {
        g && (g.fixed = !1, a(g.elm).removeClass("is-fixed"));
        a(".mbr-fixed-top:first").each(function() {
          g = {
            breakPoint: a(this).offset().top + 3 * a(this).height(),
            fixed: !1,
            elm: this
          };
          a(window).scroll()
        })
      }, 650)
    });
    a(window).smartresize(function() {
      a(".mbr-embedded-video").each(function() {
        a(this).height(a(this).width() * parseInt(a(this).attr("height") ||
          315) / parseInt(a(this).attr("width") || 560))
      })
    });
    a(document).on("add.cards", function(b) {
      a("html").hasClass("mbr-site-loaded") && a(b.target).outerFind("iframe").length && a(window).resize()
    });
    if(e) a(document).on("add.cards", function(a) {
      d(a.target)
    });
    else d(document.body);
    a(document).on("changeParameter.cards", function(b, c, f, e) {
      if("bg" === c) switch(e) {
        case "type":
          a(b.target).find(".mbr-background-video-preview").remove();
          "video" === f.type && d(b.target);
          break;
        case "value":
          "video" === f.type && (a(b.target).find(".mbr-background-video-preview").remove(),
            d(b.target))
      }
    });
    e || a("body > *:not(style, script)").trigger("add.cards");
    a("html").addClass("mbr-site-loaded");
    a(window).resize().scroll();
    e || a(document).click(function(b) {
      try {
        var c = b.target;
        if(!a(c).parents().hasClass("carousel")) {
          do
            if(c.hash) {
              var d = /#bottom|#top/g.test(c.hash);
              a(d ? "body" : c.hash).each(function() {
                b.preventDefault();
                var d = a(".mbr-navbar--sticky").length ? 64 : 0,
                  d = "#bottom" == c.hash ? a(this).height() - a(window).height() : a(this).offset().top - d;
                a(this).hasClass("panel-collapse") || a(this).hasClass("tab-pane") ||
                  a("html, body").stop().animate({
                    scrollTop: d
                  }, 800, "easeInOutCubic")
              });
              break
            }
          while (c = c.parentNode)
        }
      } catch(f) {}
    });
    a(".cols-same-height .mbr-figure").each(function() {
      function b() {
        d.css({
          width: "",
          maxWidth: "",
          marginLeft: ""
        });
        if(g && e) {
          var a = g / e;
          c.addClass({
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          });
          var h = f.height() / f.width();
          h > a && (a = 100 * (h - a) / a, d.css({
            width: a + 100 + "%",
            maxWidth: a + 100 + "%",
            marginLeft: -a / 2 + "%"
          }))
        }
      }
      var c = a(this),
        d = c.children("img"),
        f = c.parent(),
        e = d[0].width,
        g = d[0].height;
      d.one("load",
        function() {
          e = d[0].width;
          g = d[0].height;
          b()
        });
      a(window).on("resize", b);
      b()
    })
  });
  if(!e) {
    if(a.fn.socialLikes) a(document).on("add.cards", function(b) {
      a(b.target).outerFind(".mbr-social-likes").on("counter.social-likes", function(b, d, f) {
        999 < f && a(".social-likes__counter", b.target).html(Math.floor(f / 1E3) + "k")
      }).socialLikes({
        initHtml: !1
      })
    });
    a(document).on("add.cards", function(b) {
      a(b.target).hasClass("mbr-reveal") && a(b.target).footerReveal()
    });
    a(document).ready(function() {
      if(!a.isMobile() && a("input[name=animation]").length) {
        var b =
          function(a) {
            var b = 0;
            do b += a.offsetTop || 0, a = a.offsetParent; while (a);
            return b
          };
        a("input[name=animation]").remove();
        var c = a("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, textarea, .input-group, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info").not(function() {
            return a(this).parents().is(".navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop")
          }).addClass("hidden animated"),
          d = a(window);
        d.on("scroll resize", function() {
          var d = document.documentElement.scrollTop || document.body.scrollTop,
            e = d + window.innerHeight - 50;
          a.each(c, function() {
            var c = a(this),
              g = c[0],
              p = g.offsetHeight,
              g = b(g);
            if(g + p >= d && g <= e && c.hasClass("hidden")) c.removeClass("hidden").addClass("fadeInUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
              c.removeClass("animated fadeInUp")
            })
          })
        });
        d.trigger("scroll")
      }
    });
    a(".nav-dropdown").length && a(".nav-dropdown").swipe({
      swipeLeft: function(b,
        c, d, e, h) {
        a(".navbar-close").click()
      }
    })
  }
  a(document).ready(function() {
    if(a(".mbr-arrow-up").length) {
      var b = a("#scrollToTop"),
        c = a("body,html"),
        d = a(window);
      b.css("display", "none");
      d.scroll(function() {
        0 < a(this).scrollTop() ? b.fadeIn() : b.fadeOut()
      });
      b.click(function() {
        c.animate({
          scrollTop: 0
        }, 400);
        return !1
      })
    }
  });
  a(document).ready(function() {
    a(".counters").length && a(".counters").viewportChecker({
      offset: 200,
      callbackFunction: function(b, c) {
        a("#" + b.attr("id") + " .count").each(function() {
          a(this).prop("Counter", 0).animate({
            Counter: a(this).text()
          }, {
            duration: 3E3,
            easing: "swing",
            step: function(b) {
              a(this).text(Math.ceil(b))
            }
          })
        })
      }
    })
  });
  if(!e) a(".mbr-arrow").on("click", function(b) {
    b = a(b.target).closest("section").next();
    b.hasClass("engine") && (b = b.closest("section").next());
    b = b.offset();
    a("html, body").stop().animate({
      scrollTop: b.top
    }, 800, "linear")
  });
  if(a("nav.navbar").length) {
    var l = a("nav.navbar").height();
    a(".mbr-after-navbar.mbr-fullscreen").css("padding-top", l + "px")
  }
  if(!e && (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./))) a(document).on("add.cards",
    function(b) {
      var c = a(b.target);
      if(c.hasClass("mbr-fullscreen")) a(window).on("load resize", function() {
        c.css("height", "auto");
        c.outerHeight() <= a(window).height() && c.css("height", "1px")
      });
      if(c.hasClass("mbr-slider") || c.hasClass("mbr-gallery")) c.find(".carousel-indicators").addClass("ie-fix").find("li").css({
        display: "inline-block",
        width: "30px"
      }), c.hasClass("mbr-slider") && c.find(".full-screen .slider-fullscreen-image").css("height", "1px")
    });
  a(document).ready(function() {
    if(!e) {
      var b = function(b) {
        var d = a(b).parents("section").find("iframe")[0],
          e = a(d).attr("src");
        b.parents("section").css("z-index", "1"); - 1 !== e.indexOf("youtu") && d.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
        if(-1 !== e.indexOf("vimeo")) {
          var h = new Vimeo.Player(a(d));
          h.play()
        }
        a(b).parents("section").find(a(b).attr("data-modal")).css("display", "table").click(function() {
          -1 !== e.indexOf("youtu") && d.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"); - 1 !== e.indexOf("vimeo") && h.pause();
          a(this).css("display", "none").off("click");
          b.parents("section").css("z-index", "0")
        })
      };
      a(".modalWindow-video iframe").each(function() {
        var b = a(this).attr("data-src");
        a(this).removeAttr("data-src");
        var d = b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/); - 1 !== b.indexOf("youtu") ? a(this).attr("src", "https://youtube.com/embed/" + d[6] + "?rel=0&enablejsapi=1") : -1 !== b.indexOf("vimeo") && a(this).attr("src", "https://player.vimeo.com/video/" + d[6] +
          "?autoplay=0&loop=0")
      });
      a("[data-modal]").click(function() {
        b(a(this))
      })
    }
  });
  if(!e && !a.isMobile()) {
    var l = a("section.menu"),
      q = a(window).width();
    !l.find(".navbar").hasClass("collapsed") && 991 < q && (q = function() {
      var b = a(".js-float-line");
      b.each(function() {
        var c = a(this);
        a(".js-float-line .nav-item").mouseenter(function() {
          function d() {
            var a = h.css("margin-left"),
              c = h.width(),
              a = e.position().left + parseInt(a),
              d = b.find(".main-menu-animated-line");
            d.css("width", c);
            d.css("left", a)
          }
          var e = a(this),
            h = e.find(".nav-link");
          c.find(".main-menu-animated-line").length ? d(h) : (c.append('<li class="main-menu-animated-line bottom"></li>'), d())
        });
        b.on("mouseleave", function() {
          a(".main-menu-animated-line").remove()
        })
      })
    }, l.find("ul.navbar-nav li.dropdown").hover(function() {
      a(this).hasClass("open") || a(this).find("a")[0].click()
    }, function() {
      a(this).hasClass("open") && a(this).find("a")[0].click()
    }), l.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover(function() {
      a(this).hasClass("open") || a(this).find("a")[0].click()
    }, function() {
      a(this).hasClass("open") &&
        a(this).find("a")[0].click()
    }), "undefined" !== typeof q && q())
  }
  if(e) a(document).on("add.cards", function(b) {
    a(".pie_progress").length && r(b.target)
  }).on("delete.cards", function(b) {
    a(b.target).find(".pie_progress").asPieProgress("destroy")
  }).on("changeParameter.cards", function(b, c) {
    if(0 == c.indexOf("progress")) {
      if(a(".pie_progress").length) {
        var d = a(b.target).find("." + c);
        d.asPieProgress("go", d.attr("data-goal") + "%")
      }
      r(b.target)
    }
  });
  else 0 != a(".circle-progress-section").length && a(".circle-progress-section").each(function() {
    r(a(this))
  });
  if(e) a(document).on("add.cards", function(b) {
    0 != a(".countdown").length && t()
  }).on("changeParameter.cards", function(b, c, d) {
    "countdown" === c && (b = a(b.target).find(".countdown"), -1 < d.search(/\d\d\d\d\/\d\d\/\d\d/g) && (b.removeClass("countdown-inited"), t()))
  });
  else 0 != a(".countdown").length && t();
  if(e) a(document).on("add.cards", function() {
    0 != a(".flip-card").length && A()
  });
  if(e) a(document).on("add.cards", function(a) {
    x(a.target)
  });
  else x(document.body);
  if(e) a(document).on("add.cards", function(b) {
    0 != a(".testimonials-slider").length &&
      m(b.target)
  }).on("changeParameter.cards", function(b, c, d) {
    "testimonialsSlides" === c && 0 == a(b.target).find(".carousel-item.active").length && u(b.target)
  });
  else 0 != a(".testimonials-slider").length && a(".testimonials-slider").each(function() {
    m(this)
  });
  e || (a(document).ready(function() {
    0 != a(".accordionStyles").length && a('.accordionStyles .card-header a[role="button"]').each(function() {
      a(this).hasClass("collapsed") || a(this).addClass("collapsed")
    })
  }), a('.accordionStyles .card-header a[role="button"]').click(function() {
    var b =
      a(this).closest(".accordionStyles").attr("id");
    a(this).closest(".card").find(".panel-collapse").hasClass("collapsing") || (-1 != b.indexOf("toggle") ? a(this).hasClass("collapsed") ? a(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up") : a(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down") : -1 != b.indexOf("accordion") && (a(this).closest(".accordionStyles ").children(".card").each(function() {
        a(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down")
      }),
      a(this).hasClass("collapsed") && a(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up")))
  }));
  if(e) a(document).on("add.cards", function(b) {
    if(a(b.target).hasClass("clients")) {
      m(b.target);
      v(b.target);
      if("add" === b.type) a(b.target).on("slide.bs.carousel", function() {
        w(b.target)
      });
      a(b.target).find(".carousel-item [mbr-media]").on("click", function(a) {
        n(a)
      });
      a(b.target).on("slide.bs.carousel", function() {
        a(b.target).find(".carousel-item .clonedCol [mbr-media]").off("click").on("click",
          function(a) {
            n(a)
          })
      })
    }
  }).on("changeParameter.cards", function(b, c, d) {
    "slidesCount" == c && 0 == a(b.target).find(".carousel-item.active").length && u(b.target);
    v(b.target);
    w(b.target);
    a(b.target).find(".carousel-item [mbr-media]").on("click", function(a) {
      n(a)
    });
    a(b.target).on("slide.bs.carousel", function() {
      a(b.target).find(".carousel-item .clonedCol [mbr-media]").off("click").on("click", function(a) {
        n(a)
      })
    })
  }).on("changeContent.cards", function(b, c) {
    w(b.target);
    try {
      a(b.target).closest(".carousel").carousel("next")
    } catch(d) {}
  });
  else a(document.body).find(".clients").each(function(b, c) {
    m(a(this));
    v(a(this))
  });
  if(e) a(document).on("add.cards", function(b) {
    a(b.target).hasClass("section-table") && z(b.target)
  }).on("changeParameter.cards", function(a, c) {
    "tableColumns" != c && "tableRows" != c || z(a.target)
  });
  else 0 != a(document).find("section.section-table").length && a("section.section-table").each(function() {
    var b = a(this).find("table").is(".isSearch");
    a(this).find(".row.search").remove();
    a(this).find(".table-wrapper .scroll").removeClass("scroll");
    a(this).find(".row.info").remove();
    var c = a(this);
    a(c).find("table").dataTable({
      retrieve: !0,
      paging: !1,
      aaSorting: [],
      scrollX: !0,
      searching: b,
      info: b,
      language: {
        search: "Search:",
        info: "Showing _END_ entries",
        infoEmpty: "Showing _END_ entries",
        infoFiltered: "(filtered from _MAX_ total entries)"
      }
    })
  });
  e || 0 != a("section.popup-btn-cards").length && a("section.popup-btn-cards .card-wrapper").each(function(b, c) {
    a(this).addClass("popup-btn")
  })
})(jQuery);
! function() {
  try {
    document.getElementsByClassName("engine")[0].getElementsByTagName("a")[0].removeAttribute("rel")
  } catch(b) {}
  if(!document.getElementById("top-1")) {
    var a = document.createElement("section");
    a.id = "top-1";
    a.className = "engine";
    a.innerHTML = '<a href="https://mobirise.info">Mobirise</a> Mobirise v4.3.5';
    document.body.insertBefore(a, document.body.childNodes[0])
  }
}();
