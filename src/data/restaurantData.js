const publicImage = (fileName) =>
  `${process.env.PUBLIC_URL || ""}/images/${encodeURIComponent(fileName)}`;

export const navLinks = [
  {
    id: 1,
    title: "القائمة",
    href: "#",
    active: true,
  },
  {
    id: 2,
    title: "الأصناف",
    href: "#categories",
  },
  {
    id: 3,
    title: "الأكثر طلباً",
    href: "#popular",
  },
  {
    id: 4,
    title: "تواصل معنا",
    href: "#contact",
  },
];

export const popularMeals = [
  {
    id: 1,
    title: "فروج مشوي على الفحم",
    description: "دجاج مندي مع أرز بسمتي",
    price: "250,00",
    currency: "رس",
    oldPrice: "350,00",
    image: publicImage("meal.png"),
    discount: "-25%",
  },
  {
    id: 2,
    title: "فروج مشوي على الفحم",
    description: "دجاج مندي مع أرز بسمتي",
    price: "250,00",
    currency: "رس",
    oldPrice: "350,00",
    image: publicImage("meal.png"),
    discount: "-25%",
  },
  {
    id: 3,
    title: "فروج مشوي على الفحم",
    description: "دجاج مندي مع أرز بسمتي",
    price: "250,00",
    currency: "رس",
    oldPrice: "350,00",
    image: publicImage("meal.png"),
    discount: "-25%",
  },
];

export const categories = [
  {
    id: 1,
    title: "بيتزا",
    count: "9 صنف في المطعم",
    image: publicImage("pizza.png"),
  },
  {
    id: 2,
    title: "برغر",
    count: "6 صنف في المطعم",
    image: publicImage("burger.png"),
  },
  {
    id: 3,
    title: "سوشي",
    count: "10 صنف في المطعم",
    image: publicImage("sushi.png"),
  },
  {
    id: 4,
    title: "دجاج",
    count: "16 صنف في المطعم",
    image: publicImage("chicken.png"),
  },
  {
    id: 5,
    title: "عصائر طبيعية",
    count: "9 صنف في المطعم",
    image: publicImage("juice.png"),
  },
  {
    id: 6,
    title: "مقبلات",
    count: "20 صنف في المطعم",
    image: publicImage("appetizer.png"),
  },
  {
    id: 7,
    title: "حلويات",
    count: "7 صنف في المطعم",
    image: publicImage("dessert.png"),
  },
  {
    id: 8,
    title: "مشروبات ساخنة",
    count: "9 صنف في المطعم",
    image: publicImage("hot-drink.png"),
  },
];