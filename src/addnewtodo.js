import React,{Component} from 'react'

class Addnewtodo extends Component {

    state = {
        content: ''
    }

    changefunc = (e) =>{
        this.setState({
            content: e.target.value
        })

    }

    submitfunc = (e) =>{
        e.preventDefault()
        this.props.addnewtodofunc(this.state);
        this.setState({
            content:""
        })


    }

    render(){
        return (
            <div>
                {/* <form >/* how to disable enter in form */ }
                <form>
                  
                    
                    <input type="text" onChange={this.changefunc} value={this.state.content}/>
                    <a onClick={this.submitfunc} className="btn btn-primary"> addnewtodo </a>
                </form>
            </div>
        )
    
    
    }




}

export default Addnewtodo