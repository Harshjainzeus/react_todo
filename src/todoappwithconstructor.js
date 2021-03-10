import React, { Component} from 'react';
import Todos from './todos';
import Addnewtodo from './addnewtodo';
class Todoappwithconstructor extends Component{


    constructor(props){
        super(props);
        this.state = {
            todos : [
                {id: 1,content :"do prepare react",iscompleted :true},
                {id: 2,content :"then make todos app",iscompleted :false},
            ]
        };
    }

    addnewtodofunc = (todo) =>{
        todo.id = Math.random() + 1
        let todonewlist = [...this.state.todos, todo] 
        this.setState({
            todos : todonewlist
        })

    }

    donetodofunc = (id) => {
       this.setState({
           todos : this.state.todos.map(todo =>{
               if(todo.id === id){
                   todo.iscompleted = !todo.iscompleted
               }
               return todo;
           })
       })    
    }
    
    donetodofunc = (id) => {
        todos : this.state.todos.map(todo=>{
            if(todo.id === id){
                console.log(todo)
                this.setState({
                // todo.iscompleted = !todo.iscompleted
                // return {...todo,iscompleted:!todo.iscompleted}
                })
            }
            return todo
        })
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

export default Todoappwithconstructor




