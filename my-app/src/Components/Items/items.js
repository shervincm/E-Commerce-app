import {useNavigate} from "react-router-dom";


function Items({items}) {
  const navigate = useNavigate();

  function handleClick(itemId) {
    navigate(`/items/${itemId}/overview`);
  }

  return (
    <div className="listItems">
      <ul>
        {items.map(item => {
          return (
            <div key={item.id}>
              <li>
                {item.imageURL && item.imageURL[0] && <img className="img" src={item.imageURL[0].url} alt={item.title} 
                  onClick={() => handleClick(item._id)}
                />}
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