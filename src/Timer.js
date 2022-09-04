import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { timer: 0, 
                  paused: true,
                  seconds: 0,
                  minutes: 0,
                  hours: 0
                };
	};
  

  tick = () => {
  	this.setState({ timer : this.state.timer + 1 });
    this.setState({hours : Math.floor(this.state.timer / (60 * 60))});
    
    let divisor_for_minutes = this.state.timer % (60 * 60);
    this.setState ({minutes : Math.floor(divisor_for_minutes / 60)});

    let divisor_for_seconds = divisor_for_minutes % 60;
    this.setState({seconds : Math.ceil(divisor_for_seconds)});
  }
  
	startTimer = () =>{
		this.interval = setInterval(this.tick,1000);
    this.setState({ paused : false }); 
	}


  stopTimer = () => {
  	clearInterval( this.interval );
    this.setState({ paused : true });
	}

  
  reset = () => {
  	this.setState({ timer : 0, paused: true });
    clearInterval( this.interval );
    this.setState({seconds: 0, minutes: 0, hours: 0})
  }
  
  onClickPause = () => {
    if(this.state.paused){
      this.startTimer();
    }
    else{
      this.stopTimer();
    }
  }
   
    render() {
      return ( 
      <div>
      <h1 className='tc f1'> TIMER CLOCK</h1>
      <div className='tc'>
              <section class="tc bg-light-green br3 pa5 ma2 dib bw2">
              <h1 class="f-6 mb1">{this.state.hours}</h1>
              <h2 class="f5 fw4 gray mt0">Hour</h2>
              </section>
              <section class="tc bg-light-green br3 pa5 ma2 dib bw2">
              <h1 class="f-6 mb1">{this.state.minutes}</h1>
              <h2 class="f5 fw4 gray mt0">MINUTE</h2>
              </section>
              <section class="tc bg-light-green br3 pa5 ma2 dib bw2">
              <h1 class="f-6 mb1">{this.state.seconds}</h1>
              <h2 class="f5 fw4 gray mt0">SECOND</h2>
              </section>
      </div>
          <div className='flex justify-center'>
                <div className='tc pa4 mr2'>
                <button onClick={this.startTimer} 
                className='br4 f2 link dim ph3 grow dib pv2 mb2 dib white bg-dark-blue' type="button">START</button>
                </div>
                <div className='tc pa4 mr2'>
                <button onClickCapture={this.stopTimer}
                className='br4 f2 link dim ph3 grow dib pv2 mb2 dib white bg-dark-blue' type="button">STOP</button>
                </div>
                <div  className='tc pa4 mr2'>
                <button onClick={this.onClickPause}
                className ='br4 f2 link dim ph3 grow dib pv2 mb2 dib white bg-dark-blue' type="button">PAUSE</button>
                </div>
                <div className='tc pa4 mr2'>
                <button onClick={this.reset}
                className='br4 f2 link dim ph3 grow dib pv2 mb2 dib white bg-dark-blue' type="button">RESET</button>
                </div>
          </div>
          </div>
    );
    }
  }


  export default App;