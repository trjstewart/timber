import React, { Component } from 'react';
import Cards from '../../components/Cards/Cards';
import Card from '../../components/Cards/CardSwitcher';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import './styles.css';

const CustomAlertLeft = () => <span>Nop</span>
const CustomAlertRight = () => <span>Ok</span>

class Swipe extends Component {
    finishStack () {
        console.log("Finished the Stack");
    }

    handleSwipeLeft (ID) {
        return () => {
            console.log(ID, ' was swiped left');
        }
    }

    handleSwipeRight (ID) {
        return () => {
            console.log(ID, ' was swiped right');
        }
    }

    render () {
        const data = ["Pine", "Maple", "Redwood", "Yew", "Willow", "Teak"];
        
        return (
            <div>
                <h1>react swipe card</h1>
                <Cards
                    alertRight={<CustomAlertRight />} 
                    alertLeft={<CustomAlertLeft />} 
                    onEnd={this.finishStack}
                    className='master-root'>
                    {data.map((item, key) => 
                        <Card
                            key={key}
                            onSwipeLeft={this.handleSwipeLeft(item)}
                            onSwipeRight={this.handleSwipeRight(item)}>
                            <h2>{item}</h2>
                        </Card>
                    )}
                </Cards>
            </div>
        );
    }
}

const TreeQuery = gql`
query {
}
`;

export default graphql(TreeQuery, {
    name: 'TreeData',
})(Swipe);