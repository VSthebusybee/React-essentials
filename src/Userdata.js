import {useState,useEffect} from 'react';
import './Userdata.css'
function Userdata()
{

    let [data,setData]=useState([]);
    useEffect(function(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
            setData(response);
        })
    },[]);

    return(
        <div>
            <h1>Display a list of data in a table format in React JS</h1>
            <tbody>
                <tr>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>{
                        data.map((set,index)=>{
                        return (
                            <tr key={index}>
                                <td>{set.id}</td>
                                <td>{set.username}</td>
                                <td>{set.name}</td>
                                <td>{set.email}</td>
                            </tr>
                        )
                        
                    })
                
                
            }
            </tbody>
        </div>
    );
}

export default Userdata;