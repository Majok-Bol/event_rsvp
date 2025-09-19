export default function App() {
  return (
    <>
      <h1>Event Registration Form</h1>
      <form>
        <div>
          <label>
            First Name:
            <input type="text" />
          </label>
        </div>
        <div>
          {" "}
          <label>
            Last Name:
            <input type="text" />
          </label>
        </div>

        <div>
          {" "}
          <label>
            Email:
            <input type="email" />
          </label>
        </div>

        <div>
          {" "}
          <label>
            Address:
            <input type="text" />
          </label>
        </div>

        <div>
          {" "}
          <label>
            Contact:
            <input type="number" />
          </label>
        </div>

        <button type="submit">Submit form</button>
      </form>
    </>
  );
}
