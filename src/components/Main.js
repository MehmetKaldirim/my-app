import React from "react";

export function Main() {
  return (
    <div className="App">
      <Page />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2022 Math development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function Page() {
  return (
    <div>
      <MainContent />
      <Footer />
    </div>
  );
}
