import React from "react";
import firebase from "./firebase";
function App() {
  React.useEffect(() => {
    const mess = firebase.messaging();
    mess
      .requestPermission()
      .then(() => {
        return mess.getToken();
      })
      .then((data) => {
        console.warn(data);
      });
  });
  return <div>Firebase Message</div>;
}

export default App;
