// import PropTypes  from 'prop-types'
// import "./NavBar.css"
// function NavBar(propss) {
//   return (
//     <div>
//     <nav> 
//      <ul > 
//        <li>{propss.name} </li>
//        <li>{propss.name1}</li>
//        <li>{propss.name2}</li>
//        <li>{propss.name3}</li>
//      </ul>
//     </nav>
//        </div> 
//   )
// }
// NavBar.propTypes = {
//   name: PropTypes.string,
// }
// export default NavBar

import './NavBar.css';

function NavBar(props:PropTypes) {
  return (
    <div>
      <nav> 
        <ul> 
          <li>{props.name}</li>
          <li>{props.name1}</li>
          <li>{props.name2}</li>
          <li>{props.name3}</li>
        </ul>
      </nav>
    </div> 
  );
}

// Define PropTypes for the component
interface PropTypes  {
  name?: string,
  name1: string,
  name2: string,
  name3: string
};

export default NavBar;
