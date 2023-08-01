import { useAppContext } from "../../Context";
import Navbar from "./Navbar";
import Card from "./Card";
import Call from "../../components/Call";
import { useEffect, useState } from "react";
import { Fetch } from "../../common";

import "./css.css";

function Catalog() {
  const { state } = useAppContext();
  const [categories, setCategories]= useState([]);
  useEffect(function(){
    Fetch("categories").then(function(res){
      if (Array.isArray(res.data)){
        setCategories(res.data)
      }
    })
  }, []);
  return (
    <div>
      <div className="items">
        {
          categories.map(category =>  <Card key={category.id} lang={state.lang} {...category} />)
        }
      </div>
      <Navbar lang={state.lang} />
      <Call />
    </div>
  );
}

export default Catalog;
