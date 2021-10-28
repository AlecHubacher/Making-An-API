import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {

    return (
    <div className="search-box">
        <input className="search-txt" type="email" value="support@example.com" name="" placeholder="Search Endpoints"/>
        <a className="search-btn" href="#">
            <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        </a>

    </div>
    );
};

export default SearchBar;