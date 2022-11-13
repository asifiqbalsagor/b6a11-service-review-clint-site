import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Form, useLoaderData } from "react-router-dom";
import ShawReview from "../../Components/AddReviw/ShawReview";
import { AuthContext } from "../../Login&Register/Login/Login";

const AddReviewFom = () => {
  const { user } = useContext(AuthContext);
  const { title, _id } = useLoaderData();
  const [reviews, setReviews] = useState([]);

  const handleReviewFrom = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = (user && user.email) || "unregistered";
    const rating = from.rating.value;
    const message = from.message.value;

    const reviews = {
      foodId: _id,
      FoodName: title,
      email: email,
      rating: rating,
      message: message,
      photo: user.photoURL,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Your Review Successfully ");
          from.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id, reviews]);

  return (
    <div className="">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {reviews.map((review) => (
          <ShawReview key={review._id} review={review}></ShawReview>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 mg:grid-cols-2 ms:grid-cols-1 items-center container mx-auto ">
        {user && user.email && (
          <section className="p-6 dark:text-gray-100 ">
            <h2>Your Review food name: {title}</h2>
            <Form
              onSubmit={handleReviewFrom}
              className="  rounded-md shadow bg-cyan-300 p-8 ng-untouched ng-pristine ng-valid"
            >
              <h2 className=" text-3xl text-center mb-3 font-bold leading-tight">
                Add Your Review{" "}
              </h2>
              <div className=" "></div>
              <div>
                <label for="message" className="block mb-1 ml-1">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  defaultValue={user && user.email}
                  readOnly
                  className="block w-full p-5 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
                ></input>
              </div>
              <div>
                <label className="block mb-1 ml-1">Rating</label>
                <input
                  name="rating"
                  type="text"
                  placeholder="Rating up 1 to 5 "
                  className="block w-full p-5 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
                ></input>
              </div>
              <div>
                <label for="message" className="block mb-1 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  type="text"
                  placeholder="Message..."
                  className="block w-full p-5 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 text-white py-2 mt-6 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 bg-blue-700"
                >
                  Send Your Review
                </button>
              </div>
            </Form>
          </section>
        )}

        
        {!user && (
          <h1 className="text-center text-5xl opacity-50 font-semibold ">
            Please Login to add a review
          </h1>
        )}
      </div>
    </div>
  );
};

export default AddReviewFom;
