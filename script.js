// Function to handle department clicks and display corresponding info
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        const department = this.getAttribute('data-department');

        // Change department info based on selection
        const departmentInfo = {
            cse: {
                title: "WELCOME TO DEPARTMENT OF CSE",
                content: "A Computer Science and Engineering (CSE) department is an academic program that combines computer science and computer engineering approaches. CSE is a rapidly evolving field that's at the forefront of developing innovative technology solutions."
            },
            ece: {
                title: "WELCOME TO DEPARTMENT OF ECE",
                content: "Electronics and Communication Engineering (ECE) is a discipline that deals with the design and development of electronic devices, circuits, and systems. It plays a key role in the field of communication and technology."
            },
            eee: {
                title: "WELCOME TO DEPARTMENT OF EEE",
                content: "Electrical and Electronics Engineering (EEE) focuses on electrical systems, power generation, and communication systems, equipping students with skills to design and manage electrical equipment."
            },
            civ: {
                title: "WELCOME TO DEPARTMENT OF CIV",
                content: "Civil Engineering (CIV) is concerned with the design, construction, and maintenance of the physical and naturally built environment, including works like roads, bridges, and buildings."
            },
            mech: {
                title: "WELCOME TO DEPARTMENT OF MECH",
                content: "Mechanical Engineering (MECH) involves the design, analysis, and manufacturing of mechanical systems, playing a vital role in automation and machinery development."
            },
            aids: {
                title: "WELCOME TO DEPARTMENT OF AI&DS",
                content: "AI & Data Science focuses on machine learning, AI applications, and data analysis to create systems that understand and act upon data."
            },
            aiml: {
                title: "WELCOME TO DEPARTMENT OF AIML",
                content: "Artificial Intelligence and Machine Learning (AIML) teaches systems to learn from data, enabling computers to perform tasks that require human-like intelligence."
            },
            cs: {
                title: "WELCOME TO DEPARTMENT OF CS",
                content: "Computer Science (CS) covers the theory of computation, algorithms, and software development, forming the basis of all computing technologies."
            },
            ds: {
                title: "WELCOME TO DEPARTMENT OF DS",
                content: "Data Science (DS) involves using scientific methods, processes, and algorithms to extract knowledge and insights from structured and unstructured data."
            }
        };

        // Update the displayed department information
        const info = departmentInfo[department];
        if (info) {
            document.querySelector('.department-title').innerText = info.title;
            document.querySelector('.department-info p').innerText = info.content;
        }
        
        // Show the login form
        document.getElementById('login-form-container').style.display = 'block';
    });
});
