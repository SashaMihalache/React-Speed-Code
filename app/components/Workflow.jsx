import React, { PropTypes } from 'react';

const steps = require('../fixtures/workflow/steps.json');

export default class Workflow extends React.Component {
  static propTypes = {
    steps: PropTypes.array.isRequired
  }
  static defaultProps = { steps: Object.values(steps) }
  constructor(props) {
    super(props);
    this.state = { stepsIndex: 0 };
    this.cycleSequence = this.cycleSequence.bind(this);
    this.cycleScenario = this.cycleScenario.bind(this);
  }
  cycleSequence() {
    const nextIndex =
      this.state.stepsIndex === (this.props.steps.length - 1)
        ? 0
        : this.state.stepsIndex + 1;

    this.setState({ stepsIndex: nextIndex });
  }
  cycleScenario() {
    const stepsList = this.props.steps;
    const currentStep = stepsList[this.state.stepsIndex];
    let stepsCount = 0;
    for (let i = 0; i < stepsList.length; ++i) {
      if (stepsList[i].symbol === currentStep.symbol) stepsCount++;
    }
    const currentScenario = currentStep.strategy;
    const loopStart =
      (this.state.stepsIndex + stepsCount) >= stepsList.length
        ? 0
        : this.state.stepsIndex + 1;
    for (let i = loopStart; i < stepsList.length; ++i) {
      if (stepsList[i].strategy !== currentScenario) {
        this.setState({ stepsIndex: i });
        break;
      }
    }
  }
  render() {
    const stepsList = this.props.steps;
    const currentStep = stepsList[this.state.stepsIndex];

    return (
      <div className="workflow">
        <div className="workflow__scenario">
          {currentStep.strategy}
        </div>
        <div className="workflow__text">
          {currentStep.text
            ? currentStep.text
            : <img src={currentStep.img}
              alt={currentStep.strategy} />}
        </div>
        <div className="workflow__nav">
          <div onClick={this.cycleScenario} className="workflow__symbol">
            {currentStep.symbol}
          </div>
          <div className="workflow__steps">
            {currentStep.workflow}
          </div>
          <div onClick={this.cycleSequence} className="workflow__sequence">
            {currentStep.sequence}
          </div>
        </div>
      </div>
    );
  }
}