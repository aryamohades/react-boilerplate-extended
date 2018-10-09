/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default class FeaturePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
          <span>{messages.header}</span>
        </H1>
        <List>
          <ListItem>
            <ListItemTitle>
              <span>{messages.scaffoldingHeader}</span>
            </ListItemTitle>
            <p>
              <span>{messages.scaffoldingMessage}</span>
            </p>
          </ListItem>
        </List>
      </div>
    );
  }
}
