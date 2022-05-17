import style from './style.module.css'


const Loading = () => {
  return (
    <div className={style.loadingContainer}>
      <div className={style.loader}>
        <div></div>
      </div>
    </div>
  )
}

export default Loading 