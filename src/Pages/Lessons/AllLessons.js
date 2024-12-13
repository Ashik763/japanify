
import { TorusIcon as Torii } from 'lucide-react'
import LessonCard  from './LessonCard';
import { JapanesePattern } from './JapanesePattern';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Spinner from '../Shared/Spinner/Spinner';

export default  function AllLessons() {
  const [loading,setLoading] = useState(true);

 

  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    fetch("https://myapp-zht4-qebyv7ha4-ashik763s-projects.vercel.app/lessons/all", {
      method: "GET", 
      headers: {
        "Content-Type": "application/json", 
        Authorization: Cookies.get('token') ,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setLessons(data);
      });
  }, []);

  if(loading){
    return <Spinner></Spinner>
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-sky-50">
      <JapanesePattern />
      <div className=" relative mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <Torii className="mx-auto h-16 w-16 text-sky-500" />
          <h1 className="mt-4 text-4xl font-bold text-gray-800">日本語レッスン</h1>
          <p className="mt-2 text-xl text-gray-600">Japanese Lessons</p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {lessons.map((lesson) => (
            <LessonCard key={lesson._id} lesson={lesson} />
          ))}
        </div>
      </div>
    </div>
  )
}

