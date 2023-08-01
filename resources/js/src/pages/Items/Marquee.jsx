import "./css.css";

export default function Marquee({title}) {
  return (
    <div className="marquee" style={{userSelect:'none'}}>
      <div className="marquee--inner">
        <span>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
        </span>
        <span>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
        </span>
        <span>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
          <div className="orb">{title}</div>
        </span>
      </div>
    </div>
  );
}
