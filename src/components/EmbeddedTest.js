import React, { useEffect } from 'react'
import useDimensions from 'react-use-dimensions'

export default ({email}) => {
  // TODO resize
  const [ref, { width }] = useDimensions();
  const src = `https://docs.google.com/forms/d/e/1FAIpQLSfW4ybnvl1nyn9hip9V2I3YCNEZEhlqRKAo94-Cv4QZjA7Q2A/viewform?embedded=true${email ? '&emailAddress=' + email : ''}`
  const height = typeof window != undefined ? window.innerHeight - 89 : 650

  return <div ref={ref}>
    <iframe
      src={src}
      width={width} height={height} frameBorder="0" marginHeight="0" marginWidth="0">Ładuję…
    </iframe>

    <div style={{display: 'flex', justifyContent: 'center'}}>
    <span style={{fontSize: '12px', textAlign: 'center', width: '100%'}}>© 2020, Rajmund Sawka. This work is licensed under the Creative Commons Attribution
                Noncommercial 4.0 International License, CC BY NC. To view a copy of this license, visit: <a href="https://creativecommons.org/licenses/by-nc/4.0/">creativecommons.org/licenses/by-nc/4.0/</a>
              </span>
    </div>
  </div>
}
