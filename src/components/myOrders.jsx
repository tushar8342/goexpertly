import React, { useEffect, useState } from 'react';
import Layout from './layout';
import { useAuth } from '../context/AuthProvider';
import axios from 'axios';

function MyOrders() {
    const { token, user } = useAuth();
    const [orders, setOrders] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(token,user)

    useEffect(() => {
        if (token && user) {
            axios.get(`https://api.goexpertly.com/users/${user}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                setOrders(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
        }
    }, [token, user]);

    if (loading) {
        return <Layout>Loading...</Layout>;
    }

    if (error) {
        return <Layout>Error: {error.message}</Layout>;
    }

    return (
        <Layout>
            <h1>My Orders</h1>
            {orders ? (
                <div>
                    {/* Render your orders here */}
                    {JSON.stringify(orders, null, 2)}
                </div>
            ) : (
                <p>No orders found.</p>
            )}
        </Layout>
    );
}

export default MyOrders;
