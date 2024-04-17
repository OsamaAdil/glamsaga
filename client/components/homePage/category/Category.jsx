import style from "./category.module.css";
export default function Category({name,image}) {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={image}/>
      </div>
      <div className={style.name}>{name}</div>
    </div>
  );
}
