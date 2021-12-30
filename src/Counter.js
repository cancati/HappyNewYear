import React, { useEffect, useState } from "react";
import './App.css';
import logo from "./logo.svg"

const Counter = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log(time);
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className="Container" style={leading0(seconds)==='00' ? { backgroundColor:'#d90429'} : { backgroundColor:'transparent'}  }>
        {leading0(days) === '00' ? <div className="box"><h1 style={{fontWeight:"lighter"}}> Happy</h1></div> : <div className="box"><h1>{leading0(days)}</h1> <h3 className="text">Days</h3></div> }
        {leading0(hours) === '00' && leading0(days) === '00' ? <div className="box"><h1 style={{fontWeight:"lighter"}}> New</h1></div> :<div className="box"><h1>{leading0(hours)}</h1> <h3 className="text">Hours</h3></div> }
        {leading0(minutes) === '00' ? <div className="box"><h1 style={{fontWeight:"lighter"}}> Year</h1></div>:<div className="box"><h1>{leading0(minutes)}</h1> <h3 className="text">Minutes</h3></div>  }
        {leading0(seconds)==='00' && leading0(minutes) === '00' ? <div className="box">
            <a href="https://www.change.org/p/yeni-kanun-da-hayvanlar%C4%B1-korumuyor-baz%C4%B1-maddeleriyle-eskisinden-%C3%A7ok-daha-k%C3%B6t%C3%BC-uygulamalar-getiren-bu-yasayla-ilgili-itirazlara-kulak-vermenizi-rica-ediyorum-avozlemzengin?source_location=petitions_browse"><img alt='Happy New Year' src={logo}/>
            </a> <h6 style={{fontSize:'8px',position:'relative',alignSelf:'center',fontWeight:'400'}} >Click Me !</h6></div>  :  <div className="box"><h1>{leading0(seconds)}</h1> <h3 className="text">Seconds</h3></div>  }
     
    </div>
  );
};

export default Counter;
