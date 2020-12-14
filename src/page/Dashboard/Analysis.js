// Analysis.js
import { history } from 'umi';
import { Button } from 'antd';

export default () =>
  <>
    <h1>Dashboard Analysis Page</h1>
    <Button type="primary" onClick={() => {
      history.push('/');
    }}>Back</Button>
  </>
