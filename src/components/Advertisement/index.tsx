import clsx from 'clsx'

interface ICardAdvertisementProps {
  imgUrl: string
  className: string
}
export const CardAdvertisement = ({ imgUrl, className }: ICardAdvertisementProps) => {
  return (
    <div className={clsx(className)}>
      <img src={imgUrl} alt="advertisement" />
    </div>
  )
}
