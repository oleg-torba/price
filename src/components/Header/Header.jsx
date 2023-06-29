import { BsTelephone, BsFillSunFill } from 'react-icons/bs';
import { WiMoonWaxingCrescent1 } from 'react-icons/wi';
export function Header({ theme, onChangeTheme, homeClick }) {
  return (
    <>
      <header className="header">
        <div className="home">
          <p onClick={homeClick}>Головна</p>
        </div>
        <div  className="news">
          <a className='newsLink' href="https://gsminfo.com.ua/88837-amoled-chy-ips-yakyj-dysplej-dlya-smartfona-krashhyj.html">Корисне</a>
        </div>
        <div className='headerBlock'>
        <a className="phone" href="tel:0686868599">
          <BsTelephone />
          {'  '}0999999999
        </a>
        <div class="theme">
          <div class="switch">
            {theme === 'dark-theme' ? (
              <span className="checkboxActive" onClick={onChangeTheme}>
                <WiMoonWaxingCrescent1 className="theme-icon-dark" />
              </span>
            ) : (
              <span className="checkbox" onClick={onChangeTheme}>
                <BsFillSunFill className="theme-icon-light" />
              </span>
            )}
            {theme === 'dark-theme' ? (
              <span className="slideractive" onClick={onChangeTheme}></span>
            ) : (
              <span className="slider" onClick={onChangeTheme}></span>
            )}
          </div>
        </div>
        </div>
      </header>
    </>
  );
}
