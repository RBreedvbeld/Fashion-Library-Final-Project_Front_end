import React, { useEffect, useState} from "react"
import axios from "axios";
import '../css/styles.css';
import OrderDetails from "./OrderDetails";
import BorrowedItemsDetails from "./BorrowedItemsDetails";

function FashionBody() {
//  const [orderItems, setOrderItems] = useState([]);
 const [orders, setOrders] = useState([]);
 const [items, setItem] = useState([]);
//  let [order, setOrder] = useState([]);
 let [order, setOrder] = useState(new Map());
 const [orderId, setOrderId] = useState(-1);
 const [borrowedItems, setBorrowedItems] = useState([]);
 const [borrowedItemId, setBorrowedItemId] = useState(-1);
 const [borrowedItem, setBorrowedItem] = useState(new Map());


    useEffect(() => {
        Promise.all([
        axios.get('http://localhost:4000/items'),
        // axios.get('http://localhost:4000/users'),
        axios.get('http://localhost:4000/borroweditems'),
        axios.get('http://localhost:4000/orders')
        ])
        .then(([itemsResponse, borrowedItemResponse, ordersResponse]) => {
        setItem(itemsResponse.data);
        // setUser(itemsResponse.data);
        setBorrowedItems(borrowedItemResponse.data);
        setOrders(ordersResponse.data);
        })
        .catch(err => console.error(err));
    }, []);


    function GetBorrowedItem(id){
        axios.get(`http://localhost:4000/borroweditems/${id}`) // Use backticks ` ` for template strings
        .then((response) => {
            setBorrowedItem(new Map(borrowedItem.set(id, response.data))); // Use setUser to update your state
            setBorrowedItemId(id)
        })
        .catch(err => console.error(err));
    }

    function GetOrder(id){
        axios.get(`http://localhost:4000/orders/${id}`) // Use backticks ` ` for template strings
        .then((response) => {
            setOrder(new Map(order.set(id, response.data))); // Use setOrder to update your state
            setOrderId(id)
        })
        .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Items to borrow.</h1>
            <ul>
                {items.map((item, index) => 
                <li key={index}>{item.title} 
                </li>)}    
            </ul>

            <h1>Borrowed item id's</h1>
            <ul>
                {borrowedItems.map((_borrowedItem, index) => 
                    <div>
                        <li onClick={() => GetBorrowedItem(_borrowedItem.id)} key={index}>{_borrowedItem.id} </li>
                        <BorrowedItemsDetails items = {borrowedItem} requestedId = {borrowedItemId} itemId = {_borrowedItem.id}/>
                    </div> )
                }
            </ul>

            <h1>Current Orders</h1>
            <ul>
            {orders.map((_order, index) => 
                <div>
                    <li onClick={() => GetOrder(_order.id)} key={index}>{_order.id}</li>
                    <OrderDetails order = {order} requestedId = {orderId} itemId = {_order.id}/>
                 </div>)
            }
            </ul>
        </div>
    )
}

export default FashionBody;