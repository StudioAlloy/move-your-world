(function($) {

  $(document).ready(function(){
    var machine1 = $("#machine1").slotMachine({
      active	: 0,
      delay	: 1000
    });

    var machine2 = $("#machine2").slotMachine({
      active	: 1,
      delay	: 1000,
    });

    var machine3 = $("#machine3").slotMachine({
      active	: 2,
      delay	: 1000
    });

    function onComplete(active){
      switch(this.element[0].id){
        case 'machine1':
          $("#machine1Result").text("Index: "+this.active);
          $('#machine1 .alloy-slot:nth-child('+ (this.active+2) +')').addClass('active');
        break;
        case 'machine2':
          $("#machine2Result").text("Index: "+this.active);
          $('#machine2 .alloy-slot:nth-child('+ (this.active+2) +')').addClass('active');
        break;
        case 'machine3':
          $("#machine3Result").text("Index: "+this.active);
          $('#machine3 .alloy-slot:nth-child('+ (this.active+2) +')').addClass('active');
        break;
      }
    }
    $("#randomize .btn").click(function(){

      $("#randomize .btn").attr("disabled", true);

      setTimeout(function(){
        $("#randomize .btn").removeAttr("disabled");
      }, 4000);

    });
    $("#ranomizeButton").click(function(){

      // var disableBtn = $(this);
      // $('.alloy-slot.active').removeClass('active');
      // setTimeout(function(){
      //   disableBtn.removeAttr("disabled");
      // }, 4000);

      machine1.shuffle(0, onComplete);

      setTimeout(function(){
        machine2.shuffle(0, onComplete);
      }, 500);

      setTimeout(function(){
        machine3.shuffle(0, onComplete);
      }, 1000);

    })
    $("#shuffle1").click(function(){

      // var disableBtn = $(this);
      // $('.alloy-slot.active').removeClass('active');
      // setTimeout(function(){
      //   disableBtn.removeAttr("disabled");
      // }, 4000);

      $('#machine1 .alloy-slot.active').removeClass('active');
      machine1.shuffle(0, onComplete);
      // machine1.shuffle();

    })
    $("#shuffle2").click(function(){

      // var disableBtn = $(this);
      // $('.alloy-slot.active').removeClass('active');
      // setTimeout(function(){
      //   disableBtn.removeAttr("disabled");
      // }, 4000);

      $('#machine2 .alloy-slot.active').removeClass('active');
      machine2.shuffle(0, onComplete);
      // machine2.shuffle();

    })
    $("#shuffle3").click(function(){

      // var disableBtn = $(this);
      // $('.alloy-slot.active').removeClass('active');
      // setTimeout(function(){
      //   disableBtn.removeAttr("disabled");
      // }, 4000);

      $('#machine3 .alloy-slot.active').removeClass('active');
      machine3.shuffle(0, onComplete);
      // machine3.shuffle();

    })
  });

})(jQuery);
