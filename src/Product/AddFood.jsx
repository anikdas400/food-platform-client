

const AddFood = () => {
    const handleAddFood = event =>{
        event.preventDefault()
        const form = event.target
        const food = form.food.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const date = form.date.value
        const location = form.location.value
        const imgUrl = form.imgUrl.value
        const dname = form.dname.value
        const newCar = {food,quantity,photo,date,description,location,imgUrl,dname}
        console.log(newCar)
    }
    return (
        <div className="bg-[#F4F3F0] P-8 rounded-lg">
        <h1 className="text-5xl font-bold italic text-center text-purple-800">Add New Food</h1>
        
        <form onSubmit={handleAddFood} className="p-8">
            {/* form row-1-Food Name,Photo Url */}
            <div className="flex gap-3 mb-3">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold italic">Food Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Food Name" name="food" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control  md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold italic">Photo Url</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered w-full" />
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

                        <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control  md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold italic">Expired Date</span>
                    </label>
                    <label className="input-group">

                        <input type="date" placeholder="" name="date" className="input input-bordered w-full" />
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

                        <input type="text" placeholder="Description" name="description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold italic">Location</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Location" name="location" className="input input-bordered w-full" />
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

                        <input type="text" placeholder="Image Url" name="imgUrl" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold italic">Donator Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Donator Name" name="dname" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>

            <input type="submit" value="Add Food" className="btn btn-accent w-full italic" />

        </form>
    </div>
    );
};

export default AddFood;