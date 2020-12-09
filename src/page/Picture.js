import React from 'react'

class Picture extends React.Component {
  render() {
    const Picture = (props) => {
      return (
        <div>
          <img src={props.src} />
          // {props.children}
        </div>
      )
    }
  }
}

export default Picture;