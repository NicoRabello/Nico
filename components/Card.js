export function Card({ project, index }) {
    if (!project) return '';

    const isActive = index === 0 ? 'active' : '';
    const backgroundImage = project.assets?.image ? `url(${project.assets.image})` : 'none';
    const primaryColor = project.theme?.primary || '#ffffff';
    const projectName = project.name || 'Untitled Project';
    
    return `
        <section class="card ${isActive}" 
                 data-id="${project.id}" 
                 role="button" 
                 tabindex="0" 
                 aria-label="View project: ${projectName}">
            <div class="card-inner" style="
                border-right-color: ${primaryColor};
                background-image: ${backgroundImage};
                background-size: cover;
                background-position: center;
            ">
                <p style="color: ${primaryColor}">${projectName.split(' ')[0]}</p>
                <h2>${projectName}</h2>
            </div>
        </section>
    `;
}
