import React, { PropTypes, Component } from 'react';
import World from './World';
import Card from './Card';
import Youtube from './Youtube';
import IconText from './IconText';
import Github from './Github';

export default class Home extends Component {
  render() {
    return (
      <section className="landing">
        <nav className="nav">
          <a className="nav__brand" href="/">
            ReactSpeed
          </a>
          <a className="nav__link">
            Book
          </a>
          <a className="nav__link">
            Code
          </a>
          <a className="nav__link">
            Demos
          </a>
          <a className="nav__link">
            Website
          </a>
        </nav>
        <section className="stripe">
          <Card plain className="text--center">
            <a href="https://leanpub.com/reactspeedcoding"
              className="image__link">
              <img width="200" src="app/public/img/reactspeed-cover-leanpub.jpg" />
            </a>
          </Card>
          <Card plain className="col--half text--center">
            <h1>Develop Awesome Apps</h1>
            <p className="subtext">
              Join 100s of readers learning
              latest React ES6 concepts.
            </p>
          </Card>
        </section>

        // Github
        <section className="stripe">
          <Card className="col--quarter text--center back--default">
            <Github repo="angular/angular" />
          </Card>
          <Card className="col--quarter text--center back--default">
            <Github repo="facebook/react" />
          </Card>
          <Card className="col--quarter text--center back--default">
            <Github repo="vuejs/vue" />
          </Card>
        </section>

        <section className="stripe back--default">
          <Card className="col--one-third text--center back--white">
            <IconText className="primary" icon="globe" size="5x"
              text="Nine Component Creation Strategies" />
          </Card>
          <Card className="col--one-fourth back--white">
            <h3>
              <IconText slim className="danger" icon="building"
                text="Modular Architecture" />
            </h3>
            <h3>
              <IconText slim className="default" icon="cloud"
                text="Leverages Cloud" />
            </h3>
            <h3>
              <IconText slim className="secondary" icon="cog"
                text="30 Custom Components" />
            </h3>
            <h3>
              <IconText slim className="warning" icon="bullseye"
                text="Goal Oriented Design" />
            </h3>
          </Card>
          <Card plain className="col--one-third text--center">
            <h1>Infographic Components</h1>
            <p className="subtext">
              Custom React components easily reusable to
                create variety of Infographic elements.
            </p>
          </Card>
        </section>

        <section className="stripe">
          <Card plain className="col--one-third text--center back--white">
            <Youtube videoid="9cMhWPID38c" />
          </Card>
          <Card plain className="col--half text--center">
            <h1>Embed React Components</h1>
            <p className="subtext">
              This custom component demonstrates media embed within a custom React component.
            </p>
          </Card>
        </section>




        <section className="stripe back--default">
          <Card plain className="col--half text--center">
            <h1>Custom React Component</h1>
            <p className="subtext">
              This custom component demonstrates props, state,
              and ES6 classes.
            </p>
          </Card>
          <Card className="col--one-third text--center back--white">
            <World />
          </Card>
        </section>
        <section className="stripe--slim back--gray">
          <Card plain className="col--full text--center white">
            <p>
              Copyright (c) 2016, Sasha Mihalache.
            All rights reserved.
          </p>
          </Card>
        </section>
      </section>
    );
  }
}