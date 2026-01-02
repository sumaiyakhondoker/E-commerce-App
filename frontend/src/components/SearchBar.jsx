import { useContext} from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const SearchBar = () => {
    const {search, setSearch,showSearch, setShowSearch} = useContext(ShopContext)
    const handleCloseSearch = () =>{
        setShowSearch(false)
        setSearch("")

    }
  
 return showSearch ? (
        <div className='border-t border-b text-center bg-gray-50'>
           <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:w-1/2 '>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='outline-none flex-1 text-sm bg-inherit' placeholder='Search' type="text"/>
            <img className='w-4' src={assets.search_icon} alt="" />
           </div>
           <img onClick={handleCloseSearch} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
        </div>
    ): null
};

export default SearchBar;