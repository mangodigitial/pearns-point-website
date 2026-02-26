interface AuthorBoxProps {
  name: string
  bio?: string
  avatar?: string
}

export default function AuthorBox({ name, bio, avatar }: AuthorBoxProps) {
  return (
    <div className="flex items-start gap-6 p-8 bg-sand-light rounded-[4px] mt-16">
      {avatar && (
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />
      )}
      <div>
        <p className="text-[0.58rem] font-semibold tracking-[0.3em] uppercase text-ocean mb-2">
          Written by
        </p>
        <h4 className="font-display text-[1.2rem] font-normal text-navy mb-2">{name}</h4>
        {bio && (
          <p className="text-[0.82rem] font-light leading-[1.7] text-prose-mid">{bio}</p>
        )}
      </div>
    </div>
  )
}
