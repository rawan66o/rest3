const publicImage = (fileName) =>
  `${process.env.PUBLIC_URL || ""}/images/${encodeURIComponent(fileName)}`;

const createOrderDate = ({ daysAgo = 0, hour = 12, minute = 0 } = {}) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(hour, minute, 0, 0);
  return date.toISOString();
};

export const dashboardImages = {
  logo: publicImage("logo.png"),
  adminAvatar: publicImage("Ellipse 4.png"),
  notificationBell: publicImage("BellSimpleRinging.png"),

  statsChart: publicImage("Vector.png"),
  statsOrders: publicImage("Vector (1).png"),
  statsPreparing: publicImage("Vector (2).png"),
  statsRevenue: publicImage("Vector (3).png"),

  meal: publicImage("meal.png"),
  pizza: publicImage("pizza.png"),
  burger: publicImage("burger.png"),
  sushi: publicImage("sushi.png"),
  appetizer: publicImage("appetizer.png"),
  chicken: publicImage("chicken.png"),
  dessert: publicImage("dessert.png"),
  juice: publicImage("juice.png"),
  hotDrink: publicImage("hot-drink.png"),

  sidebarDashboard: publicImage("Vector(9).png"),
  sidebarMenu: publicImage("Vector(10).png"),
  sidebarOrders: publicImage("Vector(11).png"),
  sidebarUsers: publicImage("Vector(12).png"),
};

export const logo = dashboardImages.logo;

export const sidebarItems = [
  {
    title: "لوحة التحكم",
    icon: "dashboard",
    iconImage: dashboardImages.sidebarDashboard,
    active: true,
  },
  {
    title: "إدارة المينيو",
    icon: "menu",
    iconImage: dashboardImages.sidebarMenu,
  },
  {
    title: "إدارة الطلبات",
    icon: "orders",
    iconImage: dashboardImages.sidebarOrders,
  },
  {
    title: "إدارة المستخدمين",
    icon: "users",
    iconImage: dashboardImages.sidebarUsers,
  },
];

export const orderImages = [
  dashboardImages.meal,
  dashboardImages.pizza,
  dashboardImages.burger,
  dashboardImages.sushi,
  dashboardImages.chicken,
  dashboardImages.juice,
];

