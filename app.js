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
  {
    label: "TypeScript",
    imag: "https://blog.teamtreehouse.com/wp-content/uploads/2015/05/87a5a0fdc86455c3f94b0b0eebfdb1b9_400x400.png",
  },
  {
    label: "Angular",
    imag: "https://miro.medium.com/1*FKD2Uy_Q6r6AviZA2VD4RQ.png",
  },
  {
    label: "Next.js",
    imag: "https://habrastorage.org/webt/by/f9/qu/byf9qu-qkjvc3cpega2osikmrcq.png",
  },
  {
    label: "jQuery",
    imag: "https://play-lh.googleusercontent.com/LpgnH_rHqhJzlJ-uWhfMj3w87cu6iWV5m1hr6eos1wmdlqRiF0RsNE1RBmgtsPvyyBI",
  },
  {
    label: "Bootstrap",
    imag: "https://foni.papik.pro/uploads/posts/2024-09/foni-papik-pro-yzg3-p-kartinki-bootstrap-na-prozrachnom-fone-9.png",
  },
  {
    label: "Express.js",
    imag: "https://habrastorage.org/webt/bs/np/1r/bsnp1rphnfiib_l1tjzaauvcs48.jpeg",
  },
  {
    label: "Django",
    imag: "https://habrastorage.org/getpro/habr/upload_files/abf/be3/6be/abfbe36be43231a20c9e22ea056208a8.png",
  },
  {
    label: "Git",
    imag: "https://static.istories.media/uploaded/images/7762730e1a2a4c948ba90dbe7a365828-1920x960px_1x.jpg",
  },
  {
    label: "Webpack",
    imag: "https://victoriaweb.me/wp-content/uploads/webpack.jpg",
  },
  {
    label: "Babel",
    imag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMCEBx7_lmnK0LJ26Kn5lCYNF6Gd1oAWBZQ&s",
  },
  {
    label: "ESLint",
    imag: "https://cdn-images.threadless.com/~tms/eslint/products/1210898/shirt-1573783465-50ad2ccd45d44d2be0884fbef38ee41a.png?v=3&d=g6NvcHOWk6R0cmltksLCgJOmcmVzaXplkIOld2lkdGjLQI8gAAAAAACmaGVpZ2h0y0CPIAAAAAAAqGFsbG93X3VwwpOvY2FudmFzX2NlbnRlcmVkks0EsM0EsIGqYmFja2dyb3VuZKZmZmZmZmaTpnJlc2l6ZZHNAyCAk69jYW52YXNfY2VudGVyZWSTzQMgzQMgpyNmZmZmZmaAk6ZlbmNvZGWSpHdlYnBVgKVmb3JjZcKpb25seV9tZXRhwg==&f=mp",
  },
  {
    label: "Prettier",
    imag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5OrDa0PxQ37o380I1VC74RapffCFDjARwCw&s",
  },
  {
    label: "React Native",
    imag: "https://bobcares.com/wp-content/uploads/2024/02/react-native-1.png",
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
