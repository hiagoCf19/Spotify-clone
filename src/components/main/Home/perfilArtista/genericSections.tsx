import { TitleSpt } from "@/components/Recorrentes/Title"
interface propsGenericSectionsInPerfil {
  title: string
}
export const GenericSectionsInPerfil = ({ title }: propsGenericSectionsInPerfil) => {
  return (
    <div>
      <TitleSpt title={title} />
      <div className="flex gap-2 my-4">
        a
      </div>
    </div>
  )
}