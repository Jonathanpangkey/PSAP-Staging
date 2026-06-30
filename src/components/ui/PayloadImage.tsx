import Image, { ImageProps } from 'next/image'
import { Media } from '@/payload-types'

interface PayloadImageProps extends Omit<Partial<ImageProps>, 'src' | 'alt'> {
  image?: number | Media | null
  alt?: string
  fallbackSrc?: string
  size?: 'card' | 'logo'
}

export default function PayloadImage({
  image,
  alt = '',
  fallbackSrc = '/assets/bluebridge.png',
  className = '',
  fill,
  width,
  height,
  size,
  ...rest
}: PayloadImageProps) {
  const isMediaObject = image && typeof image === 'object' && 'url' in image
  
  let mediaUrl = null
  if (isMediaObject) {
    const mediaObj = image as any
    if (size && mediaObj.sizes && mediaObj.sizes[size] && mediaObj.sizes[size].url) {
      mediaUrl = mediaObj.sizes[size].url
    } else {
      mediaUrl = mediaObj.url
    }
  }

  const mediaAlt = isMediaObject ? (image as Media).alt : alt
  const mediaWidth = isMediaObject ? ((image as Media).width ?? undefined) : undefined
  const mediaHeight = isMediaObject ? ((image as Media).height ?? undefined) : undefined

  const src = mediaUrl || fallbackSrc
  const finalClass = `${className} ${!mediaUrl ? 'img-placeholder' : ''}`.trim()
  const imageWidth = fill ? undefined : (width ?? mediaWidth ?? 800)
  const imageHeight = fill ? undefined : (height ?? mediaHeight ?? 600)

  return (
    <Image
      src={src}
      alt={mediaAlt || alt || 'PT Perintis Sarana Astra Image'}
      width={imageWidth}
      height={imageHeight}
      fill={fill}
      className={finalClass}
      {...rest}
    />
  )
}
