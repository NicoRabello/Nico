export function Roadmap({ title, subtitle, items = [] }) {
  return `
    <section class="roadmap-section">
      
      <div class="roadmap-header">
        <h2 class="roadmap-title">${title || "roadmap"}</h2>
        <p class="roadmap-subtitle">${subtitle || ""}</p>
      </div>

      <div class="roadmap-timeline">
        ${items.map(item => `
          <div class="roadmap-item">
            
            <div class="roadmap-dot"></div>

            <div class="roadmap-content">
              <h3>${item.title}</h3>
              <span class="roadmap-period">${item.period || ""}</span>
              <p>${item.description || ""}</p>
            </div>

          </div>
        `).join('')}
      </div>

    </section>
  `;
}