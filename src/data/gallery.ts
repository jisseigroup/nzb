/** Gallery images in `public/gallery/`; paths are encoded for spaces in filenames. */
export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

function g(file: string, alt: string, width = 1200, height = 800): GalleryImage {
  return {
    src: `/gallery/${encodeURIComponent(file)}`,
    alt,
    width,
    height,
  };
}

export const localGalleryImages: GalleryImage[] = [
  g("nzb 0.webp", "Burger with lettuce and sesame bun"),
  g("nzb 1.webp", "Two burgers and fries on a wooden board"),
  g("nzb 2.webp", "Crispy chicken-style burger with sauce"),
  g("nzb 3.webp", "Tall stacked burger with greens"),
  g("nzb 4.webp", "Sliders and patties on a tray"),
  g("nzb 5.webp", "Restaurant counter and signage"),
  g("nzb 6.webp", "Outdoor seating and menu board"),
  g("nzb 7.webp", "Gourmet burger with fries on a blue plate"),
  g("nzb 8.webp", "Promotional burger with dramatic lighting"),
  g("nzb 9.webp", "Beef burger with melted cheese"),
  g("nzb 10.webp", "Crispy chicken burger with lettuce"),
  g("nzb 11.webp", "Classic burger with lettuce and tomato"),
  g("nzb 12.jpg", "Breaded patty burger with sauce"),
  g("nzb 13.webp", "Bigg Burger storefront exterior"),
];

const placeholderGallery: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    alt: "Gourmet burger with cheese and pickles",
    width: 1200,
    height: 800,
  },
];

export function getGalleryImages(): GalleryImage[] {
  return localGalleryImages.length > 0 ? localGalleryImages : placeholderGallery;
}

export const heroImage: GalleryImage = {
  src: `/gallery/${encodeURIComponent("nzb 8.webp")}`,
  alt: "Bigg Burger New Zealand — signature burger",
  width: 1920,
  height: 1280,
};
