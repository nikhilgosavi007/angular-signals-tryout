import {computed, signal, Signal} from '@angular/core'

export class GlobalStore<T> {
  readonly state = signal({} as T)
  constructor() {}

  // returns a value for a property from the state.
  public select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this.state()[key])
  }

  // sets a value for a property in the state.
  public setState(partialState: Partial<T>): void {
    this.state.update((currentValue) => ({...currentValue, ...partialState}))
  }
}
