import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateFood = () => {
    const food = useLoaderData()
    const { _id, foodn, quantity, photo, date, description, imgUrl, dname } = food
    const handleUpdateFood = event =>{
        event.preventDefault()
        const form = event.target
        const foodn = form.foodn.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const date = form.date.value
        const location = form.location.value
        const imgUrl = form.imgUrl.value
        const dname = form.dname.value
        const updateFood = {foodn,quantity,photo,date,description,location,imgUrl,dname}
        console.log(updateFood)

        // send data to the server
        fetch(`http://localhost:5000/food/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateFood)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success',
                    text: 'Food Updated Successfully ',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] P-8 rounded-lg">
        <h1 className="text-4xl font-bold italic text-center text-purple-500">Update Food: <span className="text-teal-400">{foodn}</span></h1>
        
        <form onSubmit={handleUpdateFood} className="p-8">
            {/* form row-1-Food Name,Photo Url */}
            <div className="flex gap-3 mb-3">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold italic">Food Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Food Name" defaultValue={foodn} name="foodn" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control  md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold italic">Photo Url</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Photo Url" defaultValue={photo} name="photo" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form row-2-Photo URL,date */}
            <div className="flex gap-3 mb-3">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold italic">Quantity</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Quantity" defaultValue={quantity} name="quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control  md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold italic">Expired Date</span>
                    </label>
                    <label className="input-group">

                        <input type="date" placeholder="" defaultValue={date} name="date" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form row-3-Description,location */}
            <div className="flex gap-3 mb-3">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold italic">Description</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Description" defaultValue={description} name="description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold italic">Location</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Location" defaultValue={location} name="location" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            {/* form row-3-donator img,name */}
            <div className="flex gap-3 mb-3">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold italic">Donator img</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Image Url" defaultValue={imgUrl} name="imgUrl" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold italic">Donator Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Donator Name" defaultValue={dname} name="dname" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>

            <input type="submit" value="Update Food" className="btn btn-accent w-full italic" />

        </form>
    </div>
    );
};

export default UpdateFood;