// 首页组件
import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

import { productRoute, userRoute } from 'util/route';
import Card from './card.js';

class Home extends React.PureComponent {
  componentDidMount() {
    document.title = '首页';
    this.props.getStatisticData();
  }

  render() {
    const { home } = this.props;
    const { statisticData } = home;
    const { userCount, orderCount, productCount } = statisticData;

    return (
      <div>
        <Row gutter={40}>
          <Col span={8}>
            <Card title='用户总数' num={userCount} linkTo={userRoute.list} />
          </Col>
          <Col span={8}>
            <Card title='商品总数' num={productCount} linkTo={productRoute.list} />
          </Col>
          <Col span={8}>
            <Card title='订单数' num={orderCount} linkTo='/order' />
          </Col>
        </Row>
      </div>
    );
  }
}

Home.propTypes = {
  home: PropTypes.object.isRequired,
  getStatisticData: PropTypes.func.isRequired
};

export default Home;
