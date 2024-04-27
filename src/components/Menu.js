import React, { useState } from 'react';
import "./Menu.css";

function Menu() {
    const assortedPremiums = [
        { id: 1, name: 'Krumble' , price: 189 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1712299268_Krumble.jpg'},
        { id: 2, name: 'White and Brown' , price: 189 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1712299299_WhiteBrown.jpg'},
        { id: 3, name: 'Choco Fudge' , price: 219 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1712299330_ChocoFudge.jpg'},
        { id: 4, name: 'Belgian' , price: 219 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1712299356_Belgian.jpg'},
        { id: 5, name: 'Nutty Hazelnut' , price: 239 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1712299509_NuttyHazelnut.jpg'},
        { id: 6, name: 'Choco Krunch' , price: 239 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1712299401_ChocoKrunch.jpg'},
    ];



    const assortedRegulars = [
        { id: 7, name: 'Original Glazed' , price: 119, image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1617352206_Originalglazed1.jpg'},
        { id: 8, name: 'Churro' , price: 119 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1685704918_Churro.jpg'},
        { id: 9, name: 'Double Chocolate' , price: 129 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1685704850_DoubleChocolateCake.jpg'},
        { id: 10, name: 'Powdered Strawberry' , price: 129 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1689651225_PowderedStrawberry.jpg'},
        { id: 11, name: 'Chocolate Iced Glazed' , price: 129 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1697275598_1627485195ChocolateIcedGlazed.jpg'},
        { id: 12, name: 'Chocolate Iced Glazed Sprinkle' , price: 139 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1697275625_1627485334ChocolateIcedGlazedSprinkles.jpg'},
        { id: 13, name: 'Vanilla Choco Chip' , price: 139 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1697275653_1627485264VanillaChocoChip.jpg'},
        { id: 14, name: 'Chocolate Dream Cake' , price: 149 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1697275684_1627485303Chocolatedreamcake1.jpg'},
        { id: 15, name: 'Mango Masti' , price: 149 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1697275428_1627485363Mangomasti.jpg'},
    ];


    const Milkshakes = [
        { id: 16, name: 'Kitkat Milkshake' , price: 329 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1622558297_kitkatshake1.jpg'},
        { id: 17, name: 'Silky Chocolate' , price: 329 , image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/rnmxhamghcyf72iztqyq'},
        { id: 18, name: 'Exotic Strawberry' , price: 329 , image: 'https://www.unicornsinthekitchen.com/wp-content/uploads/2018/08/Strawberry-Milkshake-square.jpg'},
        { id: 19, name: 'Coffee Frappe' , price: 329 , image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAroFJGHTGuD3Yttxi6zXA50sQiA1d2CJWS-qeIqWMTA&s'},
        { id: 20, name: 'Choco Doughnuts' , price: 359 , image: 'https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/ultimate-donut-milkshake.jpg'},
        { id: 21, name: 'Peanut Butter Shake' , price: 359 , image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEJzyJDR6_inDtjzve_edLCkv4ycCVc2Rk0cQD6ze9A&s'},
    ];


    const Chillers = [
        { id: 22, name: 'Green Apple Soda' , price: 129 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1622558772_GreenAppleSoda.jpg'},
        { id: 23, name: 'Cranberry Soda' , price: 129 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1622558834_CranberrySoda.jpg'},
    ];


    const Brews = [
        { id: 24, name: 'Filter Coffee' , price: 89 , image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1622559018_FilterCoffee.jpg'},
        { id: 25, name: 'Espresso' , price: 169 , image: 'https://www.seriouseats.com/thmb/MS_5p-UVwIHCrr5MaXonYJajP7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__06__20180613-coffee-vs-espresso-vicky-wasik-3-1500x1125-418fa2a14e7249b18040c2c34bf8569c.jpg'},
        { id: 26, name: 'Americano' , price: 169 , image: 'https://majestycoffee.com/cdn/shop/articles/americano_b74a8154-454b-4f74-9a6c-95fbc4152ed3.jpg?v=1684048195'},
        { id: 27, name: 'Latte' , price: 169 , image: 'https://www.roastycoffee.com/wp-content/uploads/mBPxUtTx-720x540.jpeg'},
        { id: 28, name: 'Cappuccino' , price: 199 , image: 'https://www.netmeds.com/images/cms/wysiwyg/blog/Post/2018/10/coffee_its_benefits_898_1_.jpg'},
        { id: 29, name: 'Masala Tea' , price: 99 , image: 'https://www.thespicehouse.com/cdn/shop/articles/Chai_Masala_Tea_1200x1200.jpg?v=1606936195'},
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
        <div className="whole">
        <div className="fullmenu">
            <div className="foodType" id="assortedPremiums">
                <div className="foodTypeTitle">Assorted Premiums</div>
                <div className="menucontainer">
                    {assortedPremiums.map(menuItem => (
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
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Assorted Regulars */}
            <div className="foodType" id="assortedRegulars">
                <div className="foodTypeTitle">Assorted Regulars</div>
                <div className="menucontainer">
                {assortedRegulars.map(menuItem => (
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
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Milkshakes */}
            <div className="foodType" id="milkshakes">
                <div className="foodTypeTitle">Milkshakes</div>
                <div className="menucontainer">
                {Milkshakes.map(menuItem => (
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
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chillers */}
            <div className="foodType" id="chillers">
                <div className="foodTypeTitle">Chillers</div>
                <div className="menucontainer">
                {Chillers.map(menuItem => (
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
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Brews */}
            <div className="foodType" id="brews">
                <div className="foodTypeTitle">Brews</div>
                <div className="menucontainer">
                {Brews.map(menuItem => (
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
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Order Summary and Total Bill */}
            
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
