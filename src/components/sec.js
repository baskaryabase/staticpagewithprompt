import React from 'react';

const Sec = ()=> {
  return(
    <div className="s">
      <center><h2>Watch our video and answer three questions
      </h2></center>

      <div className="hidden-xs">
      <center><iframe width="425px" height="225px"
      className=""
       src="https://www.youtube.com/embed/XGSy3_Czz8k?controls=baahubali"
       allowFullScreen>
      </iframe>
      </center>
      </div>

    <div className="embed-responsive embed-responsive-16by9 visible-xs">
    <center><iframe
    className="embed-responsive"
     src="https://www.youtube.com/embed/XGSy3_Czz8k?controls=baahubali"
     allowFullScreen>
    </iframe>
    </center>
    </div>

    </div>
  );
}

export default Sec;
