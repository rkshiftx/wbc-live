import { getTeam } from '@/lib/teams';

interface Props {
  code: string;
  size?: 'sm' | 'md' | 'lg';
  reverse?: boolean;
}

export default function TeamBadge({ code, size = 'md', reverse = false }: Props) {
  const team = getTeam(code);
  const flagSize = size === 'lg' ? 'text-4xl' : size === 'md' ? 'text-2xl' : 'text-lg';
  const nameSize = size === 'lg' ? 'text-lg' : size === 'md' ? 'text-sm' : 'text-xs';

  return (
    <div className={`flex items-center gap-2 ${reverse ? 'flex-row-reverse' : ''}`}>
      <span className={flagSize}>{team.flag}</span>
      <div className={reverse ? 'text-right' : ''}>
        <div className={`font-bold text-white ${nameSize}`}>{team.nameJa}</div>
        <div className="text-xs text-gray-400">{team.code}</div>
      </div>
    </div>
  );
}
