import { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/orders`, { withCredentials: true });
                setOrders(res.data);
            } catch (error) {
                console.error("Error fetching orders:", error);
                alert("Failed to fetch orders.");
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    const updateStatus = async (orderId, newStatus) => {
        try {
            await axios.put(
                `http://localhost:8000/orders/${orderId}/status`,
                { status: newStatus },
                { withCredentials: true }
            );
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order._id === orderId ? { ...order, status: newStatus } : order
                )
            );
            alert("Order status updated!");
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update order status.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">Your Orders</h2>

                {loading ? (
                    <p className="text-center">Loading...</p>
                ) : orders.length === 0 ? (
                    <p className="text-center">No orders found.</p>
                ) : (
                    <ul className="space-y-4">
                        {orders.map((order) => (
                            <li key={order._id} className="p-4 border rounded-lg shadow-md">
                                <p><strong>Order ID:</strong> {order._id}</p>
                                <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
                                <p><strong>Status:</strong> {order.status}</p>

                                <label className="block mt-2 text-sm font-medium text-gray-700">Update Status</label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded-md mt-1"
                                    value={order.status}
                                    onChange={(e) => updateStatus(order._id, e.target.value)}
                                >
                                    <option value="pending">Pending</option>
                                    <option value="processing">Processing</option>
                                    <option value="shipped">Shipped</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Orders;
