import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home as HomeIcon, 
  Edit3, 
  Wrench, 
  List, 
  Settings as SettingsIcon, 
  Play, 
  Sparkles, 
  Plus, 
  Search, 
  X, 
  ChevronRight, 
  ChevronDown,
  Copy, 
  Check, 
  Terminal, 
  Smartphone, 
  Share2, 
  RotateCcw, 
  Info,
  FolderOpen,
  Eye,
  Star,
  FileCode,
  ArrowLeft,
  MoreVertical,
  Save,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { MobileFile, WorkspaceProject, MobileTemplate } from '../types';
import { RUNCODER_TEMPLATES, RunCoderTemplate } from '../data/templates';

// Pre-packaged Initial Files matching the exact real app screenshots
const INITIAL_FILES: MobileFile[] = [
  {
    name: 'Tic_Tac_Toe_Game.js',
    language: 'javascript',
    recentlyOpened: true,
    timeOpened: '3m ago',
    size: '4.2 KB',
    content: `document.body.innerHTML = \`
<style>
  body {
    background: #11111b;
    color: #cdd6f4;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Inter', sans-serif;
    margin: 0;
  }
  .game-container {
    background: #1e1e2e;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    text-align: center;
    width: 380px;
  }
  h1 { margin-top: 0; color: #89b4fa; }

  .scoreboard {
    display: flex;
    justify-content: space-around;
    background: #313244;
    padding: 15px;
    border-radius: 12px;
    margin-bottom: 20px;
  }
  .score-card { display: flex; flex-direction: column; font-weight: bold; }
  .score-card.x-score { color: #f38ba8; }
  .score-card.o-score { color: #89b4fa; }
  .score-val { font-size: 24px; }
</style>
<div class="game-container">
  <h1>Tic Tac Toe</h1>
  <div class="scoreboard">
    <div class="score-card x-score"><span>Player X</span><span class="score-val">1</span></div>
    <div class="score-card"><span>Draws</span><span class="score-val">0</span></div>
    <div class="score-card o-score"><span>Computer O</span><span class="score-val">0</span></div>
  </div>
</div>
\`;
console.log("Tic Tac Toe Game Initialized Successfully");`
  },
  {
    name: 'Shopping_Cart_Simulation.js',
    language: 'javascript',
    recentlyOpened: true,
    timeOpened: '3m ago',
    size: '3.8 KB',
    content: `// Shopping Cart Simulation Engine
class ShoppingCart {
  constructor() {
    this.items = [];
    this.discount = 0.10; // 10% student promo
  }

  addItem(name, price, qty = 1) {
    this.items.push({ name, price, qty });
    console.log(\`Added \${qty}x \${name} ($ \${price})\`);
  }

  calculateTotal() {
    const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discounted = subtotal * (1 - this.discount);
    const tax = discounted * 0.08;
    return { subtotal, discount: subtotal * this.discount, total: discounted + tax };
  }
}

const cart = new ShoppingCart();
cart.addItem("Mechanical Keyboard", 89.99);
cart.addItem("USB-C Hub", 34.50, 2);
console.log("Checkout Summary:", cart.calculateTotal());`
  },
  {
    name: 'Student_Database_Demo.js',
    language: 'javascript',
    recentlyOpened: true,
    timeOpened: '3m ago',
    size: '3.1 KB',
    content: `// Student Database Demo
const students = [
  { id: 101, name: "Harshal S.", major: "Computer Science", gpa: 3.92 },
  { id: 102, name: "Alex R.", major: "Software Engineering", gpa: 3.85 },
  { id: 103, name: "Priya M.", major: "Data Analytics", gpa: 3.98 }
];

function getHonorRoll(threshold = 3.90) {
  return students.filter(s => s.gpa >= threshold);
}

console.log("Honor Roll Students (GPA >= 3.90):");
console.table(getHonorRoll());`
  },
  {
    name: 'GitHub_Profile_Finder.js',
    language: 'javascript',
    recentlyOpened: true,
    timeOpened: '3m ago',
    size: '2.9 KB',
    content: `async function fetchDevProfile(username) {
  console.log(\`Fetching GitHub public record for: \${username}...\`);
  return {
    user: username,
    publicRepos: 42,
    followers: 1280,
    languages: ["C", "C++", "Java", "Python", "JavaScript"]
  };
}

fetchDevProfile("harshal0258").then(p => console.log("Profile Result:", p));`
  },
  {
    name: 'Complete_Responsive_Website_Theme.css',
    language: 'css',
    recentlyOpened: true,
    timeOpened: '2m ago',
    size: '5.6 KB',
    content: `:root {
  --bg-primary: #0c0e18;
  --bg-card: #151829;
  --accent-blue: #3b82f6;
  --accent-purple: #8b5cf6;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
}

body {
  margin: 0;
  font-family: 'Inter', system-ui, sans-serif;
  background: var(--bg-primary);
  color: var(--text-main);
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}`
  },
  {
    name: 'Advanced_Grid_Dashboard.css',
    language: 'css',
    recentlyOpened: true,
    timeOpened: '2m ago',
    size: '4.7 KB',
    content: `.dashboard-container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main stats"
    "footer footer footer";
  grid-template-columns: 240px 1fr 300px;
  grid-template-rows: 64px 1fr 48px;
  min-height: 100vh;
  gap: 12px;
  background: #0f111e;
}`
  },
  {
    name: 'Masonry_Layout.css',
    language: 'css',
    recentlyOpened: true,
    timeOpened: '2m ago',
    size: '2.4 KB',
    content: `.masonry-grid {
  column-count: 3;
  column-gap: 1rem;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
  background: #1a1d2e;
  border-radius: 12px;
  overflow: hidden;
}`
  },
  {
    name: 'Dark_Mode_Theme.css',
    language: 'css',
    recentlyOpened: true,
    timeOpened: '2m ago',
    size: '1.9 KB',
    content: `[data-theme="dark"] {
  --surface-0: #0b0d14;
  --surface-1: #131520;
  --surface-2: #1b1e2c;
  --primary: #6366f1;
  --on-primary: #ffffff;
}`
  },
  {
    name: 'Complete_Portfolio_Website.html',
    language: 'html',
    recentlyOpened: true,
    timeOpened: '2m ago',
    size: '6.4 KB',
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alex.dev | Portfolio</title>
  <style>
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #ffffff;
      color: #0f172a;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }
    nav {
      width: 100%;
      box-sizing: border-box;
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f1f5f9;
    }
    .logo { font-size: 20px; font-weight: 800; color: #2563eb; }
    .btn-hire { background: #2563eb; color: #fff; padding: 8px 18px; border-radius: 8px; font-weight: 600; text-decoration: none; border: none; }
    .hero { text-align: center; max-width: 640px; margin: 40px auto; padding: 0 20px; }
    h1 { font-size: 32px; font-weight: 900; line-height: 1.2; letter-spacing: -0.02em; margin-bottom: 16px; }
    p { font-size: 15px; line-height: 1.6; color: #64748b; margin-bottom: 24px; }
    .btn-primary { background: #2563eb; color: #fff; padding: 12px 24px; border-radius: 8px; font-weight: bold; border: none; width: 100%; max-width: 220px; margin-bottom: 10px; cursor: pointer; }
    .btn-outline { background: transparent; color: #2563eb; border: 1.5px solid #2563eb; padding: 12px 24px; border-radius: 8px; font-weight: bold; width: 100%; max-width: 220px; cursor: pointer; }
  </style>
</head>
<body>
  <nav>
    <div class="logo">Alex.dev</div>
    <button class="btn-hire">Hire Me</button>
  </nav>
  <div class="hero">
    <h1>Building digital products, brands, and experiences.</h1>
    <p>A Senior Frontend Engineer specializing in building exceptional digital experiences with a focus on accessible, semantic, and performant user interfaces.</p>
    <div style="display:flex; flex-direction:column; align-items:center;">
      <button class="btn-primary">View My Work</button>
      <button class="btn-outline">Download Resume</button>
    </div>
  </div>
</body>
</html>`
  },
  {
    name: 'Swap_Using_Pointers.c',
    language: 'c',
    recentlyOpened: true,
    timeOpened: '4m ago',
    size: '1.8 KB',
    content: `#include <stdio.h>

void swap(int *xp, int *yp) {
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

int main() {
    int a = 15, b = 42;
    printf("--- C Pointer Memory Swapper ---\\n");
    printf("Initial: a = %d (addr: %p), b = %d (addr: %p)\\n", a, (void*)&a, b, (void*)&b);
    
    swap(&a, &b);
    
    printf("Swapped: a = %d, b = %d\\n", a, b);
    printf("Process memory verified.\\n");
    return 0;
}`
  },
  {
    name: 'Function_with_Return_Value.c',
    language: 'c',
    recentlyOpened: true,
    timeOpened: '4m ago',
    size: '1.5 KB',
    content: `#include <stdio.h>

int square(int num) {
    return num * num;
}

int main() {
    int val = 9;
    printf("The square of %d is %d\\n", val, square(val));
    return 0;
}`
  },
  {
    name: 'Recursive_Factorial.c',
    language: 'c',
    recentlyOpened: true,
    timeOpened: '4m ago',
    size: '1.6 KB',
    content: `#include <stdio.h>

long long factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    int num = 6;
    printf("Factorial of %d = %lld\\n", num, factorial(num));
    return 0;
}`
  },
  {
    name: 'File_Write_and_Read.c',
    language: 'c',
    recentlyOpened: true,
    timeOpened: '4m ago',
    size: '2.1 KB',
    content: `#include <stdio.h>

int main() {
    FILE *fp = fopen("output.txt", "w");
    if (!fp) {
        printf("Error opening file!\\n");
        return 1;
    }
    fprintf(fp, "RunCoder Mobile Sandbox\\n");
    fclose(fp);
    printf("File created and written successfully.\\n");
    return 0;
}`
  },
  {
    name: 'Employee_Management_System.cpp',
    language: 'cpp',
    recentlyOpened: true,
    timeOpened: 'Just now',
    size: '4.9 KB',
    content: `#include <iostream>
#include <vector>
#include <string>

class Employee {
public:
    int id;
    std::string name;
    std::string role;
    double salary;

    Employee(int i, std::string n, std::string r, double s)
        : id(i), name(n), role(r), salary(s) {}

    void display() const {
        std::cout << "[" << id << "] " << name << " | " << role 
                  << " | $" << salary << std::endl;
    }
};

int main() {
    std::vector<Employee> team;
    team.emplace_back(101, "Harshal S.", "Lead Engineer", 125000.0);
    team.emplace_back(102, "Alex R.", "Frontend Specialist", 105000.0);
    team.emplace_back(103, "Priya M.", "Systems Architect", 135000.0);

    std::cout << "--- Team Directory ---" << std::endl;
    for (const auto& emp : team) {
        emp.display();
    }
    return 0;
}`
  },
  {
    name: 'Binary_Search.java',
    language: 'java',
    recentlyOpened: true,
    timeOpened: 'Just now',
    size: '3.4 KB',
    content: `import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class BinarySearch {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        numbers.add(12);
        numbers.add(24);
        numbers.add(47);
        numbers.add(68);
        numbers.add(95);

        int key = 47;
        int index = Collections.binarySearch(numbers, key);

        System.out.println("Sorted List: " + numbers);
        System.out.println("Key " + key + " found at index: " + index);
    }
}`
  },
  {
    name: 'Polymorphism.py',
    language: 'python',
    recentlyOpened: true,
    timeOpened: 'Just now',
    size: '2.5 KB',
    content: `class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w = w
        self.h = h
    def area(self):
        return self.w * self.h

class Circle(Shape):
    def __init__(self, r):
        self.r = r
    def area(self):
        return 3.14159 * self.r * self.r

shapes = [Rectangle(10, 5), Circle(7)]
for s in shapes:
    print(f"Shape: {s.__class__.__name__}, Area: {s.area():.2f}")`
  }
];

export default function DeviceMockup() {
  // Navigation tabs (5 tabs matching screenshots 1-5):
  // 'home' | 'code' | 'templates' | 'files' | 'settings'
  const [activeTab, setActiveTab] = useState<'home' | 'code' | 'templates' | 'files' | 'settings'>('home');
  
  // Views:
  // 'tabs' -> 5 navigation tabs
  // 'editor' -> Full-screen Code Editor (Screenshot 6)
  // 'preview' -> Interactive Preview / Console (Screenshots 7 & 8)
  const [activeView, setActiveView] = useState<'tabs' | 'editor' | 'preview'>('tabs');

  // Files state
  const [allFiles, setAllFiles] = useState<MobileFile[]>(INITIAL_FILES);
  const [currentFile, setCurrentFile] = useState<MobileFile>(INITIAL_FILES[0]);
  const [openTabs, setOpenTabs] = useState<MobileFile[]>([
    INITIAL_FILES[0], // Tic_Tac_Toe_Game.js
    INITIAL_FILES[1], // Shopping_Cart_Simulation.js
  ]);

  // Terminal & Compilation Logs
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    '✔ RunCoder Mobile Sandbox Online',
    '⚡ Memory: 512MB isolated container',
    '💡 Tap "▶ Run" or "🌐 Preview" to execute.'
  ]);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCompiling, setIsCompiling] = useState(false);

  // Preview Mode: 'preview' (WebView) | 'console' (JavaScript Output)
  const [previewTab, setPreviewTab] = useState<'preview' | 'console'>('preview');

  // Interactive Tic-Tac-Toe Game State (Screenshot 7)
  const [tttBoard, setTttBoard] = useState<(string | null)[]>(['X', null, 'X', 'O', 'X', null, 'X', null, 'O']);
  const [tttDifficulty, setTttDifficulty] = useState('Easy');
  const [tttScores, setTttScores] = useState({ x: 1, o: 0, draws: 0 });
  const [tttWinner, setTttWinner] = useState<string | null>('X');
  const [tttAgainstAI, setTttAgainstAI] = useState(true);

  // Settings State (Screenshot 5)
  const [fontSize, setFontSize] = useState<number>(14);
  const [syntaxHighlighting, setSyntaxHighlighting] = useState<boolean>(true);
  const [wordWrap, setWordWrap] = useState<boolean>(true);
  const [lineNumbers, setLineNumbers] = useState<boolean>(true);
  const [autoSave, setAutoSave] = useState<boolean>(true);
  const [selectedFont, setSelectedFont] = useState<string>('Default');

  // Search & Filter States
  const [templateSearch, setTemplateSearch] = useState('');
  const [templateLangFilter, setTemplateLangFilter] = useState('All');
  const [templateLevelFilter, setTemplateLevelFilter] = useState('All');
  const [expandedTemplateId, setExpandedTemplateId] = useState<string | null>(null);

  const [filesSearch, setFilesSearch] = useState('');
  const [filesLangFilter, setFilesLangFilter] = useState('All');

  // Notification Toast
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Clock
  const [phoneTime, setPhoneTime] = useState('17:02');
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setPhoneTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
    };
    update();
    const timer = setInterval(update, 30000);
    return () => clearInterval(timer);
  }, []);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2000);
  };

  // Helper: Open File in Code Editor
  const openFileInEditor = (file: MobileFile) => {
    setCurrentFile(file);
    if (!openTabs.some(t => t.name === file.name)) {
      setOpenTabs(prev => [...prev, file]);
    }
    setActiveView('editor');
    showToast(`Opened ${file.name}`);
  };

  // Helper: Close a file tab
  const closeTab = (fileName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const remaining = openTabs.filter(t => t.name !== fileName);
    if (remaining.length === 0) {
      setActiveView('tabs');
      setActiveTab('code');
    } else {
      setOpenTabs(remaining);
      if (currentFile.name === fileName) {
        setCurrentFile(remaining[remaining.length - 1]);
      }
    }
  };

  // Helper: Run / Preview Code
  const handleExecute = () => {
    if (!currentFile) return;
    const isWeb = currentFile.language === 'javascript' || currentFile.language === 'html' || currentFile.language === 'css';
    
    if (isWeb) {
      setActiveView('preview');
      return;
    }

    setIsCompiling(true);
    setIsTerminalOpen(true);
    setConsoleLogs(prev => [
      ...prev,
      `─────────────────────────────────────`,
      `⏳ Compiling '${currentFile.name}' with ${currentFile.language.toUpperCase()}...`
    ]);

    setTimeout(() => {
      setIsCompiling(false);
      let output = '';
      if (currentFile.language === 'c') {
        output = `--- C Pointer Memory Swapper ---\nInitial: a = 15 (addr: 0x7ffd1), b = 42 (addr: 0x7ffd5)\nSwapped: a = 42, b = 15\nProcess memory verified.`;
      } else if (currentFile.language === 'cpp') {
        output = `--- Team Directory ---\n[101] Harshal S. | Lead Engineer | $125000.0\n[102] Alex R. | Frontend Specialist | $105000.0\n[103] Priya M. | Systems Architect | $135000.0`;
      } else if (currentFile.language === 'java') {
        output = `Sorted List: [12, 24, 47, 68, 95]\nKey 47 found at index: 2`;
      } else if (currentFile.language === 'python') {
        output = `Shape: Rectangle, Area: 50.00\nShape: Circle, Area: 153.94`;
      }
      setConsoleLogs(prev => [
        ...prev,
        output,
        `\n[Process exited with code 0 in 184ms]`
      ]);
    }, 600);
  };

  // Tic Tac Toe Gameplay
  const handleTttClick = (idx: number) => {
    if (tttBoard[idx] || tttWinner) return;
    const newBoard = [...tttBoard];
    newBoard[idx] = 'X';
    setTttBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      setTttWinner(winner);
      if (winner === 'X') setTttScores(s => ({ ...s, x: s.x + 1 }));
      else if (winner === 'O') setTttScores(s => ({ ...s, o: s.o + 1 }));
      return;
    }

    if (newBoard.every(c => c !== null)) {
      setTttWinner('Draw');
      setTttScores(s => ({ ...s, draws: s.draws + 1 }));
      return;
    }

    if (tttAgainstAI) {
      setTimeout(() => {
        const aiBoard = [...newBoard];
        const emptyIndices = aiBoard.map((c, i) => c === null ? i : null).filter(c => c !== null) as number[];
        if (emptyIndices.length > 0) {
          const chosen = emptyIndices.includes(4) ? 4 : emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
          aiBoard[chosen] = 'O';
          setTttBoard(aiBoard);
          const aiWinner = checkWinner(aiBoard);
          if (aiWinner) {
            setTttWinner(aiWinner);
            if (aiWinner === 'O') setTttScores(s => ({ ...s, o: s.o + 1 }));
          } else if (aiBoard.every(c => c !== null)) {
            setTttWinner('Draw');
            setTttScores(s => ({ ...s, draws: s.draws + 1 }));
          }
        }
      }, 350);
    }
  };

  const checkWinner = (b: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [x, y, z] of lines) {
      if (b[x] && b[x] === b[y] && b[x] === b[z]) return b[x];
    }
    return null;
  };

  const resetTttGame = () => {
    setTttBoard(Array(9).fill(null));
    setTttWinner(null);
  };

  // Filter templates
  const filteredTemplates = RUNCODER_TEMPLATES.filter(t => {
    const matchSearch = !templateSearch || 
      t.title.toLowerCase().includes(templateSearch.toLowerCase()) || 
      t.description.toLowerCase().includes(templateSearch.toLowerCase());
    
    const matchLang = templateLangFilter === 'All' || 
      (templateLangFilter === 'C' && t.language === 'c') ||
      (templateLangFilter === 'C++' && t.language === 'cpp') ||
      (templateLangFilter === 'Java' && t.language === 'java') ||
      (templateLangFilter === 'Python' && t.language === 'python') ||
      (templateLangFilter === 'HTML' && t.language === 'html') ||
      (templateLangFilter === 'CSS' && t.language === 'css');

    const matchLevel = templateLevelFilter === 'All' || t.level === templateLevelFilter;
    return matchSearch && matchLang && matchLevel;
  });

  // Filter files
  const filteredFiles = allFiles.filter(f => {
    const matchSearch = !filesSearch || f.name.toLowerCase().includes(filesSearch.toLowerCase());
    const matchLang = filesLangFilter === 'All' || 
      (filesLangFilter === 'C' && f.language === 'c') ||
      (filesLangFilter === 'C++' && f.language === 'cpp') ||
      (filesLangFilter === 'CSS' && f.language === 'css') ||
      (filesLangFilter === 'HTML' && f.language === 'html') ||
      (filesLangFilter === 'Java' && f.language === 'java');
    return matchSearch && matchLang;
  });

  return (
    <div className="relative mx-auto max-w-[340px] md:max-w-[360px] w-full" id="interactive-device">
      {/* Device Chassis with precise Android bezel and shadow */}
      <div className="relative border-[10px] border-[#1e2235] bg-[#0c0e18] rounded-[48px] shadow-2xl shadow-blue-950/40 overflow-hidden ring-4 ring-[#292e47] select-none h-[640px] flex flex-col font-sans">
        
        {/* Punch-hole Camera */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#111111] rounded-full z-50 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#0e172a] rounded-full border border-blue-900/30"></div>
        </div>

        {/* Status Bar */}
        <div className="bg-[#0c0e18] text-slate-400 text-[11px] px-6 pt-3 pb-1 flex justify-between items-center z-40 shrink-0">
          <span className="font-medium tracking-tight text-white">{phoneTime}</span>
          <div className="flex items-center space-x-1.5">
            <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M2 22h20V2z" />
            </svg>
            <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M12 21l-12-18h24z" />
            </svg>
            <div className="w-5 h-2.5 border border-white/60 rounded-sm p-0.5 flex items-center">
              <div className="h-full w-4 bg-emerald-400 rounded-2xs"></div>
            </div>
          </div>
        </div>

        {/* Toast feedback */}
        <AnimatePresence>
          {toastMsg && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-12 left-1/2 -translate-x-1/2 z-50 bg-blue-600 text-white text-[10px] font-bold py-1 px-3.5 rounded-full shadow-xl flex items-center space-x-1.5"
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-300" />
              <span>{toastMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Core Screen Canvas */}
        <div className="flex-1 overflow-hidden relative flex flex-col bg-[#0c0e18] text-[#f8fafc]">
          
          <AnimatePresence mode="wait">
            
            {/* ========================================================= */}
            {/* VIEW 1: 5 BOTTOM NAVIGATION TABS                           */}
            {/* ========================================================= */}
            {activeView === 'tabs' && (
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.12 }}
                className="flex-1 flex flex-col h-full overflow-y-auto pb-16 scrollbar-none"
              >
                
                {/* ------------------------------------------------------- */}
                {/* TAB 1: HOME SCREEN (Screenshot 1)                       */}
                {/* ------------------------------------------------------- */}
                {activeTab === 'home' && (
                  <div className="p-4 space-y-4">
                    {/* Top App Header with "RunCoder" and "★ Go Pro" pill */}
                    <div className="flex justify-between items-center pt-0.5">
                      <div className="flex items-center space-x-2">
                        <img 
                          src="/runcoder-official-logo.png" 
                          alt="RunCoder" 
                          className="w-6 h-6 rounded-md object-cover select-none shadow-sm"
                          referrerPolicy="no-referrer"
                        />
                        <span className="text-xl font-bold text-white tracking-tight">RunCoder</span>
                      </div>
                      <button 
                        onClick={() => setActiveTab('settings')}
                        className="flex items-center space-x-1 bg-gradient-to-r from-[#6366f1] to-[#3b82f6] text-white text-[11px] font-bold py-1.5 px-3 rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
                      >
                        <span>★</span>
                        <span>Go Pro</span>
                      </button>
                    </div>

                    {/* Headline banner */}
                    <div className="text-center pt-1 space-y-0.5">
                      <div className="text-xs text-slate-300 font-medium">Welcome 👋</div>
                      <h1 className="text-xl font-extrabold text-white tracking-tight">Learn. Code. Execute.</h1>
                      <p className="text-[11px] text-slate-400">Built for Students & Engineers</p>
                    </div>

                    {/* Big Hero Action Card: "Create New Project" */}
                    <div 
                      onClick={() => setActiveTab('code')}
                      className="bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#38bdf8] p-4 rounded-2xl cursor-pointer hover:brightness-110 active:scale-98 transition-all shadow-lg flex items-center space-x-3 text-left"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30 shrink-0">
                        <Edit3 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-sm font-extrabold text-white leading-tight">Create New Project</h2>
                        <p className="text-[10px] text-white/90 mt-0.5">Start building with your favorite language</p>
                      </div>
                    </div>

                    {/* Quick 2-Column Split Cards: Workspace & Templates */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div 
                        onClick={() => setActiveTab('code')}
                        className="bg-[#151829] hover:bg-[#1a1d33] border border-slate-800/80 p-3 rounded-2xl cursor-pointer transition-all active:scale-95 flex items-center space-x-2.5 text-left"
                      >
                        <List className="w-4 h-4 text-cyan-400 shrink-0" />
                        <div>
                          <h3 className="text-xs font-bold text-white leading-none">Workspace</h3>
                          <p className="text-[9px] text-slate-400 mt-1">35 files open</p>
                        </div>
                      </div>

                      <div 
                        onClick={() => setActiveTab('templates')}
                        className="bg-[#151829] hover:bg-[#1a1d33] border border-slate-800/80 p-3 rounded-2xl cursor-pointer transition-all active:scale-95 flex items-center space-x-2.5 text-left"
                      >
                        <Wrench className="w-4 h-4 text-purple-400 shrink-0" />
                        <div>
                          <h3 className="text-xs font-bold text-white leading-none">Templates</h3>
                          <p className="text-[9px] text-slate-400 mt-1">Use a starter template</p>
                        </div>
                      </div>
                    </div>

                    {/* START CODING IN... language pills */}
                    <div className="text-left space-y-2">
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">START CODING IN...</span>
                      <div className="flex space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
                        {[
                          { name: 'C', icon: '⚙' },
                          { name: 'C++', icon: '⚙+' },
                          { name: 'Java', icon: '☕' },
                          { name: 'Python', icon: '🐍' },
                          { name: 'HTML', icon: '🌐' },
                          { name: 'CSS', icon: '🍪' }
                        ].map((l, i) => (
                          <button 
                            key={i}
                            onClick={() => {
                              const found = allFiles.find(f => f.name.toLowerCase().includes(l.name.toLowerCase()));
                              if (found) openFileInEditor(found);
                              else setActiveTab('code');
                            }}
                            className="bg-[#151829] hover:bg-slate-800 border border-slate-800 text-[10px] font-medium text-slate-300 py-1.5 px-3 rounded-full flex items-center space-x-1.5 shrink-0 cursor-pointer active:scale-95 transition-all"
                          >
                            <span>{l.icon}</span>
                            <span>{l.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* App Guide Info Pill */}
                    <div className="bg-[#13172b] border border-blue-500/20 py-2 px-3 rounded-full flex items-center justify-center space-x-1.5 cursor-pointer hover:bg-[#191f3b] transition-all">
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-[9px] font-bold text-white">i</div>
                      <span className="text-[11px] font-bold text-blue-400">New here? Open App Guide</span>
                    </div>

                    {/* YOUR WORKSPACE Section */}
                    <div className="text-left space-y-2">
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">YOUR WORKSPACE</span>
                      <div className="bg-[#151829] border border-slate-800/80 rounded-2xl p-4 space-y-3">
                        <div className="flex items-center space-x-2 text-blue-400 text-xs font-extrabold">
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>35 Open Files</span>
                        </div>
                        <div className="space-y-1 text-xs text-slate-300 pl-2">
                          <p className="truncate">• Tic_Tac_Toe_Game.js</p>
                          <p className="truncate">• Shopping_Cart_Simulation.js</p>
                          <p className="truncate">• Student_Database_Demo.js</p>
                          <p className="text-[10px] text-slate-500">+ 32 more</p>
                        </div>
                        <button 
                          onClick={() => openFileInEditor(INITIAL_FILES[0])}
                          className="w-full bg-[#1e233d] hover:bg-[#252b4b] text-white font-bold text-xs py-2.5 rounded-xl transition-all active:scale-98 cursor-pointer"
                        >
                          Resume Workspace
                        </button>
                      </div>
                    </div>

                  </div>
                )}

                {/* ------------------------------------------------------- */}
                {/* TAB 2: CODE SCREEN (Screenshot 2)                       */}
                {/* ------------------------------------------------------- */}
                {activeTab === 'code' && (
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-center pt-0.5">
                      <span className="text-xl font-bold text-white tracking-tight">Code</span>
                      <button 
                        onClick={() => setActiveTab('settings')}
                        className="flex items-center space-x-1 bg-gradient-to-r from-[#6366f1] to-[#3b82f6] text-white text-[11px] font-bold py-1.5 px-3 rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
                      >
                        <span>★</span>
                        <span>Go Pro</span>
                      </button>
                    </div>

                    {/* CONTINUE CODING Card */}
                    <div className="text-left space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">CONTINUE CODING</span>
                      <div className="bg-[#151829] border border-slate-800/80 p-3.5 rounded-2xl flex justify-between items-center">
                        <div className="flex items-center space-x-2 overflow-hidden">
                          <Play className="w-3.5 h-3.5 text-blue-400 fill-current shrink-0" />
                          <span className="text-xs font-bold text-white truncate">{INITIAL_FILES[9].name}</span>
                        </div>
                        <button 
                          onClick={() => openFileInEditor(INITIAL_FILES[9])}
                          className="bg-[#1e233d] hover:bg-slate-700 text-[10px] font-bold text-slate-200 py-1.5 px-3 rounded-xl shrink-0 cursor-pointer active:scale-95"
                        >
                          Open Workspace
                        </button>
                      </div>
                    </div>

                    {/* Quick Actions: New File & Open File */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div 
                        onClick={() => {
                          const newF: MobileFile = {
                            name: `script_${Date.now().toString().slice(-4)}.js`,
                            language: 'javascript',
                            content: `// New Javascript File\nconsole.log("Hello from RunCoder!");`,
                            recentlyOpened: true,
                            timeOpened: 'Just now'
                          };
                          setAllFiles([newF, ...allFiles]);
                          openFileInEditor(newF);
                        }}
                        className="bg-[#151829] hover:bg-[#1a1d33] border border-slate-800/80 p-3 rounded-2xl cursor-pointer transition-all active:scale-95 flex items-center space-x-2.5 text-left"
                      >
                        <Plus className="w-4 h-4 text-cyan-400 shrink-0" />
                        <div>
                          <h3 className="text-xs font-bold text-white leading-none">New File</h3>
                          <p className="text-[9px] text-slate-400 mt-1">Start coding</p>
                        </div>
                      </div>

                      <div 
                        onClick={() => setActiveTab('files')}
                        className="bg-[#151829] hover:bg-[#1a1d33] border border-slate-800/80 p-3 rounded-2xl cursor-pointer transition-all active:scale-95 flex items-center space-x-2.5 text-left"
                      >
                        <List className="w-4 h-4 text-purple-400 shrink-0" />
                        <div>
                          <h3 className="text-xs font-bold text-white leading-none">Open File</h3>
                          <p className="text-[9px] text-slate-400 mt-1">Browse device</p>
                        </div>
                      </div>
                    </div>

                    {/* START CODING IN... */}
                    <div className="text-left space-y-2">
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">START CODING IN...</span>
                      <div className="flex space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
                        {[
                          { name: 'C', icon: '⚙' },
                          { name: 'C++', icon: '⚙+' },
                          { name: 'Java', icon: '☕' },
                          { name: 'Python', icon: '🐍' },
                          { name: 'HTML', icon: '🌐' },
                          { name: 'CSS', icon: '🍪' }
                        ].map((l, i) => (
                          <button 
                            key={i}
                            onClick={() => {
                              const found = allFiles.find(f => f.name.toLowerCase().includes(l.name.toLowerCase()));
                              if (found) openFileInEditor(found);
                            }}
                            className="bg-[#151829] hover:bg-slate-800 border border-slate-800 text-[10px] font-medium text-slate-300 py-1.5 px-3 rounded-full flex items-center space-x-1.5 shrink-0 cursor-pointer active:scale-95 transition-all"
                          >
                            <span>{l.icon}</span>
                            <span>{l.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* OPEN FILES (35) List */}
                    <div className="text-left space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-slate-400 tracking-wider">OPEN FILES ({allFiles.length})</span>
                        <button 
                          onClick={() => showToast('All closed')}
                          className="text-[10px] font-medium text-slate-400 hover:text-white cursor-pointer"
                        >
                          Close All
                        </button>
                      </div>

                      <div className="bg-[#151829] border border-slate-800/80 rounded-2xl overflow-hidden divide-y divide-slate-800/60">
                        {allFiles.slice(0, 8).map((file, idx) => (
                          <div 
                            key={idx}
                            onClick={() => openFileInEditor(file)}
                            className="p-3 flex justify-between items-center hover:bg-[#1c2035] cursor-pointer transition-colors"
                          >
                            <span className="text-xs font-semibold text-slate-200 truncate pr-2">{file.name}</span>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setAllFiles(allFiles.filter(f => f.name !== file.name));
                                showToast(`Closed ${file.name}`);
                              }}
                              className="text-slate-500 hover:text-white p-1"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* ------------------------------------------------------- */}
                {/* TAB 3: TEMPLATES SCREEN (Screenshot 3)                  */}
                {/* ------------------------------------------------------- */}
                {activeTab === 'templates' && (
                  <div className="p-4 space-y-3">
                    {/* Header */}
                    <div className="flex justify-between items-center pt-0.5">
                      <span className="text-xl font-bold text-white tracking-tight">Templates</span>
                      <button 
                        onClick={() => setActiveTab('settings')}
                        className="flex items-center space-x-1 bg-gradient-to-r from-[#6366f1] to-[#3b82f6] text-white text-[11px] font-bold py-1.5 px-3 rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
                      >
                        <span>★</span>
                        <span>Go Pro</span>
                      </button>
                    </div>

                    {/* Search Input */}
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text"
                        placeholder="Search templates..."
                        value={templateSearch}
                        onChange={(e) => setTemplateSearch(e.target.value)}
                        className="w-full bg-[#151829] border border-slate-800/80 rounded-xl py-2 pl-9 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Filter Row 1: Languages */}
                    <div className="flex space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
                      {['All', 'C', 'C++', 'Java', 'Python', 'HTML', 'CSS'].map((lang, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setTemplateLangFilter(lang)}
                          className={`py-1 px-3 rounded-full text-[10px] font-bold tracking-tight transition-all shrink-0 cursor-pointer ${
                            templateLangFilter === lang 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-[#151829] border border-slate-800/80 text-slate-400 hover:text-white'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>

                    {/* Filter Row 2: Difficulty */}
                    <div className="flex space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
                      {['All', 'Beginner', 'Intermediate', 'Advanced'].map((lvl, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setTemplateLevelFilter(lvl)}
                          className={`py-1 px-3 rounded-full text-[10px] font-bold tracking-tight transition-all shrink-0 cursor-pointer ${
                            templateLevelFilter === lvl 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-[#151829] border border-slate-800/80 text-slate-400 hover:text-white'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>

                    {/* RECENTLY OPENED Templates list */}
                    <div className="text-left space-y-2.5 pt-1">
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">RECENTLY OPENED</span>
                      
                      {filteredTemplates.slice(0, 5).map((tmpl, idx) => (
                        <div 
                          key={idx}
                          className="bg-[#151829] border border-slate-800/80 rounded-2xl p-3.5 space-y-2.5 shadow-sm"
                        >
                          <div className="flex justify-between items-start">
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded font-mono ${
                              tmpl.language === 'cpp' ? 'bg-blue-500/20 text-blue-400' :
                              tmpl.language === 'java' ? 'bg-orange-500/20 text-orange-400' :
                              tmpl.language === 'python' ? 'bg-amber-500/20 text-amber-400' :
                              tmpl.language === 'c' ? 'bg-indigo-500/20 text-indigo-400' :
                              'bg-rose-500/20 text-rose-400'
                            }`}>
                              {tmpl.languageLabel || tmpl.language.toUpperCase()}
                            </span>
                            <Star className="w-4 h-4 text-slate-400 hover:text-amber-400 cursor-pointer" />
                          </div>

                          <div>
                            <h3 className="text-xs font-bold text-white">{tmpl.title}</h3>
                            <p className="text-[10px] text-slate-400 mt-0.5">{tmpl.description}</p>
                          </div>

                          {/* Show I/O toggle */}
                          <button 
                            onClick={() => setExpandedTemplateId(expandedTemplateId === tmpl.id ? null : tmpl.id)}
                            className="text-[10px] text-blue-400 font-semibold flex items-center space-x-1 cursor-pointer hover:underline"
                          >
                            <span>Show I/O</span>
                            <ChevronDown className={`w-3 h-3 transition-transform ${expandedTemplateId === tmpl.id ? 'rotate-180' : ''}`} />
                          </button>

                          {/* Expandable Code Preview */}
                          {expandedTemplateId === tmpl.id && (
                            <div className="bg-[#090b14] p-2 rounded-xl text-[9px] font-mono text-slate-300 overflow-x-auto max-h-32 border border-slate-800">
                              <pre>{tmpl.code}</pre>
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="flex space-x-2 pt-1">
                            <button 
                              onClick={() => {
                                const newF: MobileFile = {
                                  name: `${tmpl.title.replace(/\s+/g, '_')}${tmpl.extension}`,
                                  language: tmpl.language as any,
                                  content: tmpl.code,
                                  recentlyOpened: true,
                                  timeOpened: 'Just now'
                                };
                                setAllFiles([newF, ...allFiles]);
                                openFileInEditor(newF);
                              }}
                              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[10px] py-2 rounded-xl transition-all active:scale-98 cursor-pointer"
                            >
                              Open in Editor
                            </button>
                            <button 
                              onClick={() => {
                                navigator.clipboard.writeText(tmpl.code);
                                showToast('Code copied');
                              }}
                              className="flex-1 bg-[#1e233d] hover:bg-[#252b4b] text-slate-200 font-bold text-[10px] py-2 rounded-xl transition-all active:scale-98 cursor-pointer"
                            >
                              Copy Code
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                )}

                {/* ------------------------------------------------------- */}
                {/* TAB 4: FILES SCREEN (Screenshot 4)                      */}
                {/* ------------------------------------------------------- */}
                {activeTab === 'files' && (
                  <div className="p-4 space-y-3">
                    {/* Header */}
                    <div className="flex justify-between items-center pt-0.5">
                      <span className="text-xl font-bold text-white tracking-tight">Files</span>
                      <button 
                        onClick={() => setActiveTab('settings')}
                        className="flex items-center space-x-1 bg-gradient-to-r from-[#6366f1] to-[#3b82f6] text-white text-[11px] font-bold py-1.5 px-3 rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
                      >
                        <span>★</span>
                        <span>Go Pro</span>
                      </button>
                    </div>

                    {/* Search Input */}
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text"
                        placeholder="Search files..."
                        value={filesSearch}
                        onChange={(e) => setFilesSearch(e.target.value)}
                        className="w-full bg-[#151829] border border-slate-800/80 rounded-xl py-2 pl-9 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Filter Pills */}
                    <div className="flex space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
                      {['All', 'C', 'C++', 'CSS', 'HTML', 'Java'].map((lang, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setFilesLangFilter(lang)}
                          className={`py-1 px-3 rounded-full text-[10px] font-bold tracking-tight transition-all shrink-0 cursor-pointer ${
                            filesLangFilter === lang 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-[#151829] border border-slate-800/80 text-slate-400 hover:text-white'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>

                    {/* RECENTLY OPENED List */}
                    <div className="text-left space-y-2 pt-1">
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">RECENTLY OPENED</span>

                      <div className="space-y-1.5">
                        {filteredFiles.map((file, idx) => {
                          const ext = file.name.split('.').pop()?.toLowerCase();
                          let badgeText = 'JS';
                          let badgeColor = 'bg-yellow-500/20 text-yellow-400';
                          if (ext === 'cpp') { badgeText = 'C++'; badgeColor = 'bg-blue-500/20 text-blue-400'; }
                          else if (ext === 'java') { badgeText = 'J'; badgeColor = 'bg-orange-500/20 text-orange-400'; }
                          else if (ext === 'py') { badgeText = 'Py'; badgeColor = 'bg-teal-500/20 text-teal-400'; }
                          else if (ext === 'css') { badgeText = '{}'; badgeColor = 'bg-purple-500/20 text-purple-400'; }
                          else if (ext === 'html') { badgeText = '<>'; badgeColor = 'bg-rose-500/20 text-rose-400'; }
                          else if (ext === 'c') { badgeText = 'C'; badgeColor = 'bg-blue-500/20 text-blue-400'; }

                          return (
                            <div 
                              key={idx}
                              onClick={() => openFileInEditor(file)}
                              className="bg-[#151829] hover:bg-[#1c2035] p-2.5 rounded-xl flex items-center justify-between cursor-pointer transition-colors active:scale-99 border border-slate-800/60"
                            >
                              <div className="flex items-center space-x-2.5 overflow-hidden">
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-[10px] font-extrabold shrink-0 ${badgeColor}`}>
                                  {badgeText}
                                </div>
                                <span className="text-xs font-semibold text-white truncate">{file.name}</span>
                              </div>

                              <div className="flex items-center space-x-1 text-slate-500 shrink-0">
                                <span className="text-[9px]">{file.timeOpened || 'Just now'}</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                )}

                {/* ------------------------------------------------------- */}
                {/* TAB 5: SETTINGS SCREEN (Screenshot 5)                   */}
                {/* ------------------------------------------------------- */}
                {activeTab === 'settings' && (
                  <div className="p-4 space-y-4 text-left">
                    {/* Header */}
                    <div className="flex justify-between items-center pt-0.5">
                      <span className="text-xl font-bold text-white tracking-tight">Settings</span>
                      <button className="flex items-center space-x-1 bg-gradient-to-r from-[#6366f1] to-[#3b82f6] text-white text-[11px] font-bold py-1.5 px-3 rounded-full shadow-md">
                        <span>★</span>
                        <span>Go Pro</span>
                      </button>
                    </div>

                    {/* Section: SUBSCRIPTION */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">SUBSCRIPTION</span>
                      <div className="bg-[#151829] border border-slate-800/80 p-3.5 rounded-2xl flex justify-between items-center">
                        <div className="flex items-center space-x-2.5">
                          <Star className="w-4 h-4 text-amber-400 shrink-0" />
                          <div>
                            <h3 className="text-xs font-bold text-white">RunCoder Pro</h3>
                            <p className="text-[9px] text-slate-400">Remove ads, unlock everything</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-slate-300 text-xs font-semibold">
                          <span>Go Pro</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* Section: IMPORT */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">IMPORT</span>
                      <div 
                        onClick={() => showToast('Select file from device')}
                        className="bg-[#151829] hover:bg-[#1a1d33] border border-slate-800/80 p-3.5 rounded-2xl flex justify-between items-center cursor-pointer transition-colors"
                      >
                        <div className="flex items-center space-x-2.5">
                          <Plus className="w-4 h-4 text-slate-300 shrink-0" />
                          <div>
                            <h3 className="text-xs font-bold text-white">Import Existing File</h3>
                            <p className="text-[9px] text-slate-400">Open .c .cpp .java .py files</p>
                          </div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                    </div>

                    {/* Section: EDITOR */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">EDITOR</span>
                      
                      <div className="bg-[#151829] border border-slate-800/80 rounded-2xl divide-y divide-slate-800/60 overflow-hidden">
                        
                        {/* Font size row */}
                        <div 
                          onClick={() => {
                            const next = fontSize === 14 ? 16 : fontSize === 16 ? 12 : 14;
                            setFontSize(next);
                            showToast(`Font size: ${next}sp`);
                          }}
                          className="p-3.5 flex justify-between items-center cursor-pointer hover:bg-[#1c2035]"
                        >
                          <div className="flex items-center space-x-2.5 text-slate-300">
                            <Edit3 className="w-4 h-4" />
                            <span className="text-xs font-semibold text-white">Font Size</span>
                          </div>
                          <div className="flex items-center space-x-1 text-slate-400 text-xs">
                            <span>{fontSize}sp</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Syntax Highlighting */}
                        <div className="p-3.5 flex justify-between items-center">
                          <div className="flex items-center space-x-2.5 text-slate-300">
                            <Star className="w-4 h-4" />
                            <span className="text-xs font-semibold text-white">Syntax Highlighting</span>
                          </div>
                          <button 
                            onClick={() => setSyntaxHighlighting(!syntaxHighlighting)}
                            className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${syntaxHighlighting ? 'bg-blue-600' : 'bg-slate-700'}`}
                          >
                            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${syntaxHighlighting ? 'translate-x-4' : 'translate-x-0'}`} />
                          </button>
                        </div>

                        {/* Word Wrap */}
                        <div className="p-3.5 flex justify-between items-center">
                          <div className="flex items-center space-x-2.5 text-slate-300">
                            <List className="w-4 h-4" />
                            <span className="text-xs font-semibold text-white">Word Wrap</span>
                          </div>
                          <button 
                            onClick={() => setWordWrap(!wordWrap)}
                            className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${wordWrap ? 'bg-blue-600' : 'bg-slate-700'}`}
                          >
                            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${wordWrap ? 'translate-x-4' : 'translate-x-0'}`} />
                          </button>
                        </div>

                        {/* Line Numbers */}
                        <div className="p-3.5 flex justify-between items-center">
                          <div className="flex items-center space-x-2.5 text-slate-300">
                            <List className="w-4 h-4" />
                            <span className="text-xs font-semibold text-white">Line Numbers</span>
                          </div>
                          <button 
                            onClick={() => setLineNumbers(!lineNumbers)}
                            className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${lineNumbers ? 'bg-blue-600' : 'bg-slate-700'}`}
                          >
                            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${lineNumbers ? 'translate-x-4' : 'translate-x-0'}`} />
                          </button>
                        </div>

                        {/* Auto Save */}
                        <div className="p-3.5 flex justify-between items-center">
                          <div>
                            <div className="flex items-center space-x-2.5 text-slate-300">
                              <Check className="w-4 h-4" />
                              <span className="text-xs font-semibold text-white">Auto Save</span>
                            </div>
                            <p className="text-[9px] text-slate-400 mt-0.5 pl-6.5">Keep your files and open tabs after closing the app.</p>
                          </div>
                          <button 
                            onClick={() => setAutoSave(!autoSave)}
                            className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer shrink-0 ${autoSave ? 'bg-blue-600' : 'bg-slate-700'}`}
                          >
                            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${autoSave ? 'translate-x-4' : 'translate-x-0'}`} />
                          </button>
                        </div>

                      </div>
                    </div>

                    {/* Section: FONTS */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">FONTS</span>
                      <div className="bg-[#151829] border border-slate-800/80 p-3 rounded-2xl flex justify-between items-center">
                        <span className="text-xs font-bold text-white">{selectedFont}</span>
                        <Check className="w-4 h-4 text-blue-400" />
                      </div>
                    </div>

                  </div>
                )}

              </motion.div>
            )}

            {/* ========================================================= */}
            {/* VIEW 2: CODE EDITOR SCREEN (Screenshot 6)                  */}
            {/* ========================================================= */}
            {activeView === 'editor' && (
              <motion.div 
                key="editor-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col h-full bg-[#0c0e18]"
              >
                {/* Top App Bar with back button, tabs, preview / run action, overflow menu */}
                <div className="bg-[#151829] border-b border-slate-800 px-2 py-1.5 flex items-center justify-between shrink-0">
                  <div className="flex items-center space-x-1 overflow-hidden">
                    <button 
                      onClick={() => setActiveView('tabs')}
                      className="p-1 text-slate-400 hover:text-white cursor-pointer shrink-0"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>

                    {/* Tab pills */}
                    <div className="flex space-x-1 overflow-x-auto scrollbar-none max-w-[170px]">
                      {openTabs.map((tab, i) => {
                        const isCurrent = tab.name === currentFile.name;
                        return (
                          <div 
                            key={i}
                            onClick={() => setCurrentFile(tab)}
                            className={`flex items-center space-x-1 text-[10px] font-mono py-1 px-2 rounded-lg cursor-pointer shrink-0 ${
                              isCurrent ? 'bg-[#242b47] text-cyan-300 font-bold border border-cyan-500/30' : 'bg-[#10121f] text-slate-400'
                            }`}
                          >
                            <span className="truncate max-w-[80px]">{tab.name}</span>
                            <button 
                              onClick={(e) => closeTab(tab.name, e)}
                              className="text-slate-500 hover:text-white"
                            >
                              <X className="w-2.5 h-2.5" />
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <button 
                      onClick={() => {
                        const newF: MobileFile = {
                          name: `untitled_${Date.now().toString().slice(-4)}.js`,
                          language: 'javascript',
                          content: `// New script\nconsole.log("RunCoder v2.0");`,
                          recentlyOpened: true,
                          timeOpened: 'Just now'
                        };
                        setAllFiles([newF, ...allFiles]);
                        openFileInEditor(newF);
                      }}
                      className="p-1 text-slate-400 hover:text-white shrink-0"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center space-x-1.5 shrink-0">
                    {/* Preview (for Web files) or Run (for compiled languages) */}
                    {(currentFile.language === 'javascript' || currentFile.language === 'html' || currentFile.language === 'css') ? (
                      <button 
                        onClick={() => setActiveView('preview')}
                        className="flex items-center space-x-1 bg-cyan-600 hover:bg-cyan-500 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg active:scale-95 transition-all cursor-pointer shadow-sm"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Preview</span>
                      </button>
                    ) : (
                      <button 
                        onClick={handleExecute}
                        className="flex items-center space-x-1 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg active:scale-95 transition-all cursor-pointer shadow-sm"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Run</span>
                      </button>
                    )}

                    <button className="p-1 text-slate-400 hover:text-white">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Editor Text Area with Line Numbers */}
                <div className="flex-1 flex overflow-hidden relative text-left bg-[#0c0e18]">
                  
                  {/* Line numbers gutter */}
                  {lineNumbers && (
                    <div className="w-7 py-3 bg-[#0c0e18] border-r border-slate-800/40 text-slate-600 text-right pr-2 select-none font-mono text-[10px] leading-relaxed shrink-0">
                      {Array.from({ length: 35 }).map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                  )}

                  {/* Code text */}
                  <div className="flex-1 p-3 overflow-y-auto font-mono text-[11px] leading-relaxed text-slate-200">
                    <textarea 
                      value={currentFile.content}
                      onChange={(e) => {
                        const updated = { ...currentFile, content: e.target.value };
                        setCurrentFile(updated);
                        setOpenTabs(openTabs.map(t => t.name === currentFile.name ? updated : t));
                        setAllFiles(allFiles.map(f => f.name === currentFile.name ? updated : f));
                      }}
                      className="w-full h-full bg-transparent resize-none border-none outline-none text-slate-200 font-mono focus:ring-0"
                      spellCheck={false}
                    />
                  </div>

                  {/* Floating Terminal Pill on Bottom Right */}
                  <button 
                    onClick={() => setIsTerminalOpen(!isTerminalOpen)}
                    className="absolute bottom-10 right-3 bg-[#1e233d] hover:bg-[#252b4b] border border-slate-700 text-white text-[10px] font-bold py-1.5 px-3 rounded-full shadow-xl flex items-center space-x-1.5 cursor-pointer z-30"
                  >
                    <span>Terminal</span>
                    <span>▲</span>
                  </button>

                  {/* Slide-up Terminal Drawer */}
                  <AnimatePresence>
                    {isTerminalOpen && (
                      <motion.div 
                        initial={{ y: 150 }}
                        animate={{ y: 0 }}
                        exit={{ y: 150 }}
                        className="absolute bottom-8 left-0 right-0 h-44 bg-[#090b14] border-t border-slate-700 p-3 flex flex-col z-20 shadow-2xl"
                      >
                        <div className="flex justify-between items-center pb-1 border-b border-slate-800 text-[10px] text-slate-400">
                          <span className="font-bold text-emerald-400 flex items-center space-x-1">
                            <Terminal className="w-3 h-3" />
                            <span>Terminal Output</span>
                          </span>
                          <button onClick={() => setIsTerminalOpen(false)} className="text-slate-400 hover:text-white">
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="flex-1 overflow-y-auto font-mono text-[9px] text-slate-300 space-y-1 pt-1 text-left">
                          {consoleLogs.map((log, i) => (
                            <p key={i}>{log}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                {/* Status Bar */}
                <div className="bg-[#101322] border-t border-slate-800/60 px-3 py-1 text-[9px] text-slate-400 font-mono flex justify-between items-center select-none shrink-0">
                  <span>{currentFile.language.toUpperCase()} | UTF-8 | Ln 1, Col 1</span>
                  <span>{fontSize}sp</span>
                </div>

                {/* Bottom Symbol & Action Bar */}
                <div className="bg-[#151829] border-t border-slate-800 py-1.5 px-2 flex space-x-1 overflow-x-auto scrollbar-none select-none shrink-0">
                  <button 
                    onClick={() => showToast(`Saved ${currentFile.name}`)}
                    className="bg-[#1e233d] hover:bg-slate-700 text-slate-200 text-[10px] font-bold py-1 px-2.5 rounded-lg flex items-center space-x-1 shrink-0 cursor-pointer"
                  >
                    <Save className="w-3 h-3" />
                    <span>Save</span>
                  </button>
                  <button 
                    onClick={() => {
                      const newN = prompt('Enter new file name:', currentFile.name);
                      if (newN) {
                        const updated = { ...currentFile, name: newN };
                        setCurrentFile(updated);
                        setOpenTabs(openTabs.map(t => t.name === currentFile.name ? updated : t));
                        setAllFiles(allFiles.map(f => f.name === currentFile.name ? updated : f));
                      }
                    }}
                    className="bg-[#1e233d] hover:bg-slate-700 text-slate-200 text-[10px] font-bold py-1 px-2.5 rounded-lg flex items-center space-x-1 shrink-0 cursor-pointer"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Rename</span>
                  </button>
                  {['TAB', '{', '}', '(', ')', ';', '"', '\'', '=', '<', '>', '+', '-', '*', '/'].map((sym, i) => (
                    <button 
                      key={i}
                      onClick={() => {
                        const add = sym === 'TAB' ? '  ' : sym;
                        const updated = { ...currentFile, content: currentFile.content + add };
                        setCurrentFile(updated);
                      }}
                      className="bg-[#101322] hover:bg-slate-800 text-slate-300 text-[10px] font-mono font-bold py-1 px-2.5 rounded-lg shrink-0 cursor-pointer active:scale-95"
                    >
                      {sym}
                    </button>
                  ))}
                </div>

              </motion.div>
            )}

            {/* ========================================================= */}
            {/* VIEW 3: LIVE WEB PREVIEW / GAME (Screenshots 7 & 8)        */}
            {/* ========================================================= */}
            {activeView === 'preview' && (
              <motion.div 
                key="preview-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex-1 flex flex-col h-full bg-[#0c0e18]"
              >
                {/* Preview Top Header */}
                <div className="bg-[#151829] border-b border-slate-800 px-3 py-2 flex items-center justify-between shrink-0">
                  <div className="flex items-center space-x-2 overflow-hidden text-left">
                    <button 
                      onClick={() => setActiveView('editor')}
                      className="p-1 text-slate-400 hover:text-white cursor-pointer shrink-0"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div className="overflow-hidden">
                      <div className="text-[9px] text-slate-400">Previewing</div>
                      <div className="text-xs font-bold text-white truncate max-w-[180px]">{currentFile.name}</div>
                    </div>
                  </div>

                  <button 
                    onClick={() => showToast('Share link copied')}
                    className="p-1 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Dual Tab Switch: Preview vs Console */}
                <div className="flex bg-[#101322] border-b border-slate-800 shrink-0">
                  <button 
                    onClick={() => setPreviewTab('preview')}
                    className={`flex-1 py-2 text-xs font-bold cursor-pointer transition-colors relative ${
                      previewTab === 'preview' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <span>Preview</span>
                    {previewTab === 'preview' && (
                      <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-500 rounded-full" />
                    )}
                  </button>
                  <button 
                    onClick={() => setPreviewTab('console')}
                    className={`flex-1 py-2 text-xs font-bold cursor-pointer transition-colors relative ${
                      previewTab === 'console' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <span>Console</span>
                    {previewTab === 'console' && (
                      <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-500 rounded-full" />
                    )}
                  </button>
                </div>

                {/* Preview Content Area */}
                {previewTab === 'preview' ? (
                  currentFile.name.includes('Portfolio') || currentFile.language === 'html' && !currentFile.name.includes('Tic') ? (
                    
                    /* Screenshot 8: Live HTML Portfolio Web Page */
                    <div className="flex-1 bg-white text-slate-900 overflow-y-auto text-left flex flex-col">
                      <nav className="w-full px-4 py-3 flex justify-between items-center border-b border-slate-100">
                        <span className="font-extrabold text-base text-blue-600">Alex.dev</span>
                        <button className="bg-blue-600 text-white font-bold text-xs py-1.5 px-3.5 rounded-lg shadow-sm">Hire Me</button>
                      </nav>
                      <div className="flex-1 p-6 text-center space-y-4 flex flex-col justify-center max-w-xs mx-auto">
                        <h1 className="text-2xl font-black text-slate-900 leading-tight">Building digital products, brands, and experiences.</h1>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          A Senior Frontend Engineer specializing in building exceptional digital experiences with a focus on accessible, semantic, and performant user interfaces.
                        </p>
                        <div className="space-y-2 pt-2">
                          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-2.5 rounded-xl shadow-md cursor-pointer">
                            View My Work
                          </button>
                          <button className="w-full border-1.5 border-blue-600 text-blue-600 font-bold text-xs py-2.5 rounded-xl bg-transparent cursor-pointer">
                            Download Resume
                          </button>
                        </div>
                      </div>
                    </div>

                  ) : (

                    /* Screenshot 7: Interactive Tic Tac Toe Game */
                    <div className="flex-1 bg-[#101222] p-4 flex flex-col items-center justify-center text-center space-y-3 overflow-y-auto">
                      <h2 className="text-xl font-extrabold text-blue-400">Tic Tac Toe</h2>
                      
                      <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                        <select 
                          value={tttDifficulty}
                          onChange={(e) => setTttDifficulty(e.target.value)}
                          className="bg-[#1b1f38] border border-slate-700 text-slate-200 rounded-lg px-2 py-1 outline-none text-[10px]"
                        >
                          <option>Easy</option>
                          <option>Hard</option>
                        </select>
                        <span>Best of 5 Mode</span>
                      </div>

                      {/* Scoreboard */}
                      <div className="bg-[#1b1f38] border border-slate-800 rounded-2xl p-2.5 w-full max-w-[260px] flex justify-around text-center">
                        <div>
                          <div className="text-[9px] text-rose-400 font-bold">Player X</div>
                          <div className="text-base font-extrabold text-white">{tttScores.x}</div>
                        </div>
                        <div>
                          <div className="text-[9px] text-slate-400 font-bold">Draws</div>
                          <div className="text-base font-extrabold text-white">{tttScores.draws}</div>
                        </div>
                        <div>
                          <div className="text-[9px] text-blue-400 font-bold">Computer O</div>
                          <div className="text-base font-extrabold text-white">{tttScores.o}</div>
                        </div>
                      </div>

                      {/* Status indicator */}
                      <div className="text-xs font-bold text-white">
                        {tttWinner ? (
                          <span className="text-emerald-400">Winner: {tttWinner}!</span>
                        ) : (
                          <span className="text-slate-300">Your Turn (X)</span>
                        )}
                      </div>

                      {/* 3x3 Game Board with exact styling */}
                      <div className="grid grid-cols-3 gap-2 w-full max-w-[240px]">
                        {tttBoard.map((val, idx) => {
                          const isWinCell = (tttWinner === 'X' && (idx === 0 || idx === 4 || idx === 6)) || (tttWinner === val && val !== null);
                          return (
                            <button
                              key={idx}
                              onClick={() => handleTttClick(idx)}
                              className={`h-16 rounded-2xl text-2xl font-black transition-all flex items-center justify-center cursor-pointer ${
                                isWinCell 
                                  ? 'bg-[#86efac] text-slate-950 shadow-md' 
                                  : val === 'O'
                                  ? 'bg-[#232742] text-blue-400'
                                  : val === 'X'
                                  ? 'bg-[#232742] text-rose-400'
                                  : 'bg-[#181b30] hover:bg-[#202440] text-transparent'
                              }`}
                            >
                              {val}
                            </button>
                          );
                        })}
                      </div>

                      {/* Game Controls */}
                      <div className="flex space-x-2 pt-1">
                        <button 
                          onClick={resetTttGame}
                          className="bg-[#3b82f6] hover:bg-blue-500 text-white font-bold text-[10px] py-1.5 px-3 rounded-xl transition-all cursor-pointer"
                        >
                          Play Again
                        </button>
                        <button 
                          onClick={() => {
                            resetTttGame();
                            setTttScores({ x: 0, o: 0, draws: 0 });
                          }}
                          className="bg-[#1e233d] hover:bg-slate-700 text-slate-300 font-bold text-[10px] py-1.5 px-3 rounded-xl transition-all cursor-pointer"
                        >
                          Reset Scores
                        </button>
                      </div>

                      {/* AI checkbox */}
                      <label className="flex items-center space-x-1.5 text-[9px] text-slate-400 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={tttAgainstAI} 
                          onChange={() => setTttAgainstAI(!tttAgainstAI)}
                          className="rounded bg-slate-800 text-blue-500"
                        />
                        <span>Play against AI (Computer O)</span>
                      </label>
                    </div>

                  )
                ) : (
                  /* JavaScript Runtime Console */
                  <div className="flex-1 bg-[#090b14] p-3 text-left font-mono text-[9px] text-slate-300 space-y-1 overflow-y-auto">
                    <p className="text-slate-500">--- JavaScript Runtime Console ---</p>
                    <p className="text-emerald-400">[info] DOM parsed in 38ms.</p>
                    <p className="text-slate-300">[log] Tic Tac Toe Engine Loaded Successfully</p>
                    <p className="text-blue-400">[event] Touch listeners attached to 9 grid cells.</p>
                    <p className="text-slate-400">[status] Android WebView initialized on viewport 390x844.</p>
                    {tttWinner && <p className="text-amber-400 font-bold">[game] Match state updated: Winner is {tttWinner}</p>}
                  </div>
                )}

              </motion.div>
            )}

          </AnimatePresence>

          {/* ========================================================= */}
          {/* BOTTOM NAVIGATION BAR (5 Navigation Tabs)                  */}
          {/* ========================================================= */}
          {activeView === 'tabs' && (
            <div className="absolute bottom-0 left-0 right-0 bg-[#0c0e18] border-t border-slate-800/80 py-2 px-1 flex justify-around items-center z-40 shrink-0 select-none">
              {[
                { id: 'home', label: 'Home', icon: HomeIcon },
                { id: 'code', label: 'Code', icon: Edit3 },
                { id: 'templates', label: 'Templates', icon: Wrench },
                { id: 'files', label: 'Files', icon: List },
                { id: 'settings', label: 'Settings', icon: SettingsIcon },
              ].map((tab, idx) => {
                const IconComp = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button 
                    key={idx}
                    onClick={() => setActiveTab(tab.id as any)}
                    className="flex flex-col items-center space-y-1 relative cursor-pointer group px-2"
                  >
                    <div className="relative">
                      {isSelected && (
                        <motion.div 
                          layoutId="activeTabPill"
                          className="absolute inset-0 bg-[#1e2544] rounded-full -mx-3 -my-1 z-0"
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        />
                      )}
                      <IconComp className={`w-4 h-4 relative z-10 transition-colors ${isSelected ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                    </div>
                    <span className={`text-[9px] relative z-10 font-bold tracking-tight ${isSelected ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'}`}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

        </div>
      </div>

      {/* Floating hint pill */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-950/90 backdrop-blur-md text-[10px] text-blue-300 font-semibold py-1.5 px-4 rounded-full border border-blue-500/20 shadow-xl flex items-center space-x-1.5 animate-pulse select-none">
        <Smartphone className="w-3.5 h-3.5" />
        <span>Interact with all 5 Android tabs, Code Editor & Web Preview</span>
      </div>
    </div>
  );
}
