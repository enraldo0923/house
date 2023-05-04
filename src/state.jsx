
// import React from "react";
// import { student } from "./student";
 
// class State extends React.Component{

//   constructor(props){
//     super(props);
//     this.state ={
//       data :student,
//       selected: null,
//     }
//   }
//   render(){

//     const onDelete=(id)=>{
//       let res  = this.state.data.filter((vl)=> vl.id !==id);
//       this.setState({data :res})
//     }
//     const onFilter=({target:{value}})=>{
//       let res  = student.filter((vl)=> vl.name.toLowerCase().includes(value));
//       this.setState({data :res});

//     }
//     const onEdit =(value)=>{
//       console.log(value);
//       this.setState({selected :value,})
//     }
//     return(
//       <div>
//         <h1>Selected :{this.state.selected?.name}</h1>
//         <input onChange={onFilter} name="name" type="text" placeholder="Name"/>
//         <input onChange={onFilter} name="status" type="text" placeholder="Status"/>
//         <table border={2} width={("50%")}>
//           <thead>
//             <tr>
//               <td>ID</td>
//               <td>NAME</td>
//               <td>STATUS</td>
//               <td>Delete</td>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.data.map((st,index)=>{
//               return(
//                 <tr key={index}>
//                   <th>{st.id}</th>
//                   <th>{st.name}</th>
//                   <th>{st.status}</th>
//                   <th><button onClick={()=>onDelete(st.id)}>Delete</button></th>
//                   <th><button onClick={()=>onEdit(st)}>{this.state.selected?.id === st.id ? "Save" :"Edit"}</button></th>
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// };
// export default State;
import React from "react";
import {student} from "./student"


class State extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      data : student,
      selected :null,
    
    }
  }
  render(){
    const onDelete =(id)=>{
      let res = this.state.data.filter((vl)=> vl.id !==id);
      this.setState({
        data: res
      });
    };
  const onFilter=({target:{value}})=>{
      let res = student.filter((vl)=> vl.name.toLowerCase().includes(value));
      this.setState({
        data: res
      });
  }
 
    const onCancel =(value)=>{
      this.setState({selected: null})
      }
      const onEdit =(value)=>{
        this.setState({selected: value})
        }
      const onSave =(value)=>{
        let res = this.state.data.map((value)=>this.state.selected?.id === value.id? this.state.selected : value)
        this.setState({data: res,selected: null})
        }
        const onChangeName =({target:{value}})=>{
         this.setState((state)=>{return{selected:{...state.selected,name:value}}});
          }
  //  const onCancel =(value)=>{
  //   this.setState({selected:null})
  //   }
  //   const onSave =()=>{
  //     let res = this.state.data.map((value)=>this.state.selected?.id === value.id? this.state.selected:value);
  //     this.setState({
  //       data:res, selected: null,
  //     })
  //     }
  //     const onChangeName =({target:{value}})=>{
  //       this.setState((state)=> {return{selected: {...state.selected,name: value}}})
  //       }

    return(
      <div>
        <h1>Selected:{this.state.selected?.name}</h1>
      <input onChange={onFilter} type="text" placeholder="Name" name="Name" />  
      <input onChange={onFilter} type="text" placeholder="Status" name="Name" />
        <table border={2}width={("50%")} >
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Status</td>
              <td>Delete</td>
              
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((st,index)=>{
              let check = this.state.selected?.id ===st.id 
            return(
              <tr key={index}>
                <th>{st.id}</th>
                <th>{check? <input onChange={onChangeName} value={this.state.selected?.name} /> : st.name}</th>
                <th>{st.status}</th>
                <th>
                  {/* {check?(
                  <>
                  <button onClick={()=>onCancel(st.id)}>Cancel</button>
                  <button onClick={()=>onSave(st)}>Save</button>
                  </>):(
                  <>
                  <button onClick={()=>onDelete(st.id)}>Delete</button>
                  <button onClick={()=>onEdit(st)}>Edit</button>
                  </>)} */}
                  {check? (
                    <>
                    <button onClick={()=>onSave(st)}>Save</button>
                    <button onClick={()=>onCancel(st.id)}>Cancel</button>
                    </>
                  ):
                  (
                    <>
                    <button onClick={()=>onDelete(st.id)}>Delete</button>
                    <button onClick={()=>onEdit(st)}>Edit</button>
                    </>
                  )}
                </th>
              </tr>
            );
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
export default State;