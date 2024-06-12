import FooterSection from "../FooterComponents/FooterSection";
import {
  megaMenuAllAccessories,
  megaMenuAllActivewear,
  megaMenuAllClothing,
  megaMenuAllNewArrivals,
  megaMenuAllShoes,
} from "./MegaMenuContent/MegaAllProductsJSON";

function MegaMenuAllProducts() {
  return (
    <div className="flex justify-start gap-32 xl:gap-20 2xl:gap-32">
      <div>
        <FooterSection
          list={megaMenuAllNewArrivals}
          label="NEW ARRIVALS"
          labelSize="text-sm"
          linkSize="text-sm"
        />
      </div>
      <div>
        <FooterSection
          list={megaMenuAllClothing}
          label="CLOTHING"
          labelSize="text-sm"
          linkSize="text-sm"
        />
      </div>
      <div>
        <FooterSection
          list={megaMenuAllShoes}
          label="SHOES"
          labelSize="text-sm"
          linkSize="text-sm"
        />
      </div>
      <div>
        <FooterSection
          list={megaMenuAllAccessories}
          label="ACCESSORIES"
          labelSize="text-sm"
          linkSize="text-sm"
        />
      </div>
      <div>
        <FooterSection
          list={megaMenuAllActivewear}
          label="ACTIVEWEAR"
          labelSize="text-sm"
          linkSize="text-sm"
        />
      </div>
    </div>
  );
}

export default MegaMenuAllProducts;
