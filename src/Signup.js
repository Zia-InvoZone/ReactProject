import React from 'react';
import { db } from './firebase';
class signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: '', pass: '', email: '', country: '', phone: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log('User type:', this.state);
    db.collection('Users')
      .add(this.state)
      .then(() => {
        alert('Your information saved successfully!');
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="pt-40 max-w-screen-xl m-auto">
        <div className="text-lg font-bold">Signup Form</div>
        <div className="">
          <form onSubmit={this.handleSubmit} className="pt-10">
            <input
              className="block m-auto border p-2 w-1/4 mb-4"
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
              value={this.state.value}
              required
            />
            <input
              className="block m-auto border p-2 w-1/4 mb-4"
              type="password"
              name="pass"
              value={this.state.pass}
              placeholder="Password"
              onChange={this.handleChange}
              required
            />
            <input
              className="block m-auto border p-2 w-1/4 mb-4"
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange}
              required
            />
            <select
              className="block m-auto border p-2 w-1/4 mb-4"
              onChange={this.handleChange}
              value={this.state.country}
              name="country"
            >
              <option value="">Select Country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Canada">Canada</option>
            </select>
            <input
              className="block m-auto border p-2 w-1/4 mb-4"
              type="number"
              name="phone"
              value={this.state.phone}
              placeholder="Phone"
              onChange={this.handleChange}
              required
            />
            <input
              className="bg-black text-white w-1/4 p-2"
              type="submit"
              value="submit"
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default signup;
