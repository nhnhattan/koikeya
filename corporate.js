$(document).ready(function () {
  $(".nav-scroll_item a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );

      $(".nav-scroll_item a").removeClass("active");

      $(this).addClass("active");
    }
  });

  function animateDiv(element, opacity, duration) {
    return new Promise((resolve) => {
      element.animate({ opacity: opacity }, duration, function () {
        resolve();
      });
    });
  }

  $("#navbar-btn").click(function () {
    $(".navbar-btn").toggleClass("open");
    // $(".navbar-content").toggleClass("open");
    $(".navbar-content").slideToggle("slow", async function () {
      if ($(".navbar-content").is(":visible")) {
        var content = $(".nav-content_item");
        for (var i = 0; i < content.length; i++) {
          await animateDiv($(content[i]), 1, 200);
        }
        await animateDiv($(".nav-content_logo"), 1, 100);
        await animateDiv($(".nav-content_social"), 1, 100);
      } else {
        var content = $(".nav-content_item");
        for (var i = 0; i < content.length; i++) {
          await animateDiv($(content[i]), 0, 100);
        }
        await animateDiv($(".nav-content_logo"), 0, 100);
        await animateDiv($(".nav-content_social"), 0, 100);
      }
    });
  });

  $(".back-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});

$(window).on("scroll", function () {
  var scrollPosition = $(this).scrollTop();

  $(".nav-scroll_item").each(function () {
    var top = $(this).offset().top;
    var bottom = top + $(this).outerHeight();

    if (scrollPosition >= top && scrollPosition < bottom) {
      var id = $(this).attr("id");
      $(".nav-scroll_item a").removeClass("active");
      $('.nav-scroll_item a[href="#' + id + '"]').addClass("active");
    }
  });
});

$(document).ready(function () {
  if ($(window).width() <= 768) {
    $(".nav-banner").attr(
      "src",
      "./assets/main-img/banner-corporate-phone.jpg"
    );
  } else {
    $(".nav-banner").attr("src", "./assets/main-img/banner-corporate.jpg");
  }
});

$(document).ready(function () {
  var $image1 = $("#imgparalax");
  var $container1 = $("#imageContainer");
  var container1Width = $container1.width();
  var container1Height = $container1.height();
  var image1Width = $image1.width();
  var image1Height = $image1.height();

  $(".section-top_bg").mousemove(function (event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;

    // For image1
    var offsetX1 = (container1Width / 2 - mouseX) / 10;
    var offsetY1 = (container1Height / 2 - mouseY) / 10;
    var newLeft1 = container1Width / 2 - image1Width / 2 + offsetX1;
    var newTop1 = container1Height / 2 - image1Height / 2 + offsetY1;
    $image1.css({
      left: newLeft1,
      top: newTop1,
    });
  });
});

$(document).ready(function () {
  let currentIndex = 0;

  $(".close-btn").click(
    function () {
      $(".section-img").addClass("open");
    },
    function () {
      $(".section-img").removeClass("open");
    }
  );

  $(".scroll-item").click(function () {
    var currentIndex = 0;
    $(".section-img").addClass("open");
    $(".img-content_inner img").attr("src", this.src);
    $(".img-total span:first-child").text(this.id);

    currentIndex = this.id;

    $(".img-left-btn").click(function () {
      if (currentIndex === 1 || currentIndex === 0) {
        $(".img-left-btn").addClass("disabled");
        return false;
      } else {
        $(".img-right-btn").removeClass("disabled");
        currentIndex--;

        $(".img-content_inner img").attr(
          "src",
          $(".scroll-item")[currentIndex - 1].src
        );
        $(".img-total span:first-child").text(currentIndex);
      }
    });
    $(".img-right-btn").click(function () {
      if (currentIndex === 12) {
        $(".img-right-btn").addClass("disabled");
      } else {
        currentIndex++;
        $(".img-left-btn").removeClass("disabled");
        $(".img-content_inner img").attr(
          "src",
          $(".scroll-item")[currentIndex - 1].src
        );
        $(".img-total span:first-child").text(currentIndex);
      }
    });
    if (currentIndex == "1" || currentIndex == "0") {
      $(".img-left-btn").addClass("disabled");
    } else {
      $(".img-left-btn").removeClass("disabled");
    }
    if (currentIndex == "12") {
      $(".img-right-btn").addClass("disabled");
    } else {
      $(".img-right-btn").removeClass("disabled");
    }
  });
});

$(document).ready(function () {
  function animateDiv(element, opacity, duration) {
    return new Promise((resolve) => {
      element.animate({ opacity: opacity }, duration, function () {
        resolve();
      });
    });
  }

  $("#close-img").click(async function () {
    $(".navbar-content").removeClass("open");
    $(".navbar-content").slideUp("fast");
    var content = $(".nav-content_item");
    for (var i = 0; i < content.length; i++) {
      await animateDiv($(content[i]), 0, 100);
    }
    await animateDiv($(".nav-content_logo"), 0, 100);
    await animateDiv($(".nav-content_social"), 0, 100);
    $(".nav-btn").removeClass("open");
  });
});

$(document).ready(async function () {
  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    var navbarScroll = $(".nav-scroll_item a");
    if (scrollTop > 300 && scrollTop < 1330) {
      $(".section-brand-message").addClass("active");
      $(navbarScroll[0]).addClass("active");
    } else {
      $(navbarScroll[0]).removeClass("active");
      $(".section-brand-message").removeClass("active");
    }

    if (scrollTop > 1331 && scrollTop < 1970) {
      $(navbarScroll[1]).addClass("active");
    } else {
      $(navbarScroll[1]).removeClass("active");
    }

    if (scrollTop > 1971 && scrollTop < 2650) {
      $(navbarScroll[2]).addClass("active");
    } else {
      $(navbarScroll[2]).removeClass("active");
    }

    if (scrollTop > 2650) {
      $(navbarScroll[3]).addClass("active");
      $(navbarScroll[4]).addClass("active");
    } else {
      $(navbarScroll[3]).removeClass("active");
      $(navbarScroll[4]).removeClass("active");
    }
  });
});

