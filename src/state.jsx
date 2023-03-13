import React from "react";
import {students} from  "./data";


class Getname extends React.Component{
    state= {
       students:students,
       selected :{},
    };
        
    

    render(){
    //     const onDelete=(id)=>{
    //      console.log(id);
    //    let res =   this.state.students.filter((vl)=> vl.id!==id);
    //    this.setState({students:res });
    //     }
    const onDelete =(id)=>{
        console.log(id);
        let res = this.state.students.filter((vl)=>vl.id!==id);
        this.setState({students :res});
    }
        const filter =({target: {value,name}})=>{
        let res  = students.filter((vl) => vl.name.toLocaleLowerCase().includes(value));
        this.setState({students:res});
        }
        const onEdit =(value)=>{
        console.log(value);
        this.setState({selected:value });
        } 
        const onSave =(value)=>{
            let res  = this.state.students.map((value)=> this.state.selected?.id === value.id?this.state.selected:value);
            this.setState({students : res,selected:null});
            } 
            const onCancel =(value)=>{
                console.log(value);
                this.setState({selected:null });
                } 
        const onChangeName =({target:{value}})=>{
            this.setState((state)=>{return{selected:{...state.selected,name:value}}})
            console.log(value);
        };
        return (
            <div>
                <h1>Selected: {this.state.selected?.name}</h1>
                <input onChange={filter} name= "id" type="text"placeholder="id" />
                <input onChange={filter} name= "id" type="text"placeholder="Name" />
                <table border={1} style={{ borderCollapse: "collapse"} }>
                    <thead>
                         <tr>
                        <th>ID</th>
                        <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.students.map((sd,index)=>{
                            let check = this.state.selected?.id === sd.id;
                            
                            return(
                    <tr key={sd.id}>

                        <td>{sd.id}</td>
                <td>{check ? <input onChange={onChangeName} value={this.state.selected.name}/>: sd.name}</td> 
                        <td>
                        {check?(
                            <React.Fragment>
                     <button onClick={()=>onCancel(sd.id)}>cancel</button>
                        <button onClick={()=>onSave(sd)}>save </button> 
                        </React.Fragment>)
                        :(
                        <React.Fragment>
                        <button onClick={()=>onDelete(sd.id)}>Delete </button>
                        <button onClick={()=>onEdit(sd)}> 
                        edit </button>
                        </React.Fragment>)}
                        </td>
                          
                    </tr>

                            )
                        })
                    }
                    </tbody>
                    
                </table>
            </div>
        )
    }
}






export default Getname;