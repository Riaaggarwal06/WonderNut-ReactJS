import React, { useState } from 'react';
import "./Menu.css";

function Menu() {
    const assortedPremiums = [
        { id: 1, name: 'Veg Burger', price: 249, image: 'https://www.theawesomegreen.com/wp-content/uploads/2014/09/Beet-Burger.jpg' },
        { id: 2, name: 'Chicken Burger', price: 299, image: 'https://simply-delicious-food.com/wp-content/uploads/2022/06/Grilled-chicken-burgers2.jpg' },
        // Add more menu items as needed
    ];      

    const assortedRegulars = [

    ];

    const milkshakes = [

    ];

    const chillers = [

    ];

    const brews = [

    ];


    const [orderSummary, setOrderSummary] = useState([]);
    const [totalBill, setTotalBill] = useState(0);

    const handleDropdownChange = (e, assortedPremium) => {
        const quantity = parseInt(e.target.value);
        const updatedOrderSummary = [...orderSummary];
        const existingItemIndex = orderSummary.findIndex(item => item.id === assortedPremium.id);

        if (quantity === 0) {
            if (existingItemIndex !== -1) {
                updatedOrderSummary.splice(existingItemIndex, 1);
            }
        } else {
            const updatedItem = {
                id: assortedPremium.id,
                name: assortedPremium.name,
                quantity,
                total: assortedPremium.price * quantity
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
                    {assortedPremiums.map(assortedPremium => (
                        <div className="menuBody" key={assortedPremium.id}>
                            <div className="pics">
                                <img src={assortedPremium.image} className="foodpic" alt={assortedPremium.name} />
                            </div>
                            <div className="menuContent">
                                <div className="itemName">{assortedPremium.name}</div>
                                <div className="prices">Rs. {assortedPremium.price}</div>
                                <div className="quantity">
                                    <select onChange={(e) => handleDropdownChange(e, assortedPremium)}>
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
