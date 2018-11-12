import React from "react"

class Headercenter extends React.Component {

    render() {
        return (
        
            <div className="text__center">
            <h2>{this.props.header}</h2>
            <p>{this.props.detail}</p>
          </div>
        )
    }
}

export default Headercenter