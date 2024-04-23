import {ComponentFixture, TestBed} from '@angular/core/testing'

import {UpdateTextColorFormComponent} from './update-text-color-form.component'
import {
  IColorCode,
  UpdateTextColorService,
} from './services/update-text-color.service'
import {FormBuilder} from '@angular/forms'

describe('UpdateTextColorFormComponent', () => {
  let component: UpdateTextColorFormComponent
  let fixture: ComponentFixture<UpdateTextColorFormComponent>
  let updateTextColorServiceMock = {
    setState: jest.fn(),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTextColorFormComponent],
      providers: [
        {
          provide: UpdateTextColorService,
          useValue: updateTextColorServiceMock,
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(UpdateTextColorFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    jest.clearAllMocks()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('component setup', () => {
    describe('ngOnInit', () => {
      it('should call setDefaultTextColorValue', () => {
        const setDefaultTextColorValueSpy = jest.spyOn(
          component,
          'setDefaultTextColorValue'
        )
        component.ngOnInit()
        expect(setDefaultTextColorValueSpy).toHaveBeenCalled()
      })

      it('should call subscribeToTextColorInputChanges', () => {
        const subscribeToTextColorInputChangesSpy = jest.spyOn(
          component,
          'subscribeToTextColorInputChanges'
        )
        component.ngOnInit()
        expect(subscribeToTextColorInputChangesSpy).toHaveBeenCalled()
      })
    })
  })

  describe('updateTextColorFormControl', () => {
    it('should return updateTextColorForm.controls', () => {
      const formBuilder: FormBuilder = TestBed.inject(FormBuilder)
      const form = (component.updateTextColorForm = formBuilder.group({
        textColor: [''], // You can provide initial value if needed
      }))

      const formControl = component.updateTextColorFormControl

      expect(form.controls).toBe(formControl)
    })
  })

  describe('setDefaultTextColorValue', () => {
    it('should set the default value', () => {
      component.setDefaultTextColorValue()
      expect(updateTextColorServiceMock.setState).toHaveBeenCalled()
    })
  })

  describe('subscribeToTextColorInputChanges', () => {
    it('should call setState with passed value when textColor is valid', () => {
      const mockValue = '#1f1f1f'
      const setStateSpy = jest.spyOn(updateTextColorServiceMock, 'setState')

      component.updateTextColorForm.setValue({textColor: mockValue})

      expect(setStateSpy).toHaveBeenCalledWith({
        colorCode: mockValue,
      } as IColorCode)
    })
  })

  describe('subscribeToTextColorInputChanges', () => {
    it('should call setState with default value #000000 when textColor is invalid', () => {
      const mockValue = 'invalid value'
      const setStateSpy = jest.spyOn(updateTextColorServiceMock, 'setState')

      component.updateTextColorForm.setValue({textColor: mockValue})

      expect(setStateSpy).toHaveBeenCalledWith({
        colorCode: '#000000',
      } as IColorCode)
    })
  })
})
