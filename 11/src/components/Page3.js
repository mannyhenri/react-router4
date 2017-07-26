import React from 'react';
import { Route, Link } from 'react-router-dom';

const Page3 = ({ match }) => {
  return (
    <div className="row">
      <h2>Card categories</h2>
      <ul>
        <li><Link to={`${match.url}/react`}>React</Link></li>
        <li><Link to={`${match.url}/flux`}>Flux</Link></li>
        <li><Link to={`${match.url}/react-router`}>React Router 4</Link></li>
        <li><Link to={`${match.url}/react-patterns`}>React Design Patterns</Link></li>
      </ul>

      <Route path={`${match.url}/:categoryId`} component={Category} />
    </div>
  );
}

// the component that will render the Category dynamically
const Category = ({ match }) => (
  <div>
    <h3>{match.params.categoryId}</h3>
  </div>
)

export default Page3;
