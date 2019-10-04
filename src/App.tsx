import React, { FC } from "react";

import logo from "./assets/images/car-next-logo.png";
import { ReactComponent as IconRight } from "./assets/icons/arrow-right.svg";

export const App: FC = () => (
  <>
    <header>
      <a href="#">
        <img src={logo} alt="CarNext logo" title="CarNext logo" />
      </a>
    </header>
    <section>
      <h1>Get a free year of driving!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat eros,
        finibus ac ullamcorper sit amet, tempus quis lacus. Quisque eleifend
        semper pretium. Sed rutrum odio lectus, id maximus nunc rhoncus sed.
        Praesent quis suscipit dui. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer orci dui, rutrum eu feugiat lobortis, tristique
        sollicitudin est. Nulla tincidunt semper nibh at pulvinar. Etiam tempor
        quam vitae neque ornare efficitur. Morbi id egestas est, at viverra
        orci. Fusce eleifend placerat ligula, eget viverra lectus facilisis
        vitae. Praesent placerat tortor a mi laoreet, quis lobortis nunc
        eleifend.
      </p>
    </section>
    <section>
      <h2>Get a car leasing offer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat eros,
        finibus ac ullamcorper sit amet, tempus quis lacus.
      </p>
      <form>
        <label htmlFor="form--first-name">First name</label>
        <input
          id="form--first-name"
          placeholder="Enter first name"
          type="text"
        />
        <label htmlFor="form--surname">Surname</label>
        <input id="form--surname" placeholder="Enter surname" type="text" />
        <label htmlFor="form--email">Email address</label>
        <input
          id="form--email"
          placeholder="Enter your email address"
          type="email"
        />
        <label htmlFor="form--phone">Phone number</label>
        <input
          id="form--phone"
          placeholder="Enter your phone number"
          type="tel"
        />
        <label htmlFor="form--voucher">Voucher code</label>
        <input
          id="form--voucher"
          placeholder="Enter your voucher code"
          type="number"
        />
        <input id="form--policy" type="checkbox" />
        <label htmlFor="form--policy">Accept Privacy Settlement</label>
        <button type="submit">
          Get Offer
          <IconRight />
        </button>
      </form>
    </section>
  </>
);
