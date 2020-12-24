(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var list1 = this;
    list1.items = ShoppingListCheckOffService.getBuyItems();

    list1.buy = function(value){
      var boughtitem = ShoppingListCheckOffService.checkOffBuy(value);
    }
    list1.isDisplayed = function(){
      console.log(list1.items.length)
      return list1.items.length==0
    }

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list2 = this;
    list2.items = ShoppingListCheckOffService.getBoughtItems();
    list2.isDisplayed = function(){
      return list2.items.length==0
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;
    service.buy = [
      { name: "appelsiini", quantity: 10 },
      { name: "makkara", quantity: 10 },
      { name: "banaani", quantity: 10 },
      { name: "luumu", quantity: 10 },
      { name: "purjo", quantity: 10 }
    ];
    service.bought = [];
    // return items to buys
    service.getBuyItems = function(){
      return service.buy;
    }
    // return bought items
    service.getBoughtItems = function(){
      return service.bought;
    }
    service.checkOffBuy = function(value){
      var index = service.buy.indexOf(value);
      var boughtitem = service.buy.splice(index, 1)[0];
      service.bought.push(boughtitem);
    }
  }
}
)()
