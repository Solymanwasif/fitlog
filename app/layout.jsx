import "./globals.css";
import { FitlogProvider } from "./context/FitlogContext";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export const metadata = {

  title: "FitLog",

  description: "Workout Library",

};

export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body>

        <FitlogProvider>

          <Navbar />

          {children}

          <Footer />

          <Toaster position="top-right" />

        </FitlogProvider>

      </body>

    </html>

  );

}