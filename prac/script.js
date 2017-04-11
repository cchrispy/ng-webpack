var app = angular.module('app', []);

app.controller('title', ['$scope', ($scope) => {
  $scope.name = 'Angular practice app';
}])

app.controller('input', ['$scope', 'updateList', ($scope, updateList) => {
  $scope.inputItem = '';
  $scope.click = () => {
    updateList.addToList($scope.inputItem);
    $scope.inputItem = '';
    console.log(updateList.getList());
  }
}])

app.controller('list', ['$scope', 'updateList', ($scope, updateList) => {
  $scope.items = updateList.getList();
}])

app.controller('buttons', ['$scope', ($scope) => {

}])

app.factory('updateList', () => {
  var list = [];

  return {
    getList: () => list,
    addToList: item => list.push(item)
  }
})