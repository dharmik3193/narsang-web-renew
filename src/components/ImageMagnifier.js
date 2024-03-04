
import { useCallback, useEffect, useRef, useState } from "react";


export default function ImageMagnifier() {
    
  const imgRef = useRef();
  const cardRef = useRef();
  const [mousePos, setMousePos] = useState(0);

  const determinePos = useCallback(
    (ele, mouse) => {
      console.log(mouse)
      const boudingsCard = ele.getBoundingClientRect();
      const cardTop = boudingsCard.top;
      const cardLeft = boudingsCard.left;

      const relativeX = mouse.pageX - cardLeft;
      const relativeY = mouse.pageY - cardTop;

      imgRef.current.style.top = -relativeY * 1 + "px";
      imgRef.current.style.left = -relativeX * 1 + "px";
      imgRef.current.style.backGround = 'red';
      imgRef.current.style.border = 'red';


    },
    [mousePos]
  );
  useEffect(() => {
    if (cardRef.current) {
      determinePos(cardRef.current, mousePos);
    }
  }, [imgRef, mousePos, cardRef]);
  const handleMouseLeave = () => {
    imgRef.current.style.top = 0;
    imgRef.current.style.left = 0;
  };

  return (

  <>
<div className="App d-flex">

    <div className="card" ref={cardRef} onMouseMove={(e) => setMousePos(e)} onMouseLeave={handleMouseLeave}>
        <img src="https://images.pexels.com/photos/12328370/pexels-photo-12328370.jpeg" alt=""/> 
    </div>
    <div className="main-box">
      <div className="card">
        <img  ref={imgRef} src="https://images.pexels.com/photos/12328370/pexels-photo-12328370.jpeg" alt=""/> 
      </div>
    </div>
</div>
  </>
  )
}
