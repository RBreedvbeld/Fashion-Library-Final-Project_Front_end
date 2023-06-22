
function OrderDetails({order, requestedId, itemId}){
    if (!order.has(requestedId)) 
        return <> </>
    else if(requestedId !== itemId)
        return <> </>
    else   
        return (
            <div>
                {order.get(requestedId).orderItems.map(orderItem => 
                    <div className="listItems">
                        <li>{orderItem.item.title}</li>
                        <li>{orderItem.item.brand}</li>
                        <li>{orderItem.item.size}</li>
                    </div>
                )}
            </div>
        )
}

export default OrderDetails;
