import { ArrowDown, ArrowRight, Bath, Brush, Check, Heart, MapPin, Scissors, Sparkles, Store, Wind } from "lucide-react"
import Header from "../components/header"

const services = [
  { number: "01", icon: Bath, title: "Yıkama & kurutma", text: "Dostunuzun tüy yapısına ve hassasiyetine uygun, özenli bir banyo rutini. Yumuşacık bir dokunuşla tamamlanan temiz bir başlangıç." },
  { number: "02", icon: Scissors, title: "Tıraş & şekillendirme", text: "Irkına, tüy tipine ve günlük yaşamına göre şekillenen kişiye özel bakım. Her dostun kendine yakışan bir stili var." },
  { number: "03", icon: Brush, title: "Tüy bakımı & tarama", text: "Düğümlerin nazikçe açılmasından tüylerin formunu korumaya kadar, rahatlığı önceleyen detaylı bakım." },
  { number: "04", icon: Sparkles, title: "Minik dokunuşlar", text: "Tırnak kesimi ve kulak temizliği gibi rutin hijyen adımları, sakin ve dikkatli bir yaklaşımla." },
]

const shopItems = ["Özenle seçilmiş premium mamalar", "Günlük bakım ve hijyen ürünleri", "Dostunuzun rutinine eşlik eden petshop ürünleri"]

