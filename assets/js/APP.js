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
  }
};
