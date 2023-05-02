
export function Feedback(){
 return   <form className="feedback"
  action="https://formspree.io/f/mqkonbek"
  method="POST"
>

    Введіть ваш e-mail:
    <input className="feedback__input" type="email" name="email"/>

 
    Введіть текст :
    <textarea name="message"></textarea>
 
 
  <button type="submit">Відправити</button>
</form>
}