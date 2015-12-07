angular
  .module('whatsapp')
  .controller('NewChatCtrl', NewChatCtrl);

function NewChatCtrl ($scope) {
  $scope.helpers({
    users: function () {
      return Meteor.users.find({ _id: { $ne: Meteor.userId() } });
    }
  });
}
