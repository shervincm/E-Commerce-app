

function Items({items}) {


    return (
        <div className="listItems">
           <ul>
           {items.map(item => (
            <div key={item.id}>
          <li>
          {item.imageURL && item.imageURL[0] && <img className="img" src={item.imageURL[0].url} alt={item.title}/>}
              {item.title} £{item.price}
            </li>
          </div>
        ))}
      </ul>
           
        </div>
    )
}

export default Items;