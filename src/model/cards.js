import * as cardsService from '../service/cards';

export default {
  namespace: 'cards',
  state: {
    cardsList: [],
    statistic: {}
  },
  effects: {
    *queryList({ _ }, { call, put }) {
      const rsp = yield call(cardsService.queryList);
      yield put({
        type: 'saveList',
        payload: {
          cardsList: rsp.result
        }
      });
    },
    *addOne({ payload }, { call, put }) {
      const rsp = yield call(cardsService.addOne, payload);
      console.log('add-------payload', payload);
      yield put({
        type: 'queryList',
      });
      return rsp;
    },
    *getStatistic({ payload }, { call, put }) {
      const rsp = yield call(cardsService.getStatistic, payload);
      console.log('add-------payload', payload);
      yield put({
        type: 'saveStatistic',
        payload: {
          id: payload,
          data: rsp.result
        }
      });
      return rsp;
    }
  },
  reducers: {
    saveList(state, { payload: {cardsList} }) {
      return {
        ...state,
        cardsList
      }
    },
    saveStatistic(state, { payload: {id, data} }) {
      return {
        ...state,
        statistic: {
          ...state.statistic,
          [id]: data
        }
      }
    }
  }
}