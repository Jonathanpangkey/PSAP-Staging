import Image, { ImageProps } from 'next/image'
import { Media } from '@/payload-types'

interface PayloadImageProps extends Omit<Partial<ImageProps>, 'src' | 'alt'> {
  image?: number | Media | null
  alt?: string
  fallbackSrc?: string
}

export default function PayloadImage({
  image,
  alt = '',
  fallbackSrc = '/assets/bluebridge.png', // a default logo/image fallback
  className = '',
  fill,
  width,
  height,
  ...rest
}: PayloadImageProps) {
  // If we have a Media object with a valid URL
  const isMediaObject = image && typeof image === 'object' && 'url' in image
  const mediaUrl = isMediaObject ? (image as Media).url : null
  const mediaAlt = isMediaObject ? (image as Media).alt : alt
  const mediaWidth = isMediaObject ? ((image as Media).width ?? undefined) : undefined
  const mediaHeight = isMediaObject ? ((image as Media).height ?? undefined) : undefined

  // Determine final image source
  const src = mediaUrl || fallbackSrc

  // Styling for placeholder if we are using fallback and don't want it to look broken
  const finalClass = `${className} ${!mediaUrl ? 'img-placeholder' : ''}`.trim()

  // If we don't have absolute dimensions or fill, provide sensible defaults
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
