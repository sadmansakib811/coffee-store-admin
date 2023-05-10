// import React from 'react';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id,name, quantity, supplier, taste, category, details, photo } = coffee;
  const handleDelete= id=>{
     console.log(id);
     Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`,
        {
          method:'DELETE',
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
         
        }
        )
        .then(res=> res.json)
        .then(data => console.log(data))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="flex justify-between w-full pr-4 mt-5">
          
         <div>
         <h2 className="card-title">{name}</h2>
         <p>Quanity:{quantity}</p>
          <p>Supplier:{supplier}</p>
          <p>Taste:{taste}</p>
          <p>Detail: {details}</p>
         </div>
          <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
              <button className="btn btn-active">View</button>
              <Link  className="btn btn-active" to={`/updateCoffee/${_id}`}> <button>Edit</button> </Link>
              
              <button className="btn btn-active" onClick={()=>handleDelete(_id)}>Delete</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