export const orders = [
  {
    id: "#ORD-1021",
    createdAt: createOrderDate({ daysAgo: 0, hour: 9, minute: 15 }),
    time: "منذ 3 دقائق",
    customerName: "اسم العميل",
    customerType: "زبون خارجي",
    status: "new",
    statusLabel: "طلب جديد",
    total: 40,
    price: "40 $",
    dishName: "مندي لحم * 3",
    dishTitle: "مندي",
    dishDetails: "مع سلطة روسية",
    categoryName: "الأطباق الرئيسية",
    categoryDetails: "مع السلطات",
    images: [dashboardImages.meal, dashboardImages.pizza, dashboardImages.chicken],
  },
  {
    id: "#ORD-1022",
    createdAt: createOrderDate({ daysAgo: 0, hour: 11, minute: 30 }),
    time: "منذ 6 دقائق",
    customerName: "أحمد",
    customerType: "زبون خارجي",
    status: "preparing",
    statusLabel: "قيد التحضير",
    total: 35,
    price: "35 $",
    dishName: "برغر * 2",
    dishTitle: "برغر",
    dishDetails: "مع بطاطا",
    categoryName: "الوجبات السريعة",
    categoryDetails: "طلب خارجي",
    images: [dashboardImages.burger, dashboardImages.pizza],
  },
  {
    id: "#ORD-1023",
    createdAt: createOrderDate({ daysAgo: 0, hour: 14, minute: 10 }),
    time: "منذ 10 دقائق",
    customerName: "محمد",
    customerType: "داخل المطعم",
    status: "completed",
    statusLabel: "مكتمل",
    total: 55,
    price: "55 $",
    dishName: "سوشي * 4",
    dishTitle: "سوشي",
    dishDetails: "مع صوص",
    categoryName: "الأطباق الرئيسية",
    categoryDetails: "طاولة 4",
    images: [dashboardImages.sushi, dashboardImages.meal],
  },
  {
    id: "#ORD-1024",
    createdAt: createOrderDate({ daysAgo: 0, hour: 18, minute: 25 }),
    time: "منذ 20 دقيقة",
    customerName: "سارة",
    customerType: "زبون خارجي",
    status: "pending",
    statusLabel: "قيد الانتظار",
    total: 28,
    price: "28 $",
    dishName: "بيتزا * 1",
    dishTitle: "بيتزا",
    dishDetails: "جبنة إضافية",
    categoryName: "الوجبات السريعة",
    categoryDetails: "طلب خارجي",
    images: [dashboardImages.pizza, dashboardImages.juice],
  },
  {
    id: "#ORD-1025",
    createdAt: createOrderDate({ daysAgo: 1, hour: 13, minute: 40 }),
    time: "أمس",
    customerName: "ليث",
    customerType: "داخل المطعم",
    status: "completed",
    statusLabel: "مكتمل",
    total: 62,
    price: "62 $",
    dishName: "بيتزا * 2",
    dishTitle: "بيتزا",
    dishDetails: "مع مشروبات",
    categoryName: "الوجبات السريعة",
    categoryDetails: "طاولة 2",
    images: [dashboardImages.pizza, dashboardImages.juice, dashboardImages.appetizer],
  },
  {
    id: "#ORD-1026",
    createdAt: createOrderDate({ daysAgo: 2, hour: 16, minute: 5 }),
    time: "منذ يومين",
    customerName: "نور",
    customerType: "زبون خارجي",
    status: "cancelled",
    statusLabel: "ملغى",
    total: 18,
    price: "18 $",
    dishName: "عصير * 3",
    dishTitle: "عصائر",
    dishDetails: "عصائر طبيعية",
    categoryName: "المشروبات",
    categoryDetails: "طلب خارجي",
    images: [dashboardImages.juice, dashboardImages.hotDrink],
  },
  {
    id: "#ORD-1027",
    createdAt: createOrderDate({ daysAgo: 4, hour: 20, minute: 10 }),
    time: "منذ 4 أيام",
    customerName: "رامي",
    customerType: "داخل المطعم",
    status: "completed",
    statusLabel: "مكتمل",
    total: 48,
    price: "48 $",
    dishName: "مندي دجاج * 2",
    dishTitle: "مندي",
    dishDetails: "مع أرز وسلطة",
    categoryName: "الأطباق الرئيسية",
    categoryDetails: "طاولة 6",
    images: [dashboardImages.chicken, dashboardImages.meal],
  },
  {
    id: "#ORD-1028",
    createdAt: createOrderDate({ daysAgo: 8, hour: 12, minute: 30 }),
    time: "منذ أسبوع",
    customerName: "خالد",
    customerType: "زبون خارجي",
    status: "completed",
    statusLabel: "مكتمل",
    total: 44,
    price: "44 $",
    dishName: "برغر * 3",
    dishTitle: "برغر",
    dishDetails: "مع بطاطا وصوص",
    categoryName: "الوجبات السريعة",
    categoryDetails: "طلب خارجي",
    images: [dashboardImages.burger, dashboardImages.appetizer],
  },
];

export const dashboardOrders = orders.map((order) => ({
  ...order,
  extraItemsCount: Array.isArray(order.images) ? order.images.length : 0,
}));

export const getOrderDate = (order) => {
  const value =
    order.createdAt ||
    order.created_at ||
    order.date ||
    order.orderDate ||
    order.createdDate;

  const date = value ? new Date(value) : new Date();

  return Number.isNaN(date.getTime()) ? new Date() : date;
};

export const getOrderStatus = (order) =>
  order.status || order.orderStatus || order.state || "new";

