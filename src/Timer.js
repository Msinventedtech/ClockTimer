import React from 'react';



class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }

   
    render() {
      return ( 
      <div>
      <h1 className='tc f1'> TIMER CLOCK</h1>
    
      <div className='tc'>
              <section class="tc bg-light-green br3 pa5 ma2 dib bw2">
              <h1 class="f-6 mb1">00</h1>
              <h2 class="f5 fw4 gray mt0">Hour</h2>
              </section>
              <section class="tc bg-light-green br3 pa5 ma2 dib bw2">
              <h1 class="f-6 mb1">00</h1>
              <h2 class="f5 fw4 gray mt0">MINUTE</h2>
              </section>
              <section class="tc bg-light-green br3 pa5 ma2 dib bw2">
              <h1 class="f-6 mb1">{this.state.seconds}</h1>
              <h2 class="f5 fw4 gray mt0">SECOND</h2>
              </section>
      </div>
          <div className='flex justify-center'>
                <div className='tc pa4 mr2'>
                <button className='br4 f2 link dim ph3 grow dib pv2 mb2 dib white bg-dark-blue' type="button">START</button>
                </div>
                <div className='tc pa4 mr2'>
                <button className='br4 f2 link dim ph3 grow dib pv2 mb2 dib white bg-dark-blue' type="button">STOP</button>
                </div>
                <div  className='tc pa4 mr2'>
                <button className='br4 f2 link dim ph3 grow dib pv2 mb2 dib white bg-dark-blue' type="button">PAUSE</button>
                </div>
                <div className='tc pa4 mr2'>
                <button className='br4 f2 link dim ph3 grow dib pv2 mb2 dib white bg-dark-blue' type="button">RESET</button>
                </div>
          </div>
          </div>
    );
    }
  }


  export default Timer;