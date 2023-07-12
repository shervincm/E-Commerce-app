

function Filter({filterChange}) {

    function handleClick(event) {
        filterChange(event.target.value);
    }

    return (
        <div className="filterBar">
            <select name='Shop by' onChange={handleClick}>
            <option>Shop By</option>
                <option>Mens</option>
                <option>Womens</option>
                <option>Boys</option>
                <option>Girls</option>

            </select>

        </div>
    )
}

export default Filter;