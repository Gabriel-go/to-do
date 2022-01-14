import Route from '@ioc:Adonis/Core/Route'

/*
Route
  .group(() => {
    Route.get('/', "UsersController.index"),
    Route.get('/user/:id', "UsersController.find"),
    Route.post('/user',"UsersController.create");
  })*/

  Route.resource('user', 'UsersController')
  .except(['store','edit']);
  
  Route.resource('client', 'ClientsController')
  .except(['store','edit']);

  Route.resource('task', 'TasksController')
  .except(['store','edit']);

  Route
  .group(() => {
    Route.get('/login', "LoginController.login");
  })