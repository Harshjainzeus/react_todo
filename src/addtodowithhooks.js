import React,{useState} from 'react'

function Addnewtodowithhooks ({addnewtodofunc}) {// while accepting props we need cury braces

    const [content,setContent] = useState("")

    let changefunc = (e) =>{
            e.preventDefault()
            setContent(e.target.value)
        }

    let submitfunc = (e) =>{
        e.preventDefault()
        addnewtodofunc({content});
        setContent("")
    }

    return (
        <div>
            {/* <form >/* how to disable enter in form */ }
            <form >
                
                
                <input type="text" onChange={changefunc} value={content}/>
                <a onClick={submitfunc} className="btn btn-primary"> addnewtodo </a>
            </form>
        </div>
    )
    
    
}

export default Addnewtodowithhooks