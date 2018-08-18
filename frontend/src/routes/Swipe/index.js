import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card'

import './styles.css';

const CustomAlertLeft = () => <span>Nop</span>
const CustomAlertRight = () => <span>Ok</span>

class Swipe extends Component {
    render () {
        const data = ["Pine", "Maple", "Redwood", "Yew", "Willow", "Teak"];
        
        return (
            <div>
                <h1>react swipe card</h1>
                <Cards
                    alertRight={<CustomAlertRight />} 
                    alertLeft={<CustomAlertLeft />} 
                    onEnd={() => console.log('end')}
                    className='master-root'>
                    {data.map((item, key) => 
                        <Card
                            key={key}
                            onSwipeLeft={() => console.log('swipe left')}
                            onSwipeRight={() => console.log('swipe right')}>
                            <h2>{item}</h2>
                        </Card>
                    )}
                </Cards>
            </div>
        );
    }
}

export default Swipe;