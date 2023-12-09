import './BeatCard.css';
import playButtonImage from '../../assets/pictures/playbuttonlogo.png';

function BeatCard(props) {
    return (
        <>
            <div className="card">
                <div className="card-top">
                    <div className="beat-title">
                        <p>Title</p>
                    </div>
                    <div className="price">
                        <p>10ETH</p>
                    </div>
                </div>
                
                <div className="badges">
                    <p>Badges</p>
                </div>
                <div className="info">
                    <p>Info Bar</p>
                </div>
                
                <div className="play-button">
                    <img className="play-button-img" src={playButtonImage} alt="" />
                </div>

                <div className="card-bottom">
                    <div className="card-bottom-left">
                        <div className="pack">
                            <p>Pack</p>
                        </div>
                        <div className="number">
                            <p>Beat No.</p>
                        </div>
                    </div>
                    <div className="signature">
                        <p>Signature</p>
                    </div>

                </div>
            </div>
        </>
    );
}


export default BeatCard;