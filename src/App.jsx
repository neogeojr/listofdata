import { useState } from "react";

import UserList from "./UserList";
import ProductList from "./ProductList";
import Person from "./Person";
import Product from "./Product";

function App() {
  return (
    <div>
      Starter File
      <UserList />
      <ProductList />
      <Person name="Bob" age={15} />
      <Product name="Dell" price={500} />
    </div>
  );
}

export default App;
