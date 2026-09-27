"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import Loading from "./components/Loading";

export default function Home(){

  const [workouts,setWorkouts] = useState([]);

  const [loading,setLoading] = useState(true);

  const [sort,setSort] = useState("duration");

  useEffect(()=>{

    async function loadWorkouts(){

      try{

        const response = await fetch(
          "https://api.api-store.workers.dev/api/fitlog"
        );

        const data = await response.json();

        setWorkouts(data);

        setLoading(false);

      }

      catch(error){

        console.log(error);

        setLoading(false);

      }

    }

    loadWorkouts();

  },[]);

  function handleSort(value){

    setSort(value);

    const sorted = [...workouts];

    if(value === "duration"){

      sorted.sort(

        (a,b)=>

        Number(a.duration) - Number(b.duration)

      );

    }

    if(value === "calories"){

      sorted.sort(

        (a,b)=>

        Number(a.caloriesBurned) - Number(b.caloriesBurned)

      );

    }

    if(value === "rating"){

      sorted.sort(

        (a,b)=>

        Number(b.rating) - Number(a.rating)

      );

    }

    setWorkouts(sorted);

  }

  return(

    <main>

      <Hero />

      <section

        id="library"

        className="bg-black text-white px-6 py-16"

      >

        <div className="maximum-w-7xl mx-auto">

          <div className="flex justify-between items-center gap-5">

            <div>

              <h2 className="text-4xl font-bold">

                THE LIBRARY

              </h2>

              <p className="text-gray-400 mt-3">

                Twelve lifts covering every major muscle group.

              </p>

            </div>

          <div  className="relative" >
                  <select

              value={sort}

              onChange={(e)=>handleSort(e.target.value)}

              className="bg-[#111] border border-gray-700 px-4 py-2 pr-12 pl-6 rounded-full  appearance-none text-sm"

            >

              <option value="duration">

                Sort By Duration

              </option>

              <option value="calories">

                Sort By Calories

              </option>

              <option value="rating">

                Sort By Rating

              </option>

            </select>
               <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">

                ▼

            </span>
          </div>

          </div>

          {

            loading ?

            <Loading />

            :

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">

              {

                workouts.map(workout=>(

                  <Workout

                    key={workout.id}

                    workout={workout}

                  />

                ))

              }

            </div>

          }

        </div>

      </section>

    </main>

  );

}