export default function Page() {
  return (
    <main>
      <Header />
      <section className="hero" id="ana-sayfa" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> GAYRETTEPE’DE PATİLİ DOSTLARA</div>
          <h1 id="hero-title">İyi hissetmek,<br />güzel <em>görünmek.</em></h1>
          <p className="hero-description">Her pati kendi hikâyesini taşır. Biz de o hikâyeye, sevgiyle ve özenle eşlik ederiz.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="https://wa.me/905354678377?text=Merhaba%2C%20DuSi%20Pet%20ile%20ileti%C5%9Fime%20ge%C3%A7mek%20istiyorum" target="_blank" rel="noreferrer">WhatsApp’tan randevu alın <ArrowRight size={16} /></a>
            <a className="text-link" href="#hizmetler">Neler yapıyoruz? <ArrowDown size={15} /></a>
          </div>
          <div className="hero-note"><Heart size={16} fill="currentColor" /> Anestezisiz, sakin ve özenli bakım</div>
        </div>
        <div className="hero-image-wrap">
          <img className="hero-image" src="/dusi-hero.png" alt="Bakımı tamamlanmış sevimli bir köpek ve kedi" />
          <div className="image-stamp"><span>sevgiyle</span><strong>bakım</strong><span>her patiye</span></div>
          <div className="image-caption"><span className="caption-mark">✳</span><span>Günün en güzel<br />randevusu burada.</span></div>
        </div>
        <div className="hero-side-label">DUSI PET · İSTANBUL</div>
      </section>

      <section className="ticker" aria-label="Hizmetlerimiz"><div className="ticker-track"><span>GÜZEL BAKIM</span><i>✳</i><span>GÜVENLİ DOKUNUŞ</span><i>✳</i><span> MUTLU PATİLER</span><i>✳</i><span>GÜZEL BAKIM</span><i>✳</i><span>GÜVENLİ DOKUNUŞ</span><i>✳</i><span>MUTLU PATİLER</span><i>✳</i></div></section>

      <section className="services section-pad" id="hizmetler">
        <div className="section-heading"><div><p className="eyebrow">BİZİM İŞİMİZ, ONLARIN İYİLİĞİ</p><h2>Bakım dediğin,<br /><em>güvenle başlar.</em></h2></div><p className="section-intro">Kedi ve köpekler için günlük konforu ve iyi hissetmeyi önemseyen, baştan sona özenli kuaförlük hizmetleri.</p></div>
        <div className="service-grid">{services.map(({ number, icon: Icon, title, text }) => <article className="service-card" key={number}><div className="service-top"><span>{number}</span><Icon size={22} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><a href="https://wa.me/905354678377?text=Merhaba%2C%20DuSi%20Pet%20ile%20ileti%C5%9Fime%20ge%C3%A7mek%20istiyorum" target="_blank" rel="noreferrer" aria-label={`${title} hakkında WhatsApp’tan iletişim kur`}><ArrowRight size={18} /></a></article>)}</div>
        <p className="service-footnote"><span>✳</span> Her dostun ihtiyacı farklı. Uygun bakım için bizi arayıp birlikte konuşalım.</p>
      </section>

      <section className="promise" id="yaklasim"><div className="promise-art"><div className="promise-circle"><span>iyi bakım</span><Heart size={28} strokeWidth={1.4} /><span>iyi hissettirir</span></div><div className="promise-sparkle sparkle-one">✳</div><div className="promise-sparkle sparkle-two">✳</div><div className="promise-paw">✳</div></div><div className="promise-copy"><p className="eyebrow">DUSI’DE BAKIMIN HALİ</p><h2>Önce tanışırız.<br /><em>Sonra güzelleşiriz.</em></h2><p>Kuaför koltuğuna çıkmadan önce dostunuzun rahat etmesi gelir. İhtiyacını dinler, tüy yapısını ve alışkanlıklarını göz önünde bulundururuz. Acele etmeden, nazikçe ve anestezi uygulamadan.</p><div className="promise-points"><span><Check size={15} /> Kedi ve köpeklere özel</span><span><Check size={15} /> İhtiyaca göre kişisel bakım</span><span><Check size={15} /> Randevu ile, sakin bir ortamda</span></div><a className="text-link" href="https://wa.me/905354678377?text=Merhaba%2C%20DuSi%20Pet%20ile%20ileti%C5%9Fime%20ge%C3%A7mek%20istiyorum" target="_blank" rel="noreferrer">Bize danışın <ArrowRight size={15} /></a></div></section>

      <section className="shop section-pad" id="petshop"><div className="shop-copy"><p className="eyebrow">EVDE DE GÜZEL DEVAM ETSİN</p><h2>Günlük rutinine<br /><em>iyi gelenler.</em></h2><p>Bakım salonundan evdeki mama kabına kadar, dostunuzun ihtiyaçlarına eşlik edecek ürünleri de bir araya getiriyoruz.</p><ul>{shopItems.map((item) => <li key={item}><span>✳</span>{item}</li>)}</ul><a className="button button-outline" href="https://wa.me/905354678377?text=Merhaba%2C%20DuSi%20Pet%20ile%20ileti%C5%9Fime%20ge%C3%A7mek%20istiyorum" target="_blank" rel="noreferrer">Ürünleri sorun <ArrowRight size={16} /></a></div><div className="shop-card"><div className="shop-card-top"><Store size={19} /><span>DÜKKÂNDAN KÜÇÜK NOT</span></div><div className="shop-illustration"><div className="shop-circle circle-a" /><div className="shop-circle circle-b" /><div className="bag-shape"><div className="bag-handle" /><Heart size={34} strokeWidth={1.2} /></div><div className="shop-leaf">✳</div></div><p>Seçerken birlikte düşünelim.</p><span>Mama ve bakım ürünü önerisi için bize ulaşın.</span></div></section>

      <section className="visit" id="iletisim"><div className="visit-top"><p className="eyebrow">YOLUNUZ GAYRETTEPE’YE DÜŞSÜN</p><span className="visit-star">✳</span></div><h2>Bir pati, bir telefon<br />kadar <em>yakın.</em></h2><div className="visit-bottom"><div className="visit-address"><MapPin size={19} /><div><strong>Gayrettepe, Beşiktaş</strong><span>Fahri Gizden Sokak, Petek Sitesi<br />D Blok, No: 5E · İstanbul</span></div></div><div className="visit-actions"><a className="button button-light" href="https://www.google.com/maps/search/?api=1&query=DuSi+Pet+Kuaf%C3%B6r+Gayrettepe+Fahri+Gizden+Sokak+5E+Istanbul" target="_blank" rel="noreferrer">Yol tarifi al <ArrowRight size={16} /></a><a className="visit-phone" aria-label="WhatsApp üzerinden 0535 467 83 77 numarasına mesaj gönder" href="https://wa.me/905354678377?text=Merhaba%2C%20DuSi%20Pet%20ile%20ileti%C5%9Fime%20ge%C3%A7mek%20istiyorum" target="_blank" rel="noreferrer">0535 467 83 77</a></div></div></section>

      <footer className="footer"><a className="brand footer-brand" href="#ana-sayfa"><span className="brand-mark">d<span>✳</span></span><span className="brand-name">DuSi<small>PET KUAFÖR & PETSHOP</small></span></a><p>Her pati için, sevgiyle.</p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=dusipetshop@gmail.com" target="_blank" rel="noreferrer">dusipetshop@gmail.com</a><span className="footer-copy">© {new Date().getFullYear()} DuSi Pet · Gayrettepe, İstanbul</span></footer>
    </main>
  )
}
