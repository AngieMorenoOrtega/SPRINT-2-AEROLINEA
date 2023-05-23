import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={Checkout} />
//         <Route path="/contact" component={Ticket} />
//         <Route component={NotFound} />
//       </Switch>
//     </Router>
//   );
// }

function App() {
  return (
    <div>
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
