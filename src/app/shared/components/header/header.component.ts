import {CommonModule} from '@angular/common'
import {Component, inject, Signal} from '@angular/core'
import {CounterService} from '../../../home/services/counter.service'
import {trigger} from '@angular/animations'
import {counterAnimation} from './animations'

@Component({
  selector: 'bv-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [trigger('counterAnimation', counterAnimation)],
})
export class HeaderComponent {
  private counterService = inject(CounterService)

  count: Signal<number> = this.counterService.select('count')

  constructor() {}
}
