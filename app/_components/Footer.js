import DesktopFooter from "./FooterComponents/DesktopFooter";
import MobileFooter from "./FooterComponents/MobileFooter";

function Footer() {
  return (
    <>
      <div className="hidden lg:flex">
        <DesktopFooter />
      </div>
      <div className="lg:hidden">
        <MobileFooter />
      </div>
    </>
  );
}

export default Footer;
