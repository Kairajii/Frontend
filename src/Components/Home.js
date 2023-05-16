

import { Table } from 'react-bootstrap';
import Demo from './Demo';
import {MdDelete} from "react-icons/md";
import {BiEdit} from "react-icons/bi";
import {BsPersonFillAdd} from "react-icons/bs";
import { Link,useNavigate } from 'react-router-dom';
 
function Home() {

    var history = useNavigate();

  const handleDelte =(id)=>{
    var index = Demo.map(function(e){
      return e.id;
    }).indexOf(id)
    Demo.splice(index,1);

    history('/');
  }

  const handleEdit = (id,name,email,mobile)=>{
    localStorage.setItem('Name',name);
    localStorage.setItem('Email',email);
    localStorage.setItem('Mobile',mobile);
    localStorage.setItem('id',id);
  }

 

  return (
    <div>
      <header>
        <h1>User Management Module</h1>
      </header>
      <section>
        <div className='heading'>
          <span>Users Lists</span>
          <Link to='/add'><button className='create' ><BsPersonFillAdd/></button></Link>
        </div>
        <div className='table'>
          <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              Demo && Demo.length>0 
              ?
              Demo.map((item)=>{
                return (
                  <tr>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.Mobile}</td>
                    <td>
                    
                     <Link to='/edit'><button className='edit' onClick={()=> handleEdit(item.id,item.Name,item.Email,item.Mobile)}><BiEdit/></button></Link> 
                     <button className='del' onClick={()=> handleDelte(item.id)}><MdDelete /></button> 
                     </td>
                  </tr>
                )
              })
              : "No Data Found"
            }
          </tbody>
          </Table>
        </div>
      </section>
    </div>
  );
}

export default Home;
