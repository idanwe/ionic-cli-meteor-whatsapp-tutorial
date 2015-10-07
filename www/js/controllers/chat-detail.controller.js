angular
  .module('whatsapp')
  .controller('ChatDetailCtrl', ChatDetailCtrl);

function ChatDetailCtrl ($scope, $stateParams) {
  $scope.chat = $scope.$meteorObject(Chats, $stateParams.chatId, false);

  $scope.messages = $scope.$meteorCollection(function () {
    return Messages.find({ chatId: $stateParams.chatId });
  }, false);
}