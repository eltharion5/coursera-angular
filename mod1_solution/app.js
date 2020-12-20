(function () {
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){

    $scope.message="testmessage";
    $scope.name="";
    $scope.color = "black";
    // counting number of input, handling eception empty string
    $scope.Count0 = function(texte){
      var number = texte.split(',');
      var result=0;
      if ((number.length==1)&&(number[0]=="")){
        result = 0;
      }
      else{
        result = number.length;
      }
      return result;
    }

    $scope.Count = function(texte){
      var number = texte.split(',');
      var result=0;
      for (const element of number){
        if (element.trim()!=""){
          result+=1;
        }
      }
      return result;
    }
    // changing message depending on number of inputs
    $scope.GetNewMessage = function(){
      var number = $scope.Count($scope.name);
      if (number==0){
        $scope.message = "Please enter data first";
        $scope.color = "red";
      };
      if ((number>0)&&(number<=3)){
        $scope.message = "Enjoy!";
        $scope.color = "green";
      };
      if (number>3){
        $scope.message = "Too much!";
        $scope.color = "green";
      };
    }
  }
})()
