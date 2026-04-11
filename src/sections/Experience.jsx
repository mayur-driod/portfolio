import { useMemo, useState } from "react";
import { professionalExperiences } from "../constants/index.js";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeHighlight, setActiveHighlight] = useState(0);

  const selectedExperience = useMemo(
    () => professionalExperiences[activeExperience] ?? professionalExperiences[0],
    [activeExperience],
  );

  const highlights = selectedExperience?.highlights ?? [];

  const activeItem = useMemo(
    () => highlights[activeHighlight] ?? highlights[0],
    [activeHighlight, highlights],
  );

  return (
    <section id="experience" className="c-space my-20">
      <div className="flex flex-col gap-4">
        <p className="head-text">Experience</p>
        <p className="text-[#afb0b6] max-w-2xl">
          Professional journey and measurable outcomes across internships and
          product teams.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {professionalExperiences.map((experience, idx) => (
          <button
            key={experience.id}
            onClick={() => {
              setActiveExperience(idx);
              setActiveHighlight(0);
            }}
            className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
              idx === activeExperience
                ? "border-white/35 bg-white/10 text-white"
                : "border-white/15 bg-black-300 text-[#afb0b6] hover:text-white hover:border-white/25"
            }`}
          >
            {experience.company}
          </button>
        ))}
      </div>

      <div className="mt-10 grid xl:grid-cols-[1.1fr_1.4fr] grid-cols-1 gap-6">
        <article className="rounded-2xl border border-black-300 bg-black-200 p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-44 h-44 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-52 h-52 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 flex items-start gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black-300 border border-black-300 p-3 shrink-0">
              <img
                src={selectedExperience.logo}
                alt={`${selectedExperience.company} logo`}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <p className="text-white text-xl sm:text-2xl font-semibold">
                {selectedExperience.role}
              </p>
              <p className="text-[#d5d8ea] text-lg mt-1">
                {selectedExperience.company}
              </p>
              <p className="text-[#8f93a2] mt-1">{selectedExperience.duration}</p>
            </div>
          </div>

          {selectedExperience.summary && (
            <p className="relative z-10 mt-5 text-[#afb0b6] leading-relaxed">
              {selectedExperience.summary}
            </p>
          )}

          <div className="relative z-10 mt-6 grid grid-cols-2 gap-3">
            {highlights.map((item, idx) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveHighlight(idx)}
                onFocus={() => setActiveHighlight(idx)}
                onClick={() => setActiveHighlight(idx)}
                className={`rounded-xl border px-3 py-3 text-left transition-all duration-300 ${
                  idx === activeHighlight
                    ? "border-white/35 bg-white/10"
                    : "border-white/10 bg-black-300 hover:border-white/25"
                }`}
              >
                <p className="text-white text-sm sm:text-base font-medium">{item.metric}</p>
                <p className="text-[#8f93a2] text-xs sm:text-sm mt-1">{item.title}</p>
              </button>
            ))}
          </div>

          <a
            href={selectedExperience.letterHref}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 inline-flex mt-6 items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-white hover:bg-white/10 transition-colors"
          >
            View Experience Letter
            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
          </a>
        </article>

        <article className="rounded-2xl border border-black-300 bg-black-200 p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="text-white text-xl sm:text-2xl font-semibold">Impact Highlights</p>
            <span className="text-xs sm:text-sm px-3 py-1 rounded-full border border-white/15 text-[#afb0b6]">
              Interactive timeline card
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {highlights.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveHighlight(idx)}
                className={`w-full group text-left rounded-xl border p-4 sm:p-5 transition-all duration-300 ${
                  idx === activeHighlight
                    ? "border-white/35 bg-white/[0.07]"
                    : "border-white/10 bg-black-300 hover:border-white/25"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`mt-1 h-2.5 w-2.5 rounded-full transition-all ${
                      idx === activeHighlight ? "bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]" : "bg-[#5f6473]"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <p className="text-white font-semibold text-base sm:text-lg">{item.title}</p>
                      <span className="text-[#d5d8ea] text-sm">{item.metric}</span>
                    </div>
                    <p className="text-[#afb0b6] mt-2 leading-relaxed text-sm sm:text-base">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {activeItem && (
            <div className="mt-6 rounded-xl border border-white/10 bg-black-300 p-4 sm:p-5">
              <p className="text-[#8f93a2] text-xs uppercase tracking-[0.2em]">
                Focused Contribution
              </p>
              <p className="mt-2 text-white text-base sm:text-lg font-medium">
                {activeItem.title}
              </p>
              <p className="text-[#afb0b6] mt-2 text-sm sm:text-base leading-relaxed">
                {activeItem.detail}
              </p>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default Experience;