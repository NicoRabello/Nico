export function DetailCard({ title, items = [], content = '' }) {
    return `
        <div class="detail-card">
            <h3>${title}</h3>
            ${content ? `<p>${content}</p>` : ''}
            ${items.length > 0 ? `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
        </div>
    `;
}
