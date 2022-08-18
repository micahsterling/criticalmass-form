import "./App.css";

function Form() {
  return (
    <div className="">
      <h1>Please Complete Form</h1>
      <form>
        <label>name:</label>
        <input type="name" id="name" autoComplete="off" required />
        <label>Email:</label>
        <input type="email" id="email" autoComplete="off" required />
        <label>Address:</label>
        <input type="address" id="address" autoComplete="off" required />
        <label>City:</label>
        <input type="text" id="city" autoComplete="off" required />
        <label>State:</label>
        <input type="text" id="state" autoComplete="off" required />
        <label>Zip:</label>
        <input type="text" id="zip" autoComplete="off" required />
      </form>
    </div>
  );
}

export default Form;
