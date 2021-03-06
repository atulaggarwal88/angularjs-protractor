describe("zoo adoption home page", function() {
  it('Validate name of user', function() {
    browser.get('http://www.thetestroom.com/jswebapp/');
    

    var userNameStr = 'Atul';

    element(by.model('person.name')).sendKeys(userNameStr);    

    var greeting = element(by.binding('person.name'));

    expect(greeting.getText()).toEqual(userNameStr);
  });

  it('Select animal from dropdown',function(){
    browser.get('http://www.thetestroom.com/jswebapp/');
    element(by.model('person.name')).sendKeys('Atul');     
    
  });

  /*describe('todo list', function() {
    var todoList;

    beforeEach(function() {
      browser.get('http://www.thetestroom.com/jswebapp/');

      todoList = element.all(by.repeater('todo in todoList.todos'));
    });

    it('should list todos', function() {
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
    });

    it('should add a todo', function() {
      var addTodo = element(by.model('todoList.todoText'));
      var addButton = element(by.css('[value="add"]'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
  });*/
});
