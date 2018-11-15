import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEvents } from '../state-management/action-creators';
import MyCalendar from '../shared-components/BigCalendar';

class BookingPage extends Component {
  componentDidMount() {
    this.props.onFetchEvents();
  }

  render() {
    console.log('[ BookingPage ]', this.props);
    return (
      <div className="booking-page">
        <MyCalendar events={this.props.events}/>
      </div>
    );
  }
}

const Connected = connect(
  ({ events }) => ({ events: Object.keys(events).map(id => events[id]) }),
  dispatch => ({
    onFetchEvents: () => dispatch(fetchEvents())
  })
);
export default Connected(BookingPage);
