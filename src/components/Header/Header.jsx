import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div>
                <button className="nav-btn">About</button>
                <button className="nav-btn">Categories</button>
                <button className="nav-btn">How to join</button>
            </div>
            <div>
                <button className="form-btn">Apply</button>
            </div>
        </div>
    )
}

export default Header;