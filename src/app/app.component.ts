import { Component } from '@angular/core'
import { faDesktop, faReply, faFlask, faHome, faPhone } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
  faLinkedin,
  faPinterest
} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yuyu'
  faDesktop = faDesktop
  faReply = faReply
  faFlask = faFlask
  faHome = faHome
  faPhone = faPhone
  faFacebook = faFacebook
  faTwitter = faTwitter
  faGooglePlus = faGooglePlus
  faLinkedin = faLinkedin
  faPinterest = faPinterest
}
