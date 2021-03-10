import react,{useState} from 'react'
import Todos from './todos'
import Addnewtodo from './addnewtodo'
import Addnewtodowithhooks from './addtodowithhooks';


function Todowithhooks(){
  
  const [todos, setTodos] = useState([
    {id: 1,content :"do prepare react",iscompleted :true},
    {id: 2,content :"then make todos app",iscompleted :false},
  ]);

  let addnewtodofunc = (todo) =>{ //why let is required when it is function
    todo.id = Math.random() + 1
    todo.iscompleted = false
    let todonewlist = [...todos, todo] 
    setTodos(todonewlist)

  }
  let deletetodofunc = (id) =>{
    const todosnew = todos.filter(todo => {
        return todo.id !== id ;
    })
    setTodos(todosnew)
  }

  let donetodofunc = (id) => {
    let updatedtodos = todos.map(todo =>{
        if(todo.id === id) {
            todo.iscompleted = !todo.iscompleted
        }
        return todo;
    })
    setTodos(updatedtodos)
   }
            
 
  return (
      <div className="container">
                    <h1> This is todos App </h1>
                    <Todos todos={todos} deletetodofunc = {deletetodofunc}  donetodofunc= {donetodofunc}className="container" />
                    <h3> Add new todos </h3>
                    <Addnewtodowithhooks addnewtodofunc = {addnewtodofunc}/>

      </div>
  );
}

export default Todowithhooks