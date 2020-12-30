// import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log()
    }


    render() {
        // console.log()
        return(
            <button onClick={this.handleClick}>{this.props.text}</button>
        )
    }
}

// export default Button;