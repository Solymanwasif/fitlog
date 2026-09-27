"use client";

import Link from "next/link";
import { useState } from "react";
import { useFitlog } from "../context/FitlogContext";


export default function MyPlan(){


  const {

    plan,

    saved,

    done,

    removeFromPlan,

    removeFromSaved,

    markDone

  } = useFitlog();





  const [active,setActive] = useState("plan");



  const data = active === "plan" ? plan : saved;





  const totalMinutes = plan.reduce(

    (sum,item)=>

    sum + Number(item.duration || 0),

    0

  );





  const totalCalories = plan.reduce(

    (sum,item)=>

    sum + Number(item.caloriesBurned || 0),

    0

  );







  return(


    <main className="bg-black min-h-screen text-white px-6 py-16">


      <div className="max-w-7xl mx-auto">





        <h1 className="text-5xl font-bold">

          MY PLAN

        </h1>





        <p className="text-gray-400 mt-3">

          Cap of five lifts for today. Finish them, then load more.

        </p>









        <div className="grid md:grid-cols-3 gap-5 mt-10">



          <div className="bg-[#111] p-6 rounded-xl">

            <p className="text-gray-400">
              Exercises
            </p>


            <h2 className="text-3xl font-bold">

              {plan.length}

            </h2>

          </div>







          <div className="bg-[#111] p-6 rounded-xl">

            <p className="text-gray-400">

              Minutes

            </p>


            <h2 className="text-3xl font-bold">

              {totalMinutes}

            </h2>


          </div>







          <div className="bg-[#111] p-6 rounded-xl">

            <p className="text-gray-400">

              Calories

            </p>


            <h2 className="text-3xl font-bold">

              {totalCalories}

            </h2>


          </div>




        </div>









        <div className="flex gap-5 mt-10">



          <button

            onClick={()=>setActive("plan")}

            className={

              active==="plan"

              ?

              "bg-[#ccff00] text-black px-5 py-2 rounded-full"

              :

              "border border-white px-5 py-2 rounded-full"

            }

          >

            Today&apos;s Plan

          </button>







          <button

            onClick={()=>setActive("saved")}

            className={

              active==="saved"

              ?

              "bg-[#ccff00] text-black px-5 py-2 rounded-full"

              :

              "border border-white px-5 py-2 rounded-full"

            }

          >

            Saved

          </button>




        </div>









        {

          data.length === 0 ?



          <div className="text-center py-20">


            <h2 className="text-3xl font-bold">

              NOTHING HERE YET

            </h2>





            <p className="text-gray-400 mt-3">

              Browse the library and add a lift to get today moving.

            </p>






            <Link

              href="/"

              className="inline-block mt-6 bg-[#ccff00] text-black px-6 py-3 rounded-full"

            >

              Go to workouts

            </Link>



          </div>







          :







          <div className="mt-8 space-y-4">



            {

              data.map(item=>(


                <div

                  key={item.id}

                  className="bg-[#111] border border-gray-800 rounded-xl p-4 flex items-center justify-between"

                >






                  <div className="flex items-center gap-4">



                    <img

                      src={item.image}

                      alt={item.name}

                      className="w-28 h-16 object-cover rounded-lg"

                    />







                    <div>


                      <h3 className="text-lg font-bold uppercase">

                        {item.name}

                      </h3>





                      <p className="text-gray-400 text-sm">

                        {item.equipment}

                      </p>





                      <div className="flex gap-4 text-sm text-gray-400 mt-2">


                        <span>

                          ◷ {item.duration} min

                        </span>



                        <span>

                          ● {item.caloriesBurned} kcal

                        </span>



                        <span>

                          ☆ {item.rating}

                        </span>



                      </div>




                    </div>




                  </div>









                  <div className="flex items-center gap-3">





                    <Link

                      href={`/workout/${item.id}`}

                      className="border border-gray-700 px-5 py-2 rounded-full text-sm"

                    >

                      View Details

                    </Link>









                    {

                      active==="plan" &&



                      <button

                        onClick={()=>markDone(item.id)}

                        className="bg-[#ccff00] text-black px-5 py-2 rounded-full text-sm font-bold"

                      >


                        {

                          done.includes(item.id)

                          ?

                          "✓ Completed"

                          :

                          "✓ Mark as Done"

                        }


                      </button>


                    }









                    <button

                      onClick={()=>{


                        if(active==="plan"){


                          removeFromPlan(item.id);


                        }

                        else{


                          removeFromSaved(item.id);


                        }


                      }}


                      className="text-gray-400 text-xl"

                    >

                      ×

                    </button>





                  </div>







                </div>


              ))

            }





          </div>




        }





      </div>




    </main>


  );


}