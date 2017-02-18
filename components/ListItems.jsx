import React from 'react';

class ListItems extends React.Component {
    render(){
        return(
            <li><a href="">{this.props.menu.title}</a></li>
        );
    }
}

export default ListItems;