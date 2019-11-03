import React from 'react';
import HomeImg from '../images/home-img.png'


function Home() {
    return (
        <div>
            <div className="tile">
                <div className="tile is-parent">
                    <img src={HomeImg} alt="Slavery" style={{ height: '521px' }} />
                </div>
                <div className="tile is-3 is-vertical is-parent">
                    <div className="tile is-child box">
                        <p className="subtitle  is-6">Nicoleta, 34 Romanion survivor of forced labor and forced sexual exploitation in Sicily</p>
                        <p >“I came to Sicily with my husband. We needed to send money back to support our children in Romania.
                            But the greenhouse farmer where we found work said I had to sleep with him, and if I refused, he
                            wouldn’t pay us. My husband said it was the only way we could keep our work. My employer threatened
                            me with a gun, and when he finished, he just walked away. This went on for months. I left both the farm
                            and my husband, but found out it is the same wherever you try to find work here in Sicily.”</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;