import React, { useState } from 'react';
import "./Menu.css";

function Menu() {
    const menuItems = [
        { id: 1, name: 'Veg Burger', price: 249, image: 'https://www.theawesomegreen.com/wp-content/uploads/2014/09/Beet-Burger.jpg' },
        { id: 2, name: 'Chicken Burger', price: 299, image: 'https://simply-delicious-food.com/wp-content/uploads/2022/06/Grilled-chicken-burgers2.jpg' },
        // Add more menu items as needed
    ];      

    const [orderSummary, setOrderSummary] = useState([]);
    const [totalBill, setTotalBill] = useState(0);

    const handleDropdownChange = (e, menuItem) => {
        const quantity = parseInt(e.target.value);
        const updatedOrderSummary = [...orderSummary];
        const existingItemIndex = orderSummary.findIndex(item => item.id === menuItem.id);

        if (quantity === 0) {
            if (existingItemIndex !== -1) {
                updatedOrderSummary.splice(existingItemIndex, 1);
            }
        } else {
            const updatedItem = {
                id: menuItem.id,
                name: menuItem.name,
                quantity,
                total: menuItem.price * quantity
            };

            if (existingItemIndex !== -1) {
                updatedOrderSummary[existingItemIndex] = updatedItem;
            } else {
                updatedOrderSummary.push(updatedItem);
            }
        }

        setOrderSummary(updatedOrderSummary);
        const newTotalBill = updatedOrderSummary.reduce((acc, item) => acc + item.total, 0);
        setTotalBill(newTotalBill);
    };

    return (
        <div className="fullmenu">
            <div className="foodType" id="appetizers">
                <div className="foodTypeTitle">Appetizer</div>
                <div className="menucontainer">
                    {menuItems.map(menuItem => (
                        <div className="menuBody" key={menuItem.id}>
                            <div className="pics">
                                <img src={menuItem.image} className="foodpic" alt={menuItem.name} />
                            </div>
                            <div className="menuContent">
                                <div className="itemName">{menuItem.name}</div>
                                <div className="prices">Rs. {menuItem.price}</div>
                                <div className="quantity">
                                    <select onChange={(e) => handleDropdownChange(e, menuItem)}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="billDetails">
                <div id="orderSummary">
                    <div className="heading">Order Summary:</div>
                    <div className="orders">
                        {orderSummary.map(item => (
                            <div key={item.id}>{item.name}: {item.quantity} x Rs. {item.total}</div>
                        ))}
                    </div>
                </div>
                <div id="totalBill">Total Bill: Rs. {totalBill}</div>
            </div>
        </div>
    );
}

export default Menu;
