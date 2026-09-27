export default function Footer(){


  return(


    <footer className="bg-black border-t border-[#222] text-white py-8">





      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5">






        <div className="flex items-center gap-3">





          <img

            src="/logo.png"

            alt="Fitlog logo"

            className="w-7 h-7"

          />






          <span className="text-xl font-bold tracking-wider">

            FITLOG

          </span>






        </div>









        <p className="text-gray-400 text-sm text-center">

          © 2026 FitLog — Workout Library. Train hard, log honest.

        </p>







      </div>






    </footer>


  );


}