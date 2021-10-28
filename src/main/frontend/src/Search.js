import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => (
    <div className="search-box">
    <input className="search-txt" type="text" name="" placeholder="Search Endpoints"/>
        <a className="search-btn" href="#">
            <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        </a>
    </div>
);

export default SearchBar;