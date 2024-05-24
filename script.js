document.addEventListener('DOMContentLoaded', function() {
    const aboutMeText = "Hey there,Iam Asser Elshiekh here, Iam an IT student at Beni Suef Technological University 🎓. My focus? Becoming a backend development expert 💻 while immersing myself in programming 🖥️, tech ⚙️, gaming 🎮, and anime 🌟. My skills include Python 🐍, PHP & Laravel 🚀, SQL 🔍, JS 🌐, and HTML/CSS 🎨. I am always eager to learn and explore more 🤗";

    const aboutMeDisplay = document.getElementById('aboutMeDisplay');

    let index = 0;
    const typingSpeed = 30; 

    function typeAboutMe() {
        if (index < aboutMeText.length) {
            aboutMeDisplay.innerHTML += aboutMeText.charAt(index);
            index++;
            setTimeout(typeAboutMe, typingSpeed);
        }
    }

    typeAboutMe();
});
