import { APP_URL } from '../contact.js'

const APP_ADDRESS = APP_URL.replace('https://', '')

export function ComputerFrame({ src, alt, width, height, isLazy = true, className = '' }) {
  return (
    <figure className={`computer-frame ${className}`}>
      <div className="computer-frame__bar" aria-hidden="true">
        <span className="computer-frame__dots"><i /><i /><i /></span>
        <span className="computer-frame__address">{APP_ADDRESS}</span>
      </div>
      <img src={src} alt={alt} width={width} height={height} loading={isLazy ? 'lazy' : 'eager'} />
    </figure>
  )
}

export function PhoneFrame({ src, alt, width, height, isLazy = true, className = '' }) {
  return (
    <figure className={`phone-frame ${className}`}>
      <img src={src} alt={alt} width={width} height={height} loading={isLazy ? 'lazy' : 'eager'} />
    </figure>
  )
}

export function TabletFrame({ src, alt, width, height, className = '' }) {
  return (
    <figure className={`tablet-frame ${className}`}>
      <img src={src} alt={alt} width={width} height={height} loading="lazy" />
    </figure>
  )
}
