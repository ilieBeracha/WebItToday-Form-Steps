import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './StepProgressBar.css'

function StepProgressBar(props) {

  const { currentStep } = props;
  const totalSteps = 3;

  return (
    <div className="StepProgressBar">
      <ProgressBar
        percent={(currentStep - 1) * (100 / (totalSteps - 1))}
        filledBackground="#6946D9"
      >
        <Step
          transition="scale"
          accomplished={currentStep > 1}
        >
          {({ accomplished }) => (

            <div className={`step ${accomplished ? "Completed" : ""}`}>
              1
            </div>
          )}
        </Step>
        <Step
          transition="scale"
          accomplished={currentStep > 2}
        >
          {({ accomplished }) => (
            <div className={`step ${accomplished ? "Completed" : ""}`}>
              2
            </div>
          )}
        </Step>
        <Step
          transition="scale"
          accomplished={currentStep > 3}
        >
          {({ accomplished }) => (
            <div className={`step ${accomplished ? "Completed" : ""}`}>
              3
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
}

export default StepProgressBar;
