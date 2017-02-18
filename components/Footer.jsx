import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <p className="text-muted">{this.props.copyRight}</p>
                </div>
            </footer>
        );
    }
}

export default Footer;