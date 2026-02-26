import { useEffect, useState, useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const stats = [
  { label: "Years at 1337", end: 3, suffix: "+" },
  { label: "Projects Completed", end: 15, suffix: "+" },
  { label: "Technologies Used", end: 20, suffix: "+" },
  { label: "Lines of Code", end: 50, suffix: "K+" },
];

function AnimatedNumber({ end, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let current = 0;
    const step = Math.max(1, Math.floor(end / 40));
    const id = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(id);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(id);
  }, [isVisible, end]);

  return (
    <span className="text-4xl md:text-5xl font-bold gradient-text tabular-nums">
      {count}{suffix}
    </span>
  );
}

const Stats = () => {
  const [ref, isVisible] = useScrollReveal(0.3);

  return (
    <section className="py-20 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center group"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <AnimatedNumber end={stat.end} suffix={stat.suffix} isVisible={isVisible} />
            <p className="text-neutral-500 text-sm mt-2 group-hover:text-neutral-400 transition-colors">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
