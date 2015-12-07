Meteor.methods({
  newMessage(message) {
    check(message, {
      text: String,
      chatId: String
    });

    message.timestamp = new Date();

    var messageId = Messages.insert(message);
    Chats.update(message.chatId, { $set: { lastMessage: message } });
    return messageId;
  },

  updateName(name) {
    check(name, String);
    if (name.length === 0) {
      throw Meteor.Error('name-required', 'Must provide user name');
    }

    return Meteor.users.update(this.userId, { $set: { 'profile.name': name } });
  }
});
