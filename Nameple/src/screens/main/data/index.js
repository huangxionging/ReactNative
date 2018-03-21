import populate from './dataGenerator'
import users from './raw/users'
import articles from './raw/articles'
import notifications from './raw/notifications'
import conversations from './raw/conversations'
import cards from './raw/cards'
import _ from 'lodash'
populate()
class DataProvider {

  getUser(id = 1) {
    return _.find(users, x => x.id == id);
  }

  getUsers() {
    return users;
  }

  getNotifications() {
    return notifications;
  }

  getArticles(type = 'article') {
    console.log("文本内容", articles)
    return _.filter(articles, x => x.type == type);
  }

  getArticle(id) {
    return _.find(articles, x => x.id == id);
  }


  getConversation(userId = 1) {
    return _.find(conversations, x => x.withUser.id == userId);
  }

  getChatList() {
    return conversations;
  }

  getComments(postId = 1) {
    return this.getArticle(postId).comments;
  }

  getCards() {
    return cards;
  }

  populateData() {
    console.log("数据产生器:", articles, users)
    populate();
  }
}

export let data = new DataProvider();