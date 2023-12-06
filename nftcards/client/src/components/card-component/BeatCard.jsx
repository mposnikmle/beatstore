import './BeatCard.css';
import playButtonImage from '../../assets/buttons/playbutton.png';

function BeatCard(props) {
    return (
        <>
            <div className="card">
                <div className="beat-title">
                    <p>Title</p>
                </div>
                <div className="price">
                    <p>10ETH</p>
                </div>
                <div className="badges">

                </div>
                <div className="info">

                </div>
                <div className="play-button">
                    <img className="play-button-img" src={playButtonImage} alt="" />
                </div>
                <div className="pack">

                </div>
                <div className="signature">

                </div>
                <div className="number">

                </div>
            </div>
        </>
    );
}


export default BeatCard;