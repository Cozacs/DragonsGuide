import dragons from '../../Data/Dragons.js';
import './Main.css';

export default function Main(){
    const quantity = dragons.length;

    const handleClick = (dragId) => {
        const element = document.getElementById(`section-${dragId}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main>
            <div className='banner'>
                <div className="slider" style={{'--quantity': quantity}} >
                    {dragons.map((drag) => (
                        <div className="item" style={{'--position': drag.id}} key={drag.id}>
                        <img 
                            src={`assets/dragons/${drag.img}`} 
                            alt={`Dragon ${drag.name}`} 
                            onClick={() => handleClick(drag.id)}/>
                    </div>
                    ))}
                </div>
                <div className="content">
                    <h1 data-content="DRAGONS GUIDE" >DRAGONS GUIDE</h1>
                    <div className="author">
                        <h2>Cozacs</h2>
                        <p><strong>Developer Full-Stack</strong></p>
                        <p>Project with the final idea of bringing innovative visual content</p>
                    </div>
                    <div className="model"></div>
                </div>
            </div>
            <div className='banner'>
            {dragons.map((drag) => (
                <section id={`section-${drag.id}`} key={drag.id} className={`infodrag ${drag.name}`} style={{backgroundImage: `url(assets/dragons/${drag.back})`}}>
                    <div className="size cel"></div>
                    <div className="size cel"></div>
                    <div className="size"></div>
                    <div className="size" >
                        <div className='card'>
                            <h2 data-content={drag.name}>{drag.name}</h2>
                            <p><strong>Type: {drag.type}</strong></p>
                            <p>{drag.description}</p>
                        </div>
                    </div>
                </section>
            ))}
            </div>
        </main>
    );
}