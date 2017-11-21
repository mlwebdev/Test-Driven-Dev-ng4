import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule ({
      declarations: [ VoterComponent ]
    });
  });

  it('should render total votes', () => {
    fixture = TestBed.createComponent(VoterComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain(21);
  });
});