$(document).ready(function () {
  function animateDiv(element, opacity, duration) {
    return new Promise((resolve) => {
      element.animate({ opacity: opacity }, duration, function () {
        resolve();
      });
    });
  }

  function updateLanguage(language) {
    if (language === "vi") {
      $("#language").text("EN");
      $("#language-bottom").text("EN");
      $(".company-icon").attr("src", "./assets/Corporate/company-icon.png");
      $(".banner-bottom .content h2").text("Tin mới nhất");
      $(".scroll-down a").text("Kéo xuống phía dưới");
      $(".scroll-down").css("left", "-5rem");

      var navScroll = $(".nav-scroll_item a");
      $(navScroll[0]).text("Thông điệp thương hiệu");
      $(navScroll[1]).text("Thông tin Công ty");
      $(navScroll[2]).text("Quá trình phát triển");
      $(navScroll[3]).text("Tin tức");
      $(navScroll[4]).text("Liên hệ");

      $(".section-brand-message img").attr(
        "src",
        "./assets/Corporate/brand-message.png"
      );
      $(".section-brand-message p").html`
      ● KOIKEYA là nhà sản xuất đồ ăn nhẹ hàng đầu của Nhật Bản, chuyên
              cung cấp các sản phẩm đồ ăn nhẹ và thực phẩm tốt cho sức khỏe với
              hơn 74 năm không ngừng phát triển.
              <br />
              ● Năm 2016, Koikeya thành lập chi nhánh và nhà máy sản xuất tại
              Việt Nam.
              <br />
              ● Dòng sản phẩm của Koikeya được sản xuất và bán tại Việt Nam:
              <br />
              + Gokochi
              <br />+ Karamucho <br />+ KoiMucho`;
      $(".section-brand-message .img-brand_bottom").attr(
        "src",
        "./assets/Corporate/thankyou-brand.png"
      );
      $(".section-brand .mission-container .content-mission img").attr(
        "src",
        "./assets/Corporate/mission.png"
      );
      $(".section-brand .mission-container .content-mission div").text(
        "Tạo ra nhiều hương vị như một người đầu bếp đích thực, đem lại giá trị trong từng miếng bánh thông qua văn hóa ẩm thực hiện đại. Sản phẩm và công nghệ mang đậm dấu ấn từ Nhật Bản."
      );
      $(".section-brand .mission-container .content-vision img").attr(
        "src",
        "./assets/Corporate/vision.png"
      );
      $(".section-brand .mission-container .content-vision div").text(
        "Mang đến cho khách hàng những sản phẩm và dịch vụ “tốt cho sức khỏe”, “ngon miệng”, nhiều niềm vui và sự hài lòng."
      );
      $(".company-content img").attr(
        "src",
        "./assets/Corporate/company-info.png"
      );
      $(".company-content ul li:nth-child(1) p.title").text("Tên giao dịch:");
      $(".company-content ul li:nth-child(1) p.content").text(
        "Công ty TNHH Koikeya Việt Nam"
      );
      $(".company-content ul li:nth-child(2) p.title").text("Trụ sở:");
      $(".company-content ul li:nth-child(2) p.content").text(
        "Đường N3-2, Khu công nghiệp Long Đức, Xã Long Đức, Huyện Long Thành, Tỉnh Đồng Nai, Việt Nam"
      );
      $(".company-content ul li:nth-child(3) p.title").text("Tổng giám đốc:");
      $(".company-content ul li:nth-child(3) p.content").text(
        "Ông INOUE ATSUSHI"
      );
      $(".company-content ul li:nth-child(4) p.title").text(
        "Lĩnh vực kinh doanh:"
      );
      $(".company-content ul li:nth-child(4) p.content").text(
        "Sản xuất và kinh doanh các sản phẩm bánh snack (snack khoai tây, snack bắp, v.v…)"
      );
      $(".company-content ul li:nth-child(5) p.title").text("Vốn điều lệ:");
      $(".company-content ul li:nth-child(5) p.content").text(
        "16 triệu USD (khoảng 360 tỉ VND)"
      );
      $(".company-content ul li:nth-child(6) p.title").text("Ngày thành lập:");
      $(".company-content ul li:nth-child(6) p.content").text("07/03/2016");
      $(".company-content ul li:nth-child(7) p.title").text("Tỉ lệ đầu tư:");
      $(".company-content ul li:nth-child(7) p.content").text(
        "100% vốn đầu tư của công ty Koike-ya Nhật Bản\n"
      );
      $(".section-other .container .section-other__content h2 img").attr(
        "src",
        "./assets/Corporate/other.png"
      );
      $(
        ".section-other .container .section-other__content ul:nth-child(2) li p"
      ).text("Nhận giấy chứng nhận đầu tư.");
      $(
        ".section-other .container .section-other__content ul:nth-child(3) li p"
      ).text("Nhận giấy chứng nhận đăng ký kinh doanh.");
      $(
        ".section-other .container .section-other__content ul:nth-child(4) li p"
      ).text(
        "Hoàn thành việc xây dựng nhà máy và bắt đầu thử nghiệm quy trình sản xuất."
      );
      $(
        ".section-other .container .section-other__content ul:nth-child(5) li p"
      ).text("Nhận giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm.");
      $(
        ".section-other .container .section-other__content ul:nth-child(6) li p"
      ).text(
        "Nhận giấy xác nhận công bố sản phẩm phù hợp quy định an toàn thực phẩm."
      );
      $(
        ".section-other .container .section-other__content ul:nth-child(7) li p"
      ).text(
        "Chuẩn bị cho giai đoạn sản xuất và vận hành toàn công suất của nhà máy."
      );
      $(
        ".section-other .container .section-other__content ul:nth-child(8) li p"
      ).text("Bắt đầu ra mắt sản phẩm mới.");
      $(
        ".section-other .container .section-other__content ul:nth-child(9) li p"
      ).text("Thương hiệu KoiMUCHO được ra đời.");
      $(".contact-title-img").attr("src", "./assets/Corporate/contact.png");
      $(".contact-wrap .contact-content .section-contact:nth-child(1) h3").text(
        "Văn Phòng Kinh Doanh"
      );
      $(".section-contact:nth-child(1) div p").text(
        "Số 14 Phan Tôn, P. Đa Kao, quận 1, TPHCM, Việt Nam."
      );
      $(
        ".contact-wrap .contact-content .section-contact:nth-child(1) .address-first"
      ).text("Tòa nhà Viễn Đông,  ");
      $(".contact-wrap .contact-content .section-contact:nth-child(1) a").text(
        "Điện thoại: +84 (0) 287 308 0800"
      );

      $(".contact-wrap .contact-content .section-contact:nth-child(2) h3").text(
        "Nhà Máy"
      );
      $(".section-contact:nth-child(2) .reverse .address").text(
        "Đường N3-2, Khu công nghiệp Long Đức, Xã Long Đức, Huyện Long Thành, Tỉnh Đồng Nai, Việt Nam"
      );
      $(
        ".contact-wrap .contact-content .section-contact:nth-child(2) .reverse .phone"
      ).text("Điện thoại: +84 (0) 251 368 1368");
      $(
        ".contact-wrap .contact-content .section-contact:nth-child(2) .reverse .fax"
      ).text("Fax: +84 (0) 251 368 1369");
      $(
        ".contact-wrap .contact-content .section-contact:nth-child(2) .reverse .email"
      ).text("Email: kkyvn-customer@koike-ya.com");
      $(
        ".contact-wrap .contact-content .section-contact:nth-child(2) .reverse .tax"
      ).text("Mã số thuế: 3603361812");
      $(".thank-you .mb-5").attr(
        "src",
        "./assets/Corporate/thankyou-bottom.png"
      );
      $(".thank-you p").text(
        "NHẤP VÀO ĐÂY ĐỂ BIẾT THÊM VỀ SẢN PHẨM CỦA CHÚNG TÔI"
      );
      $("footer .copyright span").text("© Bản quyền thuộc về Koikeya 2024");

      // Menu dialog
      $(".navbar-content_wrap .nav-content_item:nth-child(1) a").text(
        "Trang Chủ"
      );
      $(".navbar-content_wrap .nav-content_item:nth-child(2) a").text(
        "Website Công Ty"
      );
    } else if (localStorage.getItem("language") === "en") {
      $("#language").text("VI");
      $("#language-bottom").text("VI");
      $(".company-icon").attr("src", "./assets/Corporate/company-icon-en.png");
      $(".scroll-down a").text("Scroll Down");
      $(".scroll-down").css("left", "-3rem");
      $(".banner-bottom .content h2").text("Latest News");

      var navScroll = $(".nav-scroll_item a");
      $(navScroll[0]).text("Brand message");
      $(navScroll[1]).text("Company Information");
      $(navScroll[2]).text("Other");
      $(navScroll[3]).text("News");
      $(navScroll[4]).text("Contact Information");

      $(".section-brand-message img").attr(
        "src",
        "./assets/Corporate/brand-message-en.png"
      );
      $(".section-brand-message p").html`
        ● KOIKE-YA, Japanese snack food manufacturer, produces and sells snacks and health foods with over 72 years of continuous development. 
        <br/>
        ● In 2016, Koikeya established a branch and factory in Vietnam. 
        <br/>
        ● Koikeya's product line in Viet Nam:
        <br/>
        + Gokochi
        <br/> 
        + Karamucho
        <br/> 
        + KoiMucho
      `;
      $(".section-brand-message .img-brand_bottom").attr(
        "src",
        "./assets/Corporate/thankyou-brand-en.png"
      );
      $(".section-brand .mission-container .content-mission img").attr(
        "src",
        "./assets/Corporate/mission-en.png"
      );
      $(".section-brand .mission-container .content-mission div").html`
        ● Become a "chef" who is particular about flavor and brings out the flavor of ingredients through cooking. <br/>
        ● Products and technology with a strong Japanese imprint. <br/>
        ● Creating Modern Quality Discover and create new value in snacks within modern food culture.
      `;
      $(".section-brand .mission-container .content-vision img").attr(
        "src",
        "./assets/Corporate/vision-en.png"
      );
      $(".section-brand .mission-container .content-vision div").text(
        'We think from the customer\'s perspective and provide products and services that are "healthy," "delicious," "fun," and "highly satisfying."'
      );
      $(".company-content img").attr(
        "src",
        "./assets/Corporate/company-info-en.png"
      );
      $(".company-content ul li:nth-child(1) p.title").text("Trade name:");
      $(".company-content ul li:nth-child(1) p.content").text(
        "Koike-ya Vietnam Co. Ltd."
      );
      $(".company-content ul li:nth-child(2) p.title").text("Head office:");
      $(".company-content ul li:nth-child(2) p.content").text(
        "N3-2 Street, Long Duc Industrial Park, Long Duc Commune, Long Thành District, Dong Nai Province, Viet Nam"
      );
      $(".company-content ul li:nth-child(3) p.title").text("Representative:");
      $(".company-content ul li:nth-child(3) p.content").text(
        "Mr. INOUE ATSUSHI"
      );
      $(".company-content ul li:nth-child(4) p.title").text(
        "Business activities:"
      );
      $(".company-content ul li:nth-child(4) p.content").text(
        "Manufacturing and sales of snack foods and healthy foods (potato chips, corn snack, etc.)"
      );
      $(".company-content ul li:nth-child(5) p.title").text(
        "Date of establishment"
      );
      $(".company-content ul li:nth-child(5) p.content").text("07/03/2016");
      $(".company-content ul li:nth-child(6) p.title").text("Investment rate:");
      $(".company-content ul li:nth-child(6) p.content").text(
        "100% Koike-ya Inc. investment"
      );
      $(".section-other .container .section-other__content h2 img").attr(
        "src",
        "./assets/Corporate/other-en.png"
      );
      $(
        ".section-other .container .section-other__content ul:nth-child(2) li p"
      ).text("Investment Certificate approval.");
      $(
        ".section-other .container .section-other__content ul:nth-child(3) li p"
      ).text("Business Registration Certificate approval.");
      $(
        ".section-other .container .section-other__content ul:nth-child(4) li p"
      ).text("Completion of factory construction, testing production process.");
      $(
        ".section-other .container .section-other__content ul:nth-child(5) li p"
      ).text("Food Safety Certificate acquirement");
      $(
        ".section-other .container .section-other__content ul:nth-child(6) li p"
      ).text("Declaration of Compliance acquirement");
      $(
        ".section-other .container .section-other__content ul:nth-child(7) li p"
      ).text("Setting up for full capacity production and operation.");
      $(
        ".section-other .container .section-other__content ul:nth-child(8) li p"
      ).text("Launching new products.");
      $(
        ".section-other .container .section-other__content ul:nth-child(9) li p"
      ).text("KoiMUCHO brand introduction.");
      $(".contact-title-img").attr("src", "./assets/Corporate/contact-en.png");
      $(".contact-wrap .contact-content .section-contact:nth-child(1) h3").text(
        "Business Office"
      );
      $(".section-contact:nth-child(1) div p").text(
        "14 Phan Ton St, Da Kao Ward, District 1, HCMC, Vietnam"
      );
      $(".contact-content .section-contact:nth-child(1) div").css(
        "width",
        "50%"
      );
      $(
        ".contact-wrap .contact-content .section-contact:nth-child(1) .address-first"
      ).text("Vien Dong Building.");
      $(".contact-wrap .contact-content .section-contact:nth-child(1) a").text(
        "Tel: + (028) 3080 800"
      );

      $(".contact-wrap .contact-content .section-contact:nth-child(2) h3").text(
        "Factory"
      );
      $(".section-contact:nth-child(2) .reverse .address").text(
        "N3-2 St., Long Duc IP, Long Duc Ward, Long Thanh Dist,"
      );
      $(
        ".contact-wrap .contact-content .section-contact:nth-child(2) .reverse .phone"
      ).text("Tel: + (0251) 3681368");
      $(
        ".contact-wrap .contact-content .section-contact:nth-child(2) .reverse .fax"
      ).text("Fax: Tel: + (0251) 3681368");
      $(
        ".contact-wrap .contact-content .section-contact:nth-child(2) .reverse .email"
      ).text("Email: kkyvn-customer@koike-ya.com");
      $(
        ".contact-wrap .contact-content .section-contact:nth-child(2) .reverse .tax"
      ).text("Tax number: 3603361812");
      $(".thank-you .mb-5").attr(
        "src",
        "./assets/Corporate/thankyou-bottom-en.png"
      );
      $(".thank-you p").text("CLICK HERE TO KNOW MORE ABOUT OUR PRODUCTS");
      $("footer .copyright span").text("Copyright © Koikeya 2024");

      // Menu dialog
      $(".navbar-content_wrap .nav-content_item:nth-child(1) a").text("Home");
      $(".navbar-content_wrap .nav-content_item:nth-child(2) a").text(
        "Corporate Site"
      );
    }
  }

  updateLanguage();

  $("#language").click(async function () {
    if (localStorage.getItem("language") === "vi") {
      localStorage.setItem("language", "en");
      updateLanguage(localStorage.getItem("language"));
      $(".navbar-content").removeClass("open");
      $(".navbar-content").slideUp("fast");
      var content = $(".nav-content_item");
      for (var i = 0; i < content.length; i++) {
        await animateDiv($(content[i]), 0, 100);
      }
      await animateDiv($(".nav-content_logo"), 0, 100);
      await animateDiv($(".nav-content_social"), 0, 100);
      $(".navbar-btn").removeClass("open");
    } else if (localStorage.getItem("language") === "en") {
      localStorage.setItem("language", "vi");
      updateLanguage(localStorage.getItem("language"));
      $(".navbar-content").removeClass("open");
      $(".navbar-content").slideUp("fast");
      var content = $(".nav-content_item");
      for (var i = 0; i < content.length; i++) {
        await animateDiv($(content[i]), 0, 100);
      }
      await animateDiv($(".nav-content_logo"), 0, 100);
      await animateDiv($(".nav-content_social"), 0, 100);
      $(".navbar-btn").removeClass("open");
    }
  });

  $("#language-bottom").click(async function () {
    if (localStorage.getItem("language") === "vi") {
      localStorage.setItem("language", "en");
      updateLanguage(localStorage.getItem("language"));
      $(".navbar-content").removeClass("open");
      $(".navbar-content").slideUp("fast");
      var content = $(".nav-content_item");
      for (var i = 0; i < content.length; i++) {
        await animateDiv($(content[i]), 0, 100);
      }
      await animateDiv($(".nav-content_logo"), 0, 100);
      await animateDiv($(".nav-content_social"), 0, 100);
      $(".navbar-btn").removeClass("open");
    } else if (localStorage.getItem("language") === "en") {
      localStorage.setItem("language", "vi");
      updateLanguage(localStorage.getItem("language"));
      $(".navbar-content").removeClass("open");
      $(".navbar-content").slideUp("fast");
      var content = $(".nav-content_item");
      for (var i = 0; i < content.length; i++) {
        await animateDiv($(content[i]), 0, 100);
      }
      await animateDiv($(".nav-content_logo"), 0, 100);
      await animateDiv($(".nav-content_social"), 0, 100);
      $(".navbar-btn").removeClass("open");
    }
  });
});
