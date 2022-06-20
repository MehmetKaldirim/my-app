import React from "react";

export function Main() {
  return (
    <main>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile</li>
      </ul>
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2022 Math development. All rights reserved.</small>
    </footer>
  );
}
