
interface Titleprops {
  title: string
}
export const TitleSpt = ({ title }: Titleprops) => {
  return (
    <h1 className="sm:text-[22px] text-xl font-bold text-zinc-50 ">
      {title}
    </h1>
  )
}