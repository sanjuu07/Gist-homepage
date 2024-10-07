document.addEventListener('DOMContentLoaded', function() {
    const contentArea = document.getElementById('content-area');

    // Default content on page load
    const dashboardContent = `
        <div id="dashboard-content">
            <h2>Welcome to the Teacher Dashboard</h2>
            <p>Select an option from the icons or sidebar to view more details.</p>
        </div>
    `;
    contentArea.innerHTML = dashboardContent;

    // Handle clicks on icons (header)
    const headerIcons = document.querySelectorAll('.top-icons i');
    headerIcons.forEach(el => {
        el.addEventListener('click', function() {
            const content = this.getAttribute('data-content');
            updateContent(content);
        });
    });

    // Handle clicks on sidebar items
    const sidebarItems = document.querySelectorAll('.sidebar li');
    sidebarItems.forEach(el => {
        el.addEventListener('click', function() {
            const content = this.getAttribute('data-content');
            updateContent(content);
        });
    });

    // Update content area based on selected item
    function updateContent(content) {
        switch (content) {
            case 'uploaded-files':
                contentArea.innerHTML = `
                    <div id="dashboard-content">
                        <h2><i class="fas fa-file-upload"></i> Uploaded Files</h2>
                        <p>Here you can view and manage your uploaded files.</p>
                    </div>
                `;
                break;
            case 'modify-files':
                contentArea.innerHTML = `
                    <div id="dashboard-content">
                        <h2><i class="fas fa-file-alt"></i> Modify Files</h2>
                        <p>Select a file to modify, upload new materials, or delete outdated content.</p>
                        <button class="btn-upload">Upload New File</button>
                    </div>
                `;
                break;
            case 'manage-students':
                contentArea.innerHTML = `
                    <div id="dashboard-content">
                        <h2><i class="fas fa-users"></i> Manage Students</h2>
                        <p>View and manage student information, update their details, update the Student fees
                        <ul>
                        <li> <a href="#">manage fees</a></li>
                        <li> <a href="#">Student info</a></li>
                        </ul>
                        
                        </p>
                    </div>
                `;
                break;
            case 'class-schedule':
                contentArea.innerHTML = `
                    <div id="dashboard-content">
                        <h2><i class="fas fa-calendar-alt"></i> Class Schedule</h2>
                        <p>View and edit your class schedule for the week or month.</p>
                    </div>
                `;
                break;
            case 'log-out':
                contentArea.innerHTML = `
                    <div id="dashboard-content">
                        <h2><i class="fas fa-sign-out-alt"></i> Log Out</h2>
                        <p>Are you sure you want to log out?</p>
                        <button class="btn-upload">Log Out</button>
                    </div>
                `;
                break;
            default:
                contentArea.innerHTML = dashboardContent;
        }
    }
});
