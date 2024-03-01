
interface Titleprops {
  title: string
}
export const TitleSpt = ({ title }: Titleprops) => {
  return (
    <h1 className="text-[22px] font-bold text-zinc-50">
      {title}
    </h1>
  )
}