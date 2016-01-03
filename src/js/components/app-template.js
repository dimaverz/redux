import React from 'react';
//import Header from './header/app-header';
import {Router, Link} from 'react-router';

import { createHistory, useBasename } from 'history'

const history = useBasename(createHistory)({
  basename: '/'
})

//export default ( props ) => {
export default class Template extends React.Component {

     myclick(path = ''){
       //router.transitionTo('/page');
       console.log('click', path);
       //history.pushState(null, '/page')
       //this.props.history.replaceState(null, path);
     }
     render(){
        console.log('click', this.props.location);
       return (
           <div className="container">
               { this.props.children }
               <div style={{height:'500px'}}>
                  caaboom
               </div>
               <div>

                  <span onClick={() => this.myclick('/')} >Dashboard</span>
                  <span onClick={() => this.myclick('/page')} > - Page</span>
               </div>
           </div>
       );
    }
};
/*Template.contextTypes = {
  router: React.PropTypes.func.isRequired
};
*/

//export default Template;
