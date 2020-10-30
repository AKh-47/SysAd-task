import React from "react";
import Event from "./Event";
import "./Events.scss";

export default function Events() {
  return (
    <div className="events">
      <div className="events__top">
        <div className="events__heading">Events</div>
      </div>

      <div className="events__container">
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
}
