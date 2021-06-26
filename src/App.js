import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Main from "./components/Main"

firebase.initializeApp({
  apiKey: "AIzaSyCTbUR8I60mayPOhNZTf7Q1uEpkBPnIOdA",
  authDomain: "learnology-f698c.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? 
        ( 
          <Main />
        )
        
        // (
        //     <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
        // ) 
        
        : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
            className="login"
          />
        )}
      </div>
    )
  }
}

export default App