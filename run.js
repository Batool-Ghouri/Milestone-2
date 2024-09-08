document.getElementById('generate').addEventListener('click', function () {
    // Get values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var profile = document.getElementById('profile').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split('\n');
    var work = document.getElementById('work').value;
    // Generate resume HTML
    var resumeHTML = "\n        <div class=\"resume\">\n            <h1>".concat(name, "</h1>\n            <p>Email: ").concat(email, " | Phone: ").concat(phone, "</p>\n            <h2>Profile</h2>\n            <p>").concat(profile, "</p>\n            <h2>Education</h2>\n            <p>").concat(education.replace(/\n/g, '<br>'), "</p>\n            <h2>Skills</h2>\n            <ul>\n            \n            </ul>\n            <h2>Work Experience</h2>\n            <p>").concat(work.replace(/\n/g, '<br>'), "</p>\n        </div>\n    ");
    // Insert the generated resume into the resume-container div
    var resumeContainer = document.getElementById('resume-container');
    resumeContainer.innerHTML = resumeHTML;
});
