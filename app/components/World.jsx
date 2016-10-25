import React, { PropTypes, Component } from 'react';
import Hello from './Hello.jsx';

export default class World extends Component {

    static propTypes = {
        greet: React.PropTypes.string.isRequired
    }

    static defaultProps = {
        greet: 'Hello'
    }

    constructor(props) {
        super(props);
        this.state = {
            currentGreeting: props.greet,
            value: 'ReactSpeedCoding'
        };
        this.slangGreet = this.slangGreet.bind(this);
        this.polakGreet = this.polakGreet.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    slangGreet() {
        this.setState({ currentGreeting: 'Yo!' });
    }

    polakGreet() {
        this.setState({ currentGreeting: 'Davai!' });
    }

    handleNameChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const renderGreeting = this.state.value ? `${this.state.value} says ${this.state.currentGreeting}` : this.state.currentGreeting;
        return (
            <div className="World-card">
                <Hello greet={renderGreeting} message="Sasha!" />
                <h2>
                    <a onClick={this.slangGreet}>Slang</a>
                    &nbsp;OR;&nbsp;
                    <a onClick={this.polakGreet}>Polak</a>
                    <input
                        type="text"
                        value={this.state.value}
                        placeholder="Enter a name"
                        onChange={this.handleNameChange}
                        />
                </h2>
            </div>
        )
    }


}
