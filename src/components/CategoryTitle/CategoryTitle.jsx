

export function CategoryItem (){

  const click = e =>{
    console.log(e.target)
  }
    return (
    
    <>
    <div className="category__container">
    <h2>Незабаром буде працювати</h2>
    <div className="category">
        
        <button onClick={click} className="categoryBtn" type='button'>Ремонт телефонів</button>
    <button className="categoryBtn" type='button'>Ремонт планшетів</button>
    <button className="categoryBtn" type='button'>Ремонт iPhone</button></div>
    </div>
  </>
    )

}