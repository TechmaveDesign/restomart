import React, { useState } from "react";
 const FilterPopup = ({close, setClose}) =>{

     //const [showPopup, setShowPopup] = useState(false);
      const [selectedVegetables, setSelectedVegetables] = useState([]);
      const [selectedMeat, setSelectedMeat] = useState([]);
      const [selectedDrinks, setSelectedDrinks] = useState([]);
      const [sortOptions, setSortOptions] = useState({
        popular: false,
        discounted: false,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      });
      const togglePopup = (e) => {
        setClose((pre)=>!pre);
      };

      const toggleSelection = (item, list, setList) => {
        if (list.includes(item)) {
          setList(list.filter((i) => i !== item));
        } else {
          setList([...list, item]);
        }
      };

    return ( <>
    {close && 
     <div className={`filter-overlay ${close ? 'show' : 'hide'}`} onClick={togglePopup}>
        <div className="filter-wrap" onClick={(e) => e.stopPropagation()}>
          <div className="filters-container">
            <header className="filters-header">
              <h2>
                Filters{' '}
                <button onClick={togglePopup} className="close-button">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="24px"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                  </svg>
                </button>
              </h2>
            </header>
            <div className='cart-main-scroll filterscroll'>
              <div className="sort-section">
                <h3>
                  Sort 
                  <button
                    onClick={() => {
                      setSelectedVegetables([]);
                      setSelectedMeat([]);
                      setSelectedDrinks([]);
                      setSortOptions({
                        popular: false,
                        discounted: false,
                        vegetarian: false,
                        vegan: false,
                        glutenFree: false,
                      });
                    }}
                    className="clear-button"
                  >
                    Clear all
                  </button>
                </h3>
                {[
                  { label: <>Popular on Flink</>, key: "popular" },
                  { label: <>Discounted</>, key: "discounted" },
                  { label: <>Vegetarian</>, key: "vegetarian" },
                  { label: <>Vegan</>, key: "vegan" },
                  { label: <>Gluten-free</>, key: "glutenFree" },
                ].map(({ label, key }) => (
                  <label key={key} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={sortOptions[key]}
                      onChange={() =>
                        setSortOptions((prev) => ({
                          ...prev,
                          [key]: !prev[key],
                        }))
                      }
                    />
                    <div className="label-wrap">{label}</div>
                  </label>
                ))}
              </div>
              <div className="filter-section">
                <h3>Vegetables</h3>
                {[
                  "Tomatoes",
                  "Pumpkin",
                  "Mushrooms",
                  "Corn",
                  "Green Bean",
                  "Beetroot",
                  "Carrots",
                  "Spinach",
                  "Pepper",
                  "Paprika",
                  "Cucumber",
                  "Eggplant",
                ].map((vegetable) => (
                  <button
                    key={vegetable}
                    className={
                      selectedVegetables.includes(vegetable)
                        ? "selected filter-button"
                        : "filter-button"
                    }
                    onClick={() =>
                      toggleSelection(vegetable, selectedVegetables, setSelectedVegetables)
                    }
                  >
                    {vegetable}
                  </button>
                ))}
              </div>
              <div className="filter-section">
                <h3>Meat</h3>
                {[
                  "Chicken",
                  "Beef",
                  "Pork",
                  "Goat",
                  "Lamb",
                  "Rabbit",
                  "Turkey",
                  "Duck",
                  "Seafood",
                ].map((meat) => (
                  <button
                    key={meat}
                    className={
                      selectedMeat.includes(meat)
                        ? "selected filter-button"
                        : "filter-button"
                    }
                    onClick={() => toggleSelection(meat, selectedMeat, setSelectedMeat)}
                  >
                    {meat}
                  </button>
                ))}
              </div>
              <div className="filter-section">
                <h3>Drinks</h3>
                {[
                  "Fanta",
                  "Fritz-Cola",
                  "Grape Juice",
                  "Beer",
                  "Green Bean",
                  "Beetroot",
                  "Carrots",
                  "Spinach",
                ].map((drink) => (
                  <button
                    key={drink}
                    className={
                      selectedDrinks.includes(drink)
                        ? "selected filter-button"
                        : "filter-button"
                    }
                    onClick={() => toggleSelection(drink, selectedDrinks, setSelectedDrinks)}
                  >
                    {drink}
                  </button>
                ))}
              </div>
            </div>
    </div>
        </div>
        </div> 
        }
    </>
    )
 }

 export default FilterPopup;