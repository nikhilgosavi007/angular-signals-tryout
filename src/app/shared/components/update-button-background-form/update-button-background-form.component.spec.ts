import {ComponentFixture, TestBed} from '@angular/core/testing'

import {UpdateButtonBackgroundFormComponent} from './update-button-background-form.component'
import {
  IButtonBackground,
  UpdateButtonBackgroundFormService,
} from './services/update-button-background-form.service'
import {FormBuilder} from '@angular/forms'
import {IColorCode} from '../update-text-color-form/services/update-text-color.service'

describe('UpdateButtonBackgroundFormComponent', () => {
  let component: UpdateButtonBackgroundFormComponent
  let fixture: ComponentFixture<UpdateButtonBackgroundFormComponent>
  const UpdateButtonBackgroundFormServiceMock = {
    setState: jest.fn(),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateButtonBackgroundFormComponent],
      providers: [
        {
          provide: UpdateButtonBackgroundFormService,
          useValue: UpdateButtonBackgroundFormServiceMock,
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(UpdateButtonBackgroundFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    jest.clearAllMocks()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('component setup', () => {
    describe('ngOnInit', () => {
      it('should call setDefaultButtonBackgroundColorValue', () => {
        const setDefaultButtonBackgroundColorValueSpy = jest.spyOn(
          component,
          'setDefaultButtonBackgroundColorValue'
        )
        component.ngOnInit()
        expect(setDefaultButtonBackgroundColorValueSpy).toHaveBeenCalled()
      })

      it('should call subscribeToBtnBgColorInputChanges', () => {
        const subscribeToBtnBgColorInputChangesSpy = jest.spyOn(
          component,
          'subscribeToBtnBgColorInputChanges'
        )
        component.ngOnInit()
        expect(subscribeToBtnBgColorInputChangesSpy).toHaveBeenCalled()
      })
    })
  })

  describe('updateBackgroundColorFormControl', () => {
    it('should return updateBackgroundColorForm.controls', () => {
      const formBuilder: FormBuilder = TestBed.inject(FormBuilder)
      const form = (component.updateBackgroundColorForm = formBuilder.group({
        buttonBackgroundColor: [''], // You can provide initial value if needed
      }))

      const formControl = component.updateBackgroundColorFormControl

      expect(form.controls).toBe(formControl)
    })
  })

  describe('setDefaultButtonBackgroundColorValue', () => {
    it('should set the default value', () => {
      component.setDefaultButtonBackgroundColorValue()
      expect(UpdateButtonBackgroundFormServiceMock.setState).toHaveBeenCalled()
    })
  })

  describe('subscribeToBtnBgColorInputChanges', () => {
    it('should call setState with passed value when buttonBackgroundColor is valid', () => {
      const mockValue = '#1f1f1f'
      const setStateSpy = jest.spyOn(
        UpdateButtonBackgroundFormServiceMock,
        'setState'
      )

      component.updateBackgroundColorForm.setValue({
        buttonBackgroundColor: mockValue,
      })

      expect(setStateSpy).toHaveBeenCalledWith({
        buttonBackground: mockValue,
      } as IButtonBackground)
    })
  })

  describe('subscribeToBtnBgColorInputChanges', () => {
    it('should call setState with default value #c9c9c9 when buttonBackgroundColor is invalid', () => {
      const mockValue = 'invalid value'
      const setStateSpy = jest.spyOn(
        UpdateButtonBackgroundFormServiceMock,
        'setState'
      )

      component.updateBackgroundColorForm.setValue({
        buttonBackgroundColor: mockValue,
      })

      expect(setStateSpy).toHaveBeenCalledWith({
        buttonBackground: '#c9c9c9',
      } as IButtonBackground)
    })
  })
})
