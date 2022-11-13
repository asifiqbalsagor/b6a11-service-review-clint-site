import React from 'react';
import { useContext } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../Login&Register/Login/Login';

const AddService = () => {
  const {user} = useContext(AuthContext)
 const handleAddService = event => {
	event.preventDefault();
	const from = event.target;
	const title = from.title.value;
    const  price = from.price.value;
    const  email = from.email.value;
	const img = from.photoURL.value;

	const description = from.description.value
	const CreateService = {
		title,
		price,
		email,
		img,
		description
	}
  
	 fetch('http://localhost:5000/CreateService', {
		method: 'POST',
		headers:{
			'content-type': 'application/json'
		},
		body:JSON.stringify(CreateService)
	 })
	 .then(res => res.json())
	 .then(data => {
		console.log(data)
	     if(data.acknowledged){
			from.reset()
			alert('successfully add your Service')
		 }
	})
    .catch(error => console.log(error))      
 }

    return (
        <div>
            <section className="p-6 dark:text-gray-100 ">
	<Form onSubmit={handleAddService}  className="  rounded-md  bg-slate-900 shadow-2xl shadow-slate-500 text-white p-8 ng-untouched ng-pristine ng-valid">
		<h2 className=" text-3xl text-center mb-3 font-bold leading-tight">Add Service </h2>
	     <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 ">
		<div>
			<label for="name" className="block mb-1 ml-1">Title</label>
			<input  name='title' type="text" placeholder="Service Title " required className="block w-full p-2 rounded focus:outline-none focus:ring  text-black focus:ring-blue-600 dark:bg-gray-800" />
		</div>
		<div>
			<label  className="block mb-1 ml-1">Yur Email</label>
			<input  name='email' type="text" placeholder=" Your email" required className="block w-full p-2 rounded focus:outline-none focus:ring   text-black  focus:ring-blue-600  dark:bg-gray-800" defaultValue={user && user.email} readOnly />
		</div>
		
		<div>
			<label  className="block mb-1 ml-1">Photo Url</label>
			<input  name='photoURL' type="text" placeholder=" Service  Photo Url" required className="block w-full p-2 rounded focus:outline-none focus:ring   text-black  focus:ring-blue-600  dark:bg-gray-800"  />
		</div>
		
		<div>
			<label for="name" className="block mb-1 ml-1">Price</label>
			<input  name='price' type="text" placeholder=" Service  Price " required className="block w-full p-2 rounded focus:outline-none focus:ring  text-black focus:ring-blue-600  dark:bg-gray-800" />
		</div>
         </div>
		<div>
			<label for="message" className="block mb-1 ml-1 my-3">Description</label>
			<textarea required name='description' type="text" placeholder=" Service Description..." className="block w-full p-5 rounded autoexpand focus:outline-none focus:ring  text-black  focus:ring-violet-400 dark:bg-gray-800"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 text-black  py-2 mt-6 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-white hover:ring-violet-400 bg-blue-700">Send</button>
		</div>
	</Form>
</section>
        </div>
    );
};

export default AddService;