import {TestBed} from "@angular/core/testing";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {AgGridModule} from "ag-grid-angular";
import { render, screen } from '@testing-library/angular';

describe('AG Grid', () => {
  it('calls grid ready', async()=> {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
      platformBrowserDynamicTesting());

    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AgGridModule.withComponents([]),
      ],
      declarations: [AppComponent]
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    fixture.componentInstance.ngOnInit()

    fixture.detectChanges();

    await fixture.whenStable();
    console.log(component.title)
   // expect(component.api).toBeDefined();
   // expect(component.columnApi).toBeDefined();

    screen.debug(await screen.findByTestId('test'), Infinity);

  });
})
