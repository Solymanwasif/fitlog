export default function Hero(){


  return(


    <section className="bg-black text-white px-6 py-16">


      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">






        <div>





          <p className="text-[#ccff00] text-sm tracking-widest mb-5">

            WORKOUT LIBRARY

          </p>








          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            TRAIN WITH INTENT.

            <br />

            LOG EVERY SET.

          </h1>








          <p className="text-gray-400 mt-6 text-lg max-w-xl">

            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work add up.

          </p>








          <a

            href="#library"

            className="inline-flex mt-8 bg-[#ccff00] text-black px-6 py-3 rounded-full font-bold"

          >

            BROWSE WORKOUTS

          </a>







        </div>









        <div>



          <img

            src="/banner.png"

            alt="Workout banner"

            className="w-full"

          />



        </div>






      </div>





    </section>


  );


}