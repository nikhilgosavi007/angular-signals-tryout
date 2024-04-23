import {animate, style, transition} from '@angular/animations'

// animation for counter displayed in the header
export const counterAnimation = [
  transition(':increment', [
    style({opacity: 0, transform: 'scale(0.8)'}),
    animate('0.5s ease-out', style({opacity: 1, transform: 'scale(1)'})),
  ]),
]
