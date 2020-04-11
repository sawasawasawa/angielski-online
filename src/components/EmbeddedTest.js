import React, { useEffect } from 'react'
import useDimensions from 'react-use-dimensions'

export default () => {
  // TODO resize
  const [ref, { x, y, width }] = useDimensions();
  return <div ref={ref}>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfW4ybnvl1nyn9hip9V2I3YCNEZEhlqRKAo94-Cv4QZjA7Q2A/viewform?embedded=true"
      width={width} height="520" frameBorder="0" marginHeight="0" marginWidth="0">Ładuję…
    </iframe>
  </div>
}
