import React, { Fragment } from "react";

import { Hero, Section, Hx } from "components/BulmaHelpers";


export default () => (
  <Fragment>
    <Hero size="is-large" textCentered={true}>
      <div className="tag is-warning is-medium">First public demo of dwata!</div>
      <Hx x="1">Welcome to Travlyng admin!</Hx>
      <Hx x="4" titleClass="subtitle">This is demo 1 of dwata (an admin app), running on PosgreSQL data of <a rel="noopener noreferrer" href="https://travlyng.com" target="_blank">Travlyng</a></Hx>
    </Hero>

    <Section>
      <div className="columns">
        <div className="column is-4">
          <Hx x="4">What is in this demo?</Hx>
          <div className="content is-medium">
            <ul>
              <li><strong>Not</strong> optimized for mobile yet, sorry folks</li>
              <li>SQL data sources only (top left)</li>
              <li>Basic column selector (top right)</li>
              <li>Filtering for columns of common data types</li>
              <li>Ordering by clicking table heads or from top nav</li>
              <li>Click any row to see detail view, including self-one relations</li>
              <li>Watch out for bugs, yikes!</li>
            </ul>
          </div>
        </div>

        <div className="column is-4">
          <Hx x="4">What is the near term aim?</Hx>
          <div className="content is-medium">
            <ul>
              <li>Full CRUD* for SQL data</li>
              <li>Filter across all standard column types of MySQL, PostgreSQL</li>
              <li>Multi row selection and data edits</li>
              <li>Highlighted rows, pinned rows, notes</li>
              <li>Manage One-Many, Many-Many related data</li>
            </ul>
            <p>
              * Create, Read, Update, Delete<br />
              Delete can be soft delete, basically set `is_deleted` to TRUE - via config
            </p>
          </div>
        </div>

        <div className="column is-4">
          <Hx x="4">Interested in using at your startup?</Hx>
          <div className="content is-medium">
            Early adopters will get an unlimited user license for lifetime for their business.<br />
            Just share your email address on the chat and we will be in touch!
          </div>
        </div>
      </div>
    </Section>
  </Fragment>
);