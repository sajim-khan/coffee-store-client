import { Link } from "react-router-dom";
import Swal from "sweetalert2";

          
const CoffeeCard = ({ coffee , coffees, setCoffees}) => {
  const {_id, name, quantity, supplier, taste, category, photo } = coffee;
  
  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire("Deleted!", "Your Coffee has been deleted.", "success")
                const remaining = coffees.filter(cof => cof._id !== _id);
                setCoffees(remaining)
            }
        })
      }
    });
  }
  
  return (
    <div className="card card-side bg-base-100 shadow-xl mb-4">
      <figure className="w-48">
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full p-5">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Quantity : {quantity}</p>
          <p>Supplier : {supplier}</p>
          <p>Taste : {taste}</p>
          <p>Category : {category}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-5">
            <button className="btn btn-active">View</button>
            <Link className="btn btn-active" to={`updateCoffee/${_id}`}>
              <button>Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn hover:bg-red-900 bg-red-900"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;



