import AdminAvatar from "./AdminAvatar";
import Icon from "./Icon";
import { orderImages } from "../../data/dashboardData";

function OrderRow({ order, index }) {
  const images = order.images?.length ? order.images : orderImages;
  const extraCount = order.extraItemsCount ?? 2;

  return (
    <article className="order-row">
      <div className="order-row__content">
        <div className="order-row__meta">
          <strong>{order.id}</strong>
          <span>{order.time}</span>
        </div>

        <div className="order-row__customer">
          <AdminAvatar small />
          <div>
            <p>{order.customerName}</p>
            <span>{order.customerType}</span>
          </div>
        </div>

        <strong className="order-row__price">{order.price}</strong>

        <div className="order-row__images">
          <span className="order-row__images-count">+{extraCount}</span>

          <div className="order-row__images-item order-row__images-item--1">
            <img src={images[0]} alt="طبق مطلوب" />
          </div>

          <div className="order-row__images-item order-row__images-item--2">
            <img src={images[1] || orderImages[(index + 1) % orderImages.length]} alt="طبق مطلوب" />
          </div>
        </div>

        <div className="order-row__dish">
          <p>{order.dishName}</p>
          <span>
            {order.dishDetails}
            <small>+{extraCount}</small>
          </span>
        </div>

        <div className="order-row__category">
          <p>{order.categoryName}</p>
          <span>{order.categoryDetails}</span>
        </div>

        <div className="order-row__actions">
          <button type="button" aria-label="حذف الطلب">
            <Icon name="trash" size={16} />
          </button>
          <button type="button" aria-label="عرض الطلب">
            <Icon name="eye" size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default OrderRow;
