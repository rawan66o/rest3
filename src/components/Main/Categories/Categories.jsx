import { useEffect, useState } from "react";
import "./Categories.css";

import CategoryCard from "../CategoryCard/CategoryCard";
import { categories as localCategories } from "../../../data/restaurantData";
import { API, getArray, getJson } from "../../../api";

const categoriesTitleImg = `${process.env.PUBLIC_URL || ""}/images/categories.png`;

function normalizeCategory(category, index) {
  const fallbackCategory = localCategories[index % localCategories.length];

  return {
    id: category.id || category.uuid || category._id || index + 1,
    title: category.name || category.title || "صنف",
    description: category.description || "",
    count: `${Number(category.products_count || 0)} صنف في المطعم`,
    image:
      category.image_url ||
      category.image ||
      category.photo ||
      fallbackCategory?.image ||
      "",
  };
}

function Categories() {
  const [categoryList, setCategoryList] = useState(localCategories);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCategories() {
      try {
        setLoading(true);
        setError("");

        const result = await getJson(API.categories);
        const apiCategories = getArray(result);

        if (apiCategories.length > 0) {
          setCategoryList(apiCategories.map(normalizeCategory));
        } else {
          setCategoryList(localCategories);
        }
      } catch (err) {
        console.log("Categories API error:", err.message);
        setError("تعذر جلب الأصناف، تم عرض بيانات تجريبية مؤقتاً.");
        setCategoryList(localCategories);
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  return (
    <section className="categories" id="categories">
      <div className="categories__title">
        <img src={categoriesTitleImg} alt="الأصناف" />
      </div>

      {loading && <p className="categories__message">جاري تحميل الأصناف...</p>}

      {error && (
        <p className="categories__message categories__message--error">
          {error}
        </p>
      )}

      <div className="categories__grid">
        {categoryList.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <button type="button" className="categories__button">
        عرض الأصناف
      </button>
    </section>
  );
}

export default Categories;