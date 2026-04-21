export function MetricItem({ label, value }) {
    return `
        <div class="metric-item">
            <span class="m-val">${value}</span>
            <span class="m-lab">${label}</span>
        </div>
    `;
}
