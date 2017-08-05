'use strict';

class TodoMvc {

  constructor() {
    this.newTodoField = element(by.id('new-todo'));
    this.todoList = element(by.id('todo-list'));
    this.toggleAll = element(by.id('toggle-all'));
    this.clearCompleted = element(by.id('clear-completed'));
  }

  async addItemOnList(item) {
    await this.newTodoField.sendKeys(item);
    this.newTodoField.sendKeys(protractor.Key.ENTER);
  }

  async visit() {
    await browser.get('http://todomvc.com/examples/angularjs/#/');
  }

};

module.exports = TodoMvc;
