import {Component} from "react";
import Shimmer from "./Shimmer";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
    };
  }


  async componentDidMount(){
    const data = await fetch('https://api.github.com/users/sourabh326');
    const result = await data.json();
    this.setState({userInfo: result})
  }

  render() {
    if(this.state.userInfo === null) return <div>Loding...</div>
    const { name, avatar_url, html_url, bio } = this.state.userInfo;

    return (
      <div className="user-profile-card">
      <img className="user-avatar" src={avatar_url} alt="user-img" />
      <h2 className="info-subheading">{name}</h2>

      <div className="bio">Bio</div>
      <div className="info-details">{bio}</div>

      <div className="social">
        <div>
          <a href="https://linkedin.com/in/sourabh-nehar" target="_blank">Linkedin</a>
        </div>

        <div>
          <a href={html_url} target="_blank">Github</a>
        </div>
      </div>
    </div>
    );
  }
}

export default UserClass;
