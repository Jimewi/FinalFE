import "../Styles/footer.css"


const Footer = () => {
  return (
    <footer>
    <div className='footer-by'><p>Jimena Garcia</p></div> 
      <div className='footer-logo-and-icons'>
        <img className='footer-logo' src="/images/DH.png" alt="" width={200}/>
        <div>
          <a href="/#"><img className='footer-icons' src="/images/ico-facebook.png" alt="icono de facebook" /></a>
          <a href="/#"><img className='footer-icons' src="/images/ico-instagram.png" alt="icono de instagram" /></a>
          <a href="/#"><img className='footer-icons' src="/images/ico-whatsapp.png" alt="icono de whatsapp" /></a>
          <a href="/#"><img className='footer-icons' src="/images/ico-tiktok.png" alt="icono tik tok" /></a>
        </div>
    </div>
</footer>
  )
}

export default Footer
