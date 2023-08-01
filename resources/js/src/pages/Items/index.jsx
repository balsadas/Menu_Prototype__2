import Call from "../../components/Call/index";
import Navbar from "./Navbar";
import Section from "./Section";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Fetch } from "../../common";
import { useAppContext } from "../../Context";

import "./css.css";
function scrollCurrentHash(hash) {
  const id = hash.replace("#", "");
  const activeElement = document.getElementById(id);
  if (activeElement) {
    const y = activeElement.getBoundingClientRect().top - 75;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function Items() {
  const { state } = useAppContext();
  const [foods, setFoods]= useState([]);
  const { hash } = useLocation();
  useEffect(function () {
    if (!foods.length) return;
    const sections = document.querySelectorAll(".sections");
    scrollCurrentHash(hash);
    function handleScroll() {
        let scrollY = window.scrollY;
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50;
          const sectionId = current.getAttribute("id");
          if (
            scrollY+80 > sectionTop &&
            scrollY+80 <= sectionTop + sectionHeight
          ){
            const item = document.querySelector("#_" + sectionId);
            item.classList.add("active");
            item.scrollIntoView();
          } else {
            document.querySelector("#_" + sectionId).classList.remove("active");
          }
        });
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
    //eslint-disable-next-line
  }, [foods.length]);
  useEffect(function(){
    Fetch("foods").then(function(res){
      if (Array.isArray(res.data)){
        setFoods(res.data)
      }
    })
  }, []);
  console.log(foods)
  // console.log(hash)
  return (
    <div className="wrapper">
      {foods.map((food, index)=>(
        <Section key={index} index={index} {...food} lang={state.lang}/>
      ))}
      <Navbar lang={state.lang} catalog={foods}/>
      <Call />
    </div>
  );
}
export default Items;
