document.addEventListener("alpine:init", () => {
    Alpine.data("Header", () => ({ 
      // start with default theme : light
      theme: 'light',

      toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        console.log('change theme to....', this.theme);
        document.querySelector('html').setAttribute('data-theme', this.theme);
      }
    }));

    Alpine.data("Form", () => ({
      todoItem: ""
    }));
  
    Alpine.data("Todo", () => ({
      todos: [ ],
  
      getTodos() {
        return this.todos;
      },

      markComplete(todoId) {
        this.todos = this.todos.map((todo) => {
          if (todo.id === todoId) {
            return {...todo , completed: !todo.completed };
          } else {
            return todo;
          };
        });
      },
  
      addTodo(item) {
        this.todos = [
          ...this.todos,
          {
            id: this.todos.length,
            text: item,
            completed: false
          }
        ];
      },
  
      removeTodo(itemID) {
        this.todos = this.todos.filter((todo) => todo.id !== itemID);
      }
    }));
  });
  