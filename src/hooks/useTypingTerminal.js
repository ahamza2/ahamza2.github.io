import { useState, useEffect, useCallback } from "react";

const COMMANDS = [
  {
    prompt: "cat about.json",
    output: `{
  "name": "Hamza Aarab",
  "role": "Full Stack Developer",
  "school": "1337 (42 Network)",
  "location": "Morocco",
  "stack": ["C", "C++", "Python", "React", "Docker"],
  "available": true
}`,
  },
  {
    prompt: "ls projects/",
    output: `ft_transcendence/  ry-game/  ft_irc/  inception/`,
  },
  {
    prompt: "echo $STATUS",
    output: "Open to opportunities ✨",
  },
  {
    prompt: "uptime",
    output: "3+ years of building things that work",
  },
];

export default function useTypingTerminal() {
  const [lines, setLines] = useState([]);
  const [currentCmd, setCurrentCmd] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | output | pause
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (currentCmd >= COMMANDS.length) {
      // Loop back after a long pause
      const id = setTimeout(() => {
        setLines([]);
        setCurrentCmd(0);
        setCurrentChar(0);
        setPhase("typing");
      }, 6000);
      return () => clearTimeout(id);
    }

    const cmd = COMMANDS[currentCmd];

    if (phase === "typing") {
      if (currentChar < cmd.prompt.length) {
        const speed = 40 + Math.random() * 60;
        const id = setTimeout(() => setCurrentChar((c) => c + 1), speed);
        return () => clearTimeout(id);
      } else {
        // Done typing, show output
        const id = setTimeout(() => {
          setLines((prev) => [
            ...prev,
            { type: "command", text: cmd.prompt },
            { type: "output", text: cmd.output },
          ]);
          setCurrentChar(0);
          setPhase("pause");
        }, 400);
        return () => clearTimeout(id);
      }
    }

    if (phase === "pause") {
      const id = setTimeout(() => {
        setCurrentCmd((c) => c + 1);
        setPhase("typing");
      }, 1800);
      return () => clearTimeout(id);
    }
  }, [currentCmd, currentChar, phase]);

  const typingText =
    currentCmd < COMMANDS.length
      ? COMMANDS[currentCmd].prompt.slice(0, currentChar)
      : "";

  return { lines, typingText, showCursor, isTyping: phase === "typing" };
}
