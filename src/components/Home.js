import React from "react";

// import UserService from "../services/user.service";

function Home(props) {
  return (
    <div className="Home">
      <h1>Welcome to Vina Maipo!</h1>
      <p>This service lets you manage all your contacts together on one map.</p>
    </div>
  );
}

export default Home;

// class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       content: "",
//     };
//   }

//   componentDidMount() {
//     UserService.getPublicContent().then(
//       (response) => {
//         this.setState({
//           content: response.data,
//         });
//       },
//       (error) => {
//         this.setState({
//           content:
//             (error.response && error.response.data) ||
//             error.message ||
//             error.toString(),
//         });
//       }
//     );
//   }

//   render() {
//     return (
//       <div className="container">
//         <header className="jumbotron">
//           <h3>{this.state.content}</h3>
//         </header>
//       </div>
//     );
//   }
// }
