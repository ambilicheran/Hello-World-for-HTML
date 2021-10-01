import "./App.css";

function App() {
  return (
    <form action="success.html" method="get">
      <label>Name</label>
      <input name="Name"></input>
      <label>Email</label>
      <input name="Email"></input>
      <button>Sign-up</button>
      <br></br>

      <label for="name">Name</label>
      <input name="name" id="name"></input>
      <label for="email">Email</label>
      <input name="email" id="email"></input>
      <button>Sign-up</button>
      <br></br>

      <label>
        Name<input name="name"></input>
      </label>
      <label>
        Email<input name="email"></input>
      </label>
      <button>Sign-up</button>
      <br></br>

      <label for="name">Name</label>
      <input name="name" id="name" type="text"></input>
      <br />
      <label for="email">Email</label>
      <input
        name="email"
        id="email"
        type="email"
        required
        placeholder="me@example.com"
      ></input>
      <br />
      <label for="password">Password</label>
      <input name="password" id="password" type="password"></input>
      <br />
      <label for="search">Search</label>
      <input name="search" id="search" type="search" placeholder="ABCD"></input>
      <br />
      <label for="phone">Phone</label>
      <input name="phone" id="phone" type="tel"></input>
      <br />
      <label for="textarea">Text Area</label>
      <textarea name="text area" id="textarea" cols="30" rows="15"></textarea>
      <br />
      <label for="date">Date</label>
      <input name="date" id="date" type="date"></input>
      <br />
      <label for="color">Color</label>
      <input name="color" id="color" type="color"></input>
      <br />
      <label for="file">File</label>
      <input name="file" id="file" type="file"></input>
      <br />
      <label for="checkbox">Checkbox</label>
      <input name="checkbox" id="checkbox" type="checkbox" checked></input>
      <br />
      <label for="selectlist">Choose one</label>
      <select name="selectlist" id="selectlist">
        <option>First option</option>
        <option>Second option</option>
        <option>Third option</option>
      </select>
      <br />
      <fieldset>
        <legend>Checkbox in a fieldset</legend>
        <label for="check1">This</label>
        <input name="check1" id="check1" type="checkbox" value="This"></input>
        <br />
        <label for="check2">Next</label>
        <input name="check2" id="check2" type="checkbox" value="Next"></input>
        <br />
        <label for="check3">That</label>
        <input name="check3" id="check3" type="checkbox" value="That"></input>
        <br />
      </fieldset>
      <fieldset>
        <legend>Radio buttons in a fieldset</legend>
        <label for="radio1">This</label>
        <input name="radio1" id="radio1" type="radio" value="This"></input>
        <br />
        <label for="radio2">Next</label>
        <input name="radio2" id="radio2" type="radio" value="Next"></input>
        <br />
        <lable for="radio3">That</lable>
        <input name="radio3" id="radio3" type="radio" value="That"></input>
      </fieldset>
      <button type="submit">Sign-up</button>
    </form>
  );
}

export default App;
