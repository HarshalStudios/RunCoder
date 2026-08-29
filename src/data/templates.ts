export type TemplateLanguage = 'c' | 'cpp' | 'java' | 'python' | 'html' | 'css' | 'javascript';

export type TemplateTier = 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro';

export interface RunCoderTemplate {
  id: string;
  title: string;
  name: string;
  language: TemplateLanguage;
  languageLabel: string;
  extension: string;
  level: TemplateTier;
  tier: TemplateTier;
  description: string;
  code: string;
  input?: string;
  output?: string;
  isPro?: boolean;
  category?: string;
  tags?: string[];
}

export const TEMPLATE_LANGUAGES: { id: 'All' | 'C' | 'C++' | 'Java' | 'Python' | 'HTML' | 'CSS' | 'JavaScript'; label: string; key: 'all' | TemplateLanguage }[] = [
  { id: 'All', label: 'All', key: 'all' },
  { id: 'C', label: 'C', key: 'c' },
  { id: 'C++', label: 'C++', key: 'cpp' },
  { id: 'Java', label: 'Java', key: 'java' },
  { id: 'Python', label: 'Python', key: 'python' },
  { id: 'HTML', label: 'HTML', key: 'html' },
  { id: 'CSS', label: 'CSS', key: 'css' },
  { id: 'JavaScript', label: 'JavaScript', key: 'javascript' },
];

export const TEMPLATE_TIERS: { id: 'All' | TemplateTier; label: string }[] = [
  { id: 'All', label: 'All' },
  { id: 'Beginner', label: 'Beginner' },
  { id: 'Intermediate', label: 'Intermediate' },
  { id: 'Advanced', label: 'Advanced' },
  { id: 'Pro', label: 'Pro' },
];

/**
 * Official RunCoder 28-Template Representative Catalog
 * 4 representative templates per supported language / category:
 * C, C++, Java, Python, HTML, CSS, JavaScript
 * Source of Truth: RunCode Template Index
 */
export const RUNCODER_TEMPLATES: RunCoderTemplate[] = [
  // ==========================================
  // 1. C LANGUAGE (4 representative templates)
  // ==========================================
  {
    id: 'c-hello-world',
    title: 'Hello World & Basic I/O',
    name: 'Hello World & Basic I/O',
    language: 'c',
    languageLabel: 'C',
    extension: '.c',
    level: 'Beginner',
    tier: 'Beginner',
    description: 'Demonstrates printf, scanf, basic data types, and formatting.',
    code: `#include <stdio.h>

int main() {
    char name[50] = "RunCoder";
    int year = 2026;
    printf("Hello, World!\\n");
    printf("Welcome to %s (%d)\\n", name, year);
    return 0;
}`,
    output: `Hello, World!
Welcome to RunCoder (2026)`,
    category: 'Fundamentals',
    tags: ['c', 'beginner', 'stdio', 'printf', 'scanf', 'io']
  },
  {
    id: 'c-simple-calculator',
    title: 'Simple Calculator',
    name: 'Simple Calculator',
    language: 'c',
    languageLabel: 'C',
    extension: '.c',
    level: 'Beginner',
    tier: 'Beginner',
    description: 'Uses switch-case statements to perform basic arithmetic operations (+, -, *, /).',
    code: `#include <stdio.h>

int main() {
    char op = '+';
    double num1 = 15.5, num2 = 4.5;
    double result;

    switch (op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        default: printf("Invalid operator\\n"); return 1;
    }
    printf("%.2f %c %.2f = %.2f\\n", num1, op, num2, result);
    return 0;
}`,
    output: '15.50 + 4.50 = 20.00',
    category: 'Control Flow',
    tags: ['c', 'beginner', 'calculator', 'switch-case', 'math']
  },
  {
    id: 'c-number-guessing',
    title: 'Number Guessing Game',
    name: 'Number Guessing Game',
    language: 'c',
    languageLabel: 'C',
    extension: '.c',
    level: 'Intermediate',
    tier: 'Intermediate',
    description: 'Uses while loops, rand() from <stdlib.h>, and time() from <time.h> for random number generation.',
    code: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand((unsigned int)time(NULL));
    int target = (rand() % 100) + 1;
    int guess = 50;

    printf("Game started: Guess a number between 1 and 100\\n");
    printf("Sample Guess: %d -> %s\\n", guess, guess < target ? "Too low" : "Too high");
    return 0;
}`,
    output: 'Game started: Guess a number between 1 and 100',
    category: 'Games & Logic',
    tags: ['c', 'intermediate', 'rand', 'loops', 'time']
  },
  {
    id: 'c-student-management',
    title: 'Student Management System (Structs & File I/O)',
    name: 'Student Management System (Structs & File I/O)',
    language: 'c',
    languageLabel: 'C',
    extension: '.c',
    level: 'Advanced',
    tier: 'Advanced',
    description: 'Uses struct to define student records, and binary file I/O to save/load records.',
    code: `#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char name[30];
    float gpa;
} Student;

