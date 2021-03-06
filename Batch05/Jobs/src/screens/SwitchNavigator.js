import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

const RouteConfigs = {
  Stack: { screen: StackNavigator },
  // Tab: { screen: TabNavigator },
  Drawer: { screen: DrawerNavigator },
};

const SwitchNavigatorConfig = {};

const SwitchNavigator = createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);

export default SwitchNavigator;
