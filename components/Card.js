export function Card({ project, index }) {
    const isActive = index === 0 ? 'active' : '';
    const backgroundImage = project.assets.image ? `url(${project.assets.image})` : 'none';
    
    return `
        <section class="card ${isActive}" data-id="${project.id}">
            <div class="card-inner" style="
                border-right-color: ${project.theme.primary};
                background-image: ${backgroundImage};
                background-size: cover;
                background-position: center;
            ">
                <p style="color: ${project.theme.primary}">${project.name.split(' ')[0]}</p>
                <h2>${project.name}</h2>
            </div>
        </section>
    `;
}
