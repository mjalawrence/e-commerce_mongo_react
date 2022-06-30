import {useState} from "react"
import ProductsPage from "../ProductPage";
import SideBar from "../SideBar";

function MainPage() {

    const [activeCategoryFilter, setActiveCategoryFilter] = useState({})
    const [activeCharacterFilter, setActiveCharacterFilter] = useState({})

    const resetFilters = () => {
        setActiveCategoryFilter('')
        setActiveCharacterFilter('')
    }

    return (
        <div className="main">
            <SideBar
                setActiveCategoryFilter={setActiveCategoryFilter}
                setActiveCharacterFilter={setActiveCharacterFilter}
                resetFilters={resetFilters}
            />
            <ProductsPage
                activeCategoryFilter = {activeCategoryFilter}
                activeCharacterFilter={activeCharacterFilter}

            />
        </div>
    );
}

export default MainPage