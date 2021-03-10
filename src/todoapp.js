import React, { Component} from 'react';
import Todos from './todos';
import Addnewtodo from './addnewtodo';
class TodoApp extends Component {
    state = {
        todos : [
            {id: 1,content :"do prepare react",iscompleted :true},
            {id: 2,content :"then make todos app",iscompleted :false},
        ]
    }

    addnewtodofunc = (todo) =>{
        todo.id = Math.random() + 1
        let todonewlist = [...this.state.todos, todo] 
        this.setState({
            todos : todonewlist
        })

    }

    donetodofunc = (id) => {
        console.log(id)
        updatedtodo = this.state.todos.map(todo =>{
        //     if(todo.id === id) {
        //         todo.iscompleted = !todo.iscompleted
        //         console.log(todo)
        //     }


           
            if(todo.id === id){
                console.log(todo.iscompleted)
                this.setState({
                    // todo.iscompleted = !todo.iscompleted
                    // return (...todo,iscompleted:!todo.iscompleted})
                }
                )
                // this.setState({
                //     iscompleted:!this.state.todos[id].iscompleted//for property colon used
                //     // todo.iscompleted : !this.state.todo.iscompleted
                //     // todo.iscompleted=!todo.iscompleted
                // })
                // console.log(todo)
            }
            return todo;


            
        })
        // console.log(updatedtodo)

        // this.setState({
        //     todos : updatedtodo

        // })
    } 

    deletetodofunc = (id) =>{
        const todosnew = this.state.todos.filter(todo => {
            return todo.id !== id ;
        })
        this.setState({ 
            todos : todosnew
        })
    }
        render() {
            return (
                <div className="container">
                    <h1> This is todos App </h1>
                    <Todos todos={this.state.todos} deletetodofunc = {this.deletetodofunc}  donetodofunc = {this.donetodofunc} className="container" />
                    <h3> Add new todos </h3>
                    <Addnewtodo addnewtodofunc = {this.addnewtodofunc}/>

                </div>
            );
        }
    }

export default TodoApp