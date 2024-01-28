// Saudacao.js
export function Hour(): string {
    const data: Date = new Date();
    const hora: number = data.getHours();
    let message: string= ''
    if (hora >= 6 && hora < 12) {
        message = "Bom dia"
    } else if (hora >= 12 && hora < 18) {
        message= "Boa tarde"
    } else {
        message= "Boa noite"
    }
  return message
  
}


