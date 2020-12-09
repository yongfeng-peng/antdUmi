
// 一个基本的 dva model 最少具备两个成员：namespace 和 state。namespace 来作为一个 model 的唯一标识，state 中就是该 model 管理的数据。
// export default {
//   namespace: 'puzzlecards',
//   state: {
//     data: [
//       {
//         id: 1,
//         setup: 'Did you hear about the two silk worms in a race?',
//         punchline: 'It ended in a tie',
//       },
//       {
//         id: 2,
//         setup: 'What happens to a frog\'s car when it breaks down?',
//         punchline: 'It gets toad away',
//       }
//     ],
//     counter: 100, 
//   },
//   /** 
//   * reducers 用来响应 action 并修改 state
//   * 每一个 reducer 都是一个 function，action 派发后，通过 action.type 被唯一地匹配到，随后执行函数体逻辑，
//   * 返回值被 dva 使用作为新的 state。state 的改变随后会被 connect 注入到组件中，触发视图改变。
//   * reducer 干的事情和 React 中 setState(prevState => { ... }) 很像，都要返回一个新构造的对象，但区别是：reducer 的返回值会 
//   * 整个取代 (Replace) 老的 state，而 setState 中回调函数的返回值是会 融合(Merge) 到老的 state 中去。
//   */
  
//   reducers: {
//     addNewCard(state, { payload: newCard }) { // es6对象解析赋值
//       const nextCounter = state.counter + 1;
//       const newCardWithId = {...newCard, id: nextCounter};
//       const nextData = state.data.concat(newCardWithId);
//       return {
//         data: nextData,
//         counter: nextCounter
//       };
//     }
//   }
// }

import { message } from 'antd';
import request from '../util/request';  // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise

const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};

export default {
  namespace: 'puzzlecards',
  state: {
    data: [],
    counter: 0,
  },
  // 局部上看 effect 就是一个一个的 generator function。宏观上看，effect 是一层中间件。
  /** 
   * Generator function
   * 用来处理异步逻辑
   * 天然地就具备处理异步的特质
  */
  effects: {
    *queryInitCards(_, sagaEffects) {
      const { call, put } = sagaEffects;
      const endPointURI = '/dev/random_joke';

      const puzzle = yield call(request, endPointURI);
      yield put({ type: 'addNewCard', payload: puzzle });

      yield call(delay, 3000);

      const puzzle2 = yield call(request, endPointURI);
      yield put({ type: 'addNewCard', payload: puzzle2 });

      // try { // 加入 try catch 捕获抛错
      //   const puzzle = yield call(request, endPointURI);
      //   yield put({ type: 'addNewCard', payload: puzzle });
    
      //   yield call(delay, 3000);
    
      //   const puzzle2 = yield call(request, endPointURI);
      //   yield put({ type: 'addNewCard', payload: puzzle2 });
      // } catch (e) {
      //   message.error('数据获取失败'); // 打印错误信息
      // }

    }
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
      };
    }
  },
};