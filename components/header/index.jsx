import { ArrowUpRight } from "lucide-react"

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#ana-sayfa" aria-label="DuSi Pet, ana sayfa"><span className="brand-mark">d<span>✳</span></span><span className="brand-name">DuSi<small>PET KUAFÖR & PETSHOP</small></span></a>
      <nav className="main-nav" aria-label="Ana menü"><a href="#hizmetler">Hizmetler</a><a href="#yaklasim">Yaklaşımımız</a><a href="#petshop">Petshop</a><a href="#iletisim">İletişim</a></nav>
      <a className="header-cta" href="https://wa.me/905354678377?text=Merhaba%2C%20DuSi%20Pet%20ile%20ileti%C5%9Fime%20ge%C3%A7mek%20istiyorum" target="_blank" rel="noreferrer">WhatsApp’tan randevu <ArrowUpRight size={15} /></a>
    </header>
  )
}
