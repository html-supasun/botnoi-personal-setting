import  React  from "react"

class Header extends React.Component {
    render() {
        return (
            <h1>This is test {this.props.title} {this.props.counter}</h1>
        )
    }
}

export default Header