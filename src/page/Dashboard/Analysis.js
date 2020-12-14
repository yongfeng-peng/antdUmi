// Analysis.js
import { router } from 'umi';
import { Button } from 'antd';

export default () => {
  return (
    <div>
      <h1>Dashboard Analysis Page</h1>
      <Button type="primary" onClick={() => {
        router.goBack();
      }}>Back</Button>
    </div>
  )
} 
