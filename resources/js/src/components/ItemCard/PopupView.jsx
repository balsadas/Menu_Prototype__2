import { Constants } from "../../common";
import CloseIcon from "../../assets/icons/ItemClose";
import { useAppContext } from "../../Context";

export default function PopupView({
    onClose,
    image,
    name,
    lang,
    size,
    discount,
    ingredients,
}) {
    const { state } = useAppContext();
    return (
        <>
            <div className="placeholder" onClick={onClose} />
            <div className="item-viewer">
                <div className="images">
                    <img src={image} alt="SS" />
                </div>
                <span onClick={onClose} className="closer">
                    <CloseIcon />
                </span>
                <div className="item-info">
                    <div className="p-container">
                        <div className="fooddescription">
                            <span className="pop-up-text p-h-semibold">
                                <span>
                                    {name[lang]}
                                    {/* <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    /> */}
                                </span>
                                {Array.isArray(ingredients) ? (
                                    <ul>
                                        {ingredients.map((i, index) => (
                                            <li
                                                style={{
                                                    color:
                                                        state.mode == "dark"
                                                            ? "#fff"
                                                            : "#000",
                                                    fontSize: "14px",
                                                }}
                                                key={index + "_ingredients"}
                                            >
                                                {i.name[lang]}
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </span>
                            {/*{size.discount_price && (
                                <div
                                    className="p-sale"
                                    style={{ marginTop: 10 }}
                                >
                                    <div className="percentage">
                                        <span className="text02 p-b-medium">
                                            <span>{discount}%</span>
                                        </span>
                                    </div>
                                    <div className="saleprice">
                                        <span className="text04 p-b-medium">
                                            <span
                                                style={{
                                                    whiteSpace: "nowrap",
                                                    textDecoration:
                                                        "line-through",
                                                    textDecorationColor: "red",
                                                }}
                                            >
                                                {size.price}{" "}
                                                {Constants.currency}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                            )}*/}
                        </div>
                    </div>
                    
                        <span >
                            {size.discount_price ? size.discount_price : size.price}
                            {Constants.currency}
                        </span>
              
                  
                </div>
            </div>
        </>
    );
}
