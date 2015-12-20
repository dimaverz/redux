import React, { Component, PropTypes } from 'react'

class ObjectSearch extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    console.log('ObjectSearch : ', this.props);

    let obj = [];
    obj.push({
      name: 'aaaa',
      id:1,
      children: [
        {
          name: 'abbb',
          id:1,
          children: []
        },
        {
          name: 'accc',
          id:1,
          children: []
        }
      ]
    })

    obj.push({
      name: 'bbbb',
      id:1,
      children: [
        {
          name: 'bbbb',
          id:1,
          children: []
        },
        {
          name: 'bccc',
          id:1,
          children: []
        }
      ]
    })

    console.log('search obj : ', obj);

    console.log('grep : ', obj.Grep( 'bbbb', 1 ) );

    return (
      <div className="obj-search">
        search
      </div>
    )
  }
}


Object.prototype.Grep = function( strSearch , isRecursive ) {

	if ( !strSearch ) {
		return this;
	};

	// Ignore case
	//strSearch = strSearch.toLowerCase();

	// Used to prevent maxing out callstack for sub-lookups due to __proto__ == Object
	isRecursive = isRecursive || false;

	// Declare necessary local variables to hold necessary values
	var objToIterate = this,
		typeOfObject = typeof objToIterate,
		objResult = {},
		count = 0;

	// if item that needs to be iterated over is an object or function, get all properties ( including non enumerable properties )
	if ( typeOfObject === 'object' || typeOfObject === 'function' ) {

		var objKeys = Object.getOwnPropertyNames( objToIterate );

		// Loop through all the properties
		for ( var x = 0, xl = objKeys.length; x < xl; ++x ) {

			var item = objKeys[ x ];

			// Check if key matches search string, if so add, if not, check if object and iterate through object's keys
			if ( item.toLowerCase().indexOf( strSearch ) >= 0 ) {

				objResult[ item ] = objToIterate[ item ];
				++count;

			}
			else if ( typeof objToIterate[ item ] === 'object' && !isRecursive ){

				objResult[ item ] = Grep.call( objToIterate[ item ] , strSearch , true );
				++count;

			}

		}

	};

	// checks if objResult is empty, if so, return empty string.
	return count ? objResult : '';

}

export default ObjectSearch