export const getOrderTotal = (order) => {
  const value = order.total || order.totalPrice || order.amount || order.price || 0;
  return Number(String(value).replace(/[^\d.]/g, "")) || 0;
};

export const getOrderImagesCount = (order) =>
  Array.isArray(order.images) ? order.images.length : 0;

const isSameDay = (dateA, dateB) =>
  dateA.getFullYear() === dateB.getFullYear() &&
  dateA.getMonth() === dateB.getMonth() &&
  dateA.getDate() === dateB.getDate();

const isSameWeek = (date, today) => {
  const firstDay = new Date(today);
  firstDay.setDate(today.getDate() - today.getDay());
  firstDay.setHours(0, 0, 0, 0);

  const lastDay = new Date(firstDay);
  lastDay.setDate(firstDay.getDate() + 6);
  lastDay.setHours(23, 59, 59, 999);

  return date >= firstDay && date <= lastDay;
};

export const filterOrdersByPeriod = (ordersList = dashboardOrders, period = "day") => {
  const today = new Date();

  return ordersList.filter((order) => {
    const orderDate = getOrderDate(order);

    if (period === "day") {
      return isSameDay(orderDate, today);
    }

    if (period === "yesterday") {
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      return isSameDay(orderDate, yesterday);
    }

    if (period === "week") {
      return isSameWeek(orderDate, today);
    }

    if (period === "month") {
      return (
        orderDate.getFullYear() === today.getFullYear() &&
        orderDate.getMonth() === today.getMonth()
      );
    }

    if (period === "year") {
      return orderDate.getFullYear() === today.getFullYear();
    }

    return true;
  });
};

export const filterOrdersByStatus = (ordersList = dashboardOrders, status = "all") => {
  if (status === "all") return ordersList;
  return ordersList.filter((order) => getOrderStatus(order) === status);
};

export const searchOrders = (ordersList = dashboardOrders, searchValue = "") => {
  const query = searchValue.trim().toLowerCase();

  if (!query) return ordersList;

  return ordersList.filter((order) => {
    const values = [
      order.id,
      order.customerName,
      order.customerType,
      order.dishName,
      order.dishTitle,
      order.categoryName,
      order.statusLabel,
      order.price,
    ];

    return values.some((value) =>
      String(value || "").toLowerCase().includes(query)
    );
  });
};

export const filterOrders = ({
  ordersList = dashboardOrders,
  period = "all",
  status = "all",
  searchValue = "",
} = {}) => {
  const periodOrders = filterOrdersByPeriod(ordersList, period);
  const statusOrders = filterOrdersByStatus(periodOrders, status);
  return searchOrders(statusOrders, searchValue);
};

export const calculateStats = (ordersList = dashboardOrders, period = "day") => {
  const filteredOrders = filterOrdersByPeriod(ordersList, period);

  const totalOrders = filteredOrders.length;

  const preparingOrders = filteredOrders.filter(
    (order) => getOrderStatus(order) === "preparing"
  ).length;

  const completedOrders = filteredOrders.filter(
    (order) => getOrderStatus(order) === "completed"
  ).length;

  const revenue = filteredOrders
    .filter((order) => getOrderStatus(order) !== "cancelled")
    .reduce((sum, order) => sum + getOrderTotal(order), 0);

  return [
    {
      title: "الإحصائيات",
      value: completedOrders,
      trend: "+12%",
      icon: "chart",
      iconImage: dashboardImages.statsChart,
      className: "stats-card--blue",
    },
    {
      title: "الطلبات",
      value: totalOrders,
      trend: "+8%",
      icon: "receipt",
      iconImage: dashboardImages.statsOrders,
      className: "stats-card--orange",
    },
    {
      title: "قيد التحضير",
      value: preparingOrders,
      trend: "+4%",
      icon: "chef",
      iconImage: dashboardImages.statsPreparing,
      className: "stats-card--yellow",
    },
    {
      title: "الإيرادات",
      value: `$${revenue}`,
      trend: "+18%",
      icon: "revenue",
      iconImage: dashboardImages.statsRevenue,
      className: "stats-card--green",
    },
  ];
};

