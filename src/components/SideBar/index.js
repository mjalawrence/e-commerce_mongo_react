import Filter from '../Filter'

const SideBar = () => {
    return (
        <div>
            <Filter mode="categories"  />
            <Filter mode="characters" />
            <br></br>
            <div> search by:</div>
            <input type="radio" name="key" value="key" />
            <input type="radio" name="key" value="key" />
            <input type="radio" name="key" value="key" />
            <input type="search" name="key" value="value" />
        </div>
    )
}

export default SideBar