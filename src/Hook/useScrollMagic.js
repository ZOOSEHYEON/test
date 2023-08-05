import React, { useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { TweenMax } from "gsap";

const useScrollMagic = () => {
  const [controllerLogLevel, setControllerLogLevel] = useState(3);
  const [sceneLogLevel, setSceneLogLevel] = useState(3);

  const handleControllerLogChange = (e) => {
    const level = e.target.checked ? 3 : 0;
    setControllerLogLevel(level);
  };

  const handleSceneLogChange = (e) => {
    const level = e.target.checked ? 3 : 0;
    setSceneLogLevel(level);
  };

  return (
    <div>
      <form className="loglevel move">
        <fieldset>
          <legend>Console Output</legend>
          <div>
            <input
              type="checkbox"
              id="logcontroller"
              value="1"
              checked={controllerLogLevel === 3}
              onChange={handleControllerLogChange}
            />
            <label htmlFor="logcontroller">Controller</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="logscene"
              value="1"
              checked={sceneLogLevel === 3}
              onChange={handleSceneLogChange}
            />
            <label htmlFor="logscene">Scene</label>
          </div>
        </fieldset>
      </form>
      <div className="spacer s2"></div>
      <div id="trigger" className="spacer s0"></div>
      <div id="target" className="box1 green">
        요소
      </div>
      <div className="spacer s2"></div>
      <Controller globalSceneOptions={{ loglevel: controllerLogLevel }}>
        <Scene
          triggerElement="#trigger"
          duration={500}
          loglevel={sceneLogLevel}
          pin="#target"
        >
          {(progress) => {
            // 스크롤을 내릴 때 요소가 올라오도록 설정합니다.
            const translateY = -100 * progress * 2; // 이 값에 따라 요소가 얼마나 올라가는지 조절 가능합니다.
            TweenMax.to("#target", 0.5, { y: translateY });
            return (
              <div>
                {/* Content to be revealed */}
              </div>
            );
          }}
        </Scene>
      </Controller>
    </div>
  );
};

export default useScrollMagic;
