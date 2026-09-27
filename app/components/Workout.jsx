import Link from "next/link";

export default function Workout({workout}){

  return(

    <Link href={`/workout/${workout.id}`}>

      <div className="bg-[#151515] rounded-xl overflow-hidden border border-[#222]">

        <img

          src={workout.image}

          alt={workout.name}

          className="w-full h-52 object-cover"

        />

        <div className="p-5">

          <div className="flex gap-2 mb-4 flex-wrap">

            {

              workout.muscleGroups?.map((item,index)=>(

                <span

                  key={index}

                  className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase"

                >

                  {item}

                </span>

              ))

            }

          </div>

          <h3 className="text-white text-lg font-bold uppercase">

            {workout.name}

          </h3>

          <p className="text-gray-400 text-sm mt-2">

            {workout.equipment}

          </p>

          <div className="border-t border-[#292929] mt-5 pt-4 flex justify-between text-sm text-gray-400">

            <span>

              ◷ {workout.duration} lowest

            </span>

            <span>

              ● {workout.caloriesBurned} kcal

            </span>

            <span>

              ☆ {workout.rating}

            </span>

          </div>

        </div>

      </div>

    </Link>

  );

}