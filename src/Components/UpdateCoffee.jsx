import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

const coffee = useLoaderData()
const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

const handleUpdateCoffee = (event) => {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const quantity = form.quantity.value;
  const supplier = form.supplier.value;
  const taste = form.taste.value;
  const category = form.category.value;
  const details = form.details.value;
  const photo = form.photo.value;
  const updatedCoffee = {
    name,
    quantity,
    supplier,
    taste,
    category,
    details,
    photo,
  };
  console.log(updatedCoffee);

  // send data to the server
  fetch(`http://localhost:5000/coffee/${_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCoffee),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.modifiedCount>0) {
        Swal.fire({
          title: "Success!",
          text: "Coffee Updated successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });
};



    return (
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-bold">Update Coffee : {name}</h2>
        <form onSubmit={handleUpdateCoffee}>
          {/* form name & quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Coffee Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-5">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <span>Quantity</span>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form supplier row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <span>Supplier</span>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Supplier Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-5">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <span>Taste</span>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Coffee Taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form category & details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <span>Category</span>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-5">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <span>Details</span>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Coffee Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form photo url */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <label className="input-group">
                <span>Photo Url</span>
                <input
                  type="text"
                  name="photo"
                  defaultValue = {photo}
                  placeholder="Photo Url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Add Coffee" className="btn btn-block" />
        </form>
      </div>
    );
};

export default UpdateCoffee;