export const restaurant = {
  name: "Bigg Burger New Zealand",
  tagline: "Crossing Republik · Ghaziabad",
  address:
    "GF-03, Paramount Spectrum, Dunduhaida, Crossing Republik, Ghaziabad",
  phoneDisplay: "+91 88033 39339",
  phoneTel: "+918803339339",
  zomatoUrl:
    "https://www.zomato.com/ncr/bigg-burger-new-zealand-crossing-republik-ghaziabad",
  swiggyUrl:
    "https://www.swiggy.com/restaurants/bigg-burger-new-zealand-kfc-market-road-crossing-republic-noida-222704",
  cuisine: "Burger",
  opensAt: "12 noon",
  diningRating: "4.4",
  diningCount: "3,466+",
  avgOrder: "₹150",
  avgOrderNote: "Exclusive of applicable taxes and charges, if any",
  topDishes: [
    "Cheese Burger Combo",
    "Turkish Chicken",
    "Chicken Burgers",
    "Onion Rings",
    "Cheesecake",
    "Peri Peri Fries",
  ],
  knownFor: [
    "Tasty burgers & welcoming service",
    "Tamper-proof packaging",
    "Contactless delivery",
    "Thoughtful food packaging",
    "Weekend brunch",
    "Generous portions",
  ],
  services: [
    "Lunch & dinner",
    "Home delivery",
    "Takeaway",
    "Vegetarian friendly",
    "No on-site seating",
  ],
  menuNote:
    "Full menus with prices are on Zomato and Swiggy.",
} as const;

export const menuCategories = [
  {
    title: "Signatures",
    subtitle: "Guest favourites",
    items: [
      { name: "Cheese Burger Combo", note: "Combo meal" },
      { name: "Turkish Chicken", note: "Bold spices" },
      { name: "Chicken Burgers", note: "Classic & loaded" },
    ],
  },
  {
    title: "Sides & more",
    subtitle: "Perfect pairings",
    items: [
      { name: "Onion Rings", note: "Crisp golden" },
      { name: "Peri Peri Fries", note: "Spiced fries" },
      { name: "Cheesecake", note: "Sweet finish" },
    ],
  },
] as const;
