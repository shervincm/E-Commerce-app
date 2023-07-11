import {useParams} from 'react-router-dom';
import { useState } from 'react';

function ItemOverview({items}) {
    const {id} = useParams();

    const selectedItem = items.find(item => item._id === id);
    console.log(selectedItem);
    const itemImage = selectedItem.imageURL;
    console.log(itemImage);
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  function handleClick() {
    if (currentImageIndex < itemImage.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  function backClick() {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
    console.log(currentImageIndex);
  }

return (    
    <div>
        <button onClick={backClick}> previous image </button>
        <img src={itemImage[currentImageIndex].url} alt={selectedItem.title}/>
        <button onClick={handleClick}> next image </button> 
    </div>
)

}

export default ItemOverview;