

function Items({items}) {

    return (
        <div className="listItems">
           <ul>
           {items.map(item => (
          <li key={item.id}>{item.title} {item.price}</li>
            ))}
                
           </ul>
           
        </div>
    )
}

export default Items;