export const stats = calculateStats(dashboardOrders, "day");

export const calculateOrdersChart = (
  ordersList = dashboardOrders,
  period = "month"
) => {
  const today = new Date();

  if (period === "day") {
    const hours = [8, 10, 12, 14, 16, 18, 20, 22];

    return hours.map((hour) => ({
      label: String(hour),
      value: ordersList.filter((order) => {
        const date = getOrderDate(order);
        return isSameDay(date, today) && date.getHours() === hour;
      }).length,
    }));
  }

  if (period === "week") {
    const labels = ["أحد", "إثن", "ثلا", "أرب", "خمي", "جمع", "سبت"];

    return labels.map((label, dayIndex) => ({
      label,
      value: ordersList.filter((order) => {
        const date = getOrderDate(order);
        return isSameWeek(date, today) && date.getDay() === dayIndex;
      }).length,
    }));
  }

  if (period === "year") {
    return Array.from({ length: 12 }, (_, index) => ({
      label: String(index + 1),
      value: ordersList.filter((order) => {
        const date = getOrderDate(order);
        return (
          date.getFullYear() === today.getFullYear() &&
          date.getMonth() === index
        );
      }).length,
    }));
  }

  return [5, 10, 15, 20, 25, 30].map((day) => ({
    label: String(day),
    value: ordersList.filter((order) => {
      const date = getOrderDate(order);

      return (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() > day - 5 &&
        date.getDate() <= day
      );
    }).length,
  }));
};

export const ordersChartData = calculateOrdersChart(dashboardOrders, "month");

export const calculateTopDishes = (ordersList = dashboardOrders) => {
  const colors = [
    "dish-color--yellow",
    "dish-color--orange",
    "dish-color--green",
    "dish-color--blue",
  ];

  const counts = ordersList.reduce((acc, order) => {
    const title = order.dishTitle || order.dishName || "طبق";
    acc[title] = (acc[title] || 0) + 1;
    return acc;
  }, {});

  const total =
    Object.values(counts).reduce((sum, count) => sum + count, 0) || 1;

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([title, count], index) => ({
      title,
      value: count,
      percent: `${Math.round((count / total) * 100)}%`,
      className: colors[index] || colors[0],
    }));
};

export const topDishes = calculateTopDishes(dashboardOrders);

export const statusOptions = [
  { value: "all", label: "كل الطلبات" },
  { value: "new", label: "طلبات جديدة" },
  { value: "pending", label: "قيد الانتظار" },
  { value: "preparing", label: "قيد التحضير" },
  { value: "completed", label: "مكتملة" },
  { value: "cancelled", label: "ملغاة" },
];

export const periodOptions = [
  { value: "day", label: "اليوم" },
  { value: "yesterday", label: "أمس" },
  { value: "week", label: "الأسبوع" },
  { value: "month", label: "الشهر" },
  { value: "year", label: "السنة" },
  { value: "all", label: "الكل" },
];

export const downloadOrdersInvoice = (ordersList = dashboardOrders) => {
  const rows = [
    [
      "رقم الطلب",
      "العميل",
      "الحالة",
      "الطبق",
      "القسم",
      "السعر",
      "عدد الصور",
      "التاريخ",
    ],
    ...ordersList.map((order) => [
      order.id,
      order.customerName,
      order.statusLabel || getOrderStatus(order),
      order.dishName,
      order.categoryName,
      order.price,
      getOrderImagesCount(order),
      getOrderDate(order).toLocaleDateString("ar-SY"),
    ]),
  ];

  const csvContent = rows
    .map((row) =>
      row.map((cell) => `"${String(cell || "").replaceAll('"', '""')}"`).join(",")
    )
    .join("\n");

  const blob = new Blob([`\uFEFF${csvContent}`], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `orders-${new Date().toISOString().slice(0, 10)}.csv`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};