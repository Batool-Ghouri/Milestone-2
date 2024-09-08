document.getElementById('generate')!.addEventListener('click', () => {
    // Get values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const profile = (document.getElementById('profile') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split('\n');
    const work = (document.getElementById('work') as HTMLTextAreaElement).value;

    // Generate resume HTML
    const resumeHTML = `
        <div class="resume">
            <h1>${name}</h1>
            <p>Email: ${email} | Phone: ${phone}</p>
            <h2>Profile</h2>
            <p>${profile}</p>
            <h2>Education</h2>
            <p>${education.replace(/\n/g, '<br>')}</p>
            <h2>Skills</h2>
            <ul>
            
            </ul>
            <h2>Work Experience</h2>
            <p>${work.replace(/\n/g, '<br>')}</p>
        </div>
    `;

    // Insert the generated resume into the resume-container div
    const resumeContainer = document.getElementById('resume-container')!;
    resumeContainer.innerHTML = resumeHTML;
});