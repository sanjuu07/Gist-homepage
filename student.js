document.addEventListener('DOMContentLoaded', function () {
    // Get the content section and sidebar links
    const contentSection = document.getElementById('content-section');
    const basicInfoBtn = document.getElementById('basic-info');
    const attendanceBtn = document.getElementById('attendance');
    const examsBtn = document.getElementById('upcoming-exams');
    const hallticketBtn = document.getElementById('download-hallticket');
    const homeBtn = document.getElementById('home-icon');  // Home button reference
    const logoutBtn = document.getElementById('logout-icon');  // Logout button reference
    const calendarBtn = document.getElementById('calendar-icon');  // Calendar icon reference
    const feesBtn = document.getElementById('check-fees');  // Fees button reference
    const courseMaterialBtn = document.getElementById('course-material'); // Course Material button reference

    // Event listener for Home (Announcements)
    homeBtn.addEventListener('click', function() {
        contentSection.innerHTML = `
            <div class="announcements">
                <h2><i class="fas fa-bullhorn"></i> Announcements</h2>
                <ul> 
                    <li><i class="fas fa-star"></i> Results Are Out Now!</li>
                    <li><i class="fas fa-star"></i> Pay the Autonomous Fees</li>
                    <li><i class="fas fa-star"></i> Data Science Workshop is going to held ie.24/10/24</li>
                    <li><i class="fas fa-star"></i> Mid exams are From 16/10/24 </li>
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
                <li><strong>Roll No:</strong> 222U1A3265</li>
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
            <p>Your attendance data for each subject:</p>
            <ul>
                <li><strong>Math:</strong> 85%</li>
                <li><strong>Computer Science:</strong> 90%</li>
                <li><strong>Physics:</strong> 88%</li>
                <li><strong>Electronics:</strong> 92%</li>
            </ul>
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
            <button class="btn-download">Download Hall Ticket</button>
        `;
    });

    // Event listener for Calendar (Class Schedule)
    calendarBtn.addEventListener('click', function() {
        contentSection.innerHTML = `
            <h2>Class Schedule</h2>
            <table class="schedule-table">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>9:00 - 10:00 AM</th>
                        <th>10:00 - 11:00 AM</th>
                        <th>11:00 - 12:00 PM</th>
                        <th>1:00 - 2:00 PM</th>
                        <th>2:00 - 3:00 PM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>Math</td>
                        <td>Physics</td>
                        <td>Computer Science</td>
                        <td>Electronics</td>
                        <td>Free Period</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>Electronics</td>
                        <td>Computer Science</td>
                        <td>Math</td>
                        <td>Physics</td>
                        <td>Activities</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>Computer Science</td>
                        <td>Math</td>
                        <td>Physics</td>
                        <td>Electronics</td>
                        <td>Seminar</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>Math</td>
                        <td>Physics</td>
                        <td>Electronics</td>
                        <td>Computer Science</td>
                        <td>Lab</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>Physics</td>
                        <td>Electronics</td>
                        <td>Computer Science</td>
                        <td>Math</td>
                        <td>Group Activities</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>Electronics</td>
                        <td>Math</td>
                        <td>Physics</td>
                        <td>Computer Science</td>
                        <td>Free Period</td>
                    </tr>
                </tbody>
            </table>
        `;
    });

    // Event listener for Fees Checking
    feesBtn.addEventListener('click', function() {
        contentSection.innerHTML = `
            <h2>Fee Details</h2>
            <ul>
                <li><strong>Course Fee:</strong> ₹38,000  <span class="status-dot paid"></span></li>
                <li><strong>Autonomous Fee:</strong> ₹10,000<span class="status-dot paid"></span></li>
                <li><strong>Hostel Fee:</strong> ₹77,000 <span class="status-dot unpaid"></span> <span class="due-label">Due (Bal=₹53,000)</span></li>
                <li><strong>Van Fee:</strong> ₹19,000 <span class="status-dot unpaid"></span> <span class="due-label">Due (Bal=₹19,000)</span></li>
            </ul>
        `;
    });

    // Event listener for Course Material
    courseMaterialBtn.addEventListener('click', function() {
        contentSection.innerHTML = `
            <h2>Course Material</h2>
            <ul>
                <li><strong>Data Science Notes:</strong> <a href="downloads/DS.pdf" download>Download</a></li>
                <li><strong>Machine Learning Lab:</strong> <a href="downloads/ML.pdf" download>Download</a></li>
                <li><strong>Computer Networks :</strong> <a href="downloads/CN.pdf" download>Download</a></li>
                <li><strong>Data Structures:</strong> <a href="downloads/data-structres.pdf" download>Download</a></li>
            </ul>
        `;
    });

    // Event listener for Logout
    logoutBtn.addEventListener('click', function() {
        const confirmation = confirm('Are you sure you want to log out?');
        if (confirmation) {
            window.location.href = 'index.html';  // Redirect to login page or any other page
        }
    });
});
