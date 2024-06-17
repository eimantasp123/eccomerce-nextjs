import "../app/_styles/globals.css";
import Footer from "./_components/Footer";
import TopBar from "./_components/NavBar/TopBar";
import Navbar from "./_components/NavBar/Navbar";

export const metadata = {
  title: {
    template: "%s - Tronix Ecommerce",
    default: "Welcome / Tronix Ecommerce",
  },
  description: "Modern Tronix Ecommerce website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <TopBar />
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
