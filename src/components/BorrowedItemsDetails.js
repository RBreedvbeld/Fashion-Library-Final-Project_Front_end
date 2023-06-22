import '../css/styles.css';

function BorrowedItemsDetails({items, requestedId, itemId}){
    if (!items.has(requestedId)) 
        return <> </>
    else if(requestedId !== itemId)
        return <> </>
    else   {
        const item = items.get(requestedId).item
        return (
            <div className="listItems" >
                <li>{item.title}</li>
                <li>{item.brand}</li>
                <li>{item.size}</li>
            </div>
        )
    }
}

export default BorrowedItemsDetails;