import Route from '@ioc:Adonis/Core/Route'
Route.post('insertEmployee','EmployeesController.insert').middleware('task')
Route.get('displayEmployee','EmployeesController.display').middleware('task')
Route.patch('updateEmployee/:id','EmployeesController.update').middleware('task')
Route.get('deleteEmployee/:id','EmployeesController.delete').middleware('task')
Route.get('joinEmployee','EmployeesController.join').middleware('task')
Route.get('joinallEmployee','EmployeesController.joinall').middleware('task')


Route.post('insertDepartment','DepartmentsController.insert').middleware('task')
Route.get('displayDepartment','DepartmentsController.display').middleware('task')
Route.patch('updateDepartment/:id','DepartmentsController.update').middleware('task')
Route.get('deleteDepartment/:id','DepartmentsController.delete').middleware('task')

