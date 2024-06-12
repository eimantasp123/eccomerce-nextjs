import FooterSection from "../FooterComponents/FooterSection";
import {
  megaMenuWomenAccessories,
  megaMenuWomenActivewear,
  megaMenuWomenClothing,
  megaMenuWomenShoes,
} from "./MegaMenuContent/MegaWomenJSON";

function MegaMenuWomen() {
  return (
    <div className="flex justify-start gap-32 xl:gap-20 2xl:gap-32">
      <div>
        <FooterSection
          list={megaMenuWomenClothing}
          label="CLOTHING"
          labelSize="text-sm"
          linkSize="text-sm"
        />
      </div>
      <div>
        <FooterSection
          list={megaMenuWomenShoes}
          label="SHOES"
          labelSize="text-sm"
          linkSize="text-sm"
        />
      </div>
      <div>
        <FooterSection
          list={megaMenuWomenAccessories}
          label="ACCESSORIES"
          labelSize="text-sm"
          linkSize="text-sm"
        />
      </div>
      <div>
        <FooterSection
          list={megaMenuWomenActivewear}
          label="ACTIVEWEAR"
          labelSize="text-sm"
          linkSize="text-sm"
        />
      </div>

      <div
        className="relative hidden w-[400px] cursor-pointer flex-col items-center justify-center xl:flex"
        style={{
          backgroundImage: "url('/megamenuWOMEN.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-0 flex h-14 w-full items-center justify-center bg-stone-800 bg-opacity-50 text-sm tracking-wide text-white backdrop-blur-md">
          <span>MODERN ELEGANCE</span>
        </div>
      </div>
    </div>
  );
}

export default MegaMenuWomen;
