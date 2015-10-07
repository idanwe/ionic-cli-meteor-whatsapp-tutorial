angular
  .module('whatsapp')
  .controller('ChatDetailCtrl', ChatDetailCtrl);

function ChatDetailCtrl ($scope, $stateParams, $timeout, $ionicScrollDelegate, $meteor) {
  $scope.chat = $scope.$meteorObject(Chats, $stateParams.chatId, false);

  $scope.messages = $scope.$meteorCollection(function () {
    return Messages.find({ chatId: $stateParams.chatId });
  }, false);

  $scope.data = {};

  $scope.sendMessage = sendMessage;
  $scope.inputUp = inputUp;
  $scope.inputDown = inputDown;

  ////////////

  function sendMessage () {
    if (_.isEmpty($scope.data.message)) {
      return;
    }

    $meteor.call('newMessage', {
      text: $scope.data.message,
      chatId: $stateParams.chatId
    });

    delete $scope.data.message;
  }

  function inputUp () {
    $timeout(function() {
      $ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(true);
    }, 300);
  }

  function inputDown () {
    $ionicScrollDelegate.$getByHandle('chatScroll').resize();
  }
}