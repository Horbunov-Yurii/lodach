const courses = [
  {
    label: "html",
    imag: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
  },
  {
    label: "css",
    imag: "https://upload.wikimedia.org/wikipedia/commons/1/1f/CSS_icon.svg",
  },
  {
    label: "java",
    imag: "https://upload.wikimedia.org/wikipedia/uk/8/85/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_Java.png",
  },
  {
    label: "python",
    imag: "https://w7.pngwing.com/pngs/140/948/png-transparent-blue-and-yellow-logo-python-logo-programmer-fierce-python-s-cdr-angle-text-thumbnail.png",
  },
  {
    label: "react",
    imag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-RS3Oeb0xs2q4aJmYZ4FGWnFuPnn4yFNHg&s",
  },
  {
    label: "java-script",
    imag: "https://st.depositphotos.com/1796420/4113/v/450/depositphotos_41138921-stock-illustration-vector-icon-of-orange-javascript.jpg",
  },
  {
    label: "node-js",
    imag: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
  },
  {
    label: "scss",
    imag: "https://cdn-icons-png.flaticon.com/512/919/919831.png",
  },
  { label: "vite", imag: "https://sd.blackball.lv/data/covers/19550.png" },
  {
    label: "C#",
    imag: "https://images.icon-icons.com/2415/PNG/512/csharp_plain_logo_icon_146577.png",
  },
  {
    label: "C++",
    imag: "https://i.pinimg.com/1200x/c2/66/4d/c2664dcf18d2fd777aa954df6cd113a2.jpg",
  },
  {
    label: "SQL",
    imag: "https://cdn-icons-png.flaticon.com/512/2305/2305934.png",
  },
  {
    label: "PHP",
    imag: "https://cdn-icons-png.flaticon.com/512/919/919830.png",
  },
  {
    label: "Pascal",
    imag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeso30iC465eOgt3oTGral8-vQWZuQbqpeRA&s",
  },
  {
    label: "Scratch",
    imag: "https://play-lh.googleusercontent.com/b6DHq2zBrSoqNnhCODWIOUzt2jaytp3S7TfsdIgtUl9PEHQF7D0paCRe0FoFIdUyvR0",
  },
  {
    label: "Vue.js",
    imag: "https://images.icon-icons.com/2415/PNG/512/vuejs_original_wordmark_logo_icon_146305.png",
  },
  {
    label: "Redux",
    imag: "https://miro.medium.com/1*ZxmcaOzul181U6BT5z-Ipw.png",
  },
];

// Завдання

// Є масив даних courses, де кожен елемент має ключі label (назва курсу) та imag (посилання на картинку).

// 1. HTML-розмітка

// список:

// <ul class="list-js"></ul>


// інпут пошуку:

// <label class="label-js">Що шукаємо:
// <input id="qwe" type="text" class="input-js">
// </label>

// 2. Функція рендеру

// Написати функцію, яка приймає масив даних courses та створює розмітку для кожного елемента.
// Кожен елемент повинен відображати:

// назву курсу (label),

// зображення курсу (imag).

// Результат вставляється у список <ul class="list-js">.

// 3. Фільтрація

// Повісити обробник події input на поле вводу.
// При введенні тексту потрібно:

// відфільтрувати масив courses,

// залишити лише ті елементи, у яких значення label починається з введених літер,

// перерендерити список з відфільтрованими елементами.

// 4. Оптимізація

// Щоб уникнути зайвих викликів під час швидкого набору тексту:

// використати бібліотеку lodash та метод debounce або throttle для оптимізації роботи колбек-функції.
