import React from 'react'
// import Picture from './Picture'

class PictureContent extends React.Component {
  render() {
    const Picture = (props) => {
      return (
        <div>
          <img src={props.src} />
          {props.children}
        </div>
      )
    };
    const picture = {
      src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
    };
    return (
      <div className='container'>
        <Picture src={picture.src}>
          <div>这里放置的内容就是 props.children</div>
        </Picture>
      </div>
    )
  }
}

export default PictureContent;