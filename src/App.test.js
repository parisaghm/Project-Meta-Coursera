import { render, fireEvent, screen, act, waitFor} from "@testing-library/react";

import userEvent from '@testing-library/user-event';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom'
import App from './App';
import BookingPage from './bookingPage';
import BookingForm from "./bookingForm";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
// jest.mock('./App');
// jest.mock('./bookingPage');
// jest.mock('./bookingForm');
// App.mockImplementation(props => props.showModel)
// BookingPage.mockImplementation(props=> props.bookedDate)


describe("Reservation Form", () => {
test('Initialize the time', async() => {
    const testingDate='2023-08-10'
    // render the app
    render(<App />);
    const headingElement = screen.getByText("Reserve a table");
    const btnReservations = screen.getByTestId("reservationNav"); 
    // get to the reservation page
    fireEvent.click(btnReservations); 
    expect(headingElement).toBeInTheDocument()
    render(<BookingPage/>);
    //check if the boooking modal rendered as expected
    const book = screen.getByTestId("book");
    expect(book).toBeInTheDocument()

    //select a date and check if the time is initialized as expected 
    const pickDate = screen.getByTestId("date");
    await act( async () => {
      fireEvent.mouseDown(pickDate);
    fireEvent.change(pickDate, { target: { value: testingDate } });});
    expect(pickDate).toBeInTheDocument()
    expect(pickDate.value).toBe('2023-08-10')
    const picktime = screen.getByTestId("time");
    fireEvent.click(picktime); 
    const pickOptions = screen.getAllByTestId("select-option");
    await act( async () => {
      fireEvent.mouseDown(picktime);
      expect(pickOptions.length).toBe(8);
      expect(pickOptions[0].value).toBe('13:00');
    })
})

test('Update available time ', async() => {

  const defaultTimeSlots=['13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']
  const testingDate='2023-08-25'
  const bookings=[{date:testingDate,time:'13:00'},{date:testingDate,time:'20:00'}]

  render(<BookingForm  bookings={bookings} defaultTimeSlots={defaultTimeSlots}  />);
  //select a date and check if the time is initialized as expected 
    window.bookedDate=bookings
  const picktime = screen.getByTestId("time");
  const pickOptions = screen.getAllByTestId("select-option");
  const pickDate = screen.getByTestId("date");

    await act( async () => {
      fireEvent.mouseDown(pickDate);
    fireEvent.change(pickDate, { target: { value: testingDate } });});
    expect(pickDate).toBeInTheDocument()
   
console.log('window',window.bookedDate)


    await act( async () => {
      fireEvent.mouseDown(picktime);
      console.log('options',pickOptions)
      expect(pickOptions[6].value).toBe('19:00');
      expect(pickOptions[0].value).toBe('14:00');
      

      
    })
 
 


})



})