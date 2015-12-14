angular.module('friendsList').controller('mainCtrl', function($scope) {         //this is dependency injection. It tells angular which module the
// Don't assign angular.module('friendsList') to a var as it will be global     controller is dependent upon. Don't use square bracket notation!
// and if a teammate reassigns the var it will break your entire code & you won't know where it broke.
// we leave out the [] next to 'friendsList' because we want to get the friendsList module that was already created. Inserting [] creates a new module.

      $scope.friends = ['Tim', 'Darth Maul', 'Scuba Steve', 'Cortana', 'John', 'Sinclair'];

      $scope.addFriend = function() {
        $scope.friends.push($scope.friendName);
      };

      // $scope.name = "Andrew";
});
