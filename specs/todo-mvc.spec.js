'use strict';

const faker = require('faker');
const TodoMvc = require('../page-objects/todo-mvc.po');
const EC = protractor.ExpectedConditions;


describe('TODO MVC', function () {

  const todoMvc = new TodoMvc();

  beforeEach(async () => {
    await todoMvc.visit();
  });


  it('add item on TODO list', async () => {
    const randomWord = await faker.random.word();

    await todoMvc.addItemOnList(randomWord);

    browser.wait(EC.elementToBeClickable(todoMvc.todoList), 2000);

    expect(todoMvc.todoList.getText()).toContain(randomWord);
  });


  it('complete TODO items and check that list is empty', async () => {
    const randomWord = await faker.random.word();

    await todoMvc.addItemOnList(randomWord);
    await todoMvc.toggleAll.click();
    await todoMvc.clearCompleted.click();

    expect(todoMvc.todoList.isDisplayed()).not.toBe(true);
  });

});
