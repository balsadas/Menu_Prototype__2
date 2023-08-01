import React from "react";
import Marquee from "../../pages/Items/Marquee";
import Constants from "../../common/Constants";
import { useAppContext } from "../../Context";

import "./css.css";
import { Locales } from "../../common";

function ContactUs() {
    const { state } = useAppContext();
    return (
        <div style={{ marginBottom: "50px", textAlign: "center",paddingBottom: '50px' }}>
            <Marquee title={Locales[state.lang].Contact} />
            <div className="contact">
                <div>
                    <div style={{ marginTop: "2.5rem" }}>
                        <h2
                            style={{
                                color:
                                    state.mode == "dark" ? "#fff" : "#515151",
                                fontSize: "18px",
                                textTransform: "uppercase",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            {Locales[state.lang].Phone}
                        </h2>
                        <a
                            href={"tel:" + Constants.storePhones[0]}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                textDecoration: "none",
                                fontSize: "28px",
                                color: "#fff",
                                paddingTop: "2px",
                                boxSizing: "border-box",
                            }}
                        >
                            {Constants.storePhones[0]}
                        </a>
                        <a
                            href={"tel:" + Constants.storePhones[1]}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                textDecoration: "none",
                                fontSize: "28px",
                                color: "#fff",
                                paddingTop: "2px",
                                boxSizing: "border-box",
                            }}
                        >
                            {Constants.storePhones[1]}
                        </a>
                        <a
                            href={"tel:" + Constants.storePhones[2]}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                textDecoration: "none",
                                fontSize: "28px",
                                color: "#fff",
                                paddingTop: "2px",
                                boxSizing: "border-box",
                            }}
                        >
                            {Constants.storePhones[2]}
                        </a>
                    </div>
                    <div style={{ marginTop: "2.5rem" }}>
                        <h2
                            style={{
                                color:
                                    state.mode == "dark" ? "#fff" : "#515151",
                                fontSize: "18px",
                                textTransform: "uppercase",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            {Locales[state.lang].Address}
                        </h2>
                        <h2
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#fff",
                            }}
                        >
                            {Locales[state.lang].Address_1}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
