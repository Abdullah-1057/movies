import "./globals.css";
import { Montserrat} from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const montserrat = Montserrat({
  weight: ["400","700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-8 my-8`}>
         
          <h1>helo</h1>
          <div>
             <nav>
            <ul>
              <li className="font-montserrat">
                <h1 className="text-lg p-2">Home</h1>
              </li>
              <li className={`${montserrat.className}`}>
                <h1>About</h1>
              </li>
              <li className=" font-montserrat">
                <h1>Contact</h1>
              </li>
            </ul>
          </nav>
          </div>
        {children}
      </body>
    </html>
  );
}
