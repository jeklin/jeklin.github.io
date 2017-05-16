var APP = {
  init: function() {
    loopChangeWord = setInterval(function(){
      var $change = $('#change');
      var iteration = ['quick', 'efficiently', 'well', 'together'];
      var current   = $change.html();
      for (var i = 0; i < iteration.length; i++) {
        if (iteration[i] == current) {
          if (i+1 > iteration.length-1) var nw = iteration[0];
          else nw = iteration[i+1];
          $change.fadeOut(500, function(){
            $change.html(nw).fadeIn(500);
          });
        }
      }
    }, 4000);
    return this;
  },
  begin: function() {
    $sliders = $('.slideonload');
    $avatar = $('#me');
    $me = $('#me_container');

    //fade in avatar then transition to left.
    $avatar.fadeIn(1000, function(){
      $sliders.css({'width':'0'});//animation.
    });

    //binding, loading in the first box data.
    $sliders.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
      $me.css({'float':'left'});
      $sliders.css({'width':''});

      displayDataBox1 = setTimeout(function(){
        $db1 = $('#databox-1');
        $db1.fadeIn(250);
      }, 1000);
    });
  }
};
