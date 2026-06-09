/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  Camera, 
  Music, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Upload, 
  RotateCcw, 
  ChevronRight, 
  Edit2, 
  Check, 
  Gift, 
  Sparkle
} from "lucide-react";

// --- CUSTOM ARTWORK SVG TULIPS ---

interface TulipProps {
  color?: string;
  stemColor?: string;
  className?: string;
}

const SoftTulip: React.FC<TulipProps> = ({ 
  color = "#ff758f", 
  stemColor = "#7aa78f", 
  className = "" 
}) => (
  <svg 
    viewBox="0 0 120 180" 
    className={`drop-shadow-sm ${className}`} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stem */}
    <path d="M60 180 Q55 120 60 70" stroke={stemColor} strokeWidth="4.5" strokeLinecap="round" />
    {/* Left Leaf */}
    <path d="M57 145 C40 135 25 105 38 82 C45 98 54 118 58 130" fill={stemColor} fillOpacity="0.85" />
    {/* Right Leaf */}
    <path d="M62 125 C75 115 88 85 80 65 C74 80 68 98 62 110" fill={stemColor} fillOpacity="0.85" />
    {/* Head petals */}
    <g>
      {/* Outer back left petal */}
      <path d="M60 72 C42 72 35 32 52 24 C60 38 60 48 60 72" fill={color} fillOpacity="0.75" />
      {/* Outer back right petal */}
      <path d="M60 72 C78 72 85 32 68 24 C60 38 60 48 60 72" fill={color} fillOpacity="0.75" />
      {/* Side left petal */}
      <path d="M60 72 C32 72 26 28 46 16 C57 32 58 52 60 72" fill={color} fillOpacity="0.9" />
      {/* Side right petal */}
      <path d="M60 72 C88 72 94 28 74 16 C63 32 62 52 60 72" fill={color} fillOpacity="0.9" />
      {/* Prime center petal */}
      <path d="M60 72 C48 72 40 18 60 8 C80 18 72 72 60 72" fill={color} />
      {/* Highlights */}
      <path d="M57 68 C53 68 49 35 58 18 C54 32 52 50 57 68" fill="#ffffff" fillOpacity="0.12" />
    </g>
  </svg>
);

const GracefulTulip: React.FC<TulipProps> = ({ 
  color = "#ffa6c9", 
  stemColor = "#82b396", 
  className = "" 
}) => (
  <svg 
    viewBox="0 0 100 160" 
    className={`drop-shadow-sm ${className}`} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stem */}
    <path d="M50 160 Q55 110 50 63" stroke={stemColor} strokeWidth="4" strokeLinecap="round" />
    {/* Long elegant葉 */}
    <path d="M51 125 C70 115 78 80 65 50 C62 70 58 95 51 110" fill={stemColor} fillOpacity="0.8" />
    <path d="M49 135 C32 125 24 95 35 70 C38 85 42 105 49 120" fill={stemColor} fillOpacity="0.8" />
    {/* Head petals */}
    <g>
      <path d="M50 64 C34 64 28 25 44 15 C50 28 50 38 50 64" fill={color} fillOpacity="0.8" />
      <path d="M50 64 C66 64 72 25 56 15 C50 28 50 38 50 64" fill={color} fillOpacity="0.8" />
      <path d="M50 64 C38 64 32 18 50 10 C68 18 62 64 50 64" fill={color} />
    </g>
  </svg>
);

const BloomingTulip: React.FC<TulipProps> = ({ 
  color = "#fecfef", 
  stemColor = "#74a887", 
  className = "" 
}) => (
  <svg 
    viewBox="0 0 110 170" 
    className={`drop-shadow-sm ${className}`} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stem */}
    <path d="M55 170 Q48 115 55 65" stroke={stemColor} strokeWidth="4.2" strokeLinecap="round" />
    {/* Left leaf */}
    <path d="M52 140 C32 130 20 95 32 72 C40 88 48 108 52 125" fill={stemColor} fillOpacity="0.8" />
    {/* Front flower cup */}
    <g>
      <path d="M55 67 C35 67 30 25 48 18 C55 32 55 42 55 67" fill={color} fillOpacity="0.75" />
      <path d="M55 67 C75 67 80 25 62 18 C55 32 55 42 55 67" fill={color} fillOpacity="0.75" />
      <path d="M55 67 C42 67 36 12 55 5 C74 12 68 67 55 67" fill={color} />
    </g>
  </svg>
);

