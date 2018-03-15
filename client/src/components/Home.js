import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import axios from 'axios';
import Cards, { Card } from 'react-swipe-card'
import '../cards.css';
import { connect } from 'react-redux';
import { setHeaders } from '../actions/headers';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = { cats: [] }

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/cats')
    .then( res => {
      dispatch(setHeaders(res.headers))
      this.setState({ cats: res.data })
    })
  }

  swipeLeft = (id) => {
    const { cats } = this.state;
    this.setState({
      cats: cats.filter( c => c.id !== id )
    })
  }

  swipeRight = (id) => {
    const { cats } = this.state;
    const { dispatch } = this.props;
    axios.put(`/api/cats/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({
          cats: cats.filter( c => c.id !== id )
        })
      });
  }

  render() {
    return (
      <div>
        <Link to="/my_cats">My Cats</Link>
        <Cards className="cards-root">
          { this.state.cats.map( cat =>
            <Card
              key={cat.id}
              onSwipeLeft={() => this.swipeLeft(cat.id)}
              onSwipeRight={() => this.swipeRight(cat.id)}
            >
                <h2>{cat.name}</h2>
                <Image src={cat.avatar} />
                <h3>{cat.breed}</h3>
                <h3>{cat.registry}</h3>
              </Card>
            )
          }
        </Cards>
      </div>
    )
  }
}

export default connect()(Home);
