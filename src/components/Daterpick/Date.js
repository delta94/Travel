import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from './Date.scss';
class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: ''
    }
    
  }

  componentDidUpdate(prevProps, prevState)  {
    console.log(this.state.startDate);
    console.log(this.state.endDate);
  }
  render() {

    return (
      <div className={styles.dateContainer}>
        <DatePicker className={styles.datePick} selected={this.state.startDate} onChange={date => this.setState({ startDate: date })} placeholderText='Check In' />-
        <DatePicker className={styles.datePick} selected={this.state.endDate} onChange={date => this.setState({ endDate: date })} placeholderText='Check Out' />
      </div>
    );
  }
};
export default Date;