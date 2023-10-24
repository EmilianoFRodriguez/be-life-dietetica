import React from 'react'
import './style.scss'

export default function Footer() {
    return (
        <div className='footerContainer'>
            <div className='footerAyuda'>
                <a href="#">Como Comprar</a>
                <p>🌼 Delivery y retiro por el local</p>
                <a href="#">Medios de pago</a>
                <p>💳TODOS LOS MEDIOS DE PAGO</p>
                <a href="#">Quienes Somos</a>
            </div>
            <div className='footerContacto'>
                <a href="https://www.google.com/maps?ll=-32.939157,-60.639059&z=19&t=m&hl=es&gl=AR&mapclient=embed&cid=5867542753645479775" target='_blank'>
                    <p>Salta 1285, Esq. Entre Rios. Rosario, Santa Fe</p>
                </a>
                <p>WhatsApp +54 9 341 9999999</p>
                <p>Telefono +54 9 341 999-9999</p>
                <p>mercadosaludable@belife.com.ar</p>
                <p>🍃 Lun a Vier de 8hs a 20hs</p>
                <p>❤ Sab de 9hs a 13:00hs</p>
                <a href="https://www.instagram.com/beliferosario/" target='_blank' >Seguinos en Instagram</a>
            </div>
            <div className='footerMaps'>
                <div className='mapsContainer'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209.27818516010095!2d-60.63897843618753!3d-32.93910128628734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab2f66918ba3%3A0x516db30bff74c75f!2sMercado%20saludable%20%22Be%20life%22!5e0!3m2!1ses!2sar!4v1680384928285!5m2!1ses!2sar" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}
