export const metadata = {
  title: 'Pearns Point Studio',
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="sanity" style={{ height: '100vh' }}>
      {children}
    </div>
  )
}
