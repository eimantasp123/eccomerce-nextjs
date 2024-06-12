import FooterSection from "../FooterComponents/FooterSection";
import {
  megaMenuMenActivewear,
  megaMenuMenBottoms,
  megaMenuMenSuits,
  megaMenuMenTops,
} from "./MegaMenuContent/MegaMenJSON";

function MegaMenuMen() {
  return (
    <div className="flex justify-start gap-32 xl:gap-20 2xl:gap-32">
      <div>
        <FooterSection
          list={megaMenuMenTops}
          label="TOPS"
          labelSize="text-sm"
          linkSize="text-sm"
        />
      </div>
      <div>
        <FooterSection
          list={megaMenuMenBottoms}
          label="BOTTOMS"
          labelSize="text-sm"
          linkSize="text-sm"
        />
      </div>
      <div>
        <FooterSection
          list={megaMenuMenActivewear}
          label="ACTIVEWEAR"
          labelSize="text-sm"
          linkSize="text-sm"
        />
      </div>
      <div>
        <FooterSection
          list={megaMenuMenSuits}
          label="SUITS"
          labelSize="text-sm"
          linkSize="text-sm"
        />
      </div>

      <div
        className="relative hidden w-[400px] cursor-pointer flex-col items-center justify-center xl:flex"
        style={{
          backgroundImage: "url('/megamenuMEN.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-0 flex h-14 w-full items-center justify-center bg-stone-800 bg-opacity-50 text-sm tracking-wide text-white backdrop-blur-md">
          <span>PERFORMANCE JACKETS</span>
        </div>
      </div>
    </div>
  );
}

export default MegaMenuMen;
