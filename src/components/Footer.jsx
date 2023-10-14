import React from "react";

export default function Footer() {
  const current = new Date();
  const year = current.getFullYear();
  return (
    <footer>
      <p>Created by:Kittu</p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}
