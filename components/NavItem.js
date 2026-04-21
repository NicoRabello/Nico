export function NavItem({ project, index }) {
    const isActive = index === 0 ? 'active' : '';
    
    return `
        <div class="nav-item ${isActive}" data-index="${index}" data-id="${project.id}">
            <div class="dot" style="--project-color: ${project.theme.primary}"></div>
            <span class="nav-label">${project.name}</span>
        </div>
    `;
}
