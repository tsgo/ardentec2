/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function () {
    // $('.orange_box > a').imgLiquid ({ verticalAlign:'center' });
  if ($(window).width () > 930) {
    if ($(window).width () > 1110)
      $('.flexslider').height ($(window).height () - 115 - 130 - 200);
    else
      $('.flexslider').height ($(window).height () - 135 - 130 - 200);
  }

  // 回到上面按鈕
  $('#top_btn').click (function () {
      $('html, body').animate ({ scrollTop: 0 }, 'slow');
  });
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > $(window).height() / 3) {
      $('#top_btn').addClass('s');
    } else {
      $('#top_btn').removeClass('s');
    }
});

  // 漢堡變換 + menu滑出
  $(document).ready(function() {
    $('#nav-icon3').click(function(){
      $(this).toggleClass('open');

      $('#r_menu_boxs').toggleClass('s_menu');
      $('#menu_back').toggleClass('s_menu_b');
    });
  });
  $('#r_menu_boxs').each (function () {
    var $that = $(this);
    $that.find ('span').click (function () {
      $(this).toggleClass ('s');
    });
  });


  $('.page_l').each (function () {
    var $that = $(this);
    $that.find ('span').click (function () {
      $(this).toggleClass ('pp');
    });
  });


   // 圖片縮放
  $(".spic, .banner_page, ._ic, .flexslider li, .slides").imgLiquid ();
  $(".work_boxs").each (function () {
    var $that = $(this);

    var $bb = $that.find ('.bb').attr ('data-i', 1);
    var l = $bb.find ('>*').length;
    
    $that.find ('>a').click (function () {
      var i = parseInt ($bb.attr ('data-i'), 10);
      $bb.attr ('data-i', $(this).hasClass ('icon-chevron-left') ? (--i <= 0 ? l : i) : (++i > l ? 1 : i));
    });
    var f = $bb.find ('>*').first ().clone (true);
    var t = $bb.find ('>*').last ().clone (true);
    $bb.append (f).prepend (t);
  });



  // banner
  $('.index-banners').each (function () {
    var $that = $(this).attr ('data-i', 1);
    
    $that.find ('.bg').imgLiquid ({ verticalAlign:'center' });
    var l = $that.find ('>div>*').length;
    $that.find ('>a').click (function () {
      var i = parseInt ($that.attr ('data-i'), 10);
      $that.attr ('data-i', $(this).hasClass ('left') ? (--i <= 0 ? l : i) : (++i > l ? 1 : i));
      
    });
    setInterval (function () {
      $that.find ('>a.left').click ();
    }, 6500);
  });


  // banner2
  if (typeof $.fn.flexslider !== 'undefined') {
    $('.flexslider').flexslider({
        directionNav: true,
        pauseOnAction: false
    });
  }

  $('header .top_boxs .top_r .nav_boxs:nth-child(2)>div').mouseenter(function() {
    $('header .top_boxs .top_r .nav_boxs:nth-child(2)>div>div').removeClass('h');
    var $that = $(this).find('>div').addClass('h');
    clearTimeout($that.get(0)._t);
  });
  $('header .top_boxs .top_r .nav_boxs:nth-child(2)>div').mouseleave(function() {
    var $that = $(this).find('>div');

    $that.get(0)._t = setTimeout(function() {
      $that.removeClass('h');
    }, 500);
  });

  $('header .top_boxs .top_r .nav_boxs:nth-child(2)>div>div').mouseenter(function() {
    console.error($(this).get(0)._t);
    
    clearTimeout($(this).get(0)._t);
    $(this).get(0)._t = null;
  });

});