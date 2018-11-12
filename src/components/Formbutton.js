import React from "react"

class Formbutton extends React.Component {

    render() {
        return (
            <div className="form-group">
            <label>{this.props.label}</label>
            <div>
              <button type="button" className="btn__sex">{this.props.buttonFormMen}</button>
              <button type="button" className="btn__sex">{this.props.buttonFormGirl}</button>

            </div>
          </div>
        )
    }
}

export default Formbutton