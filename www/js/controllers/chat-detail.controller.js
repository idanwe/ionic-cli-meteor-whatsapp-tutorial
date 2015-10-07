angular
  .module('whatsapp')
  .controller('ChatDetailCtrl', ChatDetailCtrl);

function ChatDetailCtrl ($scope, $stateParams, $timeout, $ionicScrollDelegate) {
  $scope.chat = $scope.$meteorObject(Chats, $stateParams.chatId, false);

  $scope.messages = $scope.$meteorCollection(function () {
    return Messages.find({ chatId: $stateParams.chatId });
  }, false);

  $scope.inputUp = inputUp;
  $scope.inputDown = inputDown;

  ////////////

  function inputUp () {
    $timeout(function() {
      $ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(true);
    }, 300);
  }

  function inputDown () {
    $ionicScrollDelegate.$getByHandle('chatScroll').resize();
  }
}