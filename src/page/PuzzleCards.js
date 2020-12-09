// import React, { Component } from 'react';
// import { Card, Button } from 'antd';

// export default class PuzzleCards extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cardList: [
//         {
//           id: 1,
//           setup: 'Did you hear about the two silk worms in a race?',
//           punchline: 'It ended in a tie',
//         },
//         {
//           id: 2,
//           setup: 'What happens to a frog\'s car when it breaks down?',
//           punchline: 'It gets toad away',
//         },
//       ],
//     };
//   };
//   addNewCard = () => {
//     this.setState(prevState => {
//       const prevCardList = prevState.cardList;
//       this.counter += 1;
//       const card = {
//         id: this.counter,
//         setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
//         punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       };
//       return {
//         cardList: prevCardList.concat(card)
//       }
//     })
//   }
//   render() {
//     return (
//       <div>
//         {
//           this.state.cardList.map(card => {
//             return (
//               <Card key={card.id}>
//                 <div>Q: {card.setup}</div>
//                 <div>
//                   <strong>A: {card.punchline}</strong>
//                 </div>
//               </Card>
//             );
//           })
//         }
//         <div style={ {marginTop: '20px',} }>
//           <button onClick={this.addNewCard}> 添加卡片 </button>
//         </div>
//       </div>
//     )
//   }
// }

// 基于 dva 的简单卡片列表页：使用 connect 对接静态的 dva model
// import React, { Component } from 'react';
// import { Card /* ,Button */ } from 'antd';
// import { connect } from 'dva';

// const namespace = 'puzzlecards';

// const mapStateToProps = (state) => {
//   const cardList = state[namespace];
//   return {
//     cardList,
//   };
// };

// @connect(mapStateToProps)
// export default class PuzzleCards extends Component {
//   render() {
//     return (
//       <div>
//         {
//           this.props.cardList.map(card => {
//             return (
//               <Card key={card.id}>
//                 <div>Q: {card.setup}</div>
//                 <div>
//                   <strong>A: {card.punchline}</strong>
//                 </div>
//               </Card>
//             );
//           })
//         }
//         {/* <div>
//           <Button onClick={this.addNewCard}> 添加卡片 </Button>
//         </div> */}
//       </div>
//     );
//   }
// }

// "添加卡片" 按钮：使用 dispatch 和 reducer 改变 dva model
import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

// mapStateToProps 语义化命名，没有特殊规定
const mapStateToProps = (state) => {
  const cardList = state[namespace].data;
  return {
    cardList,
  };
};

// mapDispatchToProps 语义化命名，没有特殊规定
const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (newCard) => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      };
      dispatch(action); // dispatch 函数就是和 dva model 打交道的唯一途径。
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)

/**
  * 因为使用了ES7的装饰器语法，该语法目前属于实验性语法，在将来有修改的可能，所有ESLint校验时会报错
  * 最简单粗暴的方法就是修改VS Code的用户设置，在settings.json文件中添加这样一句： "javascript.implicitProjectConfig.experimentalDecorators": true
  * 当然你也可以修正tsconfig.json或jsconfig.json文件中的相关配置，相应代码如下：
  "compilerOptions": {
   "experimentalDecorators": true
  } 
 */

export default class PuzzleCards extends Component {
  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div style={ {marginTop: '20px',} }>
          <Button onClick = { 
            () => this.props.onClickAdd({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            punchline: 'here we use dva',
          })
          }> 添加卡片 </Button>
        </div>
      </div>
    );
  }
}