import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../settings.js';
import styles from '../Styles/players.css';

export default class Stats extends Component {
  constructor() {
    super();
    this.state = { stats: [] };
  }

  componentDidMount() {
    axios
      .get(`${config.baseUrl}/api/games/results`)
      .then(res => {
        const stats = res.data ? res.data.filter(item => item._id !== null) : [];
        this.setState({ stats });
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err.response);
      });
  }
  render() {
    return (
      <>
        <Link to="/">Home</Link>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.scoresWrapper}>
              <h3>Player</h3>
              <h3>Won matches</h3>
            </div>
            {this.state.stats.map(item => (
              <div className={styles.scoresWrapper} key={item._id}>
                <div>{item._id}</div>
                <div>{item.count}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
