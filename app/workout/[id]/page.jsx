"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CalendarPlus, Bookmark } from "lucide-react";
import { useFitlog } from "../../context/FitlogContext";
import Loading from "../../components/Loading";


export default function WorkoutDetails(){


  const {id} = useParams();



  const [workout,setWorkout] = useState(null);

  const [loading,setLoading] = useState(true);



  const [added,setAdded] = useState(false);

  const [isSaved,setIsSaved] = useState(false);




  const {

    addToPlan,

    addToSaved

  } = useFitlog();








  useEffect(()=>{


    async function loadWorkout(){


      try{


        const response = await fetch(

          `https://api.api-store.workers.dev/api/fitlog/${id}`

        );


        const data = await response.json();


        setWorkout(data);


        setLoading(false);



      }


      catch(error){


        console.log(error);

        setLoading(false);


      }



    }



    loadWorkout();



  },[id]);







  if(loading){

    return <Loading />;

  }






  if(!workout){

    return(

      <main className="bg-black min-h-screen text-white p-10">

        Workout not found

      </main>

    );

  }







  function handlePlan(){


    addToPlan(workout);

    setAdded(true);


  }





function handleSave(){

  addToSaved(workout);

  setIsSaved(true);

}








  return(


    <main className="bg-black min-h-screen text-white px-6 py-10">



      <div className="max-w-7xl mx-auto border border-gray-800 p-5">





        <div className="grid lg:grid-cols-2 gap-8">





          <div>


            <img

              src={workout.image}

              alt={workout.name}

              className="w-full h-full max-h-[600px] object-cover rounded-lg"

            />


          </div>








          <div>




            <h1 className="text-4xl font-bold uppercase">

              {workout.name}

            </h1>







            <p className="text-gray-400 mt-4">

              {workout.description}

            </p>








            <div className="flex gap-2 mt-5 flex-wrap">


              {

                workout.muscleGroups.map((item,index)=>(


                  <span

                    key={index}

                    className="bg-[#ccff00] text-black px-3 py-1 rounded-full text-xs font-bold uppercase"

                  >

                    {item}

                  </span>


                ))

              }


            </div>









            <div className="bg-[#151515] rounded-xl mt-6 overflow-hidden">


              {

                [

                  ["EQUIPMENT", workout.equipment],

                  ["DIFFICULTY", workout.difficulty],

                  ["SETS", workout.sets],

                  ["REPS", workout.reps],

                  ["DURATION", `${workout.duration} min`],

                  ["CALORIES", `${workout.caloriesBurned} kcal`],

                  ["RATING", workout.rating]

                ].map((item,index)=>(



                  <div

                    key={index}

                    className="flex justify-between px-5 py-4 border-b border-gray-800 text-sm"

                  >



                    <span className="text-gray-400">

                      {item[0]}

                    </span>





                    <span>

                      {item[1]}

                    </span>




                  </div>



                ))

              }



            </div>









            <h2 className="font-bold mt-8 mb-4">

              INSTRUCTIONS

            </h2>







            <ol className="space-y-3 text-gray-400 text-sm">


              {

                workout.instructions.map((step,index)=>(


                  <li key={index}>

                    {index + 1}. {step}

                  </li>


                ))

              }


            </ol>









            <div className="flex flex-wrap gap-4 mt-8">





              <button

                onClick={handlePlan}

                className="bg-[#ccff00] text-black px-5 py-3 rounded-full font-bold text-sm flex items-center gap-2"

              >

                <CalendarPlus size={16}/>


                {

                  added

                  ?

                  "Added to today's plan ✓"

                  :

                  "Add to today's plan"

                }



              </button>







                  <button

                    onClick={handleSave}

                    className="border border-gray-700 px-5 py-3 rounded-full text-sm flex items-center gap-2"

                  >


                    <Bookmark size={16}/>


                    {

                      isSaved

                      ?

                      "Saved ✓"

                      :

                      "Save"

                    }



                  </button>







            </div>






          </div>






        </div>






      </div>





    </main>


  );


}