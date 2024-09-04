import './TopBlock.css';

const TopBlock = () => {
    return (
        <div className="top-block">
            <div className="top-block-heading">
                <h1 className="top-block-title">
                    Future Leaders of Ghana <img src="/images/top-block-Stars.svg" alt="Stars" className="stars-image"/>
                </h1>
            </div>
            <div className="top-block-info">
                <div>
                    <p className="top-block-info__numbers">30</p>
                    <p className="top-block-info__text">days left</p>
                </div>
                <div>
                    <p className="top-block-info__numbers">160</p>
                    <p className="top-block-info__text">participants</p>
                </div>
                <div>
                    <p className="top-block-info__numbers">16-35</p>
                    <p className="top-block-info__text">years old</p>
                </div>
            </div>
            <div className="top-block-description">
                Akwaaba, all Future Leaders of Ghana! This project is a vibrant platform for our rising stars
                to showcase their talents and innovative ideas!
                This is time to join the Team!
            </div>
        </div>
    )
}

export default TopBlock;