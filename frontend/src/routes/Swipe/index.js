import React, { Component } from 'react';
import axios from 'axios';

// http://localhost:8080/trees

import Cards from '../../components/Cards/Cards';
import Card from '../../components/Cards/CardSwitcher';

import Spinner from '../../components/Spinner';
import './styles.css';

const CustomAlertLeft = () => <span>Nop</span>
const CustomAlertRight = () => <span>Ok</span>

class Swipe extends Component {
    state = {
        loading: true,
        Data: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8080/trees').then(Data => {
            console.log(Data.data);
            this.hanldeLoadFinish(Data.data);
        });
    }

    hanldeLoadFinish = Data => this.setState({
        Data,
        loading: false,
    })
    
    finishStack = () => {
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
        if (this.state.loading === false) {
            return (
                <div>
                    <Cards
                        alertRight={<CustomAlertRight />} 
                        alertLeft={<CustomAlertLeft />} 
                        onEnd={this.finishStack}
                        className='master-root'>
                        {this.state.Data.map((Tree, key) => 
                            <Card
                                key={key}
                                onSwipeLeft={this.handleSwipeLeft(Tree)}
                                onSwipeRight={this.handleSwipeRight(Tree)}>
                                <h2>{Tree.name}</h2>
                                <img src={Tree.picture} alt=""/>
                            </Card>
                        )}
                    </Cards>
                </div>
            );
        }

        return (
            <Spinner />
        );
    }
}

export default Swipe;