// import React from 'react';
import { Card, Button, Upload, message } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';

import  * as Icon from '@ant-design/icons';
var iconType = 'CloudDownloadOutlined';

import myStyles from '../assets/styles.less';

const lang = window.navigator.language;

// export default () => {
//   return <div>Hello World</div>;
// }

export default () => {
  const style = {
    width: '400px',
    margin: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #e8e8e8',
  };

  const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const helloworld = lang === 'en-US' ? 'hello world' : '你好';
  return (
    <div>
      <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
        <Card.Meta
          avatar={<img 
            alt=""
            style={{ width: '64px', height: '64px', borderRadius: '32px' }}
            src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
          />}
          title="Alipay"
          description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
        />
      </Card>
      <div className={myStyles.hello}>
          
        <span className={myStyles.deleted}>{ helloworld }</span>
      </div>
      <p>
        <span className={myStyles['override-ant-btn']}>
          <Button type="primary">圆角样式按妞</Button>
        </span>
      </p>
      <p>
        <Button type="primary">antd 原始按钮</Button>
      </p>
      <Upload {...props}>
        <Button icon={<VerticalAlignTopOutlined />}> Click to Upload</Button>
      </Upload>
      <a href="http://somehost/somefile.zip" download="filename.zip">Download file</a>
      <div > 
      {
        React.createElement(
          Icon[iconType],
          {
            style:{ fontSize: '16px', color: '#08c' }
          }
        )
      }
      </div>

    </div>
  );
}
