import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Active Students", value: 10300 },
  { label: "Courses Completed", value: 7896 },
  { label: "Expert Advisors", value: 400 },
  { label: "Partner Schools", value: 200 },
];

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-counter"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {inView ? stat.value.toLocaleString() : "0"}
              </div>
              <div className="text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;