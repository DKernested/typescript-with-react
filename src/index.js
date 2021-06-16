import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';


const firebaseConfig = {
  
  // <!-- The core Firebase JS SDK is always required and must be listed first -->
  // <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
  
  // <!-- TODO: Add SDKs for Firebase products that you want to use
  //      https://firebase.google.com/docs/web/setup#available-libraries -->
  
  
    // Your web app's Firebase configuration
    
      apiKey: "AIzaSyCgHLfhTr9zyNKn3MBhl_kaAz80ecNnyI4",
      authDomain: "typescript-with-react-909ef.firebaseapp.com",
      projectId: "typescript-with-react-909ef",
      storageBucket: "typescript-with-react-909ef.appspot.com",
      messagingSenderId: "55428774871",
      appId: "1:55428774871:web:194618899994b20ea02992"
    
    // Initialize Firebase
    //firebase.initializeApp(firebaseConfig);

  };







  ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>,
    document.getElementById('root')
  );
