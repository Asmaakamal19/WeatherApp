import React from 'react';
const Form=(porps) => {
    return (
      <div>
          <form onSubmit={porps.getweather}>
              <input type="text" name="city" placeholder="City..." />
              <input type="text" name="country" placeholder="Country..." />
              <button>Get Weather</button>
          </form>
      </div>
    );
  }
export default Form;