let resumeData = {
  tr: {
    karanlıkMode: "Karanlık Mod",
    kisiselBilgiler: "Kişisel Bilgiler",
    skillsTitle : "Program Bilgisi",
    projectsTitle : "Projeler",
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
      data: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. 
      Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!`,
    },
    imagebaseurl:
      "https://drive.google.com/file/d/1Q1mqWhTBVtIGqSlX9GNH8dIHfiRVT1QY/view",
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
    aboutme:
      "Hi there,I am contacting with you for working as a intern frontend developer in your company.I graduated from Cukurova University, Civil Engineering at 2020. After working for a year as a civil engineer in different companies. I decided to change my career to be a frontend developer.  I am improving my frontend skills for last 8 months. Currently, I am looking for an opportunity to work as a frontend developer.In last 8 months, I focused Javascript and especially ReactJS.",
    address: "Gaziantep, Turkey",
    website: "furkanakifislek@gmail.com",
    education: [
      {
        UniversityName: "Workintech",
        specialization: "Full Stack Developer",
        MonthOfPassing: "Continue",
        YearOfPassing: "2023",
      },
      {
        UniversityName: "Cukurova University",
        specialization: "Civil Engineering",
        MonthOfPassing: "Aug",
        YearOfPassing: "2020",
      },
    ],
    work: [
      {
        CompanyName: "Patika.dev",
        specialization: "Bootcamp Accelerator Program - Intern",
        MonthOfLeaving: "September",
        YearOfLeaving: "2022",
      },
      {
        CompanyName: "Nuhoglu Insaat San. ve Tic. A.S.",
        specialization: "Civil Engineer",
        MonthOfLeaving: "March",
        YearOfLeaving: "2022",
      },
      {
        CompanyName:
          "Yesil Enerji Enerji Verimliligi Danısmanlık Sanayi Ve Ticaret Limited Sirketi",
        specialization: "Civil Engineer",
        MonthOfLeaving: "October",
        YearOfLeaving: "2021",
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
        skillurl:
          "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ih3wgcjnztxkqpvy8t8b",
      },
    ],
    portfolio: [
      {
        name: "React Credit Calculate",
        description:
          "React Kredi Hesaplama uygulaması. Bu projede ReactJs kullanılarak kredi tutarı, taksit sayısı, aylık faiz oranı ve taksit aralığına göre aylık taksit tutarı ve toplam geri ödeme tutarı belirlenebilmektedir. ",
        tags: ["reactjs", "javascript"],
        imgurl: "https://user-images.githubusercontent.com/76527169/190879487-948d6e29-1e1d-4658-9106-8659ed414c3f.png",
        githubUrl: "https://github.com/furkanislek/Fimple-Credit-Calculate",
        projectUrl: "https://furkancreditcalculate.web.app/",
      },
      {
        name: "Tic Tac Toe",
        description: "Tic-Tac-Toe yani XOX oyunu. Bu oyunu sadece javascipt kullanarak yapıldı. Bu oyun sayesinde React Practicum'una katılma şansı yakaladım. Eğlenceli bir vakit geçirmek için oyunu deneyebilirsiniz.",
        tags : ["javascript", "game", "tic-tac-toe"],
        imgurl: "https://user-images.githubusercontent.com/76527169/192136695-376d1b2f-9427-4d80-a63a-de3d0559b5ae.png",
        githubUrl: "https://github.com/furkanislek/Tic-Tac-Toe",
        projectUrl : "https://furkanislek.github.io/Tic-Tac-Toe/"
      },
      {
        name: "Hafıza Kartları Oyunu",
        description: "Hafıza oyunu oynayarak açlığınızı gidermek isterseniz, bu oyunu kesinlikle oynamalısınız. ReactJs kullanarak yapılan bu oyunda aynı tür yemekleri bulduğunuzda oyunu kazanmış sayılıyorsunuz.",
        tags : ["react", "javascript", "game", "memorycard"],
        imgurl: "https://user-images.githubusercontent.com/76527169/193851383-942a7edd-13a7-4a04-99a3-b062fe868492.png",
        githubUrl: "https://github.com/furkanislek/Memory-Card",
        projectUrl : "https://mellow-valkyrie-2bc7de.netlify.app/"
      },
      {
        name: "Pizza Form",
        description: "React kullanarak yaptığım bu projede form yapısı üzerinde yoğunlaştım. Sipariş oluşturulan malzeme bilgileri api'ye yollanmaktadır. Projede link yönlendirmeleri için 'React-Router-Dom' kullanıldı.",
        tags : ["react", "form", "router"],
        imgurl: "https://awesomescreenshot.s3.amazonaws.com/image/3953191/36127045-1a1ba9123dfb633ff3c532f3e19d2510.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20230113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230113T190116Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=5d9354620ea742fc7737a7c3c4029f507b6435a9c3e388ed46fab6a9877f7c4e",
        githubUrl: "https://github.com/furkanislek/FSWeb-S7-Challenge",
        projectUrl : "https://github.com/furkanislek/FSWeb-S7-Challenge"
      },
      {
        name: "Async Redux Hobiler",
        description: "Async Redux kullanarak can sıkıntınızı giderebilecek hobiler sunan ufak bir web uygulaması. Bored Api'den çekilen veriler redux state management yöntemi ile kaydedilebiliyor, beğenilebiliyor.",
        tags : ["react", "redux", "axios"],
        imgurl: "https://user-images.githubusercontent.com/76527169/193851383-942a7edd-13a7-4a04-99a3-b062fe868492.png",
        githubUrl: "https://github.com/furkanislek/Memory-Card",
        projectUrl : "https://mellow-valkyrie-2bc7de.netlify.app/"
      },
      {
        name: "Async Redux Hobiler",
        description: "Async Redux kullanarak can sıkıntınızı giderebilecek hobiler sunan ufak bir web uygulaması. Bored Api'den çekilen veriler redux state management yöntemi ile kaydedilebiliyor, beğenilebiliyor.",
        tags : ["react", "redux", "axios"],
        imgurl: "https://user-images.githubusercontent.com/76527169/193851383-942a7edd-13a7-4a04-99a3-b062fe868492.png",
        githubUrl: "https://github.com/furkanislek/Memory-Card",
        projectUrl : "https://mellow-valkyrie-2bc7de.netlify.app/"
      },
    
    ],
  },

  en: {
    karanlıkMode: "Karanlık Mod",
    imagebaseurl:
      "https://drive.google.com/file/d/1Q1mqWhTBVtIGqSlX9GNH8dIHfiRVT1QY/view",
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
    aboutme:
      "Hi there,I am contacting with you for working as a intern frontend developer in your company.I graduated from Cukurova University, Civil Engineering at 2020. After working for a year as a civil engineer in different companies. I decided to change my career to be a frontend developer.  I am improving my frontend skills for last 8 months. Currently, I am looking for an opportunity to work as a frontend developer.In last 8 months, I focused Javascript and especially ReactJS.",
    address: "Gaziantep, Turkey",
    website: "furkanakifislek@gmail.com",
    education: [
      {
        UniversityName: "Workintech",
        specialization: "Full Stack Developer",
        MonthOfPassing: "Continue",
        YearOfPassing: "2023",
      },
      {
        UniversityName: "Cukurova University",
        specialization: "Civil Engineering",
        MonthOfPassing: "Aug",
        YearOfPassing: "2020",
      },
    ],
    work: [
      {
        CompanyName: "Patika.dev",
        specialization: "Bootcamp Accelerator Program - Intern",
        MonthOfLeaving: "September",
        YearOfLeaving: "2022",
      },
      {
        CompanyName: "Nuhoglu Insaat San. ve Tic. A.S.",
        specialization: "Civil Engineer",
        MonthOfLeaving: "March",
        YearOfLeaving: "2022",
      },
      {
        CompanyName:
          "Yesil Enerji Enerji Verimliligi Danısmanlık Sanayi Ve Ticaret Limited Sirketi",
        specialization: "Civil Engineer",
        MonthOfLeaving: "October",
        YearOfLeaving: "2021",
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
        skillname: "HTML5",
        skillurl: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      },
      {
        skillname: "Bootstrap",
        skillurl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
      },
      {
        skillname: "Cypress Test",
        skillurl:
          "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ih3wgcjnztxkqpvy8t8b",
      },
    ],
    portfolio: [
      {
        name: "React Credit Calculate",
        description:
          "React Credit Calculate Practicums. In this project, the monthly installment amount and total repayment amount can be determined according to the loan amount, the number of installments, the monthly interest rate, and the installment interval by using ReactJs. ",
        tags: ["reactjs", "javascript"],
        imgurl: "images/portfolio/credit1.png",
        githubUrl: "https://github.com/furkanislek/Fimple-Credit-Calculate",
        projectUrl: "https://furkancreditcalculate.web.app/",
      },
      {
        name: "Calculator App",
        description: "React Calculator App",
        imgurl: "images/portfolio/calculator.png",
        url: "https://github.com/furkanislek/Calculator",
      },
      {
        name: "Tic Tac Toe",
        description: "Tic Tac Toe Project",
        imgurl: "images/portfolio/tictactoe.png",
        url: "https://github.com/furkanislek/Tic-Tac-Toe",
      },
      {
        name: "To Do List Firebase",
        description: "To Do Kist Project ",
        imgurl: "images/portfolio/todolist.png",
        url: "https://myperfecttodolist45.web.app/",
      },
    ],
  },
};

export default resumeData;
