import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const DashboardForm = () => {
  const [selectedCollection, setSelectedCollection] = useState("");

  const handleCollectionChange = (event) => {
    setSelectedCollection(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const foodData = {
      name: formData.get("name"),
      price: parseFloat(formData.get("price")),
      description: formData.get("description"),
      image: formData.get("image"),
    };

    try {
      await addFoodToFirebase(selectedCollection, foodData);
      event.target.reset();
    } catch (error) {
      console.error("Error adding food:", error);
    }
  };

  const addFoodToFirebase = async (collectionName, foodData) => {
    try {
      const foodCollectionRef = collection(db, collectionName);
      await addDoc(foodCollectionRef, foodData);
      toast.success("Food added successfully");
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <Toaster />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#52321b]">
          Upload new food Items
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="text-start">
            <label
              htmlFor="collection"
              className="block text-sm font-medium leading-6 text-[#52321b]"
            >
              Food Collection
            </label>
            <select
              name="collection"
              id="collection"
              required
              onChange={handleCollectionChange}
              className="block w-full bg-slate-100 px-2 outline-none rounded-md border-0 py-1.5 text-[#52321b] shadow-sm placeholder:text-[#bebab7] sm:text-sm sm:leading-6"
            >
              <option value="">Select Collection</option>
              <option value="pizza">Pizza</option>
              <option value="burger">Burger</option>
              <option value="noodles">Noodles</option>
            </select>
          </div>

          <div className="text-start">
            <label htmlFor="image">Food picture</label>
            <input
              id="image"
              name="image"
              type="text"
              placeholder="Enter food picture url"
              required
              className="block w-full bg-slate-100 px-2 outline-none rounded-md border-0 py-1.5 text-[#52321b] shadow-sm placeholder:text-[#bebab7] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="text-start">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-[#52321b]"
            >
              Food Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter food title"
                required
                className="block w-full bg-slate-100 px-2 outline-none rounded-md border-0 py-1.5 text-[#52321b] shadow-sm placeholder:text-[#bebab7] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-[#52321b]"
              >
                Food Price
              </label>
            </div>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                type="number"
                required
                placeholder="Enter food price"
                className="block w-full bg-slate-100 px-2 outline-none rounded-md border-0 py-1.5 text-[#52321b] shadow-sm placeholder:text-[#bebab7] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-[#52321b]"
              >
                Food Description
              </label>
            </div>
            <div className="mt-2">
              <input
                id="description"
                name="description"
                type="text"
                required
                placeholder="Enter food price"
                className="block w-full bg-slate-100 px-2 outline-none rounded-md border-0 py-1.5 text-[#52321b] shadow-sm placeholder:text-[#bebab7] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#52321b] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardForm;
