import { Constants } from "../../common";
import { useState } from "react";
import PopupView from "./PopupView";

import "./css.css";
import { useAppContext } from "../../Context";

export default function Card({ image, discount, sizes, name, lang, popupImage, ingredients }) {
  const [isOpen, setOpen] = useState(false);
  const {state} = useAppContext()
  const size = sizes[0];
  console.log(size)
  return (
    <div className="item-card">
      <img onClick={() => setOpen(true)} src={image} alt="SS" />
      <div onClick={() => setOpen(true)}>
        <div className="container">
          <div className="food-description">
            <div className="inner-frame">
              <div className="sale">
                {
                  size.discount_price && (
                    <>
                      <div className="percentage">
                        <span className="text b-medium">
                          <span>{discount}%</span>
                        </span>
                      </div>
                      <div className="saleprice">
                        <span className="text01 b-medium">
                          <span>{size.price}{Constants.currency}</span>
                        </span>
                        <img
                          src="/images/vector1.svg"
                          alt="Vector1I1997"
                          className="vector1"
                        />
                      </div>
                    </>
                  )
                }
              </div>
              {
                (size.discount_price ? size.discount_price : size.price) > 0 ? (
                  <div className="price">
                    <span className="text h-semibold">
                      <span style={{color: state.mode == 'dark' ? '#fff' : '#000'}}>{size.discount_price ? size.discount_price : size.price}</span>
                    </span>
                    <div className="frame2286">
                      <span
                        className="text b-medium"
                      >
                        <span style={{color : state.mode == 'dark' ? '#fff' : '#000'}}>{Constants.currency}</span>
                      </span>
                    </div>
                  </div>
                ) : null
              }
            </div>

            <span className="text0 b-regular">
              <span style={{color : state.mode == 'dark' ? '#fff' : '#000'}}>
                {name[lang]}
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* End New */}

      {isOpen && <PopupView onClose={() => setOpen(false)} ingredients={ingredients} discount={discount} image={popupImage} name={name} lang={lang} size={size} />}
    </div>
  );
}
