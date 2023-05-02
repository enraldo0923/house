
import React from "react";
import {student} from "./student";

class State extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data: student,
            name : '',
            status : "",
        };
    };
    render(){
        const onChange=(event)=>{
            console.log(event.target.value);
            this.setState({[event.target.name]: event.target.value});
        }
         const onFilter=(abbos)=>{
            console.log(abbos.target.value);
            let res = student.filter((value)=>value.name.includes(abbos.target.value));
            this.setState({
                data: res
            });
         };
        const onAdd =()=>{
            let user = {id:Date.now(),name:this.state.name,status: this.state.status};
            this.setState({
                data :[... this.state.data, user],
                name: "",
                status :"",
            })
            console.log(user);

        }
         const onDelete=(id)=>{
            console.log(id);
            let res = this.state.data.filter(value=>value.id !==id)
            this.setState({
                data :res,
            })
         }
         return(
            <div>
                <h1>Name :{this.state.name}</h1>
                <h1>Status :{this.state.status}</h1>
                <input value={this.state.name} name="name" onChange={onChange} type="text" placeholder="Name" />
                <input value={this.state.status} name="status" onChange={onChange} type="text" placeholder="Status" />
                <button onClick={onAdd}>Add</button>
                <input onChange={onFilter} type="text"placeholder="Filter" />
                <table border={'1px'} width={'50%'}>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.data.map(({id,name,status})=>{
                            return(
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{status}</td>
                                    <td><button onClick={()=>onDelete(id)}>delete</button></td>
                                    <td><button>edit</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
         )
    }
};
export default State;
// import React from "react";
// import {student} from "./student"

// class State extends React.Component{

//   constructor(props){
//     super(props);
//     this.state={
//       data: student,
//       name : "",
//       status: "",
//     };
//   };
//    render(){

//      const onChange=(abbos)=>{
//       console.log(abbos.target.value);
//       this.setState({[abbos.target.name]:abbos.target.value });

//      };

//      const onFilter=(asad)=>{
//      console.log(asad.target.value);
//      let res = student.filter((value)=> value.name.includes(asad.target.value))
//      this.setState({
//       data: res,})};

//      const onAdd = ()=>{
//      let user = {id: Date.now(),name : this.state.name , status: this.state.status};
//      this.setState({
//       data :[...this.state.data,user],
//       name: "",
//       status:""
//      });
//      console.log(user);};

//      return(
//       <div>
//         <h1>Name: {this.state.name}</h1>
//         <h1>Status: {this.state.status}</h1>
//         <input  onChange={onChange} value={this.state.name} name="Name" placeholder="Name" type="text" />
//         <input  onChange={onChange} value={this.state.status} name="Status" placeholder="Status" type="text" />
//         <button onClick={onAdd}>Add</button>
//         <br />
//         <br />
//         <input onChange={onFilter} placeholder="Filter" type="text" />
//         <table border={1} width={'50%'}>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Status</th>
//               <th>Delete</th>
//               <th>Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.data.map(({id,name,status})=>{
//               return (
//                 <tr key={id}>
//                   <td>{id}</td>
//                   <td>{name}</td>
//                   <td>{status}</td>
//                   <td><button>Delete</button></td>
//                   <td><button>Edit</button></td>

//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       </div>
//      )
//    }
// };
// export default State ;