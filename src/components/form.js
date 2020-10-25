import React,{useState, useEffect} from 'react';


const FormApp = () => {
const [people, setPeople] = useState([]);
const [person, setPerson] = useState({firstName:'', email:''});


const handleSubmit=(e)=>{
e.preventDefault();
if(person.firstName && person.email){
    const newPerson={...person,id:new Date().getTime().toString()}
    setPeople([...people,newPerson])
    setPerson({firstName:'', email:''})
}

};
const handleChange=(e)=>{
setPerson({...person,[e.target.name]:e.target.value})
}



return(
<>
<h1 className="title">User Form</h1>
<form className="form" onSubmit={handleSubmit}>
<div className="form-control">
<label htmlFor="firstName">Name</label>
<input className="form-group" type="text" value={person.firstName} name="firstName" id="firstName" onChange={handleChange}/>
</div>
<div className="form-control">
<label htmlFor="email">Email</label>
<input className="form-group" type="email" value={person.email} name="email" id="email" onChange={handleChange}/>
</div>
<button type="submit" className="btn">Add</button>
</form>
<h1 className="title2">User List</h1>
{people.map((person,index)=>{
    const {id,firstName,email}=person;
    return (
      <table className ='item' key={id}>
          
          <tr><td>{firstName}</td>
          <td>{email}</td></tr>
      </table>

    )
})}
</>
)
};

export default FormApp;