// --- CUTE COUPLE / VECTOR ILLUST ENVELOPE BASE FALLBACK ---
const CuteCoupleIllustration: React.FC = () => (
  <svg 
    viewBox="0 0 200 200" 
    className="w-full h-full text-[#ffccd5]" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ebf2ff" />
        <stop offset="100%" stopColor="#ccd9ff" />
      </linearGradient>
    </defs>
    {/* Sky rounded backdrop */}
    <circle cx="100" cy="100" r="95" fill="url(#skyGrad)" />
    
    {/* Hills */}
    <path d="M0 160 Q60 142 120 165 T200 155 V200 H0 Z" fill="#b9cbfa" />
    
    {/* Left Bunny */}
    <g transform="translate(42, 85)">
      {/* Ears */}
      <ellipse cx="23" cy="20" rx="5" ry="15" fill="#ffffff" transform="rotate(-15 23 20)" />
      <ellipse cx="23" cy="20" rx="2" ry="10" fill="#ffb3c1" transform="rotate(-15 23 20)" />
      <ellipse cx="37" cy="22" rx="5" ry="15" fill="#ffffff" transform="rotate(10 37 22)" />
      <ellipse cx="37" cy="22" rx="2" ry="10" fill="#ffb3c1" transform="rotate(10 37 22)" />
      {/* Body */}
      <ellipse cx="30" cy="65" rx="18" ry="22" fill="#ffffff" />
      {/* Head */}
      <circle cx="30" cy="40" r="15" fill="#ffffff" />
      {/* Eyes */}
      <circle cx="25" cy="38" r="1.5" fill="#3b3b3b" />
      <circle cx="35" cy="38" r="1.5" fill="#3b3b3b" />
      {/* Cheek */}
      <circle cx="21" cy="42" r="2.5" fill="#ff9eb5" />
      <circle cx="39" cy="42" r="2.5" fill="#ff9eb5" />
      {/* Mouth */}
      <path d="M28.5 44 C29 45 31 45 31.5 44" stroke="#3b3b3b" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Cute Hat */}
      <path d="M22 27 L38 27 L30 11 Z" fill="#ff758f" />
      <circle cx="30" cy="10" r="2.5" fill="#ffffff" />
    </g>

    {/* Right Bunny */}
    <g transform="translate(94, 85)">
      {/* Ears */}
      <ellipse cx="23" cy="22" rx="5" ry="15" fill="#ffffff" transform="rotate(-10 23 22)" />
      <ellipse cx="23" cy="22" rx="2" ry="10" fill="#ffb3c1" transform="rotate(-10 23 22)" />
      <ellipse cx="37" cy="20" rx="5" ry="15" fill="#ffffff" transform="rotate(15 37 20)" />
      <ellipse cx="37" cy="20" rx="2" ry="10" fill="#ffb3c1" transform="rotate(15 37 20)" />
      {/* Body */}
      <ellipse cx="30" cy="65" rx="18" ry="22" fill="#ffffff" />
      {/* Head */}
      <circle cx="30" cy="40" r="15" fill="#ffffff" />
      {/* Eyes */}
      <circle cx="25" cy="38" r="1.5" fill="#3b3b3b" />
      <circle cx="35" cy="38" r="1.5" fill="#3b3b3b" />
      {/* Cheek */}
      <circle cx="21" cy="42" r="2.5" fill="#ff9eb5" />
      <circle cx="39" cy="42" r="2.5" fill="#ff9eb5" />
      {/* Mouth */}
      <path d="M28.5 44 C29 45 31 45 31.5 44" stroke="#3b3b3b" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Hat */}
      <path d="M22 27 L38 27 L30 11 Z" fill="#3a82ef" />
      <circle cx="30" cy="10" r="2.5" fill="#ffffff" />
    </g>

    {/* Center Shared Large Tulip */}
    <g transform="translate(82, 120)">
      {/* stem */}
      <path d="M15 45 V70" stroke="#7aa78f" strokeWidth="4" />
      <path d="M15 45 C15 45 10 25 15 20 C20 25 15 45 15 45" fill="#ff4d6d" />
      <path d="M15 45 C15 45 20 25 15 20" stroke="#ff4d6d" />
      <path d="M15 45 Q15 25 10 15 Q20 25 15 45" fill="#ff758f" />
      {/* leaf */}
      <path d="M15 58 Q2 52 8 42 Q13 52 15 58" fill="#7aa78f" />
    </g>

    {/* Sweet floating hearts */}
    <g>
      <path d="M100 65 L96 60 C89 54 82 61 87 67 L100 78 L113 67 C118 61 111 54 104 60 Z" fill="#ff385c">
        <animate attributeName="transform" type="translate" values="0,0; 0,-8; 0,0" dur="2.5s" repeatCount="indefinite" />
      </path>
      <path d="M60 65 L57 62 C52 57 46 62 50 67 L60 75 L70 67 C74 62 68 57 63 62 Z" fill="#ff758f" opacity="0.8" />
      <path d="M140 65 L137 62 C132 57 126 62 130 67 L140 75 L150 67 C154 62 148 57 143 62 Z" fill="#ff758f" opacity="0.8" />
    </g>
  </svg>
);

// --- ANIMATED BIRTHDAY CAKE WITH TICKING FLAME ---
const BirthdayCake: React.FC<{ isBlownOut: boolean; onClick?: () => void }> = ({ isBlownOut, onClick }) => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-16 h-16 animate-gentle-pulse drop-shadow-md select-none cursor-pointer" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <defs>
      <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#ef4444" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#fecdd3" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Platter Stand */}
    <path d="M15 85 H85 C88 85 90 87 90 90 C90 91 89 92 87 92 H13 C11 92 10 91 10 90 C10 87 12 85 15 85Z" fill="#e2e8f0" />
    <path d="M45 92 H55 V96 C55 97 54 98 53 98 H47 C46 98 45 97 45 96 V92Z" fill="#cbd5e1" />
    
    {/* Cake Iced Layer */}
    <rect x="22" y="52" width="56" height="33" rx="5" fill="#fecdd3" />
    {/* Frosting drips */}
    <path d="M22 62 C22 66 26 66 27 62 C28 58 31 58 32 62 C33 66 37 66 38 62 C39 58 42 58 43 62 C44 66 48 66 49 62 C50 58 53 58 54 62 C55 66 59 66 60 62 C61 58 64 58 65 62 C66 66 70 66 71 62 C72 58 75 58 76 62 C77 66 78 66 78 62 V52 H22 V62Z" fill="#f43f5e" />
    
    {/* Cream dollops */}
    <circle cx="27" cy="50" r="3.5" fill="#ffffff" />
    <circle cx="38" cy="50" r="3.5" fill="#ffffff" />
    <circle cx="50" cy="50" r="3.5" fill="#ffffff" />
    <circle cx="62" cy="50" r="3.5" fill="#ffffff" />
    <circle cx="73" cy="50" r="3.5" fill="#ffffff" />
    
    {/* Candle */}
    <rect x="47" y="26" width="6" height="24" rx="2" fill="#fda4af" />
    {/* Colorful candle stripes */}
    <path d="M47 43 L53 40 M47 36 L53 33 M47 29 L53 26" stroke="#fb7185" strokeWidth="1.5" />
    
    {/* Candle Flame with scale looping and smooth fadeout */}
    <AnimatePresence>
      {!isBlownOut && (
        <motion.g
          key="flame-group"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0, y: -8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ transformOrigin: "50px 26px" }}
        >
          {/* Flame Glow backing */}
          <circle cx="50" cy="18" r="14" fill="url(#flameGlow)" className="animate-pulse" />
          
          {/* Flame shapes */}
          <path d="M50 8 C52.5 14 55 20 50 25 C45 20 47.5 14 50 8Z" fill="#f59e0b">
            <animate attributeName="transform" type="scale" values="1; 1.12; 0.94; 1" dur="0.9s" repeatCount="indefinite" />
          </path>
          <path d="M50 13 C51.5 17 53 20 50 23 C47 20 48.5 17 50 13Z" fill="#ef4444" />
        </motion.g>
      )}
    </AnimatePresence>
  </svg>
);

// --- MUSIC-BOX NOTE FREQUENCIES (Happy Birthday Theme) ---
const melodyNotes = [
  { f: 261.63, d: 0.35, gap: 0.45 }, // C4
  { f: 261.63, d: 0.35, gap: 0.45 }, // C4
  { f: 293.66, d: 0.70, gap: 0.80 }, // D4
  { f: 261.63, d: 0.70, gap: 0.80 }, // C4
  { f: 349.23, d: 0.70, gap: 0.80 }, // F4
  { f: 329.63, d: 1.30, gap: 1.50 }, // E4
  
  { f: 261.63, d: 0.35, gap: 0.45 }, // C4
  { f: 261.63, d: 0.35, gap: 0.45 }, // C4
  { f: 293.66, d: 0.70, gap: 0.80 }, // D4
  { f: 261.63, d: 0.70, gap: 0.80 }, // C4
  { f: 392.00, d: 0.70, gap: 0.80 }, // G4
  { f: 349.23, d: 1.30, gap: 1.50 }, // F4

  { f: 261.63, d: 0.35, gap: 0.45 }, // C4
  { f: 261.63, d: 0.35, gap: 0.45 }, // C4
  { f: 523.25, d: 0.70, gap: 0.80 }, // C5
  { f: 440.00, d: 0.70, gap: 0.80 }, // A4
  { f: 349.23, d: 0.70, gap: 0.80 }, // F4
  { f: 329.63, d: 0.70, gap: 0.80 }, // E4
  { f: 293.66, d: 1.30, gap: 1.50 }, // D4

  { f: 466.16, d: 0.35, gap: 0.45 }, // A#4
  { f: 466.16, d: 0.35, gap: 0.45 }, // A#4
  { f: 440.00, d: 0.70, gap: 0.80 }, // A4
  { f: 349.23, d: 0.70, gap: 0.80 }, // F4
  { f: 392.00, d: 0.70, gap: 0.80 }, // G4
  { f: 349.23, d: 1.60, gap: 2.20 }, // F4
];

