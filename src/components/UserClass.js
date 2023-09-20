import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sourabh326");
    const result = await data.json();
    this.setState({ userInfo: result });
  }

  render() {
    if (this.state.userInfo === null) return <div className="text-3xl text-gray-700 font-semibold  text-center w-3/12 mx-auto mt-40">Loding...</div>;
    const { name, avatar_url, html_url, bio } = this.state.userInfo;

    return (
      <div className="user-profile-card w-3/12 mx-auto mt-20 text-center bg-gray-100 p-3 rounded-md border-l-8 border-blue-400">
        <img
          className="user-avatar w-28 h-28 rounded-full mx-auto my-5"
          src={avatar_url}
          alt="user-img"
        />
        <h2 className="info-subheading text-gray-600 font-semibold">{name}</h2>

        <div className="bio text-md text-gray-600 mt-4">Bio</div>
        <div className="info-details text-sm text-gray-500">{bio}</div>

        <div className="info-details text-sm text-gray-500 mt-8">Social Links</div>

        <div className="social my-5 flex justify-evenly">
          <div>
            <a
              href="https://linkedin.com/in/sourabh-nehar"
              className="text-blue-600 text-2xl cursor-pointer"
              target="_blank"
            >
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </div>

          <div>
            <a
              href={html_url}
              className="text-black text-2xl cursor-pointer"
              target="_blank"
            >
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
