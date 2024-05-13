import { Star } from "./Star";
import './Star.css';

type StarsProps = {
  count: number,
}

export function Stars({ count = 0 }: StarsProps) {
  if (count <= 0 || count > 5 || typeof count !== 'number') return;

  const result: Array<React.ReactNode> = [];

  for (let i = 0; i < count; i += 1) {
    result.push(<li key={i}><Star /></li>);
  }

  return (
    <ul className="card-body-stars">
      {result}
    </ul>
  )
}
