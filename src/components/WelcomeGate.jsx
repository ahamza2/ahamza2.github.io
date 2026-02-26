import { useEffect, useMemo, useState } from "react";

const BOOT_SEQUENCE = [
  { type: "command", text: "sudo ./bootstrap_portfolio.sh" },
  { type: "output", text: "[ok] loading secure environment..." },
  { type: "output", text: "[ok] checking deployment target: aarab.tech" },
  { type: "output", text: "[ok] mounting project modules..." },
  { type: "command", text: "node ./scripts/init-session.js" },
  { type: "output", text: "[ok] preparing personalized session" },
  { type: "output", text: "[ok] ready." },
];

const WelcomeGate = ({ onEnter }) => {
  const [lines, setLines] = useState([]);
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [promptReady, setPromptReady] = useState(false);
  const [name, setName] = useState("");
  const [entering, setEntering] = useState(false);

  const currentItem = useMemo(
    () => BOOT_SEQUENCE[sequenceIndex],
    [sequenceIndex]
  );

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((prev) => !prev), 520);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (promptReady || !currentItem) {
      if (!currentItem) {
        const doneTimer = setTimeout(() => setPromptReady(true), 500);
        return () => clearTimeout(doneTimer);
      }
      return;
    }

    if (currentItem.type === "output") {
      const outputTimer = setTimeout(() => {
        setLines((prev) => [...prev, currentItem]);
        setSequenceIndex((prev) => prev + 1);
      }, 280);
      return () => clearTimeout(outputTimer);
    }

    if (typedCommand.length < currentItem.text.length) {
      const typeTimer = setTimeout(() => {
        setTypedCommand(currentItem.text.slice(0, typedCommand.length + 1));
      }, 34 + Math.random() * 34);
      return () => clearTimeout(typeTimer);
    }

    const commandDoneTimer = setTimeout(() => {
      setLines((prev) => [...prev, currentItem]);
      setTypedCommand("");
      setSequenceIndex((prev) => prev + 1);
    }, 220);

    return () => clearTimeout(commandDoneTimer);
  }, [currentItem, promptReady, typedCommand]);

  const handleEnter = (event) => {
    event.preventDefault();
    const cleaned = name.trim();
    if (!cleaned || entering) {
      return;
    }

    setEntering(true);
    setLines((prev) => [
      ...prev,
      { type: "command", text: `export VISITOR_NAME=\"${cleaned}\"` },
      { type: "output", text: `[ok] access granted. welcome ${cleaned}` },
    ]);

    setTimeout(() => {
      onEnter(cleaned);
    }, 650);
  };

  return (
    <section className="min-h-screen bg-neutral-950 text-neutral-200 flex items-center justify-center px-6 py-10 relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-[460px] h-[460px] bg-emerald-500/8 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-24 w-[380px] h-[380px] bg-cyan-500/8 rounded-full blur-[110px] animate-pulse-glow" />

      <div className="w-full max-w-3xl bg-neutral-900/90 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/10 backdrop-blur-sm relative z-10">
        <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900/80 border-b border-neutral-800">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-2 text-xs text-neutral-500 font-mono">secure-shell://aarab.tech</span>
        </div>

        <div className="p-5 md:p-6 font-mono text-[13px] md:text-sm leading-relaxed min-h-[420px]">
          {lines.map((line, index) => (
            <div key={`${line.text}-${index}`} className="animate-fade-in">
              {line.type === "command" ? (
                <p className="text-neutral-300">
                  <span className="text-emerald-400">visitor</span>
                  <span className="text-neutral-600">@</span>
                  <span className="text-cyan-400">aarab-tech</span>
                  <span className="text-neutral-600">:~$ </span>
                  <span>{line.text}</span>
                </p>
              ) : (
                <p className="text-amber-300/80 mb-1 whitespace-pre-wrap">{line.text}</p>
              )}
            </div>
          ))}

          {currentItem?.type === "command" && (
            <p className="text-neutral-300">
              <span className="text-emerald-400">visitor</span>
              <span className="text-neutral-600">@</span>
              <span className="text-cyan-400">aarab-tech</span>
              <span className="text-neutral-600">:~$ </span>
              <span>{typedCommand}</span>
              <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-emerald-400`}>█</span>
            </p>
          )}

          {promptReady && (
            <form onSubmit={handleEnter} className="mt-4">
              <label className="text-neutral-400 block mb-2">Enter your name to continue:</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="e.g. Hamza"
                  className="flex-1 px-4 py-2.5 bg-neutral-950/80 border border-neutral-700 rounded-lg outline-none focus:border-emerald-500/70 text-neutral-200"
                />
                <button
                  type="submit"
                  className="btn-primary !py-2.5 !px-6 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={!name.trim() || entering}
                >
                  Enter Portfolio
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WelcomeGate;
