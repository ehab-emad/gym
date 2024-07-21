import logo from '../../images/logo.jpg'

import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div classNam="loader">
        <img src={logo} style={{width:"60px",height:"60px",borderRadius:"50%"}} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;