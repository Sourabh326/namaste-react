import {Component} from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log('constructor methode call')
  }

  componentDidMount(){
    console.log('component did mount call')
    // this.timer = setInterval(() => {
    //   console.log("SET INTERVAL")
    // }, 1000);
  }

  componentDidUpdate(){
    console.log("component did update call")
  
  }

  componentWillUnmount(){
    // clearInterval(this.timer)
  }

  render() {
    const { name, location, designation } = this.props;
    const { count, count2 } = this.state;
    console.log("render methode call");
    return (
      <div>
        <h1 className="info-heading">Count: {count}</h1>
        <h1 className="info-heading">Count 2: {count2}</h1>
        <button onClick={()=> {
            this.setState({
                count: count+1,
                count2: this.state.count2 + 1
            })
        }}>Increase</button>
        <h2 className="info-subheading">Name: {name}</h2>
        <h3 className="info-details">Address: {location}</h3>
        <h3 className="info-details">Designation: {designation}</h3>
      </div>
    );
  }
}

export default UserClass;
