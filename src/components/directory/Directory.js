import React, { Component } from 'react'
import MenuItem from '../../components/menu-item/MenuItem'
import './Directory.scss'

class Directory extends Component {
  state = {
    sections: [
      {
        title: 'hats',
        imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
        id: 1
      },
      {
        title: 'jackets',
        imageUrl: 'http://i.ibb.co/px2tCc3/jackets.png',
        id: 2
      },
      {
        title: 'sneakers',
        imageUrl: 'http://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3
      },
      {
        title: 'women',
        imageUrl: 'http://i.ibb.co/GCCdy8t/women.png',
        size: 'large',
        id: 4
      },
      {
        title: 'men',
        imageUrl: 'http://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5
      },
    ]
  }
  render() {
    return (
      <div className='directory-menu' >
        {
          this.state.sections.map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} id={id} size={size} />
          ))
        }
      </div >
    )
  }
}

export default Directory
