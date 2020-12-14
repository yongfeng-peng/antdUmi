import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

export default () => {
  return <Result
    status={404}
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
};