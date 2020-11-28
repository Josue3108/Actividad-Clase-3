import React from 'react'

export default class StarWarsCharacter extends React.Component {
    render() {
        return ( //Generates and writes the attributes in a table 
            <tr>
                <td>{this.props.character.name}</td>
                <td>{this.props.character.height}</td>
                <td>{this.props.character.mass}</td>
            </tr>
        );
    }
}