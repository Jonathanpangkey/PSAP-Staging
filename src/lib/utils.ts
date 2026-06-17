export function getWhatsAppLink(phoneNumber: string): string {
  const cleanNumber = phoneNumber.replace(/\D/g, '')
  return `https://wa.me/${cleanNumber}`
}
