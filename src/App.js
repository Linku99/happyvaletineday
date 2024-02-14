import "./App.css";
import React, { useState, useEffect } from "react";

import useSound from "use-sound";
import ishq_wala_ringtone from "./assets/mp3/ishq_wala_ringtone.mp3";
import gifts from "./assets/images/gifts.jpg";
import loons1 from "./assets/images/loons1.jpg";
import cake from "./assets/images/cake.jpg";

function App() {
  const [pageState, setPageState] = useState({
    btnDisplay: true,
    openDisplay: true,
    openCake: false,
  });
  const [play] = useSound(ishq_wala_ringtone);
  useEffect(() => {
    setPageState({ btnDisplay: true });
  }, []);
  const playBtn = () => {
    // const { btnDisplay } = pageState;
    setPageState({ ...pageState, btnDisplay: false, openDisplay: true });
  };
  const openBtn = () => {
    // const { openDisplay } = pageState;
    setPageState({ ...pageState, openDisplay: false, openCake: true });
  };
  return (
    <>
      <div className="container-fluid p-0">
        <div className="body">
          <h1 className="bday">
            <span>H</span>
            <span>A</span>
            <span>P</span>
            <span>P</span>
            <span>Y</span>
            <span>V</span>
            <span>A</span>
            <span>L</span>
            <span>E</span>
            <span>N</span>
            <span>T</span>
            <span>I</span>
            <span>N</span>
            <span>E</span>
            <span>'S</span>
            <span>D</span>
            <span>A</span>
            <span>Y</span>
          </h1>
          
          <section>
            <h1 className="khusi">
              <span>S</span>
              <span>U</span>
              <span>S</span>
              <span>H</span>
              <span>R</span>
              <span>E</span>
              <span>E</span>
            </h1>
          </section>
          <div
            className="row justify-content-center"
            style={{
              marginTop: "120px",
            }}
          >
            <button
              className={
                pageState.btnDisplay
                  ? "btn btn-info"
                  : "btn bg-transparent txt-out"
              }
              onClick={play}
              onMouseDown={playBtn}
            >
              Click Me!
            </button>
          </div>
          {pageState.btnDisplay ? null : (
            <div className="row m-1 p-2 shadow bg-white shadow-in">
              <div
                className="col-lg-6 col-12 my-2 shadow-lg border"
                style={{
                  background: `url(${loons1})`,
                  height: "350px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="row w-50 pl-2 pt-2">
                  <p className="quote">
                    “Happy valentine’s my crush, you bring joy to my life and I haven’t even made you mine yet. Soon to meet and make this day worth remembering lovely crush.” <br />
                    <br /> Happy Valentine's Day!
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6 col-12 my-2 border float-right"
                style={{
                  background: `url(${gifts})`,
                  height: "350px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              >
                <p className="fullform p-1">
                  S - Supportive <br />U - Understanding <br />S - Strong <br />H - Honest{" "}
                  <br />R - Reliable <br />E - Enthusiastic <br />E - Empathetic 
                </p>
              </div>
            </div>
          )}
          <div className=" row p-4 justify-content-center">
            <button
              className={
                pageState.openDisplay
                  ? "btn btn-success"
                  : "btn bg-transparent txt-out"
              }
              onClick={openBtn}
            >
              Open Me!
            </button>
            <br />
            {pageState.openCake ? (
              <div className="row bg-white w-100 shadow-in">
                <div
                  className="col-lg-12 col-12"
                  style={{
                    background: `url(${cake})`,
                    height: "640px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                >
                  <p className="fullform2">
                    Forget the past; it is gone. Do not think of the future; it
                    has not come. But live in the present because it's a gift
                    and that's why it's called the present. You are the sweetest
                    person I know, and this valentine's day is a fresh beginning. I
                    wish you confidence, courage, and capability. <br />
                    Happy Valentine's Day.
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
