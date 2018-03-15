import React from 'react';
import {
  Card,
  Image,
  Divider,
} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setHeaders } from '../actions/headers';

class MyCats extends React.Component {
  state = { cats: [] }

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/my_cats')
      .then( res => {
        this.setState({ cats: res.data })
        dispatch(setHeaders(res.headers));
      });
  }

  render() {
    const { cats } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { cats.map( cat =>
            <Card key={cat.id}>
              <Card.Content>
                <Image src={cat.avatar} />
                <Divider />
                <Card.Header>
                  {cat.name}
                </Card.Header>
              </Card.Content>
            </Card>
          )
        }
      </Card.Group>
    )
  }
}

export default connect()(MyCats)
