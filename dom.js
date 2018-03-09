// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = []; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    
    // add span holding description
    var divNode = document.createElement('div');
    var spanNode = document.createElement('span');
    var textNode = document.createTextNode(todo.description);
    todoNode.appendChild(divNode).appendChild(spanNode).appendChild(textNode);

    //create div to hold delete/mark buttons
    var buttonsNode = document.createElement('div');
    buttonsNode.classList.add('buttons-div');
    todoNode.appendChild(buttonsNode);

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.setAttribute('aria-label', "delete");
    var deleteIcon = document.createElement("img"); 
    deleteIcon.setAttribute('src', 'img/trash.png');
    buttonsNode.appendChild(deleteButtonNode).appendChild(deleteIcon); 

    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    
    // add markTodo button
    var markButtonNode = document.createElement('button');
    markButtonNode.setAttribute('aria-label', "mark as done");
    var markIcon = document.createElement("img");
    markIcon.setAttribute('src', 'img/tick.png');
    buttonsNode.appendChild(markButtonNode).appendChild(markIcon);

    markButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    //toggles marked class
    if (todo.done) {
      spanNode.classList.add('marked');
    } else {
      spanNode.classList.remove('marked');
    }
    
    return todoNode;
  };

  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var description = event.target[0].value;

      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, description);
      update(newState);
      addTodoForm.reset(); 
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
