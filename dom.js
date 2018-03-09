// part 2 linking it all together

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
    // you will need to use addEventListener
    
    // add span holding description
    var divNode = document.createElement('div');
    todoNode.appendChild(divNode);
    var spanNode = document.createElement('span');
    divNode.appendChild(spanNode);
    var textNode = document.createTextNode(todo.description);
    spanNode.appendChild(textNode);

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.setAttribute('aria-label', "delete")
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    var buttonsDiv = document.createElement('div');
    divNode.appendChild(buttonsDiv);
    buttonsDiv.appendChild(deleteButtonNode);
    todoNode.appendChild(buttonsDiv);
    buttonsDiv.classList.add('buttons-div');
    //css classes for delete button
    var deleteIcon = document.createElement("i"); 
    deleteButtonNode.appendChild(deleteIcon); 
    deleteIcon.classList.add("far", "fa-trash-alt"); 
    //add font awesome class to icon
    
    // add markTodo button
    var markButtonNode = document.createElement('button');
    markButtonNode.setAttribute('aria-label', "mark as done");

    markButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    if (todo.done) {
      spanNode.classList.add('marked');
    } else {
      spanNode.classList.remove('marked');
    }
    buttonsDiv.appendChild(markButtonNode);
    
    //css classes for mark button 
    var markIcon = document.createElement("i"); 
    markButtonNode.appendChild(markIcon); 
    markIcon.classList.add("fas", "fa-check"); 
    
    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventD      var description = '?'; // event.target ....efault do?
      // what is inside event.target?
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
