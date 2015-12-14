import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('app'));

/*import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';

var store = Reflux.createStore({
    data: {message: 0},

    init() {
        setInterval(()=>{
            this.data.message++;
            this.trigger(this.data);
        }, 1000)
    },

    getInitialState() {
        return this.data;
    }
})

var App = React.createClass({

    mixins: [Reflux.connect(store)],

    render() {
        return (
            <h1>{this.state.message}</h1>
        );
    }
})

ReactDOM.render(<App/>, document.getElementById('app'));*/
