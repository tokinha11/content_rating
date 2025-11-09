
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
        handleLike:() => {
            this.setState((prevState) => ({
                likes: prevState.likes + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        },

        handleDislike:() => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        }
    };
  }
  render() {
    return (
     <div className='content-rating'>
        <p>
            <h1>Aporta tu valoración</h1>
        </p>
        <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handleLike}>
                Me gusta ({this.state.likes})
            </button>
            <button className='dislike-button' onClick={this.state.handleDislike}>
                No me gusta ({this.state.dislikes})
            </button>
        </div>
        <p>Total Ratings: {this.state.totalRatings}</p>
     </div>
    );
  }
}

export default ContentRating;
