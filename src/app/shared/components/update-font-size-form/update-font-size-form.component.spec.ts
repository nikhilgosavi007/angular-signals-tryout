import {ComponentFixture, TestBed} from '@angular/core/testing'

import {
  fontSizes,
  UpdateFontSizeFormComponent,
} from './update-font-size-form.component'
import {
  IFontSize,
  UpdateFontSizeFormService,
} from './services/update-font-size-form.service'
import {IColorCode} from '../update-text-color-form/services/update-text-color.service'

describe('UpdateFontSizeFormComponent', () => {
  let component: UpdateFontSizeFormComponent
  let fixture: ComponentFixture<UpdateFontSizeFormComponent>
  let updateFontSizeFormServiceMock = {
    setState: jest.fn(),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFontSizeFormComponent],
      providers: [
        {
          provide: UpdateFontSizeFormService,
          useValue: updateFontSizeFormServiceMock,
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(UpdateFontSizeFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    jest.clearAllMocks()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('component setup', () => {
    describe('ngOnInit', () => {
      it('should call setDefaultFontSizeValue', () => {
        const setDefaultFontSizeValueSpy = jest.spyOn(
          component,
          'setDefaultFontSizeValue'
        )
        component.ngOnInit()
        expect(setDefaultFontSizeValueSpy).toHaveBeenCalled()
      })
    })
  })

  describe('setDefaultFontSizeValue', () => {
    it('should set the default value', () => {
      component.setDefaultFontSizeValue()
      expect(updateFontSizeFormServiceMock.setState).toHaveBeenCalled()
    })
  })

  describe('onFontSizeChange', () => {
    it('should call setState with passed value when fontSize is selected', () => {
      component.onFontSizeChange(fontSizes.fs16)
      const setStateSpy = jest.spyOn(updateFontSizeFormServiceMock, 'setState')
      expect(setStateSpy).toHaveBeenCalledWith({
        fontSize: fontSizes.fs16,
      } as IFontSize)
    })
  })

  describe('onFontSizeChange', () => {
    it('should call setState with default fontSize when "default" is selected', () => {
      component.onFontSizeChange('default')
      const setStateSpy = jest.spyOn(updateFontSizeFormServiceMock, 'setState')
      expect(setStateSpy).toHaveBeenCalledWith({
        fontSize: fontSizes.fs16,
      } as IFontSize)
    })
  })
})
