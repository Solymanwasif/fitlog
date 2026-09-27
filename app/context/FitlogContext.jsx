"use client";

import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


const FitlogContext = createContext();



export function FitlogProvider({ children }) {



  const [plan,setPlan] = useState(()=>{

    if(typeof window !== "undefined"){

      const oldPlan = localStorage.getItem("plan");

      return oldPlan ? JSON.parse(oldPlan) : [];

    }

    return [];

  });





  const [saved,setSaved] = useState(()=>{

    if(typeof window !== "undefined"){

      const oldSaved = localStorage.getItem("saved");

      return oldSaved ? JSON.parse(oldSaved) : [];

    }

    return [];

  });





  const [done,setDone] = useState([]);




  useEffect(()=>{

    localStorage.setItem(
      "plan",
      JSON.stringify(plan)
    );

  },[plan]);





  useEffect(()=>{

    localStorage.setItem(
      "saved",
      JSON.stringify(saved)
    );

  },[saved]);









  function addToPlan(workout){


    const alreadyAdded = plan.find(
      item => item.id === workout.id
    );


    if(alreadyAdded){

      toast.error("Already added to today's plan");

      return;

    }



    if(plan.length >= 5){

      toast.error("Maximum 5 workouts allowed");

      return;

    }



    setPlan([
      ...plan,
      workout
    ]);


    toast.success("Added to today's plan");


  }







  function addToSaved(workout){


    const alreadySaved = saved.find(
      item => item.id === workout.id
    );


    if(alreadySaved){

      toast.error("Already saved");

      return;

    }


    setSaved([
      ...saved,
      workout
    ]);


    toast.success("Saved");


  }







  function removeFromPlan(id){


    setPlan(
      plan.filter(
        item => item.id !== id
      )
    );


    toast.success("Removed from plan");


  }







  function removeFromSaved(id){


    setSaved(
      saved.filter(
        item => item.id !== id
      )
    );


    toast.success("Removed from saved");


  }







  function markDone(id){


    setDone([
      ...done,
      id
    ]);


    toast.success("Workout completed");


  }







  return(


    <FitlogContext.Provider


      value={{


        plan,

        saved,

        done,

        addToPlan,

        addToSaved,

        removeFromPlan,

        removeFromSaved,

        markDone


      }}


    >

      {children}

    </FitlogContext.Provider>


  );


}







export function useFitlog(){

  return useContext(FitlogContext);

}