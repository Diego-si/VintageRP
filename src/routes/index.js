import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Home from '../pages/Home';
import Vips from '../pages/Vips';
import Nitro from '../pages/Nitro';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} isClosed={false} />
      <MyRoute exact path="/vips/" component={Vips} isClosed={false} />
      <MyRoute exact path="/nitro/" component={Nitro} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
