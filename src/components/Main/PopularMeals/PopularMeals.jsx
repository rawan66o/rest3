import { useEffect, useState } from "react";
import "./PopularMeals.css";

import MealCard from "../MealCard/MealCard";
import { popularMeals as localMeals } from "../../../data/restaurantData";
import { API, getArray, getJson } from "../../../api";

const titleImg = `${process.env.PUBLIC_URL || ""}/images/title.png`;

function limitText(text, maxLength = 90) {
  if (!text) return "";
  const value = String(text).trim();

  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength)}...`;
}

function formatPrice(price) {
  const value = Number(price || 0);

  if (!value) {
    return "0";
  }

  return value.toLocaleString("ar-SY");
}

function normalizeProduct(product, index) {
  const fallbackMeal = localMeals[index % localMeals.length];

  return {
    id: product.id || product.uuid || product._id || index + 1,
    title: product.name || product.title || "طبق",
    description: limitText(product.description || fallbackMeal?.description || ""),
    price: formatPrice(product.price),
    currency: "ل.س",
    oldPrice: product.old_price ? formatPrice(product.old_price) : "",
    image: product.image_url || product.image || fallbackMeal?.image || "",
    discount: product.discount || fallbackMeal?.discount || "",
    category:
      product.category?.name ||
      product.category_name ||
      fallbackMeal?.category ||
      "",
  };
}

function PopularMeals() {
  const [meals, setMeals] = useState(localMeals);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const result = await getJson(API.products);
        const apiProducts = getArray(result);

        if (apiProducts.length > 0) {
          setMeals(apiProducts.map(normalizeProduct));
        } else {
          setMeals(localMeals);
        }
      } catch (err) {
        console.log("Products API error:", err.message);
        setError("تعذر جلب الأطباق، تم عرض بيانات تجريبية مؤقتاً.");
        setMeals(localMeals);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <section className="popular-meals" id="popular">
      <div className="popular-meals__container">
        <div className="popular-meals__title">
          <img src={titleImg} alt="الأكثر طلباً" />
        </div>

        {loading && <p className="popular-meals__message">جاري تحميل الأطباق...</p>}

        {error && (
          <p className="popular-meals__message popular-meals__message--error">
            {error}
          </p>
        )}

        <div className="popular-meals__grid">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularMeals;