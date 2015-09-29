$(document).ready(function() {
   /* Starting Data */
   var inventory = 0;
   var clickMultiplier = 1;
   var costClickMultiplier = 10;
   var hasAutoClick1 = false;
   var costAutoClick1 = 1000;

   /************** v God Mode v **************/
   var godMode = true;

   if (godMode) {
      console.log('God Mode Active');
      $('#godmode').show();
      inventory = 999999999999;
   }
   /************** ^ God Mode ^ **************/



   /* Functions */
   var dispInventory = function() {
      $('.inventory').text('Coins: ' + inventory);
   };
   var dispClickMultiplier = function() {
      $('.click-multiplier').text('Click Multiplier: ' + clickMultiplier);
   };
   var dispClickMultiplierCost = function() {
      $('.increase-multiplier-cost').text('Cost: ' + costClickMultiplier + ' ');
   };
   var dispAutoClick1Cost = function() {
      $('.auto-click-1-cost').text('Cost: ' + costAutoClick1 + ' ');
   };
   var dispAutoClick1 = function() {
      $('.has-auto-click-1').text('Auto Click 1: ' + hasAutoClick1 + ' ');
   };

   /* Display All Info */
   dispInventory();
   dispClickMultiplier();
   dispClickMultiplierCost();
   dispAutoClick1Cost();

   /* User Click Function */
   $('.click').on('click', function() {
      inventory += 1 * clickMultiplier;
      dispInventory();
   });

   /* AutoClick1 Function */
   var autoClick = function() {
      if (hasAutoClick1) {
         inventory++;
         dispInventory();
      }
   };
   setInterval(autoClick, 1000);

   /**** Store Functions ****/
   $('.increase-multiplier').on('click', function() {
      if (inventory >= costClickMultiplier) {
         inventory -= costClickMultiplier;
         clickMultiplier += 1;
         costClickMultiplier = costClickMultiplier * clickMultiplier;
         dispInventory();
         dispClickMultiplier();
         dispClickMultiplierCost();
      }
   });

   $('.auto-click-1').on('click', function() {
      if (inventory >= costAutoClick1) {
         inventory -= costAutoClick1;
         hasAutoClick1 = true;
         dispInventory();
         dispAutoClick1();
         $('.auto-click-1-wrapper').hide();
      }
   });

   /* Random Coin */
   function generateRandomWidth() {
      var result = Math.floor(Math.random() * $(window).width());
      while (result > $(window).width()) {
         result = Math.floor(Math.random() * $(window).width());
      }
      return result;
   }
   function generateRandomHeight() {
      var result = Math.floor(Math.random() * $(window).height());
      while (result > $(window).width()) {
         result = Math.floor(Math.random() * $(window).height());
      }
      return result;
   }
   function showCoin() {
      var coinCount = $('.coins').children().length;
      if (coinCount < 1) {
         $(".coins").append('<img class="spinning-coin-image" height="50px" width="50px" src="img/coin-spinning-transparent.gif">');
         var left = generateRandomWidth();
         var top = generateRandomHeight();
         $('.spinning-coin-image').last().css({"position": "absolute", "top": top, "left": left});
      }
   }

   var timer = 0;
   setInterval(function() {
      timer++;
      if (timer >= 5) {
         $('.spinning-coin-image').remove();
         timer = 0;
      }
   }, 1000);
   var randomCoinTimer = function() {
      var time = 0;
      time = /* Random number function */;
      return time;
   };
   setInterval(showCoin, randomCoinTimer);

   $('.container').on('click', '.spinning-coin-image', function(){
      inventory += clickMultiplier * 100;
      dispInventory();
      $(this).remove();
   });

});
