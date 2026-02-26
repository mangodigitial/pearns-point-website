export default function GoldRule({ className = '' }: { className?: string }) {
  return (
    <div
      className={`w-[50px] h-[2px] rounded-sm ${className}`}
      style={{ background: 'linear-gradient(90deg, #b69a6a, #d4c5a9)' }}
    />
  )
}
