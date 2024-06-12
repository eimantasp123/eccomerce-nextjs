import "@/app/_styles/globals.css";
import Footer from "./_components/Footer";
// import Navbar from "./_components/Navbar";
import TopBar from "./_components/NavBar/TopBar";
import NavbarNew from "./_components/NavBar/Navbar";

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
        <NavbarNew />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
