import React, { useState } from "react";
import { Button, Paper } from "@mui/material";
import "./App.css";
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import { CheckBoxTwoTone } from "@mui/icons-material";


const data = [
  {
    offer: "free",
    validity: "$0     /month",

    user: "single user",
    storage: "5GB storage",

    service: "unlimited public project",
    access: "community Access",
    projects: "*       unlimited private project",
    support: "*       Dedicated phone support",
    domain: "*        free sub domain",
    report: "*         monthly status Report",

    id: 1,
  },
  {
    offer: "plus",
    validity: "$9   /month",
    user: "five users",
    storage: "5GB storage",
    service: "unimitted public project",

    access: "community Access",

    projects: "    unlimitted private project",
    support: "  Dedicated phone support",
    domain: "  free sub domain",
    report: "  *   monthly status Report",

    id: 2,
  },
  {
    offer: "pro",
    validity: "$23   /month",
    user: "ten users",
    storage: "5GB storage",
    service: "unimitted public project",

    access: "community Access",
    projects: " unlimitted private project",
    support: " Dedicated phone support",
    domain: "free sub domain",
    report: "monthly status Report",

    id: 3,
  },

  // ...rest of the data array
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1 className="count">

        
          <Button variant="contained"className="cart-count">
            {" "}
            Cart <span>{cartCount}</span>
          </Button>
        </h1>
      </header>
      

      <div className="products">
        {data.map((prod, idx) => (
          <ProductCard
            offer={prod.offer}
            validity={prod.validity}
            user={prod.users}
            space={prod.storage}
            service={prod.service}
            access={prod.access}
            projects={prod.projects}
            support={prod.support}
            domain={prod.domain}
            report={prod.report}
            cartCount={cartCount}
            setCartCount={setCartCount}
            key={prod.id}
          />
        ))}
      </div>
      <footer>
        <p>copy right your webside 2023</p>
      </footer>
    </div>
  );
}

function ProductCard({
  offer,
  validity,
  users,
  space,
  service,
  access,
  projects,
  support,
  domain,
  report,
  cartCount,
  setCartCount,
}) {
  const [show, setShow] = useState(true);

  const handleAddBtn = () => {
    setShow(false);
    setCartCount(cartCount + 1);
  };

  const handleRemoveBtn = () => {
    setShow(true);
    setCartCount(cartCount - 1);
  };

  return (
    
    <Paper elevation={60} className="card">
      <div>
        <Paper  elevation ={5}className="head">
          {" "}
          <h3>{offer}</h3>
          <h1>{validity}</h1>
        </Paper>
        <hr />

        <div className="text">
         <h3>{users}</h3>
        <h3>{space}</h3>
        <h3>{service}</h3>
        <h3>{access}</h3>
        <h3>{projects}</h3>

        <h3>{support}</h3>
        <h3>{domain}</h3>
        <h3>{report}</h3>
        </div>
      </div>
      <div className="cart-btn">
      {show ? (
        
         
        <Button variant="contained" className="card-btn" onClick={handleAddBtn}>
          Add to Cart
        </Button>
      ) : (
        <Button variant="contained" className="card-btn" onClick={handleRemoveBtn}>
          Remove from Cart
        </Button>
        
      )}
      </div>
    </Paper>
  );
}
export default App;
