import React, { useParams } from "react";
import './Details.css'
function Details({ id }) {
  //console.log(id);
  return (
    <div className="body">
      <div className="card">
        <div className="inner-card">
          <div className="base-info">
            <p>Evolves from Charmeleon</p>
            <p>Put Charazard in the stage 1 card</p>
          </div>
          <hr className="first-hr" />
          <div className="title">
            <h3>Charizard</h3>
            <h3 className="hp">120 HP</h3>
            <img
              src="http://res.cloudinary.com/bpettis/image/upload/v1516916046/firetype_otgmwq.png"
              alt="fire type"
              height="20px"
              width="20px"
            />
          </div>
          <h6 className="stage-text">stage 2</h6>
          <img
            className="stage-img"
            src="https://vignette.wikia.nocookie.net/pokemon/images/4/4a/005Charmeleon.png/revision/latest?cb=20140328191309"
            alt="Pokemon Stage"
            width="35px"
            height="auto"
          />
          <img
            className="main-img"
            src="https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fapptrigger.com%2Ffiles%2F2016%2F10%2Fcharizard-pokemon-tcg-xy-evolutions.jpg&amp;w=850&amp;h=560&amp;c=sc"
            alt="Pokemon Main"
            width="220px"
            height="auto"
          />
          <div className="banner">
            <p>Flame Pokemon. Length 5' 7", Weight: 200 lbs.</p>
          </div>
          <div className="main-text">
            <p>
              <span>Pokemon Power: Energy Burn</span> - As often as you like
              during your turn (before your attack), you may turn all Energy
              attached to Charizard into{" "}
              <img
                src="http://res.cloudinary.com/bpettis/image/upload/v1516916046/firetype_otgmwq.png"
                width="10px"
                height="10px"
              />{" "}
              for the rest of the turn. This power can't be used if Charizard is
              Asleep, Confused, or Paralyzed.
            </p>
          </div>
          <hr className="second-hr" />
          <div className="stats">
            <div className="fire-grid">
              <img
                src="http://res.cloudinary.com/bpettis/image/upload/v1516916046/firetype_otgmwq.png"
                alt="fire emblem"
                width="15px"
                height="15px"
              />
              <img
                src="http://res.cloudinary.com/bpettis/image/upload/v1516916046/firetype_otgmwq.png"
                alt="fire emblem"
                width="15px"
                height="15px"
              />
              <img
                src="http://res.cloudinary.com/bpettis/image/upload/v1516916046/firetype_otgmwq.png"
                alt="fire emblem"
                width="15px"
                height="15px"
              />
              <img
                src="http://res.cloudinary.com/bpettis/image/upload/v1516916046/firetype_otgmwq.png"
                alt="fire emblem"
                width="15px"
                height="15px"
              />
            </div>
            <p className="stats-main">
              <span>Fire Spin</span> Discard 2 Energy cards attached to
              Charizard in order to use this attack
            </p>
            <p className="stats-num">100</p>
          </div>
          <hr className="second-hr" />
          <div className="ratings">
            <div className="container">
              <p>weakness</p>
              <div className="weakness">
                <img
                  src="http://res.cloudinary.com/bpettis/image/upload/v1516916052/watertype_nkics0.png"
                  width="10px"
                  height="10px"
                />
              </div>
            </div>
            <div className="container">
              <p>resistance</p>
              <div className="resistance">
                <img
                  src="https://orig00.deviantart.net/5926/f/2012/143/7/3/73f39ecf485e68a11c76f210b2558a02-d50w3jw.png"
                  width="10px"
                  height="10px"
                />
                <sup>-30</sup>
              </div>
            </div>
            <div className="container">
              <p>retreat cost</p>
              <div className="retreat">
                {" "}
                <img
                  src="http://res.cloudinary.com/bpettis/image/upload/v1516916049/normaltype_ztufzq.png"
                  width="10px"
                  height="10px"
                />
                <img
                  src="http://res.cloudinary.com/bpettis/image/upload/v1516916049/normaltype_ztufzq.png"
                  width="10px"
                  height="10px"
                />
                <img
                  src="http://res.cloudinary.com/bpettis/image/upload/v1516916049/normaltype_ztufzq.png"
                  width="10px"
                  height="10px"
                />
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <p>
              spits fire that is hot enought to nelt boulders. Known to
              unintentionally cause forest fires. LV 76 #6
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
