import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test('the Counter starts 0', () => {
  //App컴포넌트 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘리먼트에 접근 (접근시 ID로 접근)
  const counterElement = screen.getByTestId("counter");
  //id가 counter인 엘레멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", ()=>{
  //App컴포넌트 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘리먼트에 접근 (접근시 ID로 접근)
  const buttonElement = screen.getByTestId("minus-button");
  //id가 button인 엘레멘트의 텍스트가 -인지 테스트
  expect(buttonElement).toHaveTextContent("-");
});

test("plus button has correct text", ()=>{
  //App컴포넌트 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘리먼트에 접근 (접근시 ID로 접근)
  const buttonElement = screen.getByTestId("plus-button");
  //id가 button인 엘레멘트의 텍스트가 +인지 테스트
  expect(buttonElement).toHaveTextContent("+");
});

test("when the + button is pressed, the counter chages to 1", ()=>{
  //App컴포넌트 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘리먼트에 접근 (접근시 ID로 접근)
  const buttonElement = screen.getByTestId("plus-button");
  //click plus button 
  fireEvent.click(buttonElement);
  //counter가 0에서 +1이 되어 1이 됨
  const counterElement = screen.getByTestId("counter")
  //id가 button인 엘레멘트의 텍스트가 +인지 테스트
  expect(counterElement).toHaveTextContent(1);
});

test("when the - button is pressed, the counter chages to -1", ()=>{
  //App컴포넌트 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘리먼트에 접근 (접근시 ID로 접근)
  const buttonElement = screen.getByTestId("minus-button");
  //click minus button 
  fireEvent.click(buttonElement);
  //counter가 0에서 -1이 되어 -1이 됨
  const counterElement = screen.getByTestId("counter")
  //id가 button인 엘레멘트의 텍스트가 -인지 테스트
  expect(counterElement).toHaveTextContent(-1);
});

test("on/off button has blue color", ()=>{
  //App컴포넌트 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘리먼트에 접근 (접근시 ID로 접근)
  const buttonElement = screen.getByTestId("on/off-button");
  //id가 button인 엘레멘트의 텍스트가 +인지 테스트
  expect(buttonElement).toHaveStyle({backgroundColor: "blue"});
});

test("Prevent the -,+ button from being pressed when the on/off button is clicked", ()=>{
  //App컴포넌트 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘리먼트에 접근 (접근시 ID로 접근)
  const onOffbuttonElement = screen.getByTestId("on/off-button");
  //click onOffbuttonElement 
  fireEvent.click(onOffbuttonElement);
  //counter가 0에서 -1이 되어 -1이 됨
  const plusButtonElement = screen.getByTestId("plus-button")
  //id가 button인 엘레멘트의 텍스트가 -인지 테스트
  expect(plusButtonElement).toBeDisabled();
});