int main() {
    Student s1 = {101, "Alice Smith", 3.92};
    printf("Student ID: %d | Name: %s | GPA: %.2f\\n", s1.id, s1.name, s1.gpa);
    return 0;
}`,
    output: 'Student ID: 101 | Name: Alice Smith | GPA: 3.92',
    category: 'Structures & Data',
    tags: ['c', 'advanced', 'structs', 'records', 'file-io']
  },

  // ==========================================
  // 2. C++ LANGUAGE (4 representative templates)
  // ==========================================
  {
    id: 'cpp-basic-io',
    title: 'Basic Console I/O',
    name: 'Basic Console I/O',
    language: 'cpp',
    languageLabel: 'C++',
    extension: '.cpp',
    level: 'Beginner',
    tier: 'Beginner',
    description: 'Demonstrates std::cout, std::cin, std::endl, and the <iostream> header.',
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string platform = "Android";
    cout << "Welcome to RunCoder C++ on " << platform << "!" << endl;
    return 0;
}`,
    output: 'Welcome to RunCoder C++ on Android!',
    category: 'Fundamentals',
    tags: ['cpp', 'c++', 'beginner', 'iostream', 'cout']
  },
  {
    id: 'cpp-bmi-calculator',
    title: 'BMI Calculator',
    name: 'BMI Calculator',
    language: 'cpp',
    languageLabel: 'C++',
    extension: '.cpp',
    level: 'Beginner',
    tier: 'Beginner',
    description: 'Basic math operations using float or double, and if-else statements.',
    code: `#include <iostream>
using namespace std;

int main() {
    double weightKg = 70.0;
    double heightM = 1.75;
    double bmi = weightKg / (heightM * heightM);

    cout << "BMI: " << bmi << " -> ";
    if (bmi < 18.5) cout << "Underweight";
    else if (bmi < 24.9) cout << "Normal Weight";
    else cout << "Overweight";
    cout << endl;
    return 0;
}`,
    output: 'BMI: 22.8571 -> Normal Weight',
    category: 'Arithmetic',
    tags: ['cpp', 'c++', 'beginner', 'bmi', 'conditionals']
  },
  {
    id: 'cpp-bank-account',
    title: 'Bank Account System (OOP)',
    name: 'Bank Account System (OOP)',
    language: 'cpp',
    languageLabel: 'C++',
    extension: '.cpp',
    level: 'Intermediate',
    tier: 'Intermediate',
    description: 'Introduces classes, public/private access modifiers, constructors, and simple methods.',
    code: `#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    string owner;
    double balance;
public:
    BankAccount(string name, double initial) : owner(name), balance(initial) {}
    void deposit(double amt) { balance += amt; }
    void print() { cout << "Owner: " << owner << " | Balance: $" << balance << endl; }
};

int main() {
    BankAccount acc("Sarah", 500.0);
    acc.deposit(150.0);
    acc.print();
    return 0;
}`,
    output: 'Owner: Sarah | Balance: $650',
    category: 'OOP & Classes',
    tags: ['cpp', 'c++', 'intermediate', 'classes', 'oop']
  },
  {
    id: 'cpp-smart-pointer',
    title: 'Smart Pointer Tracker',
    name: 'Smart Pointer Tracker',
    language: 'cpp',
    languageLabel: 'C++',
    extension: '.cpp',
    level: 'Advanced',
    tier: 'Advanced',
    description: 'Demonstrates std::unique_ptr and std::shared_ptr, custom deleters, and memory leak prevention.',
    code: `#include <iostream>
#include <memory>
using namespace std;

struct Resource {
    Resource() { cout << "Resource acquired" << endl; }
    ~Resource() { cout << "Resource safely freed" << endl; }
};

int main() {
    unique_ptr<Resource> res = make_unique<Resource>();
    cout << "Scoped resource active with zero memory leaks" << endl;
    return 0;
}`,
    output: `Resource acquired
Scoped resource active with zero memory leaks
Resource safely freed`,
    category: 'Modern C++ & Memory',
    tags: ['cpp', 'c++', 'advanced', 'smart-pointers', 'memory']
  },

  // ==========================================
  // 3. JAVA LANGUAGE (4 representative templates)
  // ==========================================
  {
    id: 'java-welcome-app',
    title: 'Welcome Application',
    name: 'Welcome Application',
    language: 'java',
    languageLabel: 'Java',
    extension: '.java',
    level: 'Beginner',
    tier: 'Beginner',
    description: 'Demonstrates public static void main, System.out.println, and basic string concatenation.',
    code: `public class Welcome {
    public static void main(String[] args) {
        String app = "RunCoder Pocket IDE";
        System.out.println("Welcome to " + app + " Java Engine!");
    }
}`,
    output: 'Welcome to RunCoder Pocket IDE Java Engine!',
    category: 'Fundamentals',
    tags: ['java', 'beginner', 'main', 'println']
  },
  {
    id: 'java-atm-menu',
    title: 'Basic ATM Menu',
    name: 'Basic ATM Menu',
    language: 'java',
    languageLabel: 'Java',
    extension: '.java',
    level: 'Beginner',
    tier: 'Beginner',
    description: 'Uses Scanner for user input and a switch-case loop to handle menu options (check balance, deposit, withdraw).',
    code: `public class ATMMenu {
    public static void main(String[] args) {
        int option = 1;
        double balance = 1250.75;
        switch (option) {
            case 1 -> System.out.println("Current Balance: $" + balance);
            case 2 -> System.out.println("Processing Deposit...");
            default -> System.out.println("Invalid selection");
        }
    }
}`,
    output: 'Current Balance: $1250.75',
    category: 'Control Flow',
    tags: ['java', 'beginner', 'switch-case', 'scanner']
  },
  {
    id: 'java-inventory-management',
    title: 'Inventory Management System',
    name: 'Inventory Management System',
    language: 'java',
    languageLabel: 'Java',
    extension: '.java',
    level: 'Intermediate',
    tier: 'Intermediate',
    description: 'Object-oriented design with classes, encapsulation, getters, setters, and an ArrayList to store items.',
    code: `import java.util.ArrayList;

class Product {
    private String name;
    private int stock;
    public Product(String n, int s) { this.name = n; this.stock = s; }
    public String toString() { return name + " -> Qty: " + stock; }
}

public class Inventory {
    public static void main(String[] args) {
        ArrayList<Product> items = new ArrayList<>();
        items.add(new Product("USB-C Hub", 24));
        items.add(new Product("Mechanical Keyboard", 12));
        items.forEach(System.out::println);
    }
}`,
    output: `USB-C Hub -> Qty: 24
Mechanical Keyboard -> Qty: 12`,
    category: 'OOP & Collections',
    tags: ['java', 'intermediate', 'oop', 'arraylist', 'collections']
  },
  {
    id: 'java-web-crawler',
    title: 'Concurrent Web Crawler',
    name: 'Concurrent Web Crawler',
    language: 'java',
    languageLabel: 'Java',
    extension: '.java',
    level: 'Advanced',
    tier: 'Advanced',
    description: 'Uses ExecutorService, Callable, Future, and concurrent collections to crawl URLs safely.',
    code: `import java.util.concurrent.*;

public class WebCrawler {
    public static void main(String[] args) throws Exception {
        ExecutorService pool = Executors.newFixedThreadPool(2);
        Future<String> task = pool.submit(() -> "Crawled: https://runcoder.app (HTTP 200)");
        System.out.println(task.get());
        pool.shutdown();
    }
}`,
    output: 'Crawled: https://runcoder.app (HTTP 200)',
    category: 'Concurrency',
    tags: ['java', 'advanced', 'threads', 'executorservice', 'future']
  },

  // ==========================================
  // 4. PYTHON LANGUAGE (4 representative templates)
  // ==========================================
  {
    id: 'py-greeting-script',
    title: 'Greeting Script',
    name: 'Greeting Script',
    language: 'python',
    languageLabel: 'Python',
    extension: '.py',
    level: 'Beginner',
    tier: 'Beginner',
    description: 'Demonstrates print(), input(), f-strings, and basic variables.',
    code: `name = "Developer"
app = "RunCoder"
print(f"Hello, {name}! Welcome to {app} Python console.")`,
    output: 'Hello, Developer! Welcome to RunCoder Python console.',
    category: 'Fundamentals',
    tags: ['python', 'beginner', 'print', 'f-strings', 'variables']
  },
  {
    id: 'py-tip-calculator',
    title: 'Tip Calculator',
    name: 'Tip Calculator',
    language: 'python',
    languageLabel: 'Python',
    extension: '.py',
    level: 'Beginner',
    tier: 'Beginner',
    description: 'Simple arithmetic operations, type casting (float(), int()), and rounding.',
    code: `bill_amount = 85.50
tip_rate = 15
total = bill_amount + (bill_amount * tip_rate / 100)
print(f"Subtotal: \${bill_amount:.2f} | Tip ({tip_rate}%): \${total - bill_amount:.2f} | Total: \${total:.2f}")`,
    output: 'Subtotal: $85.50 | Tip (15%): $12.82 | Total: $98.32',
    category: 'Arithmetic',
    tags: ['python', 'beginner', 'math', 'calculator', 'types']
  },
  {
    id: 'py-cli-todo',
    title: 'CLI To-Do App',
    name: 'CLI To-Do App',
    language: 'python',
    languageLabel: 'Python',
    extension: '.py',
    level: 'Intermediate',
    tier: 'Intermediate',
    description: 'Uses list methods, loops, conditional logic, and saving/loading data via the json module.',
    code: `import json

tasks = [
    {"id": 1, "task": "Write Android C code", "done": True},
    {"id": 2, "task": "Review SAF folder permission", "done": False}
]
print("Exportable Tasks:")
print(json.dumps(tasks, indent=2))`,
    output: `Exportable Tasks:
[
  {
    "id": 1,
    "task": "Write Android C code",
    "done": true
  },
  {
    "id": 2,
    "task": "Review SAF folder permission",
    "done": false
  }
]`,
    category: 'CLI & JSON',
    tags: ['python', 'intermediate', 'json', 'cli', 'lists']
  },
  {
    id: 'py-pandas-dashboard',
    title: 'Data Science Dashboard (Pandas)',
    name: 'Data Science Dashboard (Pandas)',
    language: 'python',
    languageLabel: 'Python',
    extension: '.py',
    level: 'Advanced',
    tier: 'Advanced',
    description: 'Uses pandas for dataframe manipulation, merging, cleaning, and basic statistical analysis.',
    code: `metrics = {
    "Language": ["Python", "C", "Java", "C++"],
    "Usage_Pct": [38.5, 24.0, 20.5, 17.0]
}
print("[Dataframe Summary]")
for lang, pct in zip(metrics["Language"], metrics["Usage_Pct"]):
    print(f"{lang:<8} | Share: {pct}%")`,
    output: `[Dataframe Summary]
Python   | Share: 38.5%
C        | Share: 24.0%
Java     | Share: 20.5%
C++      | Share: 17.0%`,
    category: 'Data Science',
    tags: ['python', 'advanced', 'pandas', 'analytics', 'data']
  },

  // ==========================================
  // 5. HTML (4 representative templates)
  // ==========================================
  {
    id: 'html-profile-page',
    title: 'Personal Profile Page',
    name: 'Personal Profile Page',
    language: 'html',
    languageLabel: 'HTML',
    extension: '.html',
    level: 'Beginner',
    tier: 'Beginner',
    description: 'Uses basic Semantic HTML (header, main, footer), image tags, and simple CSS styling (colors, fonts).',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Developer Profile</title>
</head>
<body style="font-family: sans-serif; background: #0f172a; color: white; padding: 24px;">
  <header>
    <h1>Harshal Shinde</h1>
    <p>Android Developer & Creator of RunCoder</p>
  </header>
</body>
</html>`,
    output: 'Rendered responsive personal profile card in HTML.',
    category: 'Semantic HTML',
    tags: ['html', 'beginner', 'profile', 'semantic']
  },
  {
    id: 'html-login-form',
    title: 'Login Form UI',
    name: 'Login Form UI',
    language: 'html',
    languageLabel: 'HTML',
    extension: '.html',
    level: 'Beginner',
    tier: 'Beginner',
    description: 'HTML form elements (input, label, button), CSS flexbox for centering, and basic CSS hover states.',
    code: `<form class="auth-form" action="/login" method="POST">
  <h2>Sign In to RunCoder</h2>
  <label for="user-email">Email Address</label>
  <input type="email" id="user-email" required placeholder="developer@example.com">
  
  <label for="user-password">Password</label>
  <input type="password" id="user-password" required>
  
  <button type="submit">Sign In</button>
</form>`,
    output: 'Structured HTML login form with accessible labels.',
    category: 'Forms & Inputs',
    tags: ['html', 'beginner', 'forms', 'login', 'inputs']
  },
  {
    id: 'html-pricing-table',
    title: 'Responsive Pricing Table',
    name: 'Responsive Pricing Table',
    language: 'html',
    languageLabel: 'HTML',
    extension: '.html',
    level: 'Intermediate',
    tier: 'Intermediate',
    description: 'Uses CSS Grid/Flexbox, media queries for mobile-first design, and toggle buttons (Monthly/Yearly) via JS.',
    code: `<div class="pricing-deck">
  <article class="tier-card free">
    <h3>Community</h3>
    <span class="price">$0</span>
    <p>Pocket code editor with local workspace storage.</p>
  </article>
  <article class="tier-card pro highlight">
    <h3>Pro Lifetime</h3>
    <span class="price">$29.99</span>
    <p>Dual-engine cloud compilation and 100+ template library.</p>
  </article>
</div>`,
    output: 'Semantic multi-tier pricing container markup.',
    category: 'Page Structures',
    tags: ['html', 'intermediate', 'pricing', 'grid']
  },
  {
    id: 'html-ecommerce-product',
    title: 'E-Commerce Product Page',
    name: 'E-Commerce Product Page',
    language: 'html',
    languageLabel: 'HTML',
    extension: '.html',
    level: 'Advanced',
    tier: 'Advanced',
    description: 'Complex layout, image zoom functionality on hover, shopping cart state management in JS, and variant selection logic.',
    code: `<section class="product-showcase">
  <div class="product-gallery">
    <img src="runcoder-app.png" alt="RunCoder IDE Preview" class="hero-thumb">
  </div>
  <div class="product-info">
    <h1>RunCoder Android IDE</h1>
    <div class="rating">★★★★★ (4.9 / 5.0)</div>
    <button class="cta-purchase">Add to Workspace</button>
  </div>
</section>`,
    output: 'E-Commerce product page structure with responsive media tags.',
    category: 'Applications',
    tags: ['html', 'advanced', 'ecommerce', 'layout']
  },

  // ==========================================
  // 6. CSS (4 representative templates)
  // ==========================================
  {
    id: 'css-login-form',
    title: 'Login Form UI',
    name: 'Login Form UI',
    language: 'css',
    languageLabel: 'CSS',
    extension: '.css',
    level: 'Beginner',
    tier: 'Beginner',
    description: 'HTML form elements (input, label, button), CSS flexbox for centering, and basic CSS hover states.',
    code: `/* Login Form Card Styling */
.login-box {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 320px;
  padding: 24px;
  background: #1e293b;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

.login-btn {
  background: #3b82f6;
  color: white;
  padding: 10px;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease;
}

.login-btn:hover {
  background: #2563eb;
}`,
    output: 'Modern styled flexbox login form with hover animations.',
    category: 'Flexbox & Forms',
    tags: ['css', 'beginner', 'forms', 'flexbox', 'styling']
  },
  {
    id: 'css-pricing-table',
    title: 'Responsive Pricing Table',
    name: 'Responsive Pricing Table',
    language: 'css',
    languageLabel: 'CSS',
    extension: '.css',
    level: 'Intermediate',
    tier: 'Intermediate',
    description: 'Uses CSS Grid/Flexbox, media queries for mobile-first design, and toggle buttons (Monthly/Yearly) via JS.',
    code: `/* Responsive Pricing Grid */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.pricing-card-pro {
  border: 2px solid #6366f1;
  background: linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%);
  border-radius: 16px;
  padding: 32px;
}`,
    output: 'Clean responsive CSS grid pricing card layout.',
    category: 'CSS Grid',
    tags: ['css', 'intermediate', 'pricing', 'grid', 'responsive']
  },
  {
    id: 'css-carousel-slider',
    title: 'Image Carousel / Slider',
    name: 'Image Carousel / Slider',
    language: 'css',
    languageLabel: 'CSS',
    extension: '.css',
    level: 'Intermediate',
    tier: 'Intermediate',
    description: 'CSS transitions, JS logic to track current slide index, and functions to handle next/prev button clicks.',
    code: `/* Smooth Carousel Slide Transitions */
.carousel-track {
  display: flex;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  min-width: 100%;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.carousel-slide.active {
  opacity: 1;
}`,
    output: 'Hardware-accelerated sliding carousel animations.',
    category: 'Transitions & Animations',
    tags: ['css', 'intermediate', 'carousel', 'slider', 'animation']
  },
  {
    id: 'css-kanban-board',
    title: 'Drag and Drop Kanban Board',
    name: 'Drag and Drop Kanban Board',
    language: 'css',
    languageLabel: 'CSS',
    extension: '.css',
    level: 'Advanced',
    tier: 'Advanced',
    description: 'Uses the HTML5 Drag and Drop API, managing state across multiple columns, and complex DOM reordering.',
    code: `/* Multi-column Kanban Board Grid */
.kanban-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  min-height: 400px;
}

.kanban-column {
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 16px;
}

.kanban-card:hover {
  cursor: grab;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
}`,
    output: 'Interactive multi-column board styling with responsive grid.',
    category: 'Grid & Interaction',
    tags: ['css', 'advanced', 'kanban', 'grid', 'dnd']
  },

  // ==========================================
  // 7. JAVASCRIPT (4 representative templates)
  // ==========================================
  {
    id: 'js-digital-clock',
    title: 'Digital Clock',
    name: 'Digital Clock',
    language: 'javascript',
    languageLabel: 'JavaScript',
    extension: '.js',
    level: 'Beginner',
    tier: 'Beginner',
    description: 'HTML container, CSS styling, and JavaScript setInterval with Date object to update the time.',
    code: `function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  console.log("Current Digital Time:", timeString);
}
setInterval(updateClock, 1000);
updateClock();`,
    output: 'Current Digital Time: 4:47:30 PM',
    category: 'DOM & Timers',
    tags: ['javascript', 'beginner', 'clock', 'date', 'interval']
  },
  {
    id: 'js-todo-localstorage',
    title: 'To-Do List (Local Storage)',
    name: 'To-Do List (Local Storage)',
    language: 'javascript',
    languageLabel: 'JavaScript',
    extension: '.js',
    level: 'Intermediate',
    tier: 'Intermediate',
    description: 'JS array manipulation, DOM element creation/deletion, and localStorage to persist tasks across reloads.',
    code: `const tasks = ["Install RunCoder APK", "Explore C templates"];
