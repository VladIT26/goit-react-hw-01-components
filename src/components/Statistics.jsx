export const Statistics = ({ title, stats }) => {
    return (<section class="statistics">
        {title && <h2>{title}</h2>}
        
   <ul class="stat-list">
    {stats.map(({ id, label, percentage }) => (
    <li key={id}>
    <span> {label} </span>
    <span> {percentage} </span>
    </li>))}
  </ul>
</section>
)
}