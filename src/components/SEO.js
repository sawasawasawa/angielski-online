import Helmet from 'react-helmet'
import React from 'react'

export default (props) => <Helmet
  title="EUROlink.online"
  meta={[
    { name: 'description', content: 'Nauka angielskiego online.' },
    {
      name: 'keywords', content: 'nagielski online, angielski przez internet, korepetycje z' +
        ' angielskiego, przygotowanie do kursów językowych.',
    },
  ]}
>
  {props.children}
</Helmet>
