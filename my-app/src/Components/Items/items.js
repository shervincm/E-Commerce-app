import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";

function Items({items}) {
    const navigate = useNavigate();
      function handleClick(selectedItemId) {
        navigate(`/items/${selectedItemId}/overview`);
      }
      

      const {id} = useParams();

      const selectedItem = items.find(item => item._id === id);
    
      const selectedItemId = selectedItem ? selectedItem._id : null;


    return (
        <div className="listItems">
           <ul>
           {items.map(item => (
            <div key={item.id}>
          <li>
          {item.imageURL && item.imageURL[0] && <img className="img" src={item.imageURL[0].url} alt={item.title} 
            onClick={() => handleClick(item._id)}
          />}
              {item.title} £{item.price}
            </li>
          </div>
        ))}
      </ul>
           
        </div>
    )
}

export default Items;