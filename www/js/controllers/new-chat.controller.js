angular
  .module('whatsapp')
  .controller('NewChatCtrl', NewChatCtrl);

function NewChatCtrl ($scope) {
  $scope.users = $scope.$meteorCollection(function () {
    return Meteor.users.find({ _id: { $ne: Meteor.userId() } });
  }, false);
}