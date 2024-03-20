function CurrentTime() {
  let date = new Date();
  let currentDate = date.toUTCString();
  let currentHour = date.getHours() ;
  let currentMinute= date.getMinutes();
  let currentSeconds= date.getSeconds();
  return <h2>This is the current Time: {currentDate} - {currentHour}:{currentMinute}:{currentSeconds}</h2>

}
export default CurrentTime;