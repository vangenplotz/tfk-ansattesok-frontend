import "./footer.scss"
import React from "react"

export default class Footer extends React.Component {
    render() {
        return <footer id="footer-menu" role="contentinfo" className="constrained-content">

            <div className="column-4">
                <h3>Kontakt Telemark fylkeskommune</h3>
                <p>Telefon: 35 91 70 00<br/>
                    Telefaks: 35 91 70 01<br/>
                    Epost: <a href="mailto:farte@t-fk.no" alt="Kontakt oss på farte@t-fk.no">farte@t-fk.no</a></p>

                <h3>Postadresse:</h3>
                <p>Postboks 2844, 3702 Skien</p>

                <h3>Besøksadresse:</h3>
                <p>Fylkesbakken 10, 3715 Skien</p>
            </div>

            <div className="column-4">
                <h3>Kart og veibeskrivelse</h3>
                <p className="fat"><a
                    href="https://www.google.com/maps/preview?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Fylkesbakken+10,+Skien,+Norge&amp;aq=0&amp;oq=fylkesbakken+10&amp;sll=37.0625,-95.677068&amp;sspn=39.184175,87.978516&amp;vpsrc=6&amp;t=v&amp;ie=UTF8&amp;hq=&amp;hnear=Fylkesbakken+10,+3715+Skien,+Telemark,+Norway&amp;ll=59.216674,9.611161&amp;spn=0.012388,0.042958&amp;z=15&amp;iwloc=A">Se
                    kart på Google</a>

                    <a href="/" className="page-header__logo"><img src="/bundles/tfkfarte/images/logo/tfk_logo_wb.svg"
                                                                   alt="Telemark Fylkeskommune"/></a>
                </p></div>


        </footer>
    }
}