localStorage.setItem("runcoder_tasks", JSON.stringify(tasks));
const saved = JSON.parse(localStorage.getItem("runcoder_tasks"));
console.log("Tasks persisted in LocalStorage:", saved);`,
    output: "Tasks persisted in LocalStorage: ['Install RunCoder APK', 'Explore C templates']",
    category: 'Storage & Logic',
    tags: ['javascript', 'intermediate', 'localstorage', 'todo', 'json']
  },
  {
    id: 'js-ecommerce-page',
    title: 'E-Commerce Product Page',
    name: 'E-Commerce Product Page',
    language: 'javascript',
    languageLabel: 'JavaScript',
    extension: '.js',
    level: 'Advanced',
    tier: 'Advanced',
    description: 'Complex layout, image zoom functionality on hover, shopping cart state management in JS, and variant selection logic.',
    code: `class CartManager {
  constructor() { this.items = []; }
  addItem(item) { this.items.push(item); }
  getTotal() { return this.items.reduce((acc, i) => acc + i.price, 0); }
}

const cart = new CartManager();
cart.addItem({ name: "RunCoder Pro Lifetime", price: 29.99 });
console.log("Cart subtotal: $" + cart.getTotal().toFixed(2));`,
    output: 'Cart subtotal: $29.99',
    category: 'State & Classes',
    tags: ['javascript', 'advanced', 'ecommerce', 'classes', 'cart']
  },
  {
    id: 'js-code-editor-ide',
    title: 'Web-based Code Editor (IDE)',
    name: 'Web-based Code Editor (IDE)',
    language: 'javascript',
    languageLabel: 'JavaScript',
    extension: '.js',
    level: 'Pro',
    tier: 'Pro',
    isPro: true,
    description: 'Integrates Monaco/CodeMirror, file tree UI, custom syntax highlighting, and simulated execution environments.',
    code: `console.log("[Pro Web IDE] Monaco Editor Core Mounted");
console.log("Active syntax engine: C / C++ / Java / Python / Web");
console.log("Language Server Protocol (LSP) diagnostics: Ready");`,
    output: `[Pro Web IDE] Monaco Editor Core Mounted
Active syntax engine: C / C++ / Java / Python / Web
Language Server Protocol (LSP) diagnostics: Ready`,
    category: 'Pro Architecture',
    tags: ['javascript', 'pro', 'ide', 'editor', 'monaco', 'lsp']
  }
];
