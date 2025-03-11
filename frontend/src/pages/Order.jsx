import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Order = () => {
    const navigate = useNavigate();
    const [order, setOrder] = useState({
        products: [
            { name: "Laptop", price: 1200, quantity: 1 },
            { name: "Mouse", price: 50, quantity: 2 }
        ]
    });

    const handleOrder = async () => {
        try {
            await axios.post("http://localhost:8000/orders/create", order, { withCredentials: true });
            alert("Order placed successfully!");
            navigate("/");
        } catch (error) {
            console.error("Order failed:", error);
            alert("Failed to place order.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Place Your Order</h2>
                <ul>
                    {order.products.map((product, index) => (
                        <li key={index} className="text-center">{product.name} - ${product.price} x {product.quantity}</li>
                    ))}
                </ul>
                <button 
                    onClick={handleOrder}
                    className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300 mt-6"
                >
                    Confirm Order
                </button>
            </div>
        </div>
    );
};

export default Order;
