import React from 'react';
import Cart from './containers/Cart';
import ItemsList from './containers/ItemsList';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Online Shopping</h1>
                </div>
            </div>



            <div className="wrapper">
                <div className="col-md-8">
                    <ItemsList/>
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>
        </div>
    );
}

export default App;
