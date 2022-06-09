import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { render, screen } from '@testing-library/angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  describe('Default test setup', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent]
      }).compileComponents();
    });

    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'atlas'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('atlas');
    });
  });

  describe('With testing-library', () => {
    it('should render title', async () => {
      await render(AppComponent);
      const header = screen.getByRole('heading', { name: 'This is atlas' });
      expect(header).toBeTruthy();
    });
  });
});
