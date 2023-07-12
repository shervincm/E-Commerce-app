import {useNavigate} from "react-router-dom";


function Items({items, userInput, onChange}) {
  const navigate = useNavigate();

  function handleClick(itemId) {
    const selectedItem = items.find((item) => item._id === itemId);
    localStorage.setItem("selectedItem", JSON.stringify(selectedItem));
    navigate(`/items/${itemId}/overview`);
  }

  const filteredItems = userInput
    ? items.filter((item) =>
        item.title.toLowerCase().includes(userInput.toLowerCase())
      )
    : items;

  return (
    <div className="listItems">
      <ul>
        {filteredItems.map((item) => {
          return (
            <div key={item.id}>
              <li>
                {item.imageURL && item.imageURL[0] && (
                  <img
                    className="img"
                    src={item.imageURL[0].url}
                    alt={item.title}
                    onClick={() => handleClick(item._id)}
                  />
                )}
                {item.title} £{item.price}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Items;