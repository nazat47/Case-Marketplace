// bg-blue-900 border-blue-900
// bg-zinc-900 border-zinc-900
// bg-rose-900 border-rose-900

import { PRODUCT_PRICES } from "@/config/product";

export const COLORS = [
  {
    label: "Black",
    value: "black",
    tw: "zinc-900",
  },
  {
    label: "Blue",
    value: "blue",
    tw: "blue-900",
  },
  {
    label: "Rose",
    value: "rose",
    tw: "rose-900",
  },
] as const;

export const MODELS = {
  name: "models",
  options: [
    { label: "Iphone X", value: "iphonex" },
    { label: "Iphone 11", value: "iphone11" },
    { label: "Iphone 12", value: "iphone12" },
    { label: "Iphone 13", value: "iphone13" },
    { label: "Iphone 14", value: "iphone14" },
    { label: "Iphone 15", value: "iphone15" },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicon",
      value: "silicon",
      description: undefined,
      price: PRODUCT_PRICES.material.silicon,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
};
export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
};
