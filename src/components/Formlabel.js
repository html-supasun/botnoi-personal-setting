import React from "react"

class Formlabel extends React.Component {

    render() {
        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <input className="form-control" placeholder={this.props.placeholder}></input>
            </div>
        )
    }
}

export default Formlabel