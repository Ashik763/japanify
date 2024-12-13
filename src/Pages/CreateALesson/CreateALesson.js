import React, { useState } from "react";
import { toast } from "react-toastify";
import Cookies from 'js-cookie'
import { Helmet } from "react-helmet";

const CreateALesson = () => {
  const [lessonName, setLessonName] = useState("");
  const [lessonNumber, setLessonNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (lessonName && lessonNumber) {

        fetch('https://myapp-zht4-qebyv7ha4-ashik763s-projects.vercel.app/lessons/create-a-lesson', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
                Authorization: Cookies.get('token') ,
            },
            body: JSON.stringify({
              name: lessonName,
              lessonNo: lessonNumber
            })
          })
          .then(res => res.json())
            .then((res) => {
            
              setLessonName("");
              setLessonNumber("");
              toast(res.message)
                
            
              
      
            })
            .catch((error) => {
                toast("Something went wrong");
            }).finally(() => {
            //   setLoading(false);
            });


    } else {
      toast("Please fill in all fields.");
    }
  };
//   from-blue-500 to-sky-50
const Title = "Create A lesson"
  return (
    <div className="min-h-1/2 flex  justify-center mt-20 bg-gradient-to-r ">
      <Helmet> 
           <title> {Title} </title>
        </Helmet>
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Create a New Lesson</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="lessonName"
              className="block text-gray-700 font-medium mb-2"
            >
              Lesson Name
            </label>
            <input
              type="text"
              id="lessonName"
              value={lessonName}
              onChange={(e) => setLessonName(e.target.value)}
              placeholder="e.g., Basic Greetings"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lessonNumber"
              className="block text-gray-700 font-medium mb-2"
            >
              Lesson Number
            </label>
            <input
              type="number"
              id="lessonNumber"
              value={lessonNumber}
              onChange={(e) => setLessonNumber(e.target.value)}
              placeholder="e.g., 1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create Lesson
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateALesson;