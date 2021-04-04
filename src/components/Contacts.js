import React, { useState } from "react";

// import UserService from "../services/user.service";

function Contacts(props) {
  // const [content, setContent] = useState("")

  return (
    <div className="Contacts">
      <ul>
        <li>Contact 1</li>
        <li>Contact 2</li>
        <li>Contact 3</li>
      </ul>
    </div>
  );
}

// class Contacts extends Component {
//   componentDidMount() {
//     UserService.getContactBoard().then(
//       (response) => {
//         this.setState({
//           content: response.data,
//         });
//       },
//       (error) => {
//         this.setState({
//           content:
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString(),
//         });
//       }
//     );
//   }
// }

export default Contacts;
