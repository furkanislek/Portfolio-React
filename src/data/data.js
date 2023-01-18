let resumeData = {
  tr: {
    karanlıkMode: "Karanlık Mod",
    kisiselBilgiler: "Kişisel Bilgiler",
    skillsTitle: "Program Bilgisi",
    projectsTitle: "Projeler",
    aboutTitle: "Hakkımda",
    email: "E-Posta",
    welcome: "Selam",
    kisiselBilgilerIcerik: [
      { title: "Doğum Tarihi", data: "01.11.1998" },
      { title: "İkamet Şehri", data: "Gaziantep" },
      {
        title: "Eğitim Durumu",
        data: "Çukurova Ünv. İnşaat Mühendisliği, 2020",
      },
      { title: "Tercih Ettiği Rol", data: "Frontend, FullStack" },
    ],
    profileArticle: {
      title: "Hakkımda",
      data: `Merhaba ben Furkan. Henüz 10 yaşında iken ilk websitemi "tr.gg" ve "blogspot" kullanarak tasarladım. Wordpress site geliştirme, SEO uyumlu makale yazma işleri yaptım.  Kendimi bu alanda ilerletmek istediğim için bu konu hakkında eğitimlere katıldım, projeler yaptım ve yapmaya devam ediyorum. Boş zamanlarımda yeni projelere başlamayı, algoritma soruları çözmeyi seviyorum. `,
    },
    imagebaseurl: "https://iili.io/HYvpdMX.png",
    name: "Furkan Akif ISLEK",
    role: "Frontend Developer",
    linkedinId: "https://www.linkedin.com/in/furkanislek/",
    githubUrl: "http://github.com/furkanislek",
    roleDescription:
      "Merhaba, ben Furkan. Frontend Developer olarak çalışıyorum. Mükemmel kullanıcı deneyimleriyle, sağlam ve ölçeklenebilir frontend yazılımları oluşturacak bir yazılımcı arıyorsanız birlikte çalışabiliriz.",
    socialLinks: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/furkanislek/",
        className: "fa fa-linkedin",
      },
      {
        name: "github",
        url: "http://github.com/furkanislek",
        className: "fa fa-github",
      },
      {
        name: "twitter",
        url: "http://twitter.com/furukderki",
        className: "fa fa-twitter",
      },
    ],

    skills: [
      {
        skillname: "JavaScript",
        skillurl: "https://www.sistemkod.com/images/blog/javascriptlogo.png",
      },
      {
        skillname: "ReactJs",
        skillurl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      },
      {
        skillname: "Redux",
        skillurl:
          "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      },
      {
        skillname: "CSS",
        skillurl:
          "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      },

      {
        skillname: "Bootstrap",
        skillurl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
      },
      {
        skillname: "Cypress",
        skillurl: "https://iili.io/HYviEMv.png",
      },
    ],
    portfolio: [
      {
        name: "React Credit Calculate",
        description:
          "React Kredi Hesaplama uygulaması. Bu projede ReactJs kullanılarak kredi tutarı, taksit sayısı, aylık faiz oranı ve taksit aralığına göre aylık taksit tutarı ve toplam geri ödeme tutarı belirlenebilmektedir. ",
        tags: ["reactjs", "javascript"],
        imgurl:
          "https://user-images.githubusercontent.com/76527169/190879487-948d6e29-1e1d-4658-9106-8659ed414c3f.png",
        githubUrl: "https://github.com/furkanislek/Fimple-Credit-Calculate",
        projectUrl: "https://furkancreditcalculate.web.app/",
        site: "Demo Site",
      },
      {
        name: "Tic Tac Toe",
        description:
          "Tic-Tac-Toe yani XOX oyunu. Bu oyunu sadece javascipt kullanarak yapıldı. Bu oyun sayesinde React Practicum'una katılma şansı yakaladım. Eğlenceli bir vakit geçirmek için oyunu deneyebilirsiniz.",
        tags: ["javascript", "game", "tic-tac-toe"],
        imgurl:
          "https://user-images.githubusercontent.com/76527169/192136695-376d1b2f-9427-4d80-a63a-de3d0559b5ae.png",
        githubUrl: "https://github.com/furkanislek/Tic-Tac-Toe",
        projectUrl: "https://furkanislek.github.io/Tic-Tac-Toe/",
        site: "Demo Site",
      },
      {
        name: "Hafıza Kartları Oyunu",
        description:
          "Hafıza oyunu oynayarak açlığınızı gidermek isterseniz, bu oyunu kesinlikle oynamalısınız. ReactJs kullanarak yapılan bu oyunda aynı tür yemekleri bulduğunuzda oyunu kazanmış sayılıyorsunuz.",
        tags: ["react", "javascript", "game", "memorycard"],
        imgurl:
          "https://user-images.githubusercontent.com/76527169/193851383-942a7edd-13a7-4a04-99a3-b062fe868492.png",
        githubUrl: "https://github.com/furkanislek/Memory-Card",
        projectUrl: "https://mellow-valkyrie-2bc7de.netlify.app/",
        site: "Demo Site",
      },
      {
        name: "Pizza Form",
        description:
          "React kullanarak yaptığım bu projede form yapısı üzerinde yoğunlaştım. Sipariş oluşturulan malzeme bilgileri api'ye yollanmaktadır. Projede link yönlendirmeleri için 'React-Router-Dom' kullanıldı.",
        tags: ["react", "form", "router"],
        imgurl:
          "https://user-images.githubusercontent.com/76527169/213245928-23da2729-40d4-4cce-b09e-c95412a27db0.png",
        githubUrl: "https://github.com/furkanislek/FSWeb-S7-Challenge",
        projectUrl: "https://pizza-form.vercel.app/",
        site: "Demo Site",
      },
      {
        name: "Async Redux Hobiler",
        description:
          "Async Redux kullanarak can sıkıntınızı giderebilecek hobiler sunan ufak bir web uygulaması. Bored Api'den çekilen veriler redux state management yöntemi ile kaydedilebiliyor, beğenilebiliyor.",
        tags: ["react", "redux", "axios"],
        imgurl:
          "https://user-images.githubusercontent.com/76527169/213257771-6a817a53-c94f-4037-bfaf-76c28adecb2e.png",
        githubUrl: "https://github.com/furkanislek/Memory-Card",
        projectUrl:
          "https://www.awesomescreenshot.com/video/13687216?key=7949e82e99b77106c941734324e8953c",
        site: "Demo Site",
      },
      {
        name: "Quiz Uygulaması",
        description:
          "React ile yapılan bu projede sırasıyla soruları cevaplayabilir, test bitiminde doğru sayınızı görebilirsiniz. İstediğiniz kadar soru ekleyip çıkarabilirsiniz.",
        tags: ["react", "quiz", "quizapp"],
        imgurl:
          "https://user-images.githubusercontent.com/76527169/212535326-7a9122a0-979a-44e3-b47f-8aa26674954e.png",
        githubUrl: "https://github.com/furkanislek/Quiz-App/",
        projectUrl: "https://quiz-app-liart-alpha.vercel.app/",
        site: "Demo Site",
      },
    ],
    footer: {
      title: "Bana Mesaj Yolla",
      description:
        "Bir sonraki projeniz için benimle iletişime geçebilirsiniz.",
      githubUrl: "https://github.com/furkanislek",
      linkedinUrl: "https://www.linkedin.com/in/furkanislek/",
      youtube: "https://www.youtube.com/channel/UCUlJmYsaZ0d8enTA_ZRTKtw",
    },
    navbar: {
      profile: "Profil",
      skills: "Program Bilgisi",
      about: "Hakkımda",
      projects: "Projeler",
      contact: "İletişim",
    },
  },
  en: {
    karanlıkMode: "Karanlık Mod",
    kisiselBilgiler: "Personal Information",
    skillsTitle: "Skills",
    aboutTitle: "About Me",
    email: "Email",
    projectsTitle: "Projects",
    welcome: "Hi",
    kisiselBilgilerIcerik: [
      { title: "Birthday", data: "11.01.1998" },
      { title: "City", data: "Gaziantep" },
      {
        title: "Education",
        data: "Cukurova Unıversity Civil Engineering, 2020",
      },
      { title: "Role", data: "Frontend, FullStack" },
    ],
    profileArticle: {
      title: "My About",
      data: `Hello, my name is Furkan. I first designed my website using "tr.gg" and "blogspot" when I was only 10 years old. I have experience in developing Wordpress sites and writing SEO-friendly articles. I have participated in training and worked on projects to improve myself in this field, and I continue to do so. In my free time, I enjoy starting new projects and solving algorithm problems.`,
    },
    imagebaseurl: "https://iili.io/HYvpdMX.png",
    name: "Furkan Akif ISLEK",
    role: "Frontend Developer",
    linkedinId: "https://www.linkedin.com/in/furkanislek/",
    githubUrl: "http://github.com/furkanislek",
    roleDescription: `Hello, my name is Furkan. I am a Frontend Developer. If you are looking for a developer who can create solid and scalable frontend software with perfect user experiences, we can work together`,
    socialLinks: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/furkanislek/",
        className: "fa fa-linkedin",
      },
      {
        name: "github",
        url: "http://github.com/furkanislek",
        className: "fa fa-github",
      },
      {
        name: "twitter",
        url: "http://twitter.com/furukderki",
        className: "fa fa-twitter",
      },
    ],

    skills: [
      {
        skillname: "JavaScript",
        skillurl: "https://www.sistemkod.com/images/blog/javascriptlogo.png",
      },
      {
        skillname: "ReactJs",
        skillurl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      },
      {
        skillname: "Redux",
        skillurl:
          "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      },
      {
        skillname: "CSS",
        skillurl:
          "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      },

      {
        skillname: "Bootstrap",
        skillurl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
      },
      {
        skillname: "Cypress",
        skillurl: "https://iili.io/HYviEMv.png",
      },
    ],
    portfolio: [
      {
        name: "React Credit Calculate",
        description:
          "React Credit Calculator application. In this project, by using ReactJs, it is possible to determine the monthly installment amount and the total repayment amount based on the credit amount, the number of installments, the monthly interest rate and the installment interval.",
        tags: ["reactjs", "javascript"],
        imgurl:
          "https://user-images.githubusercontent.com/76527169/190879487-948d6e29-1e1d-4658-9106-8659ed414c3f.png",
        githubUrl: "https://github.com/furkanislek/Fimple-Credit-Calculate",
        projectUrl: "https://furkancreditcalculate.web.app/",
        site: "View Site",
      },
      {
        name: "Tic Tac Toe",
        description:
          "Tic-Tac-Toe or XOX game. This game was made only by using javascript. I got the opportunity to participate in the React Practicum by creating this game. You can try the game for fun.",
        tags: ["javascript", "game", "tic-tac-toe"],
        imgurl:
          "https://user-images.githubusercontent.com/76527169/192136695-376d1b2f-9427-4d80-a63a-de3d0559b5ae.png",
        githubUrl: "https://github.com/furkanislek/Tic-Tac-Toe",
        projectUrl: "https://furkanislek.github.io/Tic-Tac-Toe/",
        site: "View Site",
      },
      {
        name: "Hafıza Kartları Oyunu",
        description:
          "If you want to satisfy your hunger by playing a memory game, you should definitely play this game. You win the game by finding the same type of foods in this game, which was made using ReactJs.",
        tags: ["react", "javascript", "game", "memorycard"],
        imgurl:
          "https://user-images.githubusercontent.com/76527169/193851383-942a7edd-13a7-4a04-99a3-b062fe868492.png",
        githubUrl: "https://github.com/furkanislek/Memory-Card",
        projectUrl: "https://mellow-valkyrie-2bc7de.netlify.app/",
        site: "View Site",
      },
      {
        name: "Pizza Form",
        description:
          "In this project I made using React, I focused on the form structure. The material information for creating the order is sent to the api. 'React-Router-Dom' was used for link redirections in the project.",
        tags: ["react", "form", "router"],
        imgurl:
          "https://user-images.githubusercontent.com/76527169/213245928-23da2729-40d4-4cce-b09e-c95412a27db0.png",
        githubUrl: "https://github.com/furkanislek/FSWeb-S7-Challenge",
        projectUrl: "https://pizza-form.vercel.app/",
        site: "View Site",
      },
      {
        name: "Async Redux Hobiler",
        description:
          "A small web application that offers hobbies that can relieve your boredom using Async Redux. The data obtained from the Bored Api can be saved and liked using the redux state management method.",
        tags: ["react", "redux", "axios"],
        imgurl:
          "https://user-images.githubusercontent.com/76527169/213257771-6a817a53-c94f-4037-bfaf-76c28adecb2e.png",
        githubUrl: "https://github.com/furkanislek/Memory-Card",
        projectUrl:
          "https://www.awesomescreenshot.com/video/13687216?key=7949e82e99b77106c941734324e8953c",
        site: "View Site",
      },
      {
        name: "Quiz App",
        description:
          "In this project I made using React, you can answer the questions in order and see your correct number at the end of the test. You can add or remove as many questions as you want.",
        tags: ["react", "quiz", "quizapp"],
        imgurl:
          "https://user-images.githubusercontent.com/76527169/212535326-7a9122a0-979a-44e3-b47f-8aa26674954e.png",
        githubUrl: "https://github.com/furkanislek/Quiz-App/",
        projectUrl: "https://quiz-app-liart-alpha.vercel.app/",
        site: "View Site",
      },
    ],
    footer: {
      title: "Send me a message!",
      description: "You can contact me for your next project.",
      githubUrl: "https://github.com/furkanislek",
      linkedinUrl: "https://www.linkedin.com/in/furkanislek/",
      youtube: "https://www.youtube.com/channel/UCUlJmYsaZ0d8enTA_ZRTKtw",
    },
    navbar: {
      profile: "Profile",
      skills: "Skills",
      about: "About Me",
      projects: "Projects",
      contact: "Hire Me",
    },
  },
};

export default resumeData;
