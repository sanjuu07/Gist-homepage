// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the content section and sidebar links
    const contentSection = document.getElementById('content-section');
    const basicInfoBtn = document.getElementById('basic-info');
    const attendanceBtn = document.getElementById('attendance');
    const examsBtn = document.getElementById('upcoming-exams');
    const hallticketBtn = document.getElementById('download-hallticket');
    const homeBtn = document.getElementById('home-icon');  // Home button reference

    // Event listener for Home (Announcements)
    homeBtn.addEventListener('click', function() {
        contentSection.innerHTML = `
            <div class="announcements">
                <h2><i class="fas fa-bullhorn"></i> Announcements</h2>
                <ul>
                    <li><i class="fas fa-star"></i> Sample text</li>
                    <li><i class="fas fa-star"></i> Sample text</li>
                    <li><i class="fas fa-star"></i> Sample text</li>
                    <li><i class="fas fa-star"></i> Sample text</li>
                </ul>
            </div>
        `;
    });

    // Event listener for Basic Information
    basicInfoBtn.addEventListener('click', function() {
        contentSection.innerHTML = `
            <h2>Basic Information</h2>
            <ul>
                <li><strong>Name:</strong> Sandeep Yeturi</li>
                <li><strong>Roll No:</strong> 123456</li>
                <li><strong>Course:</strong> B.Tech (Data Science)</li>
                <li><strong>Year:</strong> 3rd Year</li>
                <li><strong>Email:</strong> sandeep@example.com</li>
            </ul>
        `;
    });

    // Event listener for Attendance
    attendanceBtn.addEventListener('click', function() {
        contentSection.innerHTML = `
            <h2>Attendance</h2>
            <p>Attendance data will be shown here.</p>
        `;
    });

    // Event listener for Upcoming Exams
    examsBtn.addEventListener('click', function() {
        contentSection.innerHTML = `
            <h2>Up-Coming Exams</h2>
            <p>Details about upcoming exams will be shown here.</p>
        `;
    });

    // Event listener for Download Hall-Ticket
    hallticketBtn.addEventListener('click', function() {
        contentSection.innerHTML = `
            <h2>Download Hall-Ticket</h2>
            <p>You can download your hall ticket from here.</p>
        `;
    });
});