const SequentialTypewriter: React.FC<{ babyName: string }> = ({ babyName }) => {
  // Define Paragraphs dynamically based on current babyName
  const p1 = `Happiest Birthday, ${babyName}! 🌸`;
  const p2 = "Sa araw na ito, ikaw lang ang pinakamalaking rason para magpasalamat sa Maykapal. Salamat sa lahat ng yakap, sa pakikinig, at sa walang sawang pagmamahal. Ikaw ang aking pahinga at aking inspirasyon.";
  const p3 = "Sana sa pagtanda mo ng isa pang taon, mas maging matapang ka pa sa pag-abot ng mga pangarap mo. Huwag mong kakalimutan na anuman ang mangyari, may isang tao rito na hinding-hindi mapapagod magmahal at sumuporta sa'yo—ako 'yun. Magdiwang ka ngayon dahil deserve mo ang lahat ng magagandang bagay sa mundo.";
  const p4 = "Happy birthday, Lovelove ko! Enjoy your day and always remember iloveyouuusomuchhhh";

  const paragraphs = [p1, p2, p3, p4];
  
  // States
  const [typedTexts, setTypedTexts] = useState<string[]>(["", "", "", ""]);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic as text prints
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [typedTexts]);

  useEffect(() => {
    if (isDone) return;

    const fullText = paragraphs[currentParagraphIndex];
    const chars = Array.from(fullText);
    let index = 0;
    
    // Typing timer
    const interval = setInterval(() => {
      if (index < chars.length) {
        setTypedTexts((prev) => {
          const next = [...prev];
          next[currentParagraphIndex] = chars.slice(0, index + 1).join("");
          return next;
        });
        index++;
      } else {
        clearInterval(interval);
        // Completed this paragraph, move to next after a brief delay
        if (currentParagraphIndex < paragraphs.length - 1) {
          const nextIndexTimer = setTimeout(() => {
            setCurrentParagraphIndex((prev) => prev + 1);
          }, 400); // Pause briefly between paragraphs
          return () => clearTimeout(nextIndexTimer);
        } else {
          setIsDone(true);
        }
      }
    }, 28); // Speed: 28ms per character

    return () => clearInterval(interval);
  }, [currentParagraphIndex, isDone, babyName]);

  const handleSkip = () => {
    setTypedTexts([p1, p2, p3, p4]);
    setCurrentParagraphIndex(paragraphs.length - 1);
    setIsDone(true);
  };

  return (
    <div className="relative w-full h-full">
      <div 
        ref={containerRef}
        className="p-6 pb-24 sm:p-8 sm:pb-28 md:p-10 md:pb-32 text-left max-h-[440px] overflow-y-auto custom-scrollbar select-text leading-relaxed text-[#5c0620] font-sans space-y-6 text-sm sm:text-[15px] break-words"
      >
        {/* Paragraph 1 */}
        {currentParagraphIndex >= 0 && typedTexts[0].length > 0 && (
          <p className="font-handwritten text-3xl font-bold text-[#b43e50] text-center py-3 select-none tracking-wider transition-opacity duration-300">
            {typedTexts[0]}
            {currentParagraphIndex === 0 && !isDone && (
              <span className="animate-pulse ml-0.5 inline-block text-rose-400 font-bold">|</span>
            )}
          </p>
        )}

        {/* Separator 1 */}
        {currentParagraphIndex >= 1 && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            className="flex justify-center py-2 select-none"
          >
            <Sparkle className="w-5 h-5 text-rose-400 opacity-80 animate-spin" style={{ animationDuration: "14s" }} />
          </motion.div>
        )}

        {/* Paragraph 2 */}
        {currentParagraphIndex >= 1 && typedTexts[1].length > 0 && (
          <p className="indent-4 leading-relaxed font-normal hover:text-[#800f2f] transition-opacity duration-200">
            {typedTexts[1]}
            {currentParagraphIndex === 1 && !isDone && (
              <span className="animate-pulse ml-0.5 inline-block text-rose-400 font-bold">|</span>
            )}
          </p>
        )}

        {/* Separator 2 */}
        {currentParagraphIndex >= 2 && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            className="flex justify-center py-2 select-none"
          >
            <Sparkle className="w-5 h-5 text-rose-400 opacity-80 animate-spin" style={{ animationDuration: "14s" }} />
          </motion.div>
        )}

        {/* Paragraph 3 */}
        {currentParagraphIndex >= 2 && typedTexts[2].length > 0 && (
          <p className="indent-4 leading-relaxed font-normal hover:text-[#800f2f] transition-opacity duration-200">
            {typedTexts[2]}
            {currentParagraphIndex === 2 && !isDone && (
              <span className="animate-pulse ml-0.5 inline-block text-rose-400 font-bold">|</span>
            )}
          </p>
        )}

        {/* Separator 3 */}
        {currentParagraphIndex >= 3 && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            className="flex justify-center py-3 select-none"
          >
            <Heart className="w-6 h-6 text-rose-500 opacity-80 animate-bounce" />
          </motion.div>
        )}

        {/* Paragraph 4 */}
        {currentParagraphIndex >= 3 && typedTexts[3].length > 0 && (
          <p className="font-handwritten text-2xl sm:text-3xl font-bold text-[#b43e50] text-center py-3 select-none leading-relaxed tracking-wide transition-opacity duration-300">
            {typedTexts[3]}
            {currentParagraphIndex === 3 && !isDone && (
              <span className="animate-pulse ml-0.5 inline-block text-rose-400 font-bold">|</span>
            )}
          </p>
        )}

        {/* Spacer helper to give extra padding buffer for safe scrolling */}
        <div className="h-8 w-full" />
      </div>

      {/* Elegant overlay skip trigger at the clean bottom margin of the card */}
      {!isDone && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40">
          <button
            onClick={handleSkip}
            className="px-4 py-1.5 bg-white/95 hover:bg-rose-50 border border-rose-200 text-[#b43e50] font-extrabold text-[10px] rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-x-1.5 uppercase tracking-wider cursor-pointer select-none"
          >
            <span>Skip Typing</span>
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          </button>
        </div>
      )}
    </div>
  );
};

