import {useParams} from 'react-router-dom';

function ItemOverview({items}) {
    const {id} = useParams();

    const selectedItem = items.find(item => item._id === id);
  
    // const selectedItemId = selectedItem ? selectedItem._id : null;

return (    
    <div>
        <img src={selectedItem.imageURL[0].url} alt={selectedItem.title} />
    </div>
)

}

export default ItemOverview;