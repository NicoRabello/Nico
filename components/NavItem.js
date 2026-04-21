export function NavItem({ project, index }) {
    if (!project) return '';

    const isActive = index === 0 ? 'active' : '';
    const primaryColor = project.theme?.primary || '#ffffff';
    
    return `
        <div class="nav-item ${isActive}" 
             data-index="${index}" 
             data-id="${project.id}" 
             role="button" 
             tabindex="0" 
             aria-label="Navigate to ${project.name}">
            <div class="dot" style="--project-color: ${primaryColor}"></div>
            <span class="nav-label">${project.name}</span>
        </div>
    `;
}