const sweetFortunes = [
  "You deserve all the sweetness and warm coffee in the world! ☕✨",
  "If tulips had a soul, they'd want to blossom as beautifully as you do. 🌷",
  "I am so incredibly proud of the beautiful, resilient human you are! 💖",
  "May today sprinkle peace into your thoughts and gentle warmth into your chest. 🕊️",
  "You're my ultimate favorite person in the entire universe. 🌟",
  "Remember to breathe deeply today—you are perfect, and your efforts are enough. 🌸",
  "Thank you for existing. The universe is exponentially better with you in it! 💞",
  "My favorite view of the world is seeing you happy and laughing. 🎂👑",
];

export default function App() {
  // Navigation: screen 1 = envelope view, screen 2 = message view
  const [screen, setScreen] = useState<1 | 2>(1);
  const [isOpening, setIsOpening] = useState(false);
  const [photo, setPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem("birthday_baby_photo_v2");
    } catch {
      return null;
    }
  });
  
  const [babyName, setBabyName] = useState(() => {
    try {
      return localStorage.getItem("birthday_baby_name_v2") || "baby";
    } catch {
      return "baby";
    }
  });

  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInputValue, setNameInputValue] = useState(babyName);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [activeFortune, setActiveFortune] = useState<string | null>(null);

  // Candle Blow Interaction Simple State
  const [isFlameBlownOut, setIsFlameBlownOut] = useState(false);
  const cakeRef = useRef<HTMLDivElement>(null);
  const prevFlameBlownOut = useRef(isFlameBlownOut);
  
  // Custom interactive click-pop particles (flying hearts/sparks)
  const [particles, setParticles] = useState<Array<{ 
    id: number; 
    x: number; 
    y: number; 
    size: number; 
    color: string; 
    vx: number; 
    vy: number;
    isConfetti?: boolean;
    rotation?: number;
    rotationSpeed?: number;
  }>>([]);
  const [sparkleCount, setSparkleCount] = useState(0);

  // Time-lock Configuration: June 26, 2026, 12:00 AM Local Time (Month is 0-indexed: 5 is June)
  const targetDate = useRef(new Date(2026, 5, 26, 0, 0, 0));
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: false });
  const [showLockModal, setShowLockModal] = useState(false);
  const [bypassLock, setBypassLock] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get("preview") === "true";
    } catch {
      return false;
    }
  });

  // Background decoration tulip petals
  interface Petal {
    id: number;
    left: string;
    delay: string;
    duration: string;
    scale: number;
    color: string;
  }

  const [fallingPetals, setFallingPetals] = useState<Petal[]>([]);

  // Web Audio Synthesizer Reference to safely dispose or pause
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timeoutRefs = useRef<any[]>([]);

  // Elegant ticking time-lock calculator
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.current.getTime() - now.getTime();
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
      }
    };

    calculateTimeLeft();
    const intervalSec = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(intervalSec);
  }, []);

  // Generate pretty petals on load
  useEffect(() => {
    const list: Petal[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      delay: `${Math.random() * -12}s`,
      duration: `${8 + Math.random() * 8}s`,
      scale: 0.6 + Math.random() * 0.7,
      color: ["#ff758f", "#ff9db3", "#ffa3b1", "#fbcfe8", "#fda4af"][Math.floor(Math.random() * 5)]
    }));
    setFallingPetals(list);
  }, []);

  // Sync state with screen switches to reset candle on reset
  useEffect(() => {
    if (screen === 1) {
      setIsFlameBlownOut(false);
    }
  }, [screen]);

  // Sync state with storage
  useEffect(() => {
    setNameInputValue(babyName);
  }, [babyName]);

  // Audio Synthesis Loop
  const playMelody = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    if (ctx.state === "suspended") {
      ctx.resume();
    }

    // Reset previous play scheduling timers
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];

    let nextStartTime = ctx.currentTime;

    melodyNotes.forEach((note) => {
      const playTimer = setTimeout(() => {
        if (!ctx || ctx.state === "closed" || ctx.state === "suspended") return;

        const startTime = ctx.currentTime;
        
        // Music box sound has a sweet, direct primary sine chime
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(note.f, startTime);

        // Gentle octave harmonic companion adds magical digital piano resonance
        const harmonist = ctx.createOscillator();
        const harmGain = ctx.createGain();
        harmonist.type = "sine";
        harmonist.frequency.setValueAtTime(note.f * 2, startTime);

        // Music box envelope: instant attack, graceful exponential decay
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.12, startTime + 0.04);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + note.d);

        harmGain.gain.setValueAtTime(0, startTime);
        harmGain.gain.linearRampToValueAtTime(0.04, startTime + 0.06);
        harmGain.gain.exponentialRampToValueAtTime(0.0001, startTime + note.d * 0.7);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        harmonist.connect(harmGain);
        harmGain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + note.d);

        harmonist.start(startTime);
        harmonist.stop(startTime + note.d);
      }, (nextStartTime - ctx.currentTime) * 1000);

      timeoutRefs.current.push(playTimer);
      nextStartTime += note.gap;
    });

    // Schedule next seamless track loop
    const totalDuration = melodyNotes.reduce((acc, note) => acc + note.gap, 0);
    const loopTimer = setTimeout(() => {
      playMelody();
    }, totalDuration * 1000);
    timeoutRefs.current.push(loopTimer);
  };

  // Listen to music state changes
  useEffect(() => {
    if (isPlayingMusic) {
      playMelody();
    } else {
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current = [];
      if (audioCtxRef.current && audioCtxRef.current.state === "running") {
        audioCtxRef.current.suspend();
      }
    }
    return () => {
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, [isPlayingMusic]);

  // Handle uploader changes
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setPhoto(dataUrl);
        try {
          localStorage.setItem("birthday_baby_photo_v2", dataUrl);
        } catch (err) {
          console.warn("Storage quota limit reached for photo size", err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const clearPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setPhoto(null);
    try {
      localStorage.removeItem("birthday_baby_photo_v2");
    } catch {}
  };

  const handleSaveName = () => {
    const trimmed = nameInputValue.trim();
    if (trimmed) {
      setBabyName(trimmed);
      try {
        localStorage.setItem("birthday_baby_name_v2", trimmed);
      } catch {}
    }
    setIsEditingName(false);
  };

  // Spark heart particles when interacting
  const spawnHearts = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const newParticles = Array.from({ length: 12 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 4;
      return {
        id: Date.now() + i + Math.random(),
        x: clickX,
        y: clickY,
        size: 8 + Math.random() * 12,
        color: ["#ff4d6d", "#ff758f", "#ffccd5", "#ff85a1", "#ffd166"][Math.floor(Math.random() * 5)],
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5, // prioritize going slightly upwards
      };
    });

    setParticles((prev) => [...prev, ...newParticles]);
  };

  // Particle physics update loop
  useEffect(() => {
    if (particles.length === 0) return;

    const frame = requestAnimationFrame(() => {
      setParticles((prev) =>
        prev
          .map((p) => {
            const isConf = p.isConfetti;
            return {
              ...p,
              x: p.x + p.vx,
              y: p.y + p.vy,
              vy: p.vy + (isConf ? 0.18 : 0.1), // gravity drag
              rotation: p.rotation !== undefined ? p.rotation + (p.rotationSpeed || 0) : undefined,
              size: p.size * (isConf ? 0.985 : 0.96), // shrink effect
            };
          })
          .filter((p) => p.size > 1.5)
      );
    });

    return () => cancelAnimationFrame(frame);
  }, [particles]);

  // Trigger cake confetti burst on candle blow out
  const triggerCakeConfetti = () => {
    if (!cakeRef.current) return;
    const cakeRect = cakeRef.current.getBoundingClientRect();
    const screen2El = document.getElementById("birthday-canvas");
    if (!screen2El) return;
    const containerRect = screen2El.getBoundingClientRect();
    
    // Relative coordinates
    const cakeX = cakeRect.left - containerRect.left + cakeRect.width / 2;
    const cakeY = cakeRect.top - containerRect.top + cakeRect.height / 2;
    
    const newConfetti = Array.from({ length: 75 }).map((_, i) => {
      const angle = (Math.PI * 1.15) + Math.random() * (Math.PI * 0.7);
      const speed = 4.5 + Math.random() * 8.5;
      return {
        id: Date.now() + i + Math.random(),
        x: cakeX,
        y: cakeY - 15,
        size: 7 + Math.random() * 9,
        color: ["#ff0055", "#ff73aa", "#ffff66", "#39ff14", "#00f0ff", "#ffd166", "#ff007f"][Math.floor(Math.random() * 7)],
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        isConfetti: true,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 16,
      };
    });
    
    setParticles((prev) => [...prev, ...newConfetti]);
  };

  useEffect(() => {
    if (isFlameBlownOut && !prevFlameBlownOut.current) {
      triggerCakeConfetti();
    }
    prevFlameBlownOut.current = isFlameBlownOut;
  }, [isFlameBlownOut]);

  // Envelope unlock sequencer
  const startEnvelopeReveal = () => {
    // If locked and not bypassed, show lock warning modal
    if (!timeLeft.isExpired && !bypassLock) {
      setShowLockModal(true);
      return;
    }

    if (isOpening) return;
    setIsOpening(true);

    // Turn on ambient music on human interaction to bypass auto-play rules organically
    setIsPlayingMusic(true);

    setTimeout(() => {
      setScreen(2);
      setIsOpening(false);
    }, 1200);
  };

  const getSheddingHearts = () => {
    setSparkleCount((c) => c + 1);
    // Add multiple temporary particles in screen center
    const newParticles = Array.from({ length: 24 }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      x: window.innerWidth / 2,
      y: window.innerHeight / 2 - 100,
      size: 10 + Math.random() * 18,
      color: ["#ff0055", "#ff73aa", "#ffff66", "#fda4af", "#ff007f"][Math.floor(Math.random() * 5)],
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.8) * 12 - 3,
    }));
    setParticles((prev) => [...prev, ...newParticles]);
    
    // Choose randomized cute blessing
    const randBlessing = sweetFortunes[Math.floor(Math.random() * sweetFortunes.length)];
    setActiveFortune(randBlessing);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden transition-all duration-700 bg-gradient-to-br from-[#ffe5ec] via-[#fff5f6] to-[#fefaf6] font-sans antialiased text-[#800f2f]">
      
      {/* Floating Petals background decorative layer (constant) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {fallingPetals.map((petal) => (
          <div
            key={petal.id}
            className="absolute rounded-full animate-petal"
            style={{
              left: petal.left,
              backgroundColor: petal.color,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              width: `${petal.scale * 14}px`,
              height: `${petal.scale * 20}px`,
              borderRadius: "100% 0px 100% 100%",
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Background audio controller (constant float bar) */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-x-2">
        <motion.button
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          id="music-toggle-btn"
          className={`flex items-center gap-x-2 px-3 py-2 rounded-full border text-xs font-semibold backdrop-blur-md transition-all duration-300 shadow-sm ${
            isPlayingMusic 
              ? "bg-[#ff4d6d]/15 text-[#ff4d6d] border-[#ff4d6d]/30 animate-pulse" 
              : "bg-white/80 text-rose-500 border-rose-200"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlayingMusic ? (
            <>
              <Volume2 className="w-4 h-4 text-[#ff4d6d]" />
              <span>Playing Sweet Box</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-rose-400" />
              <span>Music Silent</span>
            </>
          )}
        </motion.button>
      </div>

      {/* --- SCREEN 1: ENVELOPE SEED --- */}
      <AnimatePresence mode="wait">
        {screen === 1 && (
          <motion.div
            key="screen1"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center min-h-screen w-full px-4 pt-16 pb-20 overflow-visible bg-gradient-to-br from-[#ffe5ec] via-[#fff5f6] to-[#fefaf6]"
          >
            {/* Playful Handwritten Greeting */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center z-40 relative mb-8"
              id="greeting-title"
            >
              <h1 className="font-handwritten text-5xl md:text-6xl font-bold text-[#b43e50] tracking-wide relative inline-block">
                hi {babyName}!
                {/* Small Edit name inline */}
                <button 
                  onClick={() => setIsEditingName(true)} 
                  className="absolute -right-7 top-1 text-slate-300 hover:text-[#b43e50] p-1 transition-colors rounded-full hover:bg-[#b43e50]/5"
                  title="Customize Name"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </h1>
              {isEditingName && (
                <div className="mt-2 flex items-center justify-center gap-x-1.5 bg-white/95 border border-rose-200 p-1.5 rounded-lg shadow-md max-w-xs mx-auto">
                  <input
                    type="text"
                    maxLength={16}
                    value={nameInputValue}
                    onChange={(e) => setNameInputValue(e.target.value)}
                    placeholder="Enter special name"
                    className="px-2 py-0.5 text-sm border-b border-rose-200 focus:outline-none focus:border-rose-400 bg-transparent text-slate-800"
                    onKeyDown={(e) => e.key === "Enter" && handleSaveName()}
                  />
                  <button 
                    onClick={handleSaveName}
                    className="p-1 bg-[#ff4d6d] text-white rounded hover:bg-rose-600 transition-colors"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </motion.div>

            {/* Central Animated Bouquet & Letter */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              className="relative w-full max-w-sm flex items-center justify-center z-20"
              onClick={spawnHearts}
            >
              {/* Dynamic canvas clicks heart spawns inside wrapper */}
              <div className="absolute inset-0 z-30 pointer-events-none">
                {particles.map((p) => (
                  <div
                    key={p.id}
                    className="absolute"
                    style={{
                      left: p.x,
                      top: p.y,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Heart
                      className="fill-current"
                      style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        color: p.color,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Envelope Component */}
              <div 
                className="relative select-none cursor-pointer"
                onClick={startEnvelopeReveal}
                id="digital-envelope"
              >
                {/* Bouquet behind envelope */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                  <SoftTulip color="#ff758f" className="absolute bottom-16 -left-12 -rotate-25 animate-sway-left" />
                  <GracefulTulip color="#ffa6c9" className="absolute bottom-22 left-2 -rotate-12 animate-sway-left scale-90" />
                  <BloomingTulip color="#ffd166" className="absolute bottom-20 -right-12 rotate-25 animate-sway-right" />
                  <SoftTulip color="#fecfef" className="absolute bottom-18 right-2 rotate-12 animate-sway-right scale-90" />
                  <BloomingTulip color="#ff4d6d" className="absolute bottom-10 left-1/2 -translate-x-1/2 rotate-0 animate-sway-left scale-105" />
                </div>

                {/* Mail Base Box */}
                <div 
                  className="relative w-76 h-52 md:w-88 md:h-58 rounded-2xl shadow-xl border border-[#dcbba0]/20 overflow-visible transition-transform duration-300 hover:scale-[1.02]"
                  style={{ perspective: "1000px" }}
                >
                  
                  {/* Sliding Letter Preview Card */}
                  <motion.div 
                    className="absolute inset-x-6 top-6 bottom-6 bg-zinc-50 rounded-lg shadow-md border-t-4 border-rose-400 p-4 animate-slow-glow letter-card flex flex-col justify-between"
                    initial={{ scale: 0.8, opacity: 0, zIndex: 10 }}
                    animate={isOpening ? { scale: 1, opacity: 1, zIndex: 25 } : { scale: 0.8, opacity: 0, zIndex: 10 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="w-16 h-1 bg-rose-200 mx-auto rounded"></div>
                    <div className="space-y-1.5 flex-1 flex flex-col justify-center my-2">
                      <div className="w-full h-2 bg-slate-200/60 rounded"></div>
                      <div className="w-4/5 h-2 bg-slate-200/60 rounded mx-auto"></div>
                      <div className="w-11/12 h-2 bg-slate-200/60 rounded mx-auto"></div>
                    </div>
                    <p className="text-xs text-center font-handwritten text-[#b43e50] font-semibold tracking-wider">
                      Opening magical letter...
                    </p>
                  </motion.div>

                  {/* Envelope Top Half */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1/2 overflow-visible z-20 envelope-top-half"
                    style={{ transformOrigin: "top center" }}
                    animate={isOpening ? { y: -150, opacity: 0 } : { y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    {/* Top Flap Graphic */}
                    <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 352 116" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <path d="M0 0 L176 116 L352 0 Z" fill="#dbbea4" stroke="#cca98d" strokeWidth="0.8" />
                    </svg>
                  </motion.div>

                  {/* Envelope Bottom Half */}
                  <motion.div
                    className="absolute inset-0 z-15 envelope-bottom-half"
                    style={{ transformOrigin: "bottom center" }}
                    animate={isOpening ? { y: 150, opacity: 0 } : { y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    {/* Back inside background wrap inside mail pocket */}
                    <div className="absolute inset-0 bg-[#edd3bb] rounded-2xl overflow-hidden z-0 border border-[#dcbba0]/40">
                      <div className="absolute top-0 w-full h-1/2 bg-[#ebd1b9]"></div>
                    </div>

                    {/* Left, Right & Bottom Folds Overlay */}
                    <div className="absolute inset-0 bg-transparent overflow-hidden rounded-2xl pointer-events-none z-10">
                      <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 352 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Left paper sleeve */}
                        <path d="M0 232 L176 128 L0 0 Z" fill="#edd5be" />
                        {/* Right paper sleeve */}
                        <path d="M352 232 L176 128 L352 0 Z" fill="#edd5be" />
                        {/* Bottom envelope lap (slightly darker shade for depth) */}
                        <path d="M0 232 L176 118 L352 232 Z" fill="#e5cca8" stroke="#d5bba1" strokeWidth="0.8" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Heart Seal with pulsating lock */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center z-30 cursor-pointer"
                    animate={isOpening ? { scale: 0, opacity: 0, y: 50 } : { scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="relative group flex flex-col items-center">
                      {/* Halo ring glow */}
                      <div className="absolute w-14 h-14 bg-rose-500 rounded-full blur-md opacity-30 group-hover:scale-135 transition-transform duration-300" />
                      {/* Red Heart SVG */}
                      <div className="relative p-3 bg-white rounded-full shadow-lg border border-rose-100 group-hover:bg-[#ffebed] transition-colors duration-200">
                        <Heart className="w-8 h-8 fill-red-500 text-red-500 animate-gentle-pulse group-hover:scale-110 transition-transform duration-200" />
                        
                        {!timeLeft.isExpired && !bypassLock && (
                          <div className="absolute -top-1.5 -right-1.5 bg-[#800f2f] text-white p-1 rounded-full text-[8px] border border-rose-200 shadow-sm leading-none flex items-center justify-center font-bold">
                            🔒
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Playful prompt bottom */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center z-20 mt-6"
              id="envelope-footer"
            >
              <p className="text-xl font-handwritten font-bold text-[#b43e50] tracking-wide hover:scale-105 transition-transform duration-200 select-none">
                got a mail for you &lt;3
              </p>
              <span className="text-[10px] text-rose-500 font-bold block mt-1 tracking-widest uppercase select-none">
                {timeLeft.isExpired || bypassLock ? "tap heart to unfold" : "envelope is locked • view countdown below"}
              </span>
            </motion.div>

            {/* 🕰️ REAL-TIME COUNTDOWN CLOCK WIDGET (Below Envelope Section) */}
            {!timeLeft.isExpired && !bypassLock && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 bg-white/60 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-rose-200/60 max-w-sm w-full mx-auto text-center z-20 select-none"
                id="countdown-clock-card"
              >
                <div className="flex items-center justify-center gap-x-1.5 text-xs font-bold text-[#a4133c] uppercase tracking-wider mb-3">
                  <span>🔒 locked until June 26, 2026</span>
                </div>
                
                <div className="flex justify-center items-center gap-x-2.5">
                  <div className="flex flex-col items-center bg-white/90 rounded-xl py-1.5 px-2.5 shadow-sm min-w-[56px] border border-rose-100/50">
                    <span className="font-sans text-xl font-black text-[#ff4d6d]">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Days</span>
                  </div>
                  <span className="text-[#ff4d6d]/60 font-black text-lg animate-pulse">:</span>
                  
                  <div className="flex flex-col items-center bg-white/90 rounded-xl py-1.5 px-2.5 shadow-sm min-w-[56px] border border-rose-100/50">
                    <span className="font-sans text-xl font-black text-[#ff4d6d]">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Hours</span>
                  </div>
                  <span className="text-[#ff4d6d]/60 font-black text-lg animate-pulse">:</span>
                  
                  <div className="flex flex-col items-center bg-white/90 rounded-xl py-1.5 px-2.5 shadow-sm min-w-[56px] border border-rose-100/50">
                    <span className="font-sans text-xl font-black text-[#ff4d6d]">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Mins</span>
                  </div>
                  <span className="text-[#ff4d6d]/60 font-black text-lg animate-pulse">:</span>
                  
                  <div className="flex flex-col items-center bg-white/90 rounded-xl py-1.5 px-2.5 shadow-sm min-w-[56px] border border-rose-100/50">
                    <span className="font-sans text-xl font-black text-[#ff4d6d]">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Secs</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 🔒 TIME-LOCK POP-UP WARNING DIALOG MODAL */}
            <AnimatePresence>
              {showLockModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="lock-modal-dialog">
                  {/* Backdrop */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowLockModal(false)}
                    className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                  />
                  
                  {/* Modal Box Container */}
                  <motion.div
                    initial={{ scale: 0.92, opacity: 0, y: 15 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.92, opacity: 0, y: 15 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="relative w-full max-w-sm bg-gradient-to-b from-[#fffbfb] via-[#fff5f6] to-[#fffbfb] border-2 border-rose-200/80 rounded-3xl p-6 shadow-2xl text-center select-none z-10"
                  >
                    <div className="w-14 h-14 bg-[#ffccd5]/50 border border-rose-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl animate-bounce">
                      🔒
                    </div>
                    
                    <h3 className="text-[#800f2f] text-lg font-bold mb-3 font-display">Excited much? ❤️</h3>
                    
                    <p className="text-[#a4133c] text-[14px] leading-relaxed font-semibold bg-rose-100/30 p-4 rounded-2xl border border-rose-200/50 mb-5 text-center">
                      "Oops! Bawal pa buksan, masyado kang excited! ❤️ Babalik ka rito sa June 26, 2026, ha?"
                    </p>

                    <div className="grid grid-cols-4 gap-2 mb-5">
                      <div className="bg-white/85 rounded-xl py-1.5 shadow-sm border border-rose-100">
                        <div className="text-lg font-black text-rose-500 font-sans">{String(timeLeft.days).padStart(2, '0')}</div>
                        <div className="text-[8px] text-slate-400 font-extrabold uppercase tracking-widest">Days</div>
                      </div>
                      <div className="bg-white/85 rounded-xl py-1.5 shadow-sm border border-rose-100">
                        <div className="text-lg font-black text-rose-500 font-sans">{String(timeLeft.hours).padStart(2, '0')}</div>
                        <div className="text-[8px] text-slate-400 font-extrabold uppercase tracking-widest">Hrs</div>
                      </div>
                      <div className="bg-white/85 rounded-xl py-1.5 shadow-sm border border-rose-100">
                        <div className="text-lg font-black text-rose-500 font-sans">{String(timeLeft.minutes).padStart(2, '0')}</div>
                        <div className="text-[8px] text-slate-400 font-extrabold uppercase tracking-widest">Mins</div>
                      </div>
                      <div className="bg-white/85 rounded-xl py-1.5 shadow-sm border border-rose-100">
                        <div className="text-lg font-black text-rose-500 font-sans">{String(timeLeft.seconds).padStart(2, '0')}</div>
                        <div className="text-[8px] text-slate-400 font-extrabold uppercase tracking-widest">Secs</div>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <button
                        onClick={() => setShowLockModal(false)}
                        className="w-full py-2.5 px-4 bg-gradient-to-r from-pink-500 to-[#ff4d6d] hover:brightness-[1.03] active:scale-[0.98] text-white font-bold rounded-full shadow-md text-xs transition-all tracking-wider"
                      >
                        Sige po, babalik ako! 🌸
                      </button>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* Persistent bottom page signature */}
            <p className="text-[9px] text-[#ff4d6d]/40 tracking-widest uppercase mt-8 pointer-events-none select-none z-10">
              Made Your Lovelove • 2026
            </p>
          </motion.div>
        )}

        {/* --- SCREEN 2: MAIN TULIP BIRTHDAY EXPERIENCE --- */}
        {screen === 2 && (
          <motion.div
            key="screen2"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-screen w-full pt-24 pb-16 px-4 md:pt-28 md:pb-20 flex flex-col items-center justify-start z-20 bg-gradient-to-br from-[#ffe5ec] via-[#fff5f6] to-[#fefaf6]"
            id="birthday-canvas"
          >
            {/* FOUR CORNER SWAYING TULIPS AS BORDER FRAMING */}
            {/* Top Left */}
            <div className="absolute top-0 left-0 p-4 opacity-45 sm:opacity-80 pointer-events-none transform -rotate-12 z-20">
              <div className="flex gap-x-1">
                <SoftTulip color="#ff758f" className="w-14 h-20 sm:w-20 sm:h-28 animate-sway-left" />
                <BloomingTulip color="#fbcfe8" className="w-10 h-16 sm:w-14 sm:h-22 animate-sway-right -ml-4" />
              </div>
            </div>

            {/* Top Right */}
            <div className="absolute top-0 right-0 p-4 opacity-45 sm:opacity-80 pointer-events-none transform rotate-12 z-20">
              <div className="flex gap-x-1 scale-x-[-1]">
                <GracefulTulip color="#ffa6c9" className="w-14 h-20 sm:w-20 sm:h-28 animate-sway-right" />
                <SoftTulip color="#fcf08a" className="w-10 h-16 sm:w-14 sm:h-22 -ml-4 animate-sway-left" />
              </div>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 opacity-65 sm:opacity-90 pointer-events-none z-20">
              <div className="flex items-end">
                <SoftTulip color="#ff3b60" className="w-16 h-24 sm:w-24 sm:h-34 animate-sway-left" />
                <BloomingTulip color="#ffa6c9" className="w-12 h-18 sm:w-18 sm:h-26 animate-sway-right -ml-4" />
                <GracefulTulip color="#ffffff" className="w-10 h-16 sm:w-14 sm:h-22 animate-sway-left -ml-3 opacity-75" />
              </div>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0 p-4 sm:p-6 opacity-65 sm:opacity-90 pointer-events-none z-20">
              <div className="flex items-end scale-x-[-1]">
                <SoftTulip color="#ff3b60" className="w-16 h-24 sm:w-24 sm:h-34 animate-sway-left" />
                <BloomingTulip color="#ffd166" className="w-12 h-18 sm:w-18 sm:h-26 animate-sway-right -ml-4" />
                <GracefulTulip color="#ffffff" className="w-10 h-16 sm:w-14 sm:h-22 animate-sway-left -ml-3 opacity-75" />
              </div>
            </div>

            {/* FLOATING SPARKLE SPARKS */}
            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
              {particles.map((p) => {
                if (p.isConfetti) {
                  return (
                    <div
                      key={p.id}
                      className="absolute"
                      style={{
                        left: p.x,
                        top: p.y,
                        width: `${p.size}px`,
                        height: `${p.size * 1.5}px`,
                        backgroundColor: p.color,
                        transform: `translate(-50%, -50%) rotate(${p.rotation || 0}deg)`,
                        borderRadius: "2px",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
                      }}
                    />
                  );
                }
                return (
                  <div
                    key={p.id}
                    className="absolute"
                    style={{
                      left: p.x,
                      top: p.y,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Heart
                      className="fill-current text-white/90"
                      style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        color: p.color,
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* MAIN CONTENT BLOCK */}
            <div 
              className="relative w-full max-w-2xl flex flex-col items-center text-center z-35 overflow-visible"
              onClick={spawnHearts}
            >
              {/* BIRTHDAY CAKE CONTAINER */}
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mb-5 flex flex-col items-center"
                ref={cakeRef}
              >
                <BirthdayCake 
                  isBlownOut={isFlameBlownOut} 
                  onClick={() => setIsFlameBlownOut(prev => !prev)} 
                />

                {/* Simple Cake Interaction Indicator */}
                {!isFlameBlownOut ? (
                  <p className="text-[10px] text-rose-500/80 font-bold leading-tight mt-2 select-none">
                    🎂 Tap the cake to blow out the candle!
                  </p>
                ) : (
                  <div className="flex flex-col items-center gap-y-1 mt-2 select-none">
                    <span className="text-xs font-extrabold text-[#b43e50] animate-bounce tracking-wide bg-amber-100/70 border border-amber-200 px-4 py-1.5 rounded-full shadow-sm">
                      ✨ Babi, Make a Wish! ✨
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFlameBlownOut(false);
                      }}
                      className="text-[10px] font-bold text-rose-400 hover:text-rose-500 underline mt-1 cursor-pointer"
                    >
                      Relight Candle 🕯️
                    </button>
                  </div>
                )}
              </motion.div>

              {/* POLAROID-LIKE PHOTO CONTAINER IN CIRCULAR FRAME */}
              <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative group mb-5"
                id="birthday-portrait-frame"
                whileHover={{ scale: 1.03 }}
              >
                {/* Decorative glowing background glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-rose-500 to-indigo-400 blur-xl opacity-45 group-hover:opacity-70 transition-opacity duration-300 -z-10 animate-pulse" />

                {/* Main Circular Polaroid Frame */}
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full p-2.5 bg-gradient-to-br from-white/95 to-white/70 shadow-2xl flex items-center justify-center overflow-hidden border-2 border-white/40 backdrop-blur-sm">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-200/50">
                    
                    {photo ? (
                      <img 
                        src={photo} 
                        alt="Birthday Hero" 
                        className="w-full h-full object-cover transition-all"
                        id="uploaded-celebrant-image"
                      />
                    ) : (
                      <div className="w-full h-full">
                        <CuteCoupleIllustration />
                      </div>
                    )}

                    {/* Interactive hover upload option trigger */}
                    <label className="absolute inset-0 bg-[#000000]/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white text-[11px] font-semibold tracking-wider cursor-pointer transition-opacity duration-200 select-none">
                      <Camera className="w-5 h-5 mb-1 text-pink-300" />
                      <span>Upload Photo</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handlePhotoUpload} 
                        className="hidden" 
                        id="photo-uploader-input"
                      />
                    </label>
                  </div>
                </div>

                {/* Reset to Bunny button */}
                {photo && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={clearPhoto}
                    className="absolute -top-1 -right-1 p-1.5 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg border border-white/20 select-none"
                    title="Change back to illustration"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                  >
                    <RotateCcw className="w-3 h-3" />
                  </motion.button>
                )}
              </motion.div>

              {/* HEADING (happiest birthday baby!) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-8 px-2"
                id="celebrant-heading"
              >
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#800f2f] tracking-wide leading-tight drop-shadow-sm select-none">
                  happiest birthday {babyName}!
                </h1>
                <div className="w-20 h-0.5 bg-rose-300 mx-auto rounded-full mt-3 opacity-75"></div>
              </motion.div>

              {/* SWEET MESSAGE INNER CARD SCROLL */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative w-full bg-white/70 border border-rose-200/60 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden backdrop-blur-md"
                id="birthday-letter-card"
              >
                {/* Scroll track indicator top accent */}
                <div className="w-full h-1 bg-gradient-to-r from-pink-400 via-rose-500 to-yellow-300 opacity-80" />

                <div className="w-full relative overflow-hidden">
                  <SequentialTypewriter babyName={babyName} />
                </div>

                {/* Footer overlay fade inside scroll */}
                <div className="h-4 bg-gradient-to-t from-rose-100/30 to-transparent pointer-events-none" />
              </motion.div>

              {/* EXTRA DELIGHT BUTTONS FLOOR (Sweet wishes draw & Send Birthday Hug) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="w-full flex flex-wrap items-center justify-center gap-3 mt-6 select-none"
              >
                {/* Random Sweet Compliment trigger */}
                <button
                  onClick={getSheddingHearts}
                  id="receive-wish-btn"
                  className="flex items-center gap-x-1.5 px-4 py-2.5 rounded-full bg-white/70 hover:bg-rose-100/55 border border-rose-200 text-xs text-[#800f2f] font-medium shadow-md transition-all duration-200 hover:scale-[1.03]"
                >
                  <Gift className="w-3.5 h-3.5 text-pink-500" />
                  <span>Receive Gift Wish</span>
                </button>

                {/* Restart letter journey uploader */}
                <button
                  onClick={() => {
                    setScreen(1);
                    setIsOpening(false);
                  }}
                  id="restart-journey-btn"
                  className="flex items-center gap-x-1 px-4 py-2.5 rounded-full bg-white/50 hover:bg-rose-100/30 border border-rose-200/50 text-xs text-[#a4133c] hover:text-[#800f2f] transition-all duration-200 hover:scale-[1.03]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Show Envelope Again</span>
                </button>
              </motion.div>

              {/* DYNAMIC SHEDDING SWEET HEART ANNOUNCEMENT POPUP MODAL */}
              <AnimatePresence>
                {activeFortune && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="mt-6 p-4 w-full max-w-md bg-white text-slate-800 rounded-xl shadow-2xl border border-rose-100 flex items-start gap-x-3.5 text-left relative z-40"
                    id="compliment-drawer-box"
                  >
                    <div className="p-2 bg-pink-100 text-pink-500 rounded-lg shrink-0">
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-rose-500 uppercase tracking-widest font-display">Special Birthday Blessing</h4>
                      <p className="text-sm font-medium leading-relaxed text-slate-700">{activeFortune}</p>
                    </div>
                    <button
                      onClick={() => setActiveFortune(null)}
                      className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full absolute top-2 right-2 hover:bg-slate-100"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    {/* Glowing counter */}
                    <span className="absolute bottom-2 right-3 text-[10px] text-pink-300 font-mono">
                      Wishes unlocked: {sparkleCount}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Cute bottom page signature */}
            <p className="text-[10px] text-[#ff4d6d]/40 tracking-widest uppercase mt-8 pointer-events-none select-none">
              Made Your Lovelove • 2026
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Sparkle helper icon (fallback if needed)
